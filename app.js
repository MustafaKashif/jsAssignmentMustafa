//! Chapter No. 06-09

//* Question No. 01
//? var number = +prompt("Enter Any Number you want : ");
//? var value = number;
//? var numberinc = ++value;
//? var numberpoi =  numberinc++;
//? var numberdec =  --numberpoi;
//? var numberpod =  numberdec--;
//? document.write("<br>Result");
//? document.write("<br>The Value that you have entered is : "+number);
//? document.write("<br>--------------------------------------------");
//? document.write("<br>The value of pre-increment operator of your number is : "+numberinc);
//? document.write("<br>Now the value of the entered number is : "+numberinc);
//? document.write("<br>The value of post-increment operator of your number is : "+numberpoi);
//? document.write("<br>Now the value of the entered number is : "+numberpoi);
//? document.write("<br>The value of pre-decrement operator of your number is : "+numberdec);
//? document.write("<br>Now the value of the entered number is : "+numberdec);
//? document.write("<br>The value of post-decrement operator of your number is : "+numberpod);
//? document.write("<br>Now the value of the entered number is : "+numberpod);

//* Question No. 02
//? var a = 2;
//? var b = 1;
//?  var result = --a - --b + ++b + b--;
//? var r = --a;
//? var t = --a - --b;
//? var y = --a - --b + ++b;
//? var u = --a - --b + ++b + b--;
//? document.write("<br>The value of A is : " +a);
//? document.write("<br>The value of B is : " +b);
//? document.write("<br>The result is : "+result);
//? document.write("<br>"+" "+"The Output of --a is "+r);
//? document.write("<br>"+" "+"The Output of --a - --b is "+t);
//? document.write("<br>"+" "+"The Output of --a - --b + ++b is "+y);
//? document.write("<br>"+" "+"The Output of --a - --b + ++b + b-- is "+u);                                           

//* Question No. 03
//? var username = prompt("Enter the username : ","");
//? alert("Hello ! "+""+username+" "+"Welcome to my website");

//* Question No. 04 & 5
//? var table = prompt("Enter the number that you want the multipication table of : ");
//?     document.write("<br>Table of"+" "+table);
//?     document.write("<br>"+" "+table+" "+" x 1 = "+(table*1));
//?     document.write("<br>"+" "+table+" "+" x 2 = "+(table*2));
//?     document.write("<br>"+" "+table+" "+" x 3 = "+(table*3));
//?     document.write("<br>"+" "+table+" "+" x 4 = "+(table*4));
//?     document.write("<br>"+" "+table+" "+" x 5 = "+(table*5));
//?     document.write("<br>"+" "+table+" "+" x 6 = "+(table*6));
//?     document.write("<br>"+" "+table+" "+" x 7 = "+(table*7));
//?     document.write("<br>"+" "+table+" "+" x 8 = "+(table*8));
//?     document.write("<br>"+" "+table+" "+" x 9 = "+(table*9));
//?     document.write("<br>"+" "+table+" "+" x 10 = "+(table*10));

//*     document.write("<br><br>Table of 5");
//?     document.write("<br>5 x 1 = "+(5*1));
//?     document.write("<br>5 x 2 = "+(5*2));
//?    document.write("<br>5 x 3 = "+(5*3));
//?     document.write("<br>5 x 4 = "+(5*4));
//?     document.write("<br>5 x 5 = "+(5*5));
//?     document.write("<br>5 x 6 = "+(5*6));
//?     document.write("<br>5 x 7 = "+(5*7));
//?     document.write("<br>5 x 8 = "+(5*8));
//?     document.write("<br>5 x 9 = "+(5*9));
//?     document.write("<br>5 x 10 = "+(5*10));

//* Question No. 06
//? var subject1 = prompt("Enter the name of first subject ");
//? var subject2 = prompt("Enter the name of second subject ");
//? var subject3 = prompt("Enter the name of third subject ");
//? var total1 = 100;
//? var total2 = 100;
//? var total3 = 100;
//? var marks1 = +prompt("Enter the marks of "+" "+subject1);
//? var marks2 = +prompt("Enter the marks of "+" "+subject2);
//? var marks3 = +prompt("Enter the marks of "+" "+subject3);
//? var percentage1 = marks1 / total1 * 100;
//? var percentage2 = marks2 / total2 * 100;
//? var percentage3 = marks3 / total3 * 100;
//? document.write("<br>Subject"+" "+"Total Marks"+" "+"Obtained Marks"+" "+"Percentage");
//? document.write("<br>"+subject1+" "+total1+" "+" "+marks1+" "+percentage1+"%");
//? document.write("<br>"+subject2+" "+total2+" "+marks2+" "+percentage2+"%");
//? document.write("<br>"+subject3+" "+total3+" "+marks3+" "+percentage3+"%");

//? document.write("<br>Total marks are : "+(marks1+marks2+marks3));
//? document.write("<br>Percentage is : "+(marks1+marks2+marks3)/300*100);

//! Chapter N0. 06-09 completed

//! Chapter No. 09-11

//* Question No. 01
//? var cityName = prompt("Enter the name of the city you want : ");
//? var name = cityName.toLowerCase();
//? if(name == "karachi"){
//?     alert("Welcome to  the city of Lights");
//? }
//? else{
//?     alert("Thanks for entering");
//? }

