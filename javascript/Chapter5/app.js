function Add(a,b){        
    var result = a+b;
    document.write("The addition of "+a+" and "+b+" is "+result+"<br />");
}
function Div(a,b){        
    var result = a/b;
    document.write("The Division of "+a+" and "+b+" is "+result+"<br />");
}
function Sub(a,b){        
    var result = a-b;
    document.write("The Substract of "+a+" and "+b+" is "+result+"<br />");
}
function Mul(a,b){        
    var result = a*b;
    document.write("The Multiplacation of "+a+" and "+b+" is "+result+"<br />");
}
function task3(){
    var some_random;
    document.write("The variable after declaration is : "+some_random+"<br />");
    some_random = 23;
    document.write("The variable after defining is : "+some_random+"<br />");
    some_random++;
    document.write("The variable after increment is : "+some_random+"<br />");
    some_random = some_random + 7;
    document.write("The variable after adding 7 is is : "+some_random+"<br />");
    some_random--;
    document.write("The variable after decrement is : "+some_random+"<br />");
    some_random = some_random % 3;
    document.write("The variable after modulo with 3 is : "+some_random+"<br />");
}
function task4(a){
    var one_ticket = 600;    
    var res = one_ticket * a;
    document.write("The price you have to pay is : "+res+"$ <br />");
}
function table(num,times){
    for(var j=1;j<times+1;j++)
    {
        document.write(num*j+"<br />");
    }
}
function temp_conv(){
    var celcius = 37;
    var farhen = 98;
    var cel_far_conv = (celcius * 9/5) + 32;
    document.write("The Temperature in farhenite after converting from celcius is : "+cel_far_conv+"F <br />");
    var far_cel_conv = (farhen - 32) * (5/9);
    document.write("The Temperature in celcius after converting from farhenite is : "+far_cel_conv+"C <br />");
}
function shopping_cart(){
    var item1 = 60;
    var item2 = 100;
    var qty1 = 4;
    var qty2 = 2;
    var ship = 1000;
    var price1 = item1*qty1;
    var price2 = item2*qty2;
    var res_shop = price1+price2+ship;
    document.write("the price of item 1 is "+item1+"<br />");
    document.write("the price of item 2 is "+item2+"<br />");
    document.write("the QTY of item 1 is "+qty1+"<br />");
    document.write("the QTY of item 2 is "+qty2+"<br />");
    document.write("the Shipping cost is "+ship+"<br />");
    document.write("the total price is "+res_shop+"<br />");
}

function percent(){
    var grandtotal = 1100;
    var obt = 900;
    var percentage = (obt/grandtotal)*100;
    document.write("grand total : "+grandtotal);
    document.write("marks obtained : "+obt);
    document.write("percentage obtained : "+percentage);
}
function Rupee(){
    var dollar = 10;
    var riyal = 25;
    var dollar_ruppee = dollar * 104.80;
    var riyal_rupee = riyal * 28;
    var total_rupee = dollar_ruppee + riyal_rupee;
    document.write("pakistani rupee : "+total_rupee);
}
function Task10(){
    var random = 10;
    var my_result = ((random + 10)*10)/2;
    document.write(my_result);
}
function AgeCal(){
    var Birth = 1999;
    var current_year = 2020;
    var age = current_year - Birth;
    document.write("Age : "+age);
}
function Geometry(){
    var raduis = 20;
    var circum = 2*3.142*raduis;
    var area = 3.142*(raduis*raduis);
    document.write("Circumference : "+circum+"<br />");
    document.write("Area : "+area);
}
function LifeSupply(){
    var SnackPerDay = 5;
    var ExpectedAge = 65;
    var age = 25;
    var age_left = ExpectedAge - age;
    var SnacksLife = age_left * SnackPerDay;
    document.write("Snacks Left : "+SnacksLife);
}