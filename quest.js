var LM_Spelunker = []; // Lake Merritt Quest

// create event objects and store them in the array
LM_Spelunker[0] = { "text": "Nice day to be walking around in Oakland.",
             options: [    { "response": "Yes it's such a nice day!", "next": 1 }
                      ]
           };
LM_Spelunker[1] = { text: "Haven't seen you around before. Are you new here?",
            options: [    { response: "Actually I live here.", next: 2 },
                          { response: "Yes I’m visiting.", next: 3 }
                     ]
          };
LM_Spelunker[2] = { text: "Nice to meet a neighbor, then! I guess i can't know everyone in this town like I used to.",
             options: [    { response: "Got any good stories to share?", next: 4}
                      ]
          };
LM_Spelunker[3] = { text: "Always nice to meet new people. While you're here, you should go for a walk around Lake Merritt. It has lots of local history.",
              options: [    { response: "Got any good stories to share?", next: 4 }
                       ]
          };
LM_Spelunker[4] = { text: "I've got enough stories for 1001 nights. But maybe you want an extra juicy one?",
              options: [    { response: "Yeah! What's the best one you got?", next: 5 }
                       ]
          };
LM_Spelunker[5] = { text: "Okay then! Have you heard of the Oak-ness Monster?",
              options: [    { response: "The what????", next: 6 }
                       ]
          };
LM_Spelunker[6] = { text: "It's a monster that lives in Lake Merritt. And if conditions are right, you might get to spot it!",
              options: [    { response: "I'm game to go monster spotting!", next: 7 }
                       ]
          };
LM_Spelunker[7] = { text: "Local legend says to see the Oak-ness, you must understand the history of the Lake. So stop by a <b>library</b> or the <b>Oakland Museum</b>.",
              options: [    { response: "Okay, thanks!", next: 'exit' }
              ],
              //item: 'apple',
            quest: "Oak-ness Monster"
          };


var NPC = {
  "Spelunker": {
    "name": "Dr. Otis Spelunker",
    "location": null,
    "dialog": LM_Spelunker,
    "progress": 0
  },
  "Bailey": {
    "name": "Dr. Richard Bailey",
    "location": null,
    "dialog": "",
    "progress": 0
  }
}

function NPC_chat(name){
  $("#npc-popup-card").fadeIn();
  var character = NPC[name];
  current_npc = name;
  character.location = current_place; //save where you interacted with the character

  var display_text = character.dialog[character.progress].text;
  var options = character.dialog[character.progress].options;
  var item = character.dialog[character.progress].item;
  var quest = character.dialog[character.progress].quest;
  $("#npc-text").html("<img src='icons/chat-bubble.svg' />"+display_text);

  if (quest){

  }

  if (item){
    console.log(item);
    var quest_item = "<span class='animated bounceIn'><img class='animated jackInTheBox' src='icons/"+items[item]+"' onclick='addItem(this.parentNode, \""+item+"\")' /></span>";
    $("#npc-item").append(quest_item);
  } else {
    //console.log("no item");
  }
  $("#npc-responses").html("");
  for (var i=0; i < options.length; i++){
    var entry = options[i];
    if (entry.next == 'exit'){
      var response = "<span class='animated fadeInUp' onclick = 'NPC_chat_exit()'> " + entry.response + "</span>";
    } else {
      var response = "<span class='animated fadeInUp' onclick = 'NPC_chat_next(\""+name+"\", \""+entry.next + "\")'> " + entry.response + "</span>";
    }
    /*
    if (entry.next == 'exit'){
      $(response).click(function(){
        $("#npc-popup-card").fadeOut();
      });
    } else {
      $(response).click(function(){
        NPC_chat_next(name, entry.next);
      });
    }
    */
    $("#npc-responses").append(response);
  }
}

function NPC_chat_next(npc_name, num){
  NPC[npc_name].progress = num;
  NPC_chat(npc_name);
}

function NPC_chat_exit(){
  $("#npc-popup-card").fadeOut();
}
