function Task1(){
    var empty_mdarr = [[]];
}

function Task2(){
    var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
}

function Task3(){    
    for(var i=0;i<10;i++){
        document.write(i+1);
        document.write("<br />");
    }
}

function Task5(){
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"] ;    
    for(var item=0;item<fruits.length;item++){
        document.write(fruits[item]);
        document.write("<br />");
    }
}

function Task6(){
    //counting
    document.write("counting : ");
    for(var count=0;count<15;count++){
        document.write(count+1,",");
    }
    document.write("<br />");
    //reverse
    document.write("reverse counting : ");
    for(var counts=15;counts>0;counts--){
        document.write(counts,",");
    }
    document.write("<br />");
    //even
    document.write("even counting : ");
    for(var counts=0;counts<15;counts++){
        if(counts % 2 === 0){
        document.write(counts,",");
        }
    }
    document.write("<br />");
    //odd
    document.write("odd counting : ");
    for(var counts=0;counts<15;counts++){
        if(counts % 2 !== 0){
        document.write(counts,",");
        }
    }
    document.write("<br />");
    //even
    document.write("series counting : ");
    for(var counts=0;counts<15;counts++){
        if(counts % 2 === 0){
        document.write(counts,"K,");
        }        
    }
}
function Task7(){
    var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

    var elem = prompt("write item to search for : ");
    for(var i=0;i<A.length;i++){
        if(A[i]===elem){
            document.write("Your Item found at index : "+i);
        }
        else{
            document.write("Sorry no match");
        }
    }
}

function Task10(){
    for(var five=0;five<101;five++){
        if(five % 5 === 0){
            document.write(five , ",");
        }
    }
}

function Task8(){
    var A = [24, 53, 78, 91, 12];
    var temp;
    temp = A[0];
    for(var a=1;a<A.length;a++){        
        if(A[a]>temp){
            temp = A[a];            
        }        
    }
    document.write(temp);
}

function Task9(){
    var A = [24, 53, 78, 91, 12];
    var temp;
    temp = A[0];
    for(var a=1;a<A.length;a++){        
        if(A[a]<temp){
            temp = A[a];            
        }        
    }
    document.write(temp);
}