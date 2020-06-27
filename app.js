function clearscr(){

   document.getElementById('result').value="";

}

function showingValue(num){

var numbers= document.getElementById('result');
numbers.value += num;

}

function output(){

 var result=document.getElementById('result');
 result.value=eval(result.value);


}