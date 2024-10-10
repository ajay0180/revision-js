function handler(){
    console.log("btn clicked");
}
function attachEventListener(){
    document.getElementById("clickMe").addEventListener("click", handler, false);
}
function removeEventListener(){
    document.getElementById("clickMe").removeEventListener("click", handler, false);
}

attachEventListener();

// removes the event listener after 5 seconds
setTimeout(removeEventListener, 5000);