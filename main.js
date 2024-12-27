let btn = document.getElementById("btn");
let list = document.getElementById("list");

function creatediv() {
  let listcantiner = document.createElement("div")
  listcantiner.innerHTML = ` 
  <input id="inp" type="text" placeholder="Enter a list name">
  <button id="btn2"> Add a list </button>
  <i class="fa-solid fa-xmark"></i>`
  list.appendChild(listcantiner);
  let btn2 = document.getElementById("btn2");

  //  list ka click hona ka bd ka function.....
  btn2.addEventListener("click" , function () {
    let inp = document.getElementById("inp").value;
    // condtions
    if ( inp === ""){
      alert("Please write some nmae of list it cannot be empty")
    } else{
      let cardcantainer = document.createElement("div");
      let h4 = document.createElement("h4");
      h4.textContent = inp
      cardcantainer.appendChild(h4); 
      let btn3 = document.createElement("button");
      btn3.addEventListener ("click", function () {
         
      })
      btn3.textContent = "Add a card";
      cardcantainer.appendChild(btn3);

      //  yeh lists add karega
      list.appendChild(cardcantainer);
    }
  
})


}