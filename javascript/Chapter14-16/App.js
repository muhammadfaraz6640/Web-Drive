function Task1(){
    var arr = [];
}
function Task2(){
    b= new Array();
}
function Task3(){
    var str_arr = ["hello","my","dear"];
}
function Task4(){
    var num_arr = [1,2,3,4,5];
}
function Task5(){
    var bool_arr = [true,false,true];
}

function Task6(){
    var Mixed_arr = ["faraz","daraz",23,true];
}
function Task7(){
    var My_arr = ["SSC","HSC","BSC","BS","B.COM","MS","M.PHILL","PHD"];
    for(var i=0;i<My_arr.length;i++){
        document.write(My_arr[i] + "<br />");
    }
}

function Task8(){
    var Name = ["Faraz","Laiba","Mazhar"];
    var Scores = [320,230,480];
    var Percent = [];

    for(var i=0; i < Scores.length;i++){
        var temp = 0;        
        temp = parseInt(temp);
        temp = (Scores[i]/500) * 100;
        Percent.push(temp);
        temp = 0;                
    }    
    // for(var j = 0 ; j < 3 ; j++){
    //     document.write(Percent);
    // }
    // document.write(Percent);
    for(var j=0; j < 3;j++){
        document.write("Score of "+ Name[j] + " is "+ Scores[j]+ ". Percentage is "+Percent[j] + "<br />");
    }    


}


function Task9(){
    var arr = ["red","blue","green","pink","yellow"];
    var col1=prompt("enter the color which you want to insert at the beginning");
    arr.unshift(col1);  //insert at the beginnig
    document.write(arr + "<br />");
    var col2=prompt("enter the color which you want to insert at the end");
    arr.push(col2); //end of array
    document.write(arr + "<br />");
    arr.concat(["orange","mergenda","violet"]);    //end of the array
    document.write(arr + "<br />");
    arr.pop();
    document.write(arr + "<br />");
    var col3=prompt("enter the index of color insertion");
    var col4=prompt("enter the color  you want to insert at the index");
    col3 = parseInt(col3);
    arr[col3] = col4;
    document.write(arr + "<br />");
}


function Task10(){
    var score = [320,120,100,54,22];
    score.sort();
    document.write(score + "<br />");
}

function Task11(){
    var cities = ["Karachi","Islamabad","Lahore","Pindi"];
    var selected_cities = cities.slice(0,3);
    document.write(selected_cities + "<br />");
}


function Task12(){
    var arr = ["This", "is", "my", "cat"];
    arr.join(" ");
    document.write(arr + "<br />");
}

function Task13(){
    var Fifo = [];
    var abc = 10;
    abc= parseInt(abc);
    //insert
    for(var i=0;i<10;i++){
        Fifo.push(abc);
        abc += 13;
    }

    //access
    for(var j=Fifo.length;j>0;j++){
        document.write(Fifo[j] + "<br>");
    }
}

function Task13(){
    var lifo = [];
    var abc = 10;
    abc= parseInt(abc);
    //insert
    for(var i=0;i<10;i++){
        lifo.push(abc);
        abc += 13;
    }

    //access
    for(var j=0;j<Fifo.length;j++){
        document.write(lifo[j] + "<br>");
    }
}