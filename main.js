const display = document.querySelector('h2');
let value =0;
function increment(){
    value +=1;
    display.textContent=value; 
}
function decrease (){
    value -=1;
    display.textContent=value;
}
function reset(){
    value=0;
    display.textContent=value;
}
