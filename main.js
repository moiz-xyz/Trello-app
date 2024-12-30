let btn = document.getElementById("btn");
let list = document.getElementById("list");

function creatediv() {
  let listcantiner = document.createElement("div");
  listcantiner.innerHTML = `
  <input id="inp" type="text" placeholder="Enter a list name">
  <button id="btn2"> Add a list </button>
  <i class="fa-solid fa-xmark cross"></i>`;
  list.appendChild(listcantiner);

  let btn2 = listcantiner.querySelector("#btn2");
  let cross = listcantiner.querySelector(".cross"); 

  
  cross.addEventListener("click", function () {
    listcantiner.remove();
  });

  btn2.addEventListener("click", function () {
    let inp = listcantiner.querySelector("#inp").value;
    if (inp === "") {
      alert("Please write some name of the list, it cannot be empty");
    } else {
      let cardcantainer = document.createElement("div");
      cardcantainer.classList.add("card-container"); 
      let h4 = document.createElement("h4");
      h4.textContent = inp;
      cardcantainer.appendChild(h4);
      listcantiner.querySelector("#inp").value = "";

      let btn3 = document.createElement("button");
      btn3.textContent = "Add a card";
      cardcantainer.appendChild(btn3);
      btn3.addEventListener("click", function () {
        btn3.disabled = true
        let nestedListcantiner = document.createElement("div");
        nestedListcantiner.innerHTML = `
        <textarea name="" id="textarea" cols="20" rows="5" placeholder="Enter a title or paste link"></textarea>
        <br>
        <button id ="btn4"> Add a card</button>
        <i class="fa-solid fa-xmark cross"></i>`;
        cardcantainer.appendChild(nestedListcantiner);
        let textarea = nestedListcantiner.querySelector("#textarea")
         let btn4 = nestedListcantiner.querySelector("#btn4");
         btn4.addEventListener("click" ,function(){
          let ul = document.createElement("li");
          ul.textContent =  textarea.value;
          nestedListcantiner.appendChild(ul);
          textarea.value = "";
        })
      
        let nestedCross = nestedListcantiner.querySelector(".cross");
        nestedCross.addEventListener("click", function () {
          nestedListcantiner.remove();
          btn3.disabled = false  
        });
      });

      list.appendChild(cardcantainer);

      cross.addEventListener("click", function () {
        cardcantainer.remove();
        listcantiner.remove(); 
      });
    }
  });
  
}

