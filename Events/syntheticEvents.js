const clickEvent = new Event('click');

const elem = document.getElementsByClassName("div1")[0];

elem.addEventListener("click", ()=>{
    // actual code logic
    console.log("clicked");
});

setTimeout(()=>{
    elem.dispatchEvent(clickEvent);
}, 2000)






























// const messageEvent = new Event('message');

// const elem = document.getElementsByClassName("div1")[0];

// elem.addEventListener("message", ()=>{
//     // actual code logic
//     console.log("message recieved");
// });

// // simulating the work done before dispatching of the event
// setTimeout(()=>{
//     elem.dispatchEvent(messageEvent);
// }, 2000);

