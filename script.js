const display = document.getElementById("display");
function addtodisplay(input){
    display.value+=input;
}
function clearq()
{
    display.value= "";

}

function calq(){
    try{
        display.value=eval(display.value);
     }
    catch(error){
        
        clearq();


    }
}
function backspace(input) {
    let currentValue= display.value;
    display.value = currentValue.slice(0, -1);
  }