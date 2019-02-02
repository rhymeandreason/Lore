var MainQuest = {
  clues : [
    {icon: "Clue1.png",
     description: "quests/clue1.html",
     solution: [-122.40274, 37.79501],
     location: "sf-transamerica",
     hint: "There are only so many places with Redwood trees."
    },
    {icon: "Clue2.png",
     description: "quests/clue2.html",
     solution: [-122.41337, 37.79185],
     location: "sf-grace-cathedral",
     hint: "Sounds kind of like a spiritual place, doesn't it?"
    },
    {icon: "Clue3.png",
     description: "quests/clue3.html",
     solution: [-122.41926, 37.77925],
     location: "sf-city-hall",
     hint: "There are these funny trees in front, that are all gnarly and never seem to have leaves."
    },
    {icon: "Clue4.png",
     description: "quests/clue4.html",
     solution: [-122.41926, 37.77925],
     location: "sf-coit-tower",
     hint: "It's too bad most people don't realize there are murals here."
    },
    {icon: "Clue5.png",
     description: "quests/clue5.html",
     solution: [-122.41926, 37.77925],
     location: "sf-castro-theater",
     hint: "The architect designed this place to evoke a Mexican Cathedral, quite fitting for its neighborhood."
    },
    {icon: "Clue6.png",
     description: "quests/clue6.html",
     solution: [-122.41926, 37.77925],
     location: "sf-portal-past",
     hint: "It used to be part of an old Nob Hill mansion."
    },
    {icon: "Clue7.png",
     description: "quests/clue7.html",
     solution: [-122.41926, 37.77925],
     location: "sf-legion-of-honor",
     hint: "Think about it for a bit, the clues are all there!"
    },
    {icon: "Clue8.png",
     description: "quests/clue8.html",
     solution: [-122.41926, 37.77925],
     location: "sf-central-tower",
     hint: "It's like hidden in plain sight."
    },
  ]
}

function showClue(n){
  $("#item-card-content").load(MainQuest.clues[n].description);
  $("#item-card").fadeIn('slow');

  if (Player.NUX == 0){
    $("#hint-bubble").show();
  }
}

function showHint(){
  $("#hint-text").html(MainQuest.clues[Player.mainquest_progress].hint);
  if (Player.NUX == 0){
    $("#hint-text").html("The answer is a place in the city. Go to the place, and tap the marker on the map.");
  }

  $("#hint-default").hide();
  $("#hint-reply-2").fadeIn();
}

function resetHint(){
  $("#hint-text").html("Need a hint?");
  $("#hint-default").show();
  $("#hint-reply-2").hide();
}

function MainQuestProgress(el){
  Player.mainquest_progress++;
  $(el).fadeOut();
  $("#new-item").attr('src', $(el).attr('src'));
  $("#add-item-anim").fadeIn();
  $("#add-item-anim #new-item").css("bottom","20px");
  $("new-item").attr('src', );
  $("#add-item-anim #new-item").animate({bottom: '-32px'}, "slow", function(){$("#add-item-anim").fadeOut('fast');});
  resetHint();
}


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
LM_Spelunker[7] = { text: "Happy hunting!",
              options: [    { response: "Okay, thanks!", next: 'exit' },
                            {condition: ['coins', 15],
                            response:"I have enough coins", next: 'exit'}
                        ],
              //item: 'apple',
              quest: "Oak-ness Monster"
              };

var LM_Librarian = [];
LM_Librarian[0] = { "text": "Hello, do you need help with anything?",
             options: [   { condition: ['quest_progress', {quest: 'Oak-ness Monster', progress: 0}], response: "Do you have any info on the Oak-ness Monster?", next: 2 },
                          {  response: "Got any recommended reading?", next: 1 }
                      ]};
LM_Librarian[1] = { "text": "Check out our section of featured local authors. ",
           options: [    {  response: "Thanks!", next: 'exit reset' }
                    ]};
LM_Librarian[2] = { "text": "Not sure about a monster...Perhaps you can try some books about Oakland history. We have a whole section.",
            options: [  {  response: "Is there a book that you recommend?", next: 3 },
                        {  response: "Do you have any info about Lake Merritt?", next: 4 }
                     ]};
