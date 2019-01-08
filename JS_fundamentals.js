// MAX MIN AVERAGE
var arr = [1,2,3,4,5];
function max(arr){
  var max = arr[0];
  for(var i = 0; i< arr.length; i++){
    if(max <= arr[i]){
      max = arr[i];
    }
  }
  console.log(max);
  return max;
}
max(arr);

function min(arr){
  var min = arr[0];
  for(var i = 0; i< arr.length; i++){
    if(min >= arr[i]){
      min = arr[i];
    }
  }
  console.log(min);
  return min;
}
min(arr);

function avg(arr){
  var sum = 0;
  for(var i = 0; i< arr.length; i++){
    sum += arr[i];
    }
  console.log(sum/arr.length);
  return sum/arr.length;
}
avg(arr);

// FIZZBUZZ
function fizzBuzz(n){
  for (var i = 1; i<=n; i++){
    if (i %3 === 0 && i %5 === 0){
      console.log('FizzBuzz');
    }
    else if(i %3 === 0){
      console.log('Fizz');}
    else if(i%5 === 0){
      console.log('Buzz');
    }
    else{
      console.log (i);
    }
  }
  return i;
}
fizzBuzz(15);

// BRACES VALID
function bracesValid(str){
  var arr = [];
  for(var i =0; i< str.length; i++){
    if (str[i] === "[" || str[i] === "(" || str[i] === "{"){
      arr.push(str[i]);
    }
    else if(str[i] === ")" && arr[arr.length-1] !== "("){
      console.log('false');
      return false;
    }
    else if (str[i] === ")" && arr[arr.length-1] === "("){
      arr.pop();
    }
    else if(str[i] === "]" && arr[arr.length-1] !== "["){
      console.log('false');
      return false;
    }
    else if (str[i] === "]" && arr[arr.length-1] === "["){
      arr.pop();
    }
    else if(str[i] === "}" && arr[arr.length-1] !== "{"){
      console.log('false');
      return false;
    }
    else if (str[i] === "}" && arr[arr.length-1] === "{"){
      arr.pop();
          }
  }
  if (arr.length > 0){
    console.log('false');
    return false;}
  else {
    console.log('true');
    return true;}
}
bracesValid("([)]{}");

// OPTIMAL COINCHANGE
function coinChange(num){
  //turn an obj into a number
  var new_num = 0;
  for (key in num) {
  if (key === "dollar"){
    new_num += num.dollar*100;
  }
  else if(key === "quarter"){
     new_num += num.quarter*25;
  }
  else if(key === "dime"){
    new_num += num.dime*10;
  }
  else if(key === "nickle"){
    new_num += num.nickle*5;
  }
  else if(key === "cent"){
    new_num += num.cent;
  }
  }
  //figure optimal coin combo
  var obj = {};
  var dollar = 0;
  var quarter = 0;
  var dime = 0;
  var nickle = 0;
  var cent = 0;
  while(new_num > 0){
    if(new_num >= 100){
      dollar += 1;
      new_num -= 100;
      obj.dollar = dollar;
    }
    else if(new_num >= 25){
      quarter += 1;
      new_num -= 25;
      obj.quarter = quarter;
    }
    else if(new_num>=10){
      dime += 1;
      new_num -= 10;
      obj.dime = dime;
    }
    else if(new_num>=5){
      nickle += 1;
      new_num -= 5;
      obj.nickle = nickle;
    }
    else {
      cent = new_num;
      obj.cent = cent;
    }
  }
  console.log(obj);
  return obj;
}
coinChange({dollar: 2, dime: 15, cent: 5});

// USERS-OBJECT TRAVERSING 
users = [
  {
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
      music: ["guitar", "flute"],
      dance: ["tap", "salsa"],
      television: ["Black Mirror", "Stranger Things"]
    }
  },
  {
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
      food: ["honey", "honeycomb"],
      flowers: ["honeysuckle"],
      mysteries: ["Heffalumps"]
    }
  },
  {
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
      space: ["stars", "planets", "improbability"],
      home: ["tea", "yellow bulldozers"]
    }
  }
]

function userLanguage(users){
  users.forEach(function(user){
    var language = "";
    var user_interest = "";
    
    for(var i =0; i< user.languages.length -1; i++){
      language += user.languages[i] + ", ";
    }
    language += "and " + user.languages[user.languages.length-1];
    console.log(user.fname + " " + user.lname + " knows " + language);
    
  for(var key in user.interests){
    var interest_arr = user.interests[key];
    for(var i = 0; i< interest_arr.length -1; i++){
      user_interest += interest_arr[i] + ", ";}
  }
    user_interest += "and " + interest_arr[interest_arr.length -1];
    console.log(user.fname + " " + user.lname + " is also interested in " + user_interest);
  })
}

userLanguage(users);


// BINARY SEARCH -given a sorted array - return the index
// WITH RECURSION:
// Step 1. Find mid point
// Step 2. Compare if mid point is lower or higher than searched number
// Step 3. remove unneeded side
// Step 4. go back to step 1

var arr = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94];
function getMidPoint(arr, searchNumb) {
  var midPoint = Math.floor(arr.length / 2);
  console.log(arr);
  console.log("array midpoint value: " + arr[midPoint]);

  if (arr[midPoint] > searchNumb) {
    var newArr = arr.slice(0, midPoint);
    return getMidPoint(newArr, searchNumb);

  } else if (arr[midPoint] < searchNumb) {
      var newArr = arr.slice(midPoint + 1, arr.length);
      return getMidPoint(newArr, searchNumb);

  } else if(searchNumb == arr[midPoint]){
      console.log('true');
      return true;
  } else{
      console.log('false');
      return false;
  }
}
getMidPoint(arr,1);

//WITHOUT SLICE - USE RECURSION- return the index 
arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var start = 0;
var end = arr.length;

function binarySearch(arr, num){
  var mid = Math.floor((start + end) / 2);
  if(num < arr[mid]){
    end = mid -1;
    return binarySearch(arr, num);
  }
  
  else if(num > arr[mid]){
    start = mid +1;
    return binarySearch(arr, num);
  }
  else if(num == arr[mid]){
    console.log(mid);
    return true;
  }
  else{
    console.log('false');
    return false;}
}

binarySearch(arr, 5);

// USE WHILE LOOP - WITHOUT RECURSION:
