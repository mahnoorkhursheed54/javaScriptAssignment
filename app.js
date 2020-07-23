// "Chapter 21-25"

// TASK 1:

var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
var fullName = firstName + " " + lastName;
alert("Welcome" + " " + fullName)

// TASK 2:

var a = prompt("Enter your favourite mobile phone model")
document.write("My favourite phone is:" + " " + a + "<br>")
var lenth = a.length;
document.write("Length of string:" + " " + lenth)

// TASK 3:

var str = "Pakistani";
var n = str.indexOf("n");
document.write("String:" + " " + str + "<br>")
document.write("Index of letter 'n':" + " " + n)

// TASK 4:

var str = "Hello World";
var n = str.lastIndexOf("World");
document.write("String:" + " " + str + "<br>")
document.write("Last index of letter 'l':" + " " + n)

// TASK 5:

var str = "Pakistani";
var n = str.charAt(3);
document.write("String:" + " " + str + "<br>")
document.write("Character at index 3:" + " " + n)

// TASK 6:

var str1 = prompt("Enter your first name");
var str2 = prompt("Enter your last name");
var res = str1.concat(" " + str2);
alert("Welcome" + " " + res)

// TASK 7:

var text = "Hyderabad";
var newText = text.replace("Hyder", "Islam");
document.write("City:" + " " + text + "<br>")
document.write("After replacement:" + " " + newText)

// TASK 8:

var message = "Ali and Sami are best friends. They play cricket and football together.";
var rep = message.replace(/and/g, "&"); 
document.write(rep)

// TASK 9:

var str = "472";
var rep = parseInt(str)
document.write("Value:" + " " + str + "<br>")
document.write("Type: string" + " " + "<br>")
document.write("Value:" + " " + rep + "<br>")
document.write("Type: number")

// TASK 10:

var a = prompt("Enter your favourite snack")
var b = a.toUpperCase(a)
document.write("User input:" + " " + a + "<br>")
document.write("Upper case:" + " " + b)

// TASK 11:

var a = prompt("Enter your favourite snack")
var b = a.toLocaleUpperCase(b)
document.write("User input:" + " " + a + "<br>")
document.write("Title case:" + " " + b)

// TASK 12:

var num = 35.36; 
var string = num.toString();
document.write("Number:" + " " + num + "<br>")
document.write("Result:" + " " + string)

// TASK 13:

var userName = prompt("Enter your name")
var textLength = userName.length;
for(i = 0; i < userName.length; i++){
if(userName.slice(i , i + 1) == "!" || userName.slice(i , i + 1) == "," || userName.slice(i , i + 1) == "." || userName.slice(i , i + 1) == "@")
    alert("Please enter a valid username")
}

// TASK 14:

var array = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
var bakery = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
bakery = bakery.toLowerCase();
var bakeryItems = array.indexOf(bakery);
if(array.indexOf(bakery) != -1){
    alert(bakery + " " + "is available at index" + " " + bakeryItems + " " + "in our bakery")
}
else{
    alert("We are sorry." + " " + bakery + " " + "is not available in our bakery")
}

// TASK 16:

var str = "University of Karachi"; 
var arr = str.split();
document.write(arr)

// TASK 17:

var a = prompt("Enter any input")
var b = a.charAt(a.length-1);
document.write("User input:" + " " + a + "<br>")
document.write("Last character of input:" + " " + b)

// TASK 18:

var str = "The quick brown fox jumps over the lazy dog";
var occ = str.split(/the/g).length;
document.write("Text:" + " " + str + "<br>")
document.write("There are" + " " + occ + " " + "occurance(s) of word 'the'") 

// "Chapter 26-30"

// TASK 1:

var num = +prompt("Enter any positive integer")
var roundNum = Math.round(num)
var floorNum = Math.floor(num)
var ceilNum = Math.ceil(num)
document.write("Number:" + " " + num + "<br>")
document.write("Round off value:" + " " + roundNum + "<br>")
document.write("Floor value:" + " " + floorNum + "<br>")
document.write("Ceil value:" + " " + ceilNum)

