// Select the node that will be observed for mutations
const targetNode = document.getElementsByClassName("div1")[0];

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    console.log(mutationList);

    for (const mutation of mutationList) {
        if(mutation.type === "childList") {
            console.log("A child node has been added or removed.");
        } 
        else if(mutation.type === "attributes") {
            console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
    }
};
// after three seconds a new elem is added to the observed part of dom
setTimeout(()=>{
    const elem = document.createElement("div");
    targetNode.appendChild(elem);
},3000);

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();