let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");

let boxs = document.querySelector(".boxs")




  boxs.addEventListener("click" , (e)=>{
    if(!e.target.hasAttribute("data-box")){
        return
    }

    let newBox = e.target.cloneNode(true);
    e.target.style.pointerEvents = "none";
    e.target.innerHTML = "clicked";
    boxs.appendChild(newBox);
  })

 


