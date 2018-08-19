function check_quest_progress(place){
  var section = $("#"+place + " .npc-section");

  if (!Player.quests_progress.hasOwnProperty("Oak-ness Monster") && $("#"+place).hasClass('landmark')){
    //first landmark
    var npc = "<span class='npc_icon animated bounceInRight delay-2s Spelunker' onclick='NPC_chat(\"Spelunker\")'><img src='npc/spelunker.svg' /><img class='chatty' src='icons/chatty.svg'/></span>";
    //need code to remove from previous landmarks if you don't click him at the first landmark? Or when we have more quests he can spawn in a specific location
    var existing = document.getElementsByClassName("Spelunker");
    if (existing.length > 0){
      $(".Spelunker").remove();
      section.append(npc);
    } else {
      section.append(npc);
    }
  }

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
  var img = "npc/person"+getRandomInt(1,13)+".svg";
  var npc = "<span class='npc_icon generic-npc animated bounceInRight delay-1s' onclick='generic_chat(this)'><img src='"+img+"' /><span class='small-talk'>"+text+"</span></span>";
  $(parent).append(npc);
}

function generic_chat(el){
  //console.log(el);
  $(el).find('.small-talk').toggle();
}
var canvas;

function getImageLightness(imageSrc,callback) {
    var img = document.createElement("img");
    img.src = imageSrc;
    img.style.display = "none";
    document.body.appendChild(img);

    var colorSum = 0;
    var w, h;

    img.onload = function() {
        // create canvas
        canvas = document.createElement("canvas");

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
  console.log("brightness: "+ val);
  if (val>180){
    $("#close_location").removeClass("background--dark");
    $("#close_location").addClass("background--light");
  } else {
    $("#close_location").addClass("background--dark");
    $("#close_location").removeClass("background--light");
  }
}
function seeCanvas(){

        window.open(canvas.toDataURL("image/png"), '_blank');

}
