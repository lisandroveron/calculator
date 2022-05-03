const keyboard = document.getElementById("keyboard");
let writeLine = document.getElementById("writeLine");
writeLine.value = "";

// Listener to the keyboard, for set numbers in the screen
keyboard.addEventListener("click", (e)=>{
	if(e.target.value != undefined && writeLine.textLength <= 21){
		writeLine.value += e.target.value;
	} else{};
});