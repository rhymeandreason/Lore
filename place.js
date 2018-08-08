function check_quest_progress(place){
  var section = $("#"+place + " .npc-section");

  if (NPC['Spelunker'].location == null && $("#"+place).hasClass('landmark')){
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spawn_random_NPC(text, parent){
  //console.log(text);
  var img = "npc/person"+getRandomInt(1,3)+".svg";
  var npc = "<span class='npc_icon generic-npc animated bounceInRight delay-1s' onclick='generic_chat(this)'><img src='"+img+"' /><span class='small-talk'>"+text+"</span></span>";
  $(parent).append(npc);
}

function generic_chat(el){
  //console.log(el);
  $(el).find('.small-talk').toggle();
}