LM_Librarian[3] = { "text": "'Oakland, A Story of a City' by Beth Bagwell is your best bet.",
            options: [    {  response: "Thanks!", next: 'exit reset' },
                          {  response: "Do you have any info about Lake Merritt specifically?", next: 4 }
                     ]};
LM_Librarian[4] = { "text": "You should look up the man it's named after, Dr. Samuel B. Merritt. He's quite an interesting character.",
            options: [    {  response: "How so?", next: '5' }
                     ]};
LM_Librarian[5] = { "text": "He did so many things...Doctor, entreprenuer, mayor, real estate developer. Lake Merritt used to be an estuary, and he built a dam that controlled the water level that made it into a lake.",
            options: [    {  response: "That's interesting.", next: '6' }
                     ]};
LM_Librarian[6] = { "text": "The area used to be private property surrounded by Victorian mansions. The only one left is the <b>Camron-Stanford House</b>. You can go see it, it's nearby.",
           options: [    {  response: "Thanks, I think I'll go do that!", next: 'exit' }
          ],
          quest_clue:  {quest: "Oak-ness Monster", progress:1 }
                  };

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
            options: [  {condition: ['quest', 'Oak-ness Monster'],  response: "Have you ever heard of the Oak-ness Monster?", next: 7 },
                        {response: "Yeah I've heard of that. Nice to meet you!", next: 'exit reset' }
                      ]};
John_Law[7] = { "text": "Haha. Funny thing to ask. One of my friends was passing around a video of it some years back. ",
            options: [  {response: "Have you seen it?", next: 8 }
                      ]};
John_Law[8] = { text: "No. There's supposed to be some good spots for sightings. Lake Merritt has an interesting history. Worth reading up on.",
            options: [  {response: "That's a good idea, thanks!", next: 'exit' }
                      ] };

var Lisa = [];
Lisa[0] = { "text": "Hello, would you like to hear about the history of the house?",
             options: [   { response: "Sure!", next: 1 },
                          {  response: "No thanks, I'll explore on my own", next: 'exit' }
                      ]};
Lisa[1] = { "text": "The mansion dates back to when this area was known as 'Contra Costa'. It was home to 4 leading Oakland families before becoming the first Oakland museum in 1907.",
             options: [   {  response: "Is that how it stayed so well preserved?", next: 2 }
                      ]};
Lisa[2] = { "text": "Actually, a small group in 1971 raised money to restore the house and founded the non-profit. Descendants of the original residents even donated items for the interior.",
             options: [   {  response: "Well, it's such a beautiful spot here on the lake.", next: 3 }
                      ]};
Lisa[3] = { "text": "It certainly is! Some people book the place for a Victorian wedding. And we host tea party events too.",
             options: [ {condition: ['quest_progress', {quest: 'Oak-ness Monster', progress: 1}],  response: "Did Samuel Merritt live here at any point?", next: 5 },
                        {  response: "Can I see the inside of the house?", next: 4 }
                      ]};
Lisa[4] = { "text": "There are tours on Sunday afternoons for $5.",
             options: [   {  response: "Thank you for the info!", next: 'exit reset' },
             {condition: ['quest_progress', {quest: 'Oak-ness Monster', progress: 2}],  response: "Did Samuel Merritt live here at any point?", next: 5 }
                      ]};
Lisa[5] = { "text": "Dr. Merritt built this house, but he lived in another property in the area. He's well known for establishing the area as a nature reserve, and cleaning up the lake from being used for sewage.",
             options: [   {  response: "Have you ever heard about a monster in the lake?", next: 6 }
                      ]};
Lisa[6] = { "text": "Haha. Haven't heard anyone ask about that in a while. ",
             options: [   {  response: "So you've heard of it?", next: 7 }
                      ]};
Lisa[7] = { "text": "There's always been stories through the years. People see odd things in the water.",
             options: [   {  response: "Have you seen anything odd yourself?", next: 8 }
                      ]};
Lisa[8] = { "text": "Me? No. My friend Richard at the Lake Merritt Institute will tell you all about it though.",
             options: [   {  response: "Where is the Lake Merritt Institute?", next: 9 }],
           quest_clue: {quest: 'Oak-ness Monster', progress: 2}
                    };
Lisa[9] = { "text": "It's near the <b>Boating Center</b> on the north side of the lake. He would know, he runs volunteer cleanup sessions on the lake.",
             options: [   {  response: "Okay, thanks!", next: 'exit' }
                      ]};

var Bailey = [];
Bailey[0] = { text: null,
             options: [ {condition: ['quest_progress', {quest: 'Oak-ness Monster', progress: 2}],  response: "Hi, I'm looking for Richard of the Lake Merritt Institute.", next: 3 },
                        {  response: "What is the Lake Merritt Institute?", next: 1 }
                      ]};

  Bailey[1] = { text: "We're a non-profit that takes care of Lake Merritt. We host volunteer sessions to clean up trash from the lake.",
             options: [ {  response: "That's cool! How can I help?", next: 2 }
                      ]};
  Bailey[2] = { text: "Always can take more volunteers. We have group sessions Tuesday and Saturday mornings. You can read more info on our website. We also take donations.",
             options: [ {  response: "Thanks, I'll take a look!", next: 'exit reset' }
                      ]};

  Bailey[3] = { text: "That would be me. Dr. Richard Bailey. What can I do for you?",
             options: [ {  response: "I hear that you might know something about the Oak-ness Monster?", next: 4 }
                      ]};
  Bailey[4] = { text: "Ah yes, Oaky. We're lucky to have such a magnificent creature as a resident. Don't know how she survived those decades suffering the pollution. ",
             options: [ {  response: "So have you seen this thing?", next: 5 }
                      ]};
  Bailey[5] = { text: "Of course! Now why all the questions, why so curious?",
             options: [ {  response: "It's just such an interesting story. Think there's any chance I might see her?", next: 6 }
                      ]};
  Bailey[6] = { text: "It can take years of patience and luck. But I'll let you in on a tip...the best place for a sighting is on the southeast side, looking toward the islands of the waterfowl sanctuary.",
             options: [ {  response: "Thanks for the info!", next: 'exit' }],
             quest_clue: {quest: 'Oak-ness Monster', progress: 3}
           };

var Mary = [];
Mary[0] = { text: "This is my favorite local ice cream place. The robots are so cute!",
             options: [ {  response: "I love ice cream! What other places have you tried?", next: 1 },
                        {  response: "I don't really eat ice cream.", next: 'exit reset' }
                      ]};
  Mary[1] = { quest: "Scream for Ice Cream",
    text: "There's the old school classic Fenton's Piedmont. Humphrey Slocombe and Smitten for interesting flavors.",
               options: [ {  response: "Yeah, would be fun to try some new places.", next: 'exit' }
                        ]};

var Luke = [];
Luke[0] = { quest: "Downtown Oakland",
  text: "Try this quest!",
             options: [ {  response: "Okay!", next: 'exit' }
                      ]};

var Norton = [];
Norton[0] = { text: "Good day, my fellow! I am burdened by many tasks today, will you lend your Emperor some assistance?",
  options: [ {  response: "Emperor?", next: 1 },
              {  response: "Sure thing!", next: 2 }
           ]};
Norton[1] = {
 text: "Do you not recognize it is I, Emperor Norton I? Perhaps you are a tourist and I will forgive you.",
 options: [{  response: "Okay...", next: 2 }
          ]};
Norton[2] = {
 text: "I must issue a proclaimation in the papers, and retrieve a telegram. But I must attend the legislature session. Can you achieve these errands for me?",
 options: [{  response: "Okay...", next: 3 }
          ]};
