function Task1(){
    var city = prompt("Enter the city name");
    if(city === "karachi" || city === "KARACHI"){
        alert("Welcome to the city of lights");
    }
}

function Task2(){
    var Gender = prompt("Enter the Gender");
    if(Gender === "male" || city === "MALE"){
        alert("Hello Sir");
    }
    else if(Gender === "female" || city === "FEMALE"){
        alert("Hello Maam");
    }
}

function Task3(){
    var Lights = prompt("Enter the traffic light");
    if(Lights === "red" || Lights === "RED"){
        alert("Must Stop");
    }
    else if(Lights === "GREEN" || Lights === "green"){
        alert("Move now");
    }
    else if(Lights === "YELLOW" || Lights === "yellow"){
        alert("ready to move");
    }
}

function Task4(){
    var fuel = prompt("Enter the  feul in liters");
    if(fuel < 0.25){
        alert("please fill the tank");
    }
    else{
        alert("your feul is enough");
    }
}
function Task5a(){
    var a = 4; 
    if (++a === 5){ alert("given condition for variable a is true"); //alert
} 
}
function Task5b(){
var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); //no alert
}  
}

function Task5c(){
    var c = 12; 
    if (c++ === 13){  //first assign then increment
         alert("condition 1 is true");
         } 
    if (c === 13){  //incremented c
         alert("condition 2 is true");
         } 
         if (++c < 14){ alert("condition 3 is true"); } 
         if(c === 14){ alert("condition 4 is true"); }
}

function Task5d(){
    var materialCost = 20000;
    var laborCost = 2000; 
    var totalCost = materialCost + laborCost; 
    if (totalCost === laborCost + materialCost){ 
        alert("The cost equals"); 
    }  
}

function Marksheet(){
    var sub1 = prompt("Enter marks of Subject1");
    sub1 = parseInt(sub1);
    var sub2 = prompt("Enter marks of Subject2");
    sub2 = parseInt(sub2);
    var sub3 = prompt("Enter marks of Subject3");
    sub3 = parseInt(sub3);
    var Total = prompt("Enter Total Marks Each Subject");
    var grandTotal = Total * 3;
    var marksObt = sub1 + sub2 + sub3;
    var percent = (marksObt / grandTotal) * 100;
    percent = parseFloat(percent);

    document.write("Total Marks : "+grandTotal+"<br />");
    document.write("Marks Obtained : "+marksObt+"<br />");
    document.write("Percentage : "+percent+"<br />");
    var Remarks,Grade;

    if(percent>=80)
    {
        Remarks = "excellent";
        Grade = "A-one";
        document.write("Remarks : "+Remarks+"<br />");
        document.write("Grade : "+Grade+"<br />");
    }
    else if(percent>=70 || percent < 80)
    {
        Remarks = "Good";
        Grade = "A";
        document.write("Remarks : "+Remarks+"<br />");
        document.write("Grade : "+Grade+"<br />");
    }
    else if(percent>=60 || percent < 70)
    {
        Remarks = "You need to improve";
        Grade = "B";
        document.write("Remarks : "+Remarks+"<br />");
        document.write("Grade : "+Grade+"<br />");
    }
    else{
        Remarks = "You are Fail";
        Grade = "F";
        document.write("Remarks : "+Remarks+"<br />");
        document.write("Grade : "+Grade+"<br />");
    }


}

function Secret(){
    // var mynum = 7;
    var Mynum = Math.floor(Math.random() * (10)) + 1;
    Mynum = parseInt(Mynum);
    var num = prompt("enter a secret number b/w 1-10");
    num = parseInt(num);
    if(Mynum === num){
        alert("you mathed the number"+Mynum);        
    }
    else if(num +1 === Mynum){
        alert("you are closed"+Mynum);        
    }
    else{
        alert("you are far"+Mynum);        
    }
}

function Task8(){
    var digit = prompt("enter the number to check divisiblity by 3");
    if(digit%3 === 0){
        document.write("Its Divisible");
    }
    else{
        document.write("Its not Divisible");
    }
}

function EvenOdd(){
    var num = prompt("enter the number to check whether it is even or odd");
    if(num % 2 === 0){
        document.write("Its even");
    }
    else{
        document.write("Its odd");
    }
}

function temp(){
    var Temperature = prompt("Enter the Temperature");
    Temperature = parseInt(Temperature);
    if(Temperature > 40){
        alert("It is too hot outside");
    }
    else if(Temperature > 40){
        alert("its normal");
    }
    else if(Temperature > 20){
        alert("its cold");
    }
    else if(Temperature > 10){
        alert("its very very cold");
    }
    else{
        alert("its invalid");
    }
}

function calculator(){
    var op1 = prompt("enter an operand 1");
    var op2 = prompt("enter an operand 2");
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    var result;    
    var operation = prompt("enter an operation from + - * / %");
    if(operation === "+"){
        alert(op1 + op2);
    }
    else if(operation === "-"){
        alert(op1 - op2);
    }
    else if(operation === "/"){
        alert(op1 / op2);
    }
    else if(operation === "*"){
        alert(op1 * op2);        
    }
    else if(operation === "%"){
        alert(op1 % op2);
    }
    else{
        alert("invalid Operator");
    }
}