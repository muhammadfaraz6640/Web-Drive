Ascii = () =>{
    var char = prompt("enter any character or number");
    var code = char.charCodeAt()
    if(code>=65 && code <=90)
    {
        document.write("You Wrote an Uppercase letter");
    }
    else if(code>=97 && code <=122)
    {
        document.write("You Wrote a lowercase letter");
    }
    else if(code>=48 && code <=57)
    {
        document.write("You Wrote a number");
    }
    else{
        document.write("You Wrote some special characters");
    }
    // document.write(code);
}

function numberProblem(){
    var num1 = prompt("enter any number");
    var num2 = prompt("enter any number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if(num1>num2)
    {
        document.write("The Larger number is : "+num1);
    }
    else if(num1<num2)
    {
        document.write("The Larger number is : "+num2);
    }
    else if(num1 === num2)
    {
        document.write("the numbers are equal");
    }
}

function Task3(){
    var num1 = prompt("enter any number");
    num1 = parseInt(num1);
    if(num1>0){
        document.write("the number is positive");
    }
    else if(num1<0){
        document.write("the number is negative");
    }
    else if(num1===0)
    {
        document.write("the number is zero");
    }
}

function Task4(){
    var character = prompt("enter the character : ");
    character = character.toLowerCase();
    if(character === 'a' || character === 'e' ||character === 'i' ||character === 'o' || character === 'u'){
        document.write("you wrote vowel");
    }
    else{
        document.write("you wrote consonant");
    }
}

function Task5(){
    var Pass = "faraz123";
    var typedPass = prompt("enter your password");
    if(Pass === typedPass){
        document.write("thats great you remembered your password");
    }
    else if(typedPass === '')
    {
        document.write("please write your pass");
    }
    else{
        document.write("sorry password not matched");
    }
}

function Task6(){
    var greeting;
    var hour = 13; 
    if (hour < 18) { 
        greeting = "Good day"; 
    }
    else{
        greeting = "Good evening"; 
    }   
}

function Task7(){
    var Time = prompt("enter The Time in 24 hour format");
    Time = parseInt(Time);
    if(Time >= 0000 && Time <=1200){
        document.write("good morning");
    }
    else if(Time >= 1200 && Time <=1700){
        document.write("good afternoon");
    }
    else if(Time >= 1700 && Time <=2100){
        document.write("good evening");
    }
    else if(Time >= 2100 && Time <=2359){
        document.write("good night");
    }

}