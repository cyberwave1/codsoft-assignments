const display=document.getElementById("display")
function appendToDisplay(input){
    if (display.value =="Error"||display.innerText =="error"){
clearDisplay()}
 else{
        display.value+=input;
    }}
function back(){
    text=display.value
    text.split(" ")
    display.value=Array.prototype(text)
}
function cos(){
    display.value=math.cos(display.value)
}
function clearDisplay(){
display.value=""
}
function calculate(){
    try{
        display.value=eval(display.value)
    }
catch(error){
display.value="Error"
}
}

const mo=["SCI","GRAD"]
const modes=document.getElementById("modes")
function changeMode(){
for (i=0;i<5;){
modes.innerText=i
}

    }
