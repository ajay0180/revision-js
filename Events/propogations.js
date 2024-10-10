const div1 = document.getElementsByClassName("div1")[0];
const div2 = document.getElementsByClassName("div2")[0];


div1.addEventListener("click", ()=>{
    console.log("parent");
}, true)
div2.addEventListener("click", ()=>{
    console.log("child");
})