// TASK 2:

var num = +prompt("Enter any negative floating point")
var roundNum = Math.round(num)
var floorNum = Math.floor(num)
var ceilNum = Math.ceil(num)
document.write("Number:" + " " + num + "<br>")
document.write("Round off value:" + " " + roundNum + "<br>")
document.write("Floor value:" + " " + floorNum + "<br>")
document.write("Ceil value:" + " " + ceilNum)

// TASK 3:

var num1 = Math.abs(-14);
var num2 = Math.abs(2);
document.write("Absolute value of -14 is" + " " + num1 + "<br>")
document.write("Absolute value of 2 is" + " " + num2)

// TASK 4:

var heads = 2;
var tails = 1;
if(Math.floor(Math.random() * 2) == 0){
  document.write("Random coin value:" + " " + "Heads");
}    
else{
  document.write("Random coin value:" + " " + "Tails");
}

// TASK 5:

var dice1 = (Math.floor(Math.random() * 6))
document.write("Random dice value:" + " " + dice1 + "<br>");
var dice2 = (Math.floor(Math.random() * 6))
document.write("Random dice value:" + " " + dice2 + "<br>");

// TASK 6:

var num = Math.floor((Math.random() * 100) + 1);
document.write("Randon muber between 1 and 100:" + " " + num)

// TASK 7:

var weight = prompt("Enter your weight in kilograms")
var a = parseFloat(weight);
document.write("The weight of user is:" + " " + a)

// TASK 8:

var a = 7;
var a = +prompt("Guess the secret number(ranging from 1 to 10)");
if(a===7){
  alert("Bingo! Correct answer")
}
else{
  alert("Try again")
}

// "Chapter 31-34"

// TASK 1:

var a = new Date();
document.write(a)

// TASK 2:

var date = new Date();
var currentMonth = date.getMonth();
if(currentMonth === 0){
    alert("Current month is January");
}
else if(currentMonth === 1){
    alert("Current month is Feburary");
}
else if(currentMonth === 2){
    alert("Current month is March");
}
else if(currentMonth === 3){
    alert("Current month is April");
}
else if(currentMonth === 4){
    alert("Current month is May");
}
else if(currentMonth === 5){
    alert("Current month is June");
}
else if(currentMonth === 6){
    alert("Current month is July");
}
else if(currentMonth === 7){
    alert("Current month is August");
}
else if(currentMonth === 8){
    alert("Current month is September");
}
else if(currentMonth === 9){
    alert("Current month is October");
}
else if(currentMonth === 10){
    alert("Current month is November");
}
else if(currentMonth === 11){
    alert("Current month is December");
}
document.write(currentMonth)

// TASK 3:

var date = new Date();
var currentDay = date.getDay();
if(currentDay === 0){
    alert("Today is Sunday");
}
else if(currentDay === 1){
    alert("Today is Monday");
}
else if(currentDay === 2){
    alert("Today is Tuesday");
}
else if(currentDay === 3){
    alert("Today is Wednesday");
}
else if(currentDay === 4){
    alert("Today is Thursday");
}
else if(currentDay === 5){
    alert("Today is Friday");
}
else if(currentDay === 6){
    alert("Today is Saturday");
}
alert(currentDay)

// TASK 4:

var date = new Date();
var currentDay = date.getDay();
if(currentDay === 0){
    alert("It's fun day");
}
else if(currentDay === 1){
    alert("Today is Monday");
}
else if(currentDay === 2){
    alert("Today is Tuesday");
}
else if(currentDay === 3){
    alert("Today is Wednesday");
}
else if(currentDay === 4){
    alert("Today is Thursday");
}
else if(currentDay === 5){
    alert("Today is Friday");
}
else if(currentDay === 6){
    alert("It's fun day");
}

// TASK 5:

var a = new Date ();
var b = a.getDate();
if(b < 16){
    alert("First fifteen days of the month")
}
else{
    alert("Last fifteen days of the month")
}

// TASK 6:

var d = new Date ();
document.write("Current date:" + " " + d + "<br>")
var e = new Date("January 1, 1970 01:15:00:526");
var todayMili = d.getTime()
document.write("Elapsed miliseconds since January 1, 1970:" + " " + todayMili + "<br>")
var f = new Date("January 1, 1970 01:15:00:526");
var minCovert = todayMili / (1000*60*60);
document.write("Elapsed minutes since January 1, 1970:" + " " + minCovert)

// TASK 7:

var a = new Date ();
var b = a.getHours();
if(b < 11){
    alert("It's AM")
}
else{
    alert("It's PM")
}

// TASK 8:

var d = new Date();
d.setFullYear(2020, 11, 31);
document.write("Later date:" + " " + d)

// TASK 9:

var d = new Date ();
var a = d.setFullYear(2015, 05, 18);
var b = a.getDay();
document.write(a + " " + "days have passed since 1st Ramadan, 2015")

// TASK 11:

var d = new Date();
document.write("Current date:" + " " + d + "<br>")
d.setHours(d.getHours() - 1);
document.write("1 hour ago, it was" + " " + d)

// TASK 12:

var d = new Date();
document.write("Current date:" + " " + d + "<br>")
d.setFullYear(d.getFullYear() - 100);
document.write("100 years back, it was" + " " + d)

// TASK 13:

var age = +prompt("Enter your age")
document.write("Your age is:" + " " + age + "<br>")
var birthYear = 1998;
document.write("Your birth year is:" + " " + birthYear)

// TASK 14:

document.write("K-Electric Bill" + " " + "<br>" + "<br>") 
var customerName = "ABC customer";
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var e = months[d.getMonth()];
var units = 410;
var charges = 16;
var netAmount = units * charges;
var latePayment = 350;
var grossAmount = netAmount + latePayment;
document.write("Customer name:" + " " + customerName + "<br>")
document.write("Month:" + " " + e + "<br>")
document.write("Number of units:" + " " + units + "<br>")
document.write("Charges per unit:" + " " + charges + "<br>")
document.write("Late payment surcharge:" + " " + latePayment + "<br>" + "<br>")
document.write("Net amount payable (Within due date):" + " " + netAmount + "<br>")
document.write("Gross amount payable (After due date):" + " " + grossAmount + "<br>")

// "Chapter 35-38"

// TASK 1:

var curDay = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };
    console.log(curDay(" "));
    console.log(curDay(" "));
 
// TASK 2:

var person = {
    firstName: prompt("Enter your first name"),
    lastName: prompt("Enter your first name"),
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  alert("Welcome" + " " + person.fullName());

// TASK 3:

function calculation(a , b){
    return a + b;
}

document.write(calculation(+prompt("Enter first number") , +prompt("Enter second number")))
     
// TASK 5:

square = function(i){
    return i * i;
};
  
document.write("The square of a number is:" + " " + square(12));

// TASK 6:

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }

  alert(factorial(5));

// TASK 9:

function areaRectangle(w,h){
        var a = w*h;
        document.write("The area of rectangle is " + a + ".");
}
    areaRectangle(2,2)

// TASK 10: 

function check_Palindrome(str_entry){
   
       var char = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    
        if(char==="") {
            console.log("Nothing found!");
            return false;
        }
    
        if ((char.length) % 2 === 0) {
            ccount = (char.length) / 2;
        } else {
    
            if (char.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
    
                ccount = (char.length - 1) / 2;
            }
        }
    
        for (var x = 0; x < ccount; x++) {

            if (char[x] != char.slice(-1-x)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('madam');
    check_Palindrome('nurses run');
    check_Palindrome('fox');     

// TASK 11:

function upperCase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(upperCase("the quick brown fox"));


// TASK 12:

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("Web Development Tutorial"));

// TASK 13:

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('JSResourceS.com', 'o'));

// TASK 14:

function calcCircumfrence(radius){
    var y = 2*3.142*radius;
    document.write("The circumfrence is " + y + "." + "<br>");
}
  function calcArea(radius){
    var x = 3.142*radius* radius;
    document.write("The area is " + x + ".");
}
  
calcCircumfrence(1);
calcArea(2);  