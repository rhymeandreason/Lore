var LM_Spelunker = []; // Lake Merritt Quest
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
              options: [    { response: "Okay, thanks!", next: 'exit' },
                            {condition: ['coins', 15],
                            response:"I have enough coins", next: 'exit'}
                        ],
              //item: 'apple',
              quest: "Oak-ness Monster"
              };

var LM_Librarian = [];
LM_Librarian[0] = { "text": "Hello, do you need help with anything?",
             options: [   { condition: ['quest', 'Oak-ness Monster'], response: "Do you have any info on the Oak-ness Monster?", next: 2 },
                          {  response: "Got any recommended reading?", next: 1 }
                      ]};
LM_Librarian[1] = { "text": "Check out our section of featured local authors. ",
           options: [    {  response: "Thanks!", next: 'exit reset' }
                    ]};
LM_Librarian[2] = { "text": "Not sure about a monster...Perhaps you can try some books about Oakland history. We have a whole section.",
            options: [  {  response: "Okay, is there a book in particular that you recommend?", next: 3 },
                        {  response: "Do you have any info about Lake Merritt specifically?", next: 4 }
                     ]};
LM_Librarian[3] = { "text": "'Oakland, A Story of a City' by Beth Bagwell is your best bet.",
            options: [    {  response: "Thanks!", next: 'exit' },
                          {  response: "Do you have any info about Lake Merritt specifically?", next: 4 }
                     ]};
LM_Librarian[4] = { "text": "You should look up the man it's named after, Dr. Samuel B. Merritt. He's quite an interesting character.",
            options: [    {  response: "How so?", next: '5' }
                     ]};
LM_Librarian[5] = { "text": "He did so many things...Doctor, entreprenuer, mayor, real estate developer. He built the <b>Camron-Stanford House</b>, which is nearby.",
            options: [    {  response: "That's interesting. Thanks!", next: 'exit' }
                     ]};

var John_Law = [];
John_Law[0] = { "text": null,
            options: [  {  response: "Hi! Do you work here at the Tribune?", next: 1 }
                      ]};
John_Law[1] = { "text": "Yes, I have an office here. But you know the Tribune paper isn't around anymore?",
            options: [  {  response: "This is a cool place to have an office!", next: 2 }
                      ]};
John_Law[2] = { "text": "Sure is! I've been here since 1996. Top floor.",
            options: [  {  response: "So what do you do?", next: 3 }
                      ]};
John_Law[3] = { "text": "I have a neon sign maintenance company. I'm also an artist. ",
            options: [  {  response: "That's interesting. <br>Do you do the Tribune sign?", next: 4 }
                      ]};
John_Law[4] = { "text": "Yup! I also do the Ferry Building sign in SF. ",
            options: [  {condition: ['quest', 'Oak-ness Monster'],  response: "Have you ever heard of the Oak-ness Monster?", next: 7 },
                        {response: "What kind of art do you do?", next: 5 }
                      ]};
John_Law[5] = { "text": "Well, a bunch of things. Helped start the Cacophony Society. Also the Billboard Liberation Front.  ",
            options: [  {response: "That sounds kinda familiar...", next: 6 }
                      ]};
John_Law[6] = { "text": "I was also involved with founding Burning Man back in the 90's. You might have heard about that. ",
            options: [  {condition: ['quest', 'Oak-ness Monster'],  response: "Have you ever heard of the Oak-ness Monster?", next: 5 },
                        {response: "Yeah I've heard of that. Nice to meet you!", next: 'exit reset' }
                      ]};
John_Law[7] = { "text": "Haha. Funny thing to ask. One of my friends was passing around a video of it some years back. ",
            options: [  {response: "Have you seen it?", next: 8 }
                      ]};
John_Law[8] = { "text": "No. There's supposed to be some good spots for sightings. Ask the people at the <b>Boating Center</b>, they're on the lake all the time.",
            options: [  {response: "That's a good idea, thanks!", next: 'exit' }
                      ]};


var NPC = {
  "Spelunker": {
    "name": "Dr. Otis Spelunker",
    "location": null,
    "dialog": LM_Spelunker,
    "progress": 0
  },
  "Librarian": {
    "name": "Mandy",
    "location": null,
    "dialog": LM_Librarian,
    "progress": 0
  },
  "JohnLaw": {
    "name": "John Law",
    "location": null,
    "dialog": John_Law,
    "progress": 0
  },
  "Bailey": {
    "name": "Dr. Richard Bailey",
    "location": null,
    "dialog": "",
    "progress": 0
  }
}

function Quest_Conditions(property, value) {
  if (property == 'quest'){
    return Player.quests_progress.hasOwnProperty(value);
  }
  if (property == 'coins'){
    if (Player.coins >= value){
      return true;
    } else {
      return false;
    }
  }
}

function NPC_chat(name){
  $("#npc-popup-card").css('background-image', "url('npc/"+name+"-main.png')");
  $("#npc-popup-card").fadeIn();
  $("#npc-text").hide();
  var character = NPC[name];
  current_npc = name;
  character.location = current_place; //save where you interacted with the character

  var display_text = character.dialog[character.progress].text;
  var options = character.dialog[character.progress].options;
  var item = character.dialog[character.progress].item;
  var quest = character.dialog[character.progress].quest;
  $("#npc-text").html("<img src='icons/chat-bubble.svg' />"+display_text);
  if (display_text){
    $("#npc-text").show();
  }

  if (quest){
    var num = 0;
    if (Player.quests_progress.hasOwnProperty(quest)){
      num = Player.quests_progress[quest];
      Player.quests_progress[quest] = num+1;
    } else {
      Player.quests_progress[quest] = 1;
    }
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
    var click;
    if (entry.next == 'exit'){
      click = "NPC_chat_exit()";
    } else if (entry.next =='exit reset'){
      click = "NPC_chat_exit_reset(\""+name+"\")";
    } else {
      click = "NPC_chat_next(\""+name+"\", \""+entry.next + "\")";
    }

      if (entry.hasOwnProperty('condition')){
        //evaluate condition for displaying that response
        //console.log(i+" has a condition");
        if (Quest_Conditions(entry.condition[0],entry.condition[1]) == true) {
          //console.log(i+" condition is true");
          var response = "<span class='animated fadeInUp' onclick = '"+click+"'> " + entry.response + "</span>";
          $("#npc-responses").append(response);
        }
      } else {
        //console.log(i+" doesn't have a condition");
        var response = "<span class='animated fadeInUp' onclick = '"+click+"'> " + entry.response + "</span>";
        $("#npc-responses").append(response);
      }

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

}

function NPC_chat_next(npc_name, num){
  NPC[npc_name].progress = num;
  $("#npc-text").hide();
  NPC_chat(npc_name);
}

function NPC_chat_exit(){
  $("#npc-popup-card").fadeOut();
}

function NPC_chat_exit_reset(npc_name){
  NPC[npc_name].progress = 0;
  $("#npc-popup-card").fadeOut();
  $("#npc-text").hide();
}

/////functions to save json data

function encode( s ) {
    var out = [];
    for ( var i = 0; i < s.length; i++ ) {
        out[i] = s.charCodeAt(i);
    }
    return new Uint8Array( out );
}

function SaveData(obj, filename){
  var data = encode( JSON.stringify(obj, null, 4) );

    var blob = new Blob( [ data ], {
        type: 'application/octet-stream'
    });

    url = URL.createObjectURL( blob );
    var link = document.createElement( 'a' );
    link.setAttribute( 'href', url );
    link.setAttribute( 'download', filename+'.json' );

    var event = document.createEvent( 'MouseEvents' );
    event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent( event );
}
