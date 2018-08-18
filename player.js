var Player = {
  "name" : "Mary",
  "level": 1,
  "inventory": {
    "acorn": 1,
    "red_apple": 1,
    "coffee": 1
  },
  "purchases": {},
  "badges": {
    "beginner":1,
    "explorer":0
  },
  "quests_progress": {},
  "quests_complete": {},
  "landmarks": {},
  "places": {},
  "coins": 10,
  "playtime": 0,
  "join_date": 0
}

function addCoins(num){
  Player.coins+= num;
}
function addAcorns(num){
  Player.inventory.acorn+= num;
}

function addBadge(name){
  var level = 1;
  if (Player.badges[name]){
    level = Player.badges[name]+1;
  }
  Player.badges[name] = level;
}

function addItem(el, name){
  var num = 1;
  if (Player.inventory.hasOwnProperty(name)){
    num = Player.inventory[name]+1;
  }
  Player.inventory[name] = num;
  //console.log(name + " : "+Player.inventory[name]);
  playAudio("sound-pop");

  $(el).fadeOut();
  $("#new-item").attr('src', "icons/"+items[name]);
  $("#add-item-anim").fadeIn();
  $("#add-item-anim #new-item").css("bottom","20px");
  $("new-item").attr('src', )
  $("#add-item-anim #new-item").animate({bottom: '-32px'}, "slow", function(){$("#add-item-anim").fadeOut('fast');});
}

function buyItem(el, name, price){
  //we're going to do prices in acorns for now
  if (Player.inventory.acorn >= price){
    Player.inventory.acorn-=price;

    var num = 1;
    if (Player.purchases.hasOwnProperty(name)){
      num = Player.purchases[name]+1;
    }
    Player.purchases[name] = num;
    //console.log(name + " : "+Player.inventory[name]);
    playAudio("sound-pop");

    $(el).fadeOut();
    $("#new-item").attr('src', "shops/"+name+".png");
    $("#add-item-anim").fadeIn();
    $("#add-item-anim #new-item").css("bottom","20px");
    $("new-item").attr('src', )
    $("#add-item-anim #new-item").animate({bottom: '-32px'}, "slow", function(){$("#add-item-anim").fadeOut('fast');});
  } else {
    //you don't have enough acorns
    $("#error-dialog").show();
  }
}

function addPlace(name){
  Player.places.push(name);
}
