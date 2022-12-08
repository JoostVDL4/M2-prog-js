let button = document.getElementById("myButton")
button.addEventListener("click", ()=>{
    console.log("hello world");


    const para = document.createElement("p");
    const node = document.createTextNode("This is new.");
    para.appendChild(node);

    const element = document.getElementById("div1");
    element.appendChild(para);
})