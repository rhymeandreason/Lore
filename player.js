var Player = {
  "name" : "Mary",
  "level": 1,
  "inventory": {
    "acorn": 1,
    "red_apple": 1,
    "coffee": 1
  },
  "badges": {
    "beginner":1,
    "explorer":0
  },
  "quests": [],
  "landmarks": [],
  "places": [],
  "coins": 10,
  "playtime": 0,
  "join_date": 0
}

function addCoins(num){
  Player.coins+= num;
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
  console.log(name + " : "+Player.inventory[name]);
  playAudio("sound-pop");

  $(el).fadeOut();
  $("#new-item").attr('src', items[name]);
  $("#add-item-anim").fadeIn();
  $("#add-item-anim #new-item").css("bottom","20px");
  $("new-item").attr('src', )
  $("#add-item-anim #new-item").animate({bottom: '-32px'}, "slow", function(){$("#add-item-anim").fadeOut('fast');});
}

function addPlace(name){
  Player.places.push(name);
}
