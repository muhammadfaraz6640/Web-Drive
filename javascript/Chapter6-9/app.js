function PlusPlus_MinusMinus(){
      //in simple assignment ++a and a++ is same
      var variable;
      variable = 10;
      document.write("variable = "+variable+"<br />");
      ++variable;
      document.write("++variable = "+variable+"<br />");
      variable++;
      document.write("variable++ : "+variable+"<br />");
      --variable;
      document.write("--variable : "+variable+"<br />");
      variable--;
      document.write("variable-- : "+variable+"<br />");

      //the bellow will be changed
//         x = 0;
// y = array[x++]; // This will get array[0]

// x = 0;
// y = array[++x]; // This will get array[1]
}

function Task2(){
    var a = 2, b = 1;   // 1 + 
    var part1 = (--a - --b);
    var part2 = ++b + b--;
    document.write("--a - --b is : "+part1+"<br />");
    document.write("++b + b-- is : "+part2+"<br />");
    var result = --a - --b + ++b + b--; 
    document.write("Result is : "+result+"<br />");
    document.write("a is : "+a+"<br />");
    document.write("b is : "+b+"<br />");
}
function Greet(){
    var name = prompt("Write your name..so that i can greet you..");
    alert("Helllo My dear "+name);
}
function table_user(){
    var num = prompt("enter a number to print table ");
    if(num == ""){
        for(var i=1;i<11;i++){
            document.write("5 *"+i+" = "+5*i+"<br />");
        }        
        }
    else{
        for(var i=1;i<11;i++){
            document.write(num+" *"+i+" = "+num*i+"<br />");
        }
    }
}

function Marksheet(){
    var sub1 = prompt("enter a name of 1st subject : ");
    var sub2 = prompt("enter a name of 2nd subject : ");
    var sub3 = prompt("enter a name of 3rd subject : ");

    var marks1 = prompt("enter a Marks of 1st subject : ");
    var marks2 = prompt("enter a Marks of 2nd subject : ");
    var marks3 = prompt("enter a Marks of 3rd subject : ");

    var total = 100;

    var percent1 = (marks1/total ) * 100;
    var percent2 = (marks2/total ) * 100;
    var percent3 = (marks3/total ) * 100;

    var grand_total = 300;
    
    var Total_sub = sub1+sub2+sub3;

    var avg_percent = (percent1+percent2+percent3)/3;    
    document.write("<tr><td>"+sub1+"</td>"+"                      "+
    "<td>"+total+"</td>"+
    "<td>"+marks1+"</td>"+
    "<td>"+percent1+"</td>");
    document.write(+"<tr/>"+"<br />"+"<tr><td>"+sub2+"</td>"+
    "<td>"+total+"</td>"+
    "<td>"+marks2+"</td>"+
    "<td>"+percent2+"</td>");
    document.write(+"<tr/>"+"<br />"+"<tr><td>"+sub3+"</td>"+"                      "+
    "<td>"+total+"</td>"+
    "<td>"+marks3+"</td>"+
    "<td>"+percent3+"</td>"
    +"<tr/>"+"<br />");    
}