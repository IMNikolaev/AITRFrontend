// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
    clonedBtn.style.backgroundColor = "#a78b71";
    clonedBtn.style.color = "white";
    clonedBtn.classList.add("second-btn");

    document.body.appendChild(clonedBtn);
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  clonedBtn.addEventListener('click',function (){
      clonedBtn.style.backgroundColor="#9c4a1a";
      clonedBtn.style.color = "black";
  });
})

// здесь можете создать EventListener для второй кнопки