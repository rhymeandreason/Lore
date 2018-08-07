function check_quest_progress(place){
  var card = $("#"+place);

  if (Player.landmarks.length == 0 && NPC['Spelunker'].progress ==0){
    //first landmark
    var npc = "<span class='npc_icon animated bounceInRight delay-2s' onclick='NPC_chat(\"Spelunker\")'><img src='npc/spelunker.svg' /></span>";
    //need code to remove from previous landmarks if you don't click him at the first landmark? Or when we have more quests he can spawn in a specific location
    card.append(npc);

  }

}

function spawn_NPC(name){

}

function spawn_random_NPC(text){

}
