//! Chapter No.12-13

//* Question No. 01
//? var input = prompt("Enter the variable that you want : ");
//? if(input >= "A" && input <= "Z"){
//?    alert("The entered string is in Uppercase");
//? }
//? else if(input >= "a" && input <= "z"){
//?     alert("The entered string is in lowercase");
//? }
//? else if(input >= 1 && input <= 100000000){
//?     alert("The entered input is a number");
//? }

//* Question No. 02
//? var number1 = +prompt("Enter the First number : ");
//? var number2 = +prompt("Enter the second number : ");
//? if(number1 > number2){
//?     alert("The first entered number is greater than the second one entered");
//? }
//? else if(number2 > number1){
//?     alert("The second entered number is greater than the first one entered");
//? }
//? else if(number1 == number2){
//?     alert("Both the number entered are equal");
//? }

//* Question No. 03
//? var number = +prompt("Enter the number that you want : ");
//? if(number == 0){
//?     alert("The value that you have entered is zero");
//? }
//? else if(number > 0 && number <= 100){
//?     alert("The number that you have entered is positive");
//? }
//? else if(number < 0){
//?     alert("The number that you have entered is negative");
//? }

//* Question No. 04
//? var string = prompt("Enter the charcter that you want to check : ");
//? var vowel = string.toLowerCase();
//? if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
//?     alert("The character that you have entered is a vowel");
//? }
//? else{
//?     alert("The character entered is not a vowel");
//? }

//* Question No. 05
//? var input = prompt("Enter the password : ");
//? var password = "mustafa";
//? var pass = input.toLowerCase();
//? if(pass == 0){
//?     alert("Please enter your Password");
//? }
//? else if(pass == password){
//?     alert("Correct ! The password you entered matches the original password");
//? }
//? else if(pass != password){
//?     alert("Wrong password ! Please try again");
//? }

//* Question No. 06
//? var greeting;
//? var hour = 13;
//? if(hour < 18){
//?     greeting = "Good Day";
//?     alert(greeting);
//? }
//? else{
//?     greeting = "Good Evening";
//?     alert(greeting);
//? }

//* Question No. 07
//? var time = +prompt("Enter the time in 24 hours format : ");
//? if(time >= 0000 && time < 1200){
//?     alert("Good Morning");
//? }
//? else if(time >= 1200 && time < 1700){
//?     alert("Good Afternoon");
//? }
//? else if(time >= 1700 && time < 2100){
//?     alert("Good evening");
//? }
//? else if(time >= 2100 && time <= 2359){
//?     alert("Good Night");
//? }

//! Chapter 12 - 13 Completed

//! Chapter 14 - 16

//* Question No. 01
//? var stuNames = [];

//* Question No. 02
//? var stuNames = new Array();

//* Question No. 03
//? var string = ["My","Name","is", "Mustafa"];

//* Question No. 04
//? var numbers = [1,2,3,4,5,6];

//* Question No. 05
//? var boolean = [true, false];

//* Question No. 06
//? var mixed = ["Mustafa",2003, true];

//* Question No. 07
//? var eduQualification = ["SSC","HSC","BCS","BS","BCOM","MS","MPHILL","PhD"];
//? document.write("<br>Qualifications");
//? document.write("<br>1)"+" "+eduQualification[0]);
//? document.write("<br>2)"+" "+eduQualification[1]);
//? document.write("<br>3)"+" "+eduQualification[2]);
//? document.write("<br>4)"+" "+eduQualification[3]);
//? document.write("<br>5)"+" "+eduQualification[4]);
//? document.write("<br>6)"+" "+eduQualification[5]);
//? document.write("<br>7)"+" "+eduQualification[6]);
//? document.write("<br>8)"+" "+eduQualification[7]);

//* Question No. 08
//? var stuName1 = prompt("Enter the first student name : ");
//? var stuName2 = prompt("Enter the second student name : ");
//? var stuName3 = prompt("Enter the third student name : ");
//? var names = [stuName1, stuName2, stuName3];
//? var marks1 = prompt("Enter the marks of the first student : ");
//? var marks2 = prompt("Enter the marks of the second student : ");
//? var marks3 = prompt("Enter the marks of the third student : ");
//? var marks = [marks1, marks2, marks3];
//? var total = 500;
//? var percentage1 = (marks1)/500 * 100;
//? var percentage2 = (marks2)/500 * 100;
//? var percentage3 = (marks3)/500 * 100;
//? document.write("<br>Score of"+" "+stuName1+" "+"is"+" "+marks1 +" "+"Percentage : "+" "+percentage1);
//? document.write("<br>Score of"+" "+stuName2+" "+"is"+" "+marks2 +" "+"Percentage : "+" "+percentage2);
//? document    .write("<br>Score of"+" "+stuName3+" "+"is"+" "+marks3 +" "+"Percentage : "+" "+percentage3);

//* Question No. 09
//? var colors = ["maroon", "black", "gray"];
//? document.write(colors);
//? var input = prompt("Enter the name of the color that you want to add in the beginning of the array : ");
//? colors.unshift(input);
//? document.write("<br>"+" "+colors);
//? var input = prompt("Enter the name of the color that you want to add in the end of the array : ");
//? colors.push(input);
//? document.write("<br>"+" "+colors);
//? colors.unshift(["emerald green","pink"]);
//? document.write("<br"+" "+colors);
//? colors.shift();
//? document.write("<br>"+" "+colors);
//? colors.pop();
//? document.write("<br>"+" "+colors);
//? var input = +prompt("Enter the index number that you want to perform operations on : ");
//? var input2 = prompt("Enter the color name that you want to add : ");
//? colors.splice(input,0,input2);
//? document.write("<br>"+" "+colors);
//? var input = +prompt("Enter the index number that you want to perform operations on : ");
//? var input2 = prompt("Enter the number of indexes that you want to delete : ");
//? colors.splice(input,input2);
//? document.write("<br>"+" "+colors);

//* Question No. 10
//? var stuScore = [300, 240, 200, 150];
//? document.write("Scores of the Students are : "+stuScore);
//? stuScore = stuScore.sort();
//? document.write("<br>Ordered score of the students are : "+stuScore);

//* Question No. 11
//? var city = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
//? document.write("<br> City Names list :"+" "+city);
//? var select = [];
//? select = city.slice(2,4);
//? document.write("<br>Selected citites List : "+" "+select);

//* Question No. 12
//? var arr = ["This", "is", "my", "cat"];
//? document.write("<br>Array : "+" "+arr);
//? var r = arr.join(" ");
//? document.write("<br>String : "+" "+ r);

//* Question No. 13
//? var devices = ["keyboard","mouse","printer","monitor"];
//? document.write("<br>Devices : "+" "+devices);
//? document.write("<br>Out:<br>"+devices[0]);
//? document.write("<br>Out:<br>"+devices[1]);
//? document.write("<br>Out:<br>"+devices[2]);
//? document.write("<br>Out:<br>"+devices[3]);

//* Question No. 14
//? var devices = ["keyboard","mouse","printer","monitor"];
//? document.write("<br>Devices : "+" "+devices);
//? document.write("<br>Out:<br>"+devices[3]);
//? document.write("<br>Out:<br>"+devices[2]);
//? document.write("<br>Out:<br>"+devices[1]);
//? document.write("<br>Out:<br>"+devices[0]);

//* Question No. 15
//? var phoneMan = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
//? document.write('<select id="phoneManselect">');
//? for (var i = 0; i < phoneMan.length; i++) {
//? document.write('<option value= "' + phoneMan[i] + '">' + phoneMan[i] + '</option>');
//? }
//? document.write('</select>');

//! Chapter No. 14 - 16 Completed 