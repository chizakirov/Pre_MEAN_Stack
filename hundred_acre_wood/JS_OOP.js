// CREATE PLAYERS OR OBJECTS
var tigger = { 
  character: "Tigger",
  north: pooh,
  greet: function(){
    console.log("Today's a great day to be a great day!");
  }
  };

var pooh = { 
  character: "Winnie_the_Pooh",
  south: tigger,
  east: bees,
  west: piglet,
  north: christoper_robin,
  greet: function(){
    console.log("Oh brother!");
  }
  };

var piglet = { 
  character: "Piglet", 
  east: pooh,
  greet: function(){
    console.log("Oh I'm a pig!");
  }
}

var bees = { 
    character: "Bees",
    west: pooh,
    greet: function(){
      console.log("Oh I'm Bees!");
    }
    };

// CREATE GAME MAP
tigger.north = pooh;
pooh.south = tigger;

piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
pooh.west = piglet; 

bees.west = pooh;
pooh.east = bees;

var owl = { character: "Owl"};
owl.south = piglet;
pooh.east.north = owl;

var christoper_robin = { character: "Robin"};
christoper_robin.west = owl;
pooh.north = christoper_robin;

var rabbit = { character: "Rabbit"};
rabbit.south = bees;
christoper_robin.east = rabbit;

var gopher = { character: "Gopher"};
gopher.west = rabbit;
bees.north.east = gopher;

var kanga = { character:"Kanga"};
kanga.south = christoper_robin;

var eeyore =  { character: "Eeyore"};
eeyore.south = kanga;

var heffalumps = { character: "Heffalumps"};
heffalumps.west = eeyore;

var player = {
  location: tigger,
  honey: false
};

function move(direction) {
  if (player.location[direction]!= null) {
    player.location = player.location[direction]; //player.location is the new player's address. the address is an object. 
    console.log('You are at ' + player.location.character + "'s house");
    console.log(player.location.greet());
  } else {
    console.log("You have moved in a wrong direction");
  }
}

function mission(){
  console.log("Your mission is to deliver honey to Owl's house");
  }
mission();

function pickup(){
  if(player.location == bees){
    player.honey = true;
    console.log("You've gathered some honey");
  }
  else if((player.location != bees)&& (player.honey)){
    console.log("You already have honey");
  }
  else{
    console.log("You need to be at Bees' house to be able to gather honey");
  }
}

function drop(){
  if((player.honey) && (player.location == piglet)){
    console.log("Congratulations! You've delivered some honey to Piglet's house");
  }
  else if((player.honey) && (player.location != piglet)){
    console.log("Keep moving to find Piglet's house to drop the honey");
  }
  else{
    console.log("You don't have any honey to deliver")
  }
}