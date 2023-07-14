let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let btn = document.querySelector(".createBtn");
let list = document.querySelector(".list");

btn.addEventListener("click", () => {
  if (!input1.value.trim() || !input2.value.trim()) {
    alert("Заполните поле");
    return;
  }
  list.innerHTML += `
  <div class="main_list">
    <p class='text1' style="font-size: 25px; font-family:Montserrat;">${
      input1.value[0].toUpperCase() + input1.value.slice(1).toLowerCase()
    }</p>
    <div class='toLine'></div>
    <p class='text2' style="font-size: 25px; font-family:Montserrat;">${
      input2.value[0].toUpperCase() + input2.value.slice(1).toLowerCase()
    }</p>
    <div class='toLine'></div>
      <button class='delBtn'>delete</button>
  </div>

  `;
  input1.value = "";
  input2.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delBtn")) {
    e.target.parentNode.remove();
  }
});