//* Question No. 02
//? var gender = prompt("Enter your Gender : ");
//? g = gender.toLowerCase();
//? if(g == "male"){
//?     alert("Good Morning Sir");
//? }
//? else if(g == "Female"){
//?     alert("Good Morning Ma'am");
//? }

//* Question No. 03
//? var color = prompt("Enter the color of road traffic signal : ");
//? var col = color.toLowerCase();
//? if(col == "red"){
//?     alert("Must Stop");
//? }
//? else if(col == "yellow"){
//?     alert("Ready to move");
//? }

//? else if(col == "green"){
//?     alert("Move Now");
//? }

//* Question No. 04
//? var fuel = +prompt("Enter the reading of fuel from your car's speed o meter : ");
//? if(fuel <= 0.25){
//?     alert("Please refill the fuel in your car");
//? }
//? else{
//?     alert("Enjoy bro");
//? }

//* Question No. 05
//? var a = 4;
//? if (++a === 5){
//? alert("given condition for variable a is true"); //This alert will run
//? }

//? var b = 82;
//? if (b++ === 83){
//? alert("given condition for variable b is true"); //No output will be displayed as no alert will run or execute on the given condition
//? }

//? var c = 12;
//? if (c++ === 13){
//? alert("condition 1 is true");
//? }
//? if (c === 13){
//? alert("condition 2 is true"); //This alert will run
//? }
//? if (++c < 14){
//? alert("condition 3 is true");
//? }
//? if(c === 14){
//? alert("condition 4 is true"); //This Alert will also run
//? }

//? var materialCost = 20000;
//? var laborCost = 2000;
//? var totalCost = materialCost + laborCost;
//? if (totalCost === laborCost + materialCost){
//? alert("The cost equals");   //Alert will run and the output will de diplayed
//? }

//? if (true){
//? alert("True"); //This alert will run
//? }
//? if (false){
//? alert("False");
// }

//? if("car" < "cat"){
//?     alert("car is smaller than cat"); //This alert will run
//? }

//* Question No. 06
//? var number1 = +prompt("Enter the marks of your first subject");
//? var number2 = +prompt("Enter the marks of your second subject");
//? var number3 = +prompt("Enter the marks of your third subject");
//? var percentage = (number1 + number2 + number3)/300 * 100;

//? document.write("<br>Marks Sheet");
//? document.write("<br>Total marks : 300");
//? document.write("<br>Marks Obtained : "+(number1 + number2 + number3));
//? document.write("<br>Percentage : "+percentage);
//? if(percentage >= 80 && percentage <= 100){
//?     document.write("<br>Grade : A-One");
//?     document.write("<br>Remarks : Excellent");
//? }
//? else if(percentage >= 70 && percentage <= 80){
//?     document.write("<br>Grade : A");
//?     document.write("<br>Remarks : Good");
//? }
//? else if(percentage >= 60 && percentage <= 70){
//?     document.write("<br>Grade : B");
//?     document.write("<br>Remarks : You need to improve");
//? }
//? else if(percentage < 60 && percentage <= 60){
//?     document.write("<br>Grade : Fail");
//?     document.write("<br>Remarks : You need to improve");
//? }

//* Question No. 07
//? var number = 10;
//? var input = +prompt("Guess the number entered in the program : ");
//? if(input == number){
//?  alert("Bingo ! Correct Answer");
//? }
//? else if(in8put + 1 == number){
//?     alert("Close enough to the correct Answer");
//? }

//* Question No. 08
//? var number = +prompt("Enter the number that you want : ");
//? if(number % 3 == 0){
//?     alert("The number that you have entered is divisble by 3");
//? }
//? else{
//?     alert("Thanks for entering");
//? }

//* Question No. 09
//? var number = +prompt("Enter the number : ");
//? if(number % 2 == 0){
//?     alert("The number you have entered is even");
//? }
//? else if(number % 2 != 0){
//?     alert("The number that you have entered is Odd");
//? }

//* Question No. 10
//? var temperature = +prompt("Enter the temperature : ");
//? if(temperature > 40){
//?     alert("It's too hot outside");
//? }
//? else if(temperature > 30 && temperature <= 40){
//?     alert("The weather today is normal");
//? }
//? else if(temperature > 20 && temperature <= 30){
//?     alert("Today's weather is cool");
//? }
//? else if(temperature > 10 && temperature <= 20){
//?     alert("OMG ! Today's weather is so cool");
//? }

//* Question No. 11
//? var number1 = +prompt("Enter the first Number : ");
//? var number2 = +prompt("Enter the second number : ");
//? var sign = prompt("Enter the sign that you want to operate on to get your desired output : ");
//? if(sign == "+"){
//?     alert(number1 + number2);
//? }
//? else if(sign == "-"){
//?     alert(number1 - number2)
//? }
//? else if(sign == "*"){
//?     alert(number1 * number2);
//? }
//? else if(sign == "/"){
//?     alert(number1 / number2);
//? }
//? else if(sign == "%"){
//?     alert(number1 % number2);
//? }
//? else{
//?     alert("Wrong sign entered");
//? }

//! Chapter No. 9-11 Completed

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