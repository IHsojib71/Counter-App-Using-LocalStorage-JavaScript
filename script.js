
let increaseButton = document.querySelector("#increase_btn");
let decreaseButton = document.querySelector("#decrease_btn");
let resetButton = document.querySelector("#reset_btn");
let displayOutput =document.querySelector("#output");
let saveButton =document.querySelector("#save_btn");
let savedOutput =document.querySelector("#saved_values");
let count =0;
let saveArray = [];
//first checking the local storage if there any data exist and show them
let renderSavedData = ()=>{

    let s = JSON.parse(localStorage.getItem("saved_data"));
    if(s!=null){
        //assigning saved values to array
       saveArray=s; 
        for(let i = 0; i < s.length; i++ ){
            savedOutput.textContent += s[i]+" ";
    }
    
 }
 
 }
//increament button increases count = count +1 on every click
increaseButton.addEventListener("click",()=>{
        count+=1;
        displayOutput.textContent = count;

});
//decreament button decreases count = count - 1 on every click
decreaseButton.addEventListener("click",()=>{
    count-=1;
    displayOutput.textContent = count;

});
//reset button resets every data including local storage, array and display elements
resetButton.addEventListener("click",()=>{
    count=0;
    saveArray = [];
    localStorage.clear();
    displayOutput.textContent = count;
    savedOutput.textContent = "Saved Values : ";
    updStorage();
    //its important to update the local storage after reset
});
//save button will push the current count value to the array then the array will be saved to localStorage
saveButton.addEventListener("click",()=>{
    saveArray.push(count);
    updStorage();
    savedOutput.textContent += count+" ";
    count=0;
    displayOutput.textContent = count;
    
    
});
//updating storage
let updStorage =()=>{
    localStorage.setItem("saved_data",JSON.stringify(saveArray));
};


