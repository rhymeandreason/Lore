//visit a location
function showLocation(el, id){
  current_place = id;
  var place = geoJson.features.find(place => place.id === id);

  if ($( el ).hasClass('landmark')){
    if (!Player.landmarks.hasOwnProperty(id)){
      Player.landmarks[id] = moment().format('MMM Do YYYY<br> h:mm a');
      //console.log(Player.landmarks[id]);
    }
  }

  check_quest_progress(place);
  $("#place-popup-card").fadeIn();
  $(".popup").hide();

  //add image
  $("#"+id+" .place-image").attr('src', "places/"+id+".jpg");
  //getImageLightness($("#"+id+" .place-image").attr("src"),setIcon);

  //add shop
  if (place.properties.shop && $("#"+id+" .shop").length == 0){
    var shop = document.createElement("div");
    shop.className = 'shop';
    var shop_items = Object.keys(place.properties.shop);
    for (var i=0; i<shop_items.length; i++){
      var price = place.properties.shop[shop_items[i]];
      var item1 = "<span class='shop_item animated fadeIn delay-1s'><img class='' src='shops/"+shop_items[i]+".png' onclick='buyItem(this.parentNode, \""+shop_items[i]+"\","+price+" )' /><span class='price'>"+price+"</span></span>";
      $(shop).append(item1);
    }
    $("#"+id).append(shop);
  }
  $("#"+id).append("<div class='empty-space'></div>");

  document.getElementById('place-popup-card').scrollTop = 0;
  $("#"+id).show();
}

function MakeLocation(marker) {
  // create a DOM element for the marker
  var el = document.createElement('div');
  if (marker.properties.className.includes('level')){
    el.className = 'marker '+ marker.properties.className + " hidden-marker "+ marker.properties.id;
  } else {
    el.className = 'marker '+ marker.properties.className + " "+ marker.properties.id;
  }

  $( el ).data( "name", marker.properties.id);
  //$(el).attr('data-name', marker.properties.id);
  var img = document.createElement("IMG");
  img.src = "icons/"+marker.properties.icon.iconUrl;
  img.className='animated bounceIn';
  el.append(img);
  el.style.width = marker.properties.icon.iconSize[0] + 'px';

  var popup = document.createElement("div");
  popup.className = 'popup ' + marker.properties.className;
  popup.id = marker.properties.id;

  var place_header = document.createElement("div");
  place_header.className = 'place-header';
  var place_img = document.createElement("IMG");
  //place_img.src = "places/"+marker.properties.id+".jpg";
  place_img.className = "place-image";
  place_header.append(place_img);

  var npc_section = document.createElement("div");
  npc_section.className = 'npc-section';
  for (var i=0; i<marker.properties.dialog.length; i++){
    spawn_random_NPC(marker.properties.dialog[i], npc_section);
  }

  place_header.append(npc_section);
  $(popup).append(place_header);
  $(popup).append("<h2 class='animated fadeInUp'>"+marker.properties.title+"</h2>");
  $(popup).append("<p class='place-description animated fadeIn delay-1s'>"+marker.properties.description+"</p>");

  //make item drops
  //If it's a shop, drop one random shop item
  if (marker.properties.shop){
    var div = document.createElement("div");
    div.className = 'daily-items';
    $(div).html("<h3 class='animated fadeIn delay-1s'>Daily Special</h3>");
    var shop_items = Object.keys(marker.properties.shop);
    if (marker.properties.className.includes("grocery")){
      for (var i=0; i<3; i++){
        var num = getRandomInt(0, shop_items.length-1);
        var random_item = "<span class='free-item animated bounceIn delay-1s'><img class='' src='shops/"+shop_items[num]+".png' onclick='buyItem(this.parentNode, \""+shop_items[num]+"\", 0 )' /></span>";
        $(div).append(random_item);
      }
    } else {
      var num = getRandomInt(0, shop_items.length-1);
      var random_item = "<span class='free-item animated bounceIn delay-1s'><img class='' src='shops/"+shop_items[num]+".png' onclick='buyItem(this.parentNode, \""+shop_items[num]+"\", 0 )' /></span>";
      $(div).append(random_item);
    }

    $(popup).append(div);

  } else {
    if (marker.properties.itemDrops){
      var div = document.createElement("div");
      div.className = 'daily-items';
      if (marker.properties.category.includes('food') || marker.properties.category.includes('grocery')){
        $(div).html("<h3 class='animated fadeIn delay-1s'>Daily Special</h3>");
      }

      var drops = marker.properties.itemDrops;
      for (var i=0; i<drops.length; i++){
        var item1 = "<span class='animated bounceIn delay-1s'><img class='animated jackInTheBox' src='icons/"+items[drops[i]]+"' onclick='addItem(this, \""+drops[i]+"\")' /></span>";
        $(div).append(item1);
      }
      $(popup).append(div);
    }
  }


  $("#place-content").append(popup);
  // add marker to map
  new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
}



function attach_NPC(name, location_id){
  var img = "npc/"+name+".svg";
  var npc = "<span class='npc_icon animated bounceInRight delay-1s' onclick='NPC_chat(\""+name+"\")'><img src='"+img+"' /><img class='chatty' src='icons/chatty.svg'/></span>";

  $("#"+location_id+" .npc-section").append(npc);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spawn_random_NPC(text, parent){
  //console.log(text);
  var img = "npc/person"+getRandomInt(1,15)+".svg";
  var npc = "<span class='npc_icon generic-npc animated bounceInRight delay-1s' onclick='generic_chat(this)'><img src='"+img+"' /><span class='small-talk'>"+text+"</span></span>";
  $(parent).append(npc);
}

function generic_chat(el){
  //console.log(el);
  $(el).parent().find('.small-talk').hide();
  $(el).find('.small-talk').show();
}

function getImageLightness(imageSrc,callback) {
    var img = document.createElement("img");
    img.src = imageSrc;
    img.style.display = "none";
    document.body.appendChild(img);

    var colorSum = 0;
    var w, h;

    img.onload = function() {
        // create canvas
        var canvas = document.createElement("canvas");

        canvas.width = this.width;
        canvas.height = this.height;
        w = this.width;
        h = this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this,0,0);

        var imageData = ctx.getImageData(w-50,0,w,50);
        var data = imageData.data;
        var r,g,b,avg;

        for(var i = 0, len = data.length; i < len; i+=4) {
          var brightness = .34*data[i] + .5*data[i+1] + .16 * data[i+2];
            //r = brightness;
            //g = brightness;
            //b = brightness;
            //avg = Math.floor((r+g+b)/3);
            colorSum += brightness;
        }
        //document.body.appendChild(canvas);
        var brightness = Math.floor(colorSum / (50*50));
        callback(brightness);
    }
}

function setIcon(val){
  //console.log("brightness: "+ val);
  if (val>180){
    $("#close_location").removeClass("background--dark");
    $("#close_location").addClass("background--light");
  } else {
    $("#close_location").addClass("background--dark");
    $("#close_location").removeClass("background--light");
  }
}
