function check_quest_progress(place){
  var card = $("#"+place + " .npc-section");

  if (NPC['Spelunker'].location == null ){
    //first landmark
    var npc = "<span class='npc_icon animated bounceInRight delay-2s Spelunker' id='Spelunker' onclick='NPC_chat(\"Spelunker\")'><img src='npc/spelunker.svg' /></span>";
    //need code to remove from previous landmarks if you don't click him at the first landmark? Or when we have more quests he can spawn in a specific location
    var existing = document.getElementById("Spelunker");
    if (document.getElementById(place).contains(existing) == false){
      card.append(npc);
    }
  }



}

function spawn_random_NPC(text){

}