Norton[3] = {quest: "Errand for the Emperor",
  text: "Very good! Meet here postforth the tasks and you will be rewarded.",
  options: [{  response: "Good day to you as well!", next: 'exit' }
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
  "Lisa": {
    "name": "Lisa",
    "location": null,
    "dialog": Lisa,
    "progress": 0
  },
  "Bailey": {
    "name": "Dr. Richard Bailey",
    "location": null,
    "dialog": Bailey,
    "progress": 0
  },
  "Mary": {
    "name": "Mary",
    "location": null,
    "dialog": Mary,
    "progress": 0
  },
  "Luke": {
    "name": "Luke",
    "location": null,
    "dialog": Luke,
    "progress": 0
  },
  "Norton": {
    "name": "Emperor Norton",
    "location": null,
    "dialog": Norton,
    "progress": 0
  }
}

var Quests = {
  "Oak-ness Monster": {
    type: 'story',
    description: "Learn about the history of Lake Merritt to uncover the secret of the Oak-ness.",
    count: 4,
    progress: [
      {name: "Spelunker", clue: "Local legend says to see the Oak-ness, you must understand the history of the Lake. So stop by the <b>library</b>."},
      {name: "Librarian", clue: "You should look up the man it's named after, Dr. Samuel B. Merritt.<br/> He built the <b>Camron-Stanford</b> house. It's nearby."},
      {name: "Lisa", clue: "My friend Richard at the Lake Merritt Institute will tell you all about it. It's near the <b>Boating Center</b>."},
      {name: "Bailey", clue: "Look towards the waterfowl sanctuary from the southeast side of the lake. That's the best spot."}
    ],
    tag: "",
    icon: "blue-circle",
    reward: "Oakness-bw.png"
  },
  "100 Dragons": {
    type: 'places-category-list',
    description: "There are 99 dragons painted in Oakland's Chinatown. Find 10.",
    count: 10,
    progress: [
      {name: "LukeDragon", clue: "There are 99 dragons painted in Oakland's Chinatown. Find 10."}
    ],
    geojson: "Dragon_School_Art.geojson",
    tag: "dragonschool99",
    icon: "blue-circle",
    reward: "rubber_ducky.png"
  },
  "Scream for Ice Cream": {
    type: 'places-category',
    description: "Visit 5 ice cream shops to prove you're a connoisseur.",
    count: 5,
    progress: [
      {name: "Mary", clue: "Visit 5 ice cream shops to prove you're a connoisseur."}
    ],
    tag: "icecream",
    icon: "icecream",
    reward: "ice-cream.png"
  },
  "Downtown Oakland": {
    type: 'places',
    description: "Visit the Tribune tower and Oak Tree",
    count: 2,
    progress: [
      {name: "Mary", clue: "Visit the Tribune tower and Oak Tree"}
    ],
    places: ["tribune-tower", "oak-tree"],
    tag: "",
    icon: "blue-circle",
    reward: "rubber_ducky.png"
  },
  "Errand for the Emperor": {
    type: 'places',
    description: "Deliver a proclaimation to the Chronicle and retrieve a telegram from Wells Fargo.",
    count: 3,
    progress: [
      {name: "Norton", clue: "Deliver a proclaimation to the Chronicle and retrieve a telegram from Wells Fargo."}
    ],
    places: ["sf-chronicle", "Wells-Fargo-museum"],
    tag: "",
    icon: "blue-circle",
    reward: "norton_note.jpg"
  }
}

function check_quest_progress(place){
  //var checkLocation = MainQuest.clues[Player.mainquest_progress].solution;
  //check the main quest
  var isQuestLocation = false;
  if (MainQuest.clues[Player.mainquest_progress].location ==place.properties.id){
    console.log("Well done!");
    $("#"+place.properties.id+" .main-quest").show();
  }

  for (var questname in Player.quests_progress){

    var isQuestLocation = false;
    //places category quest
    if (Quests[questname].type == 'places-category' || Quests[questname].type == 'places-category-list'){
      if (place.properties.category.includes(Quests[questname].tag)){
        isQuestLocation = true;
      }
    }
    if (Quests[questname].type == 'places'){
      if (Quests[questname].places.includes(place.properties.id)){
        isQuestLocation = true;
      }
    }

    if (isQuestLocation){
      var count = Player.quests_progress[questname].progress;
      var total_count = Quests[questname].count;
        //if you haven't already been to this place for this quest
        if (Player.quests_progress[questname].places.includes(place.id)==false &&  count<total_count){
          Achieve_Quest_Progress(questname, place.id);
        }
    }
  }
}

function Achieve_Quest_Progress(questname, placename){
  var total_count = Quests[questname].count;

  Player.quests_progress[questname].progress++;
  Player.quests_progress[questname].places.push(placename);

  var count = Player.quests_progress[questname].progress;
  Quest_Progress_Bar(count, total_count, Quests[questname].icon);

  //show quest progress screen
  if (count < total_count){
    $("#places-quest-progress .secondary-text").html("You've made progress on your quest!");
  }
  //Quest Completed
  if (count == total_count){
    $("#places-quest-progress .secondary-text").html("Quest Complete!");
    Player.quests_complete[questname] = moment().format('dddd MMM Do, YYYY');
    delete Player.quests_progress[questname];
  }

  $("#places-quest-progress .quest-title").html(questname);
  $("#places-quest-progress .quest-description").html(Quests[questname].description);
  $("#places-quest-progress").fadeIn('slow');

}

function Quest_Progress_Bar(count, total_count, img){
  $("#places-quest-progress .progress_bar").html("");
  for (var i=0; i<=count; i++){
    $("#places-quest-progress .progress_bar").append("<img class='animated bounceIn delay-1s' src='icons/"+img+".svg' />");
  }
  for (var i=count+1; i<total_count; i++){
    $("#places-quest-progress .progress_bar").append("<img class='empty animated fadeIn ' src='icons/"+img+"-empty.svg' />");
  }
}

function Quest_Conditions(property, value) {
  if (property == 'quest'){
    return Player.quests_progress.hasOwnProperty(value);
  }
  if (property == 'quest_progress'){
    console.log(value.progress);
    if (Player.quests_progress.hasOwnProperty(value.quest)){
      return Player.quests_progress[value.quest].progress == value.progress;
    } else {
      return false;
    }
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
  console.log("start chat");
  $("#npc-portrait").css('background-image', "url('npc/"+name+"-main.png')");
  $("#npc-popup-card").fadeIn();


  var character = NPC[name];
  current_npc = name;
  character.location = current_place; //save where you interacted with the character

  var display_text = character.dialog[character.progress].text;
  var options = character.dialog[character.progress].options;

  var quest = character.dialog[character.progress].quest;
  if (quest){
    if (Player.quests_progress.hasOwnProperty(quest) || Player.quests_complete.hasOwnProperty(quest)){
    } else {
      //New Quest
      console.log("New Quest: "+ quest);
      Player.quests_progress[quest] = {progress: 0, places:[]};
      //$("#new-quest-notif .quest").html(quest);
      //$("#new-quest-notif").show();
      Quest_Progress_Bar(0, Quests[quest].count, Quests[quest].icon);
      $("#places-quest-progress .secondary-text").html("You found a new quest!");
      $("#places-quest-progress .quest-title").html(quest);
      $("#places-quest-progress .quest-description").html(Quests[quest].description);
      $("#places-quest-progress").fadeIn();

      setTimeout(function(){
        $("#npc-text").hide();
        $("#npc-item").html("");

        $("#npc-text").html("<img src='icons/chat-bubble.svg' />"+display_text);
        if (display_text){
          $("#npc-text").show();
        }
      }, 500);
    }
  } else {
    //$("#new-quest-notif").hide();
    $("#npc-text").hide();
    $("#npc-item").html("");

    $("#npc-text").html("<img src='icons/chat-bubble.svg' />"+display_text);
    if (display_text){
      $("#npc-text").show();
    }
  }

  var item = character.dialog[character.progress].item;
  if (item){
    var quest_item = "<span class='animated bounceIn delay-1s'><img class='animated jackInTheBox' src='icons/"+items[item]+"' onclick='addItem(this.parentNode, \""+item+"\")' /></span>";
    $("#npc-item").append(quest_item);
  } else {
    //console.log("no item");
  }

  var quest_clue = character.dialog[character.progress].quest_clue;
  if (quest_clue){
    //var quest_item = "<span class='animated bounceIn delay-1s'><img class='animated pulse infinite' src='icons/clue.svg' onclick='addJournalItem(this.parentNode, \"clue\")' /></span>";
    //$("#npc-item").append(quest_item);
    if (Player.quests_progress[quest_clue.quest].progress < quest_clue.progress){
      Achieve_Quest_Progress(quest_clue.quest, current_place);
    }

    //Player.quests_progress[quest_clue.quest].progress = quest_clue.progress;
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
        var response = "<span class='animated fadeInUp' onclick = '"+click+"'> " + entry.response + "</span><br/>";
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
  $("#hint-bubble").show();
}

function NPC_chat_exit_reset(npc_name){
  NPC[npc_name].progress = 0;
  $("#npc-popup-card").fadeOut();
  $("#npc-text").hide();
  $("#hint-bubble").show();
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
