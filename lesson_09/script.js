 let addTextButton = document.getElementById("addTextButton");
    addTextButton.addEventListener("click", function() {
        let myText = document.createElement("h2");
        myText.id = "text";
        myText.textContent = "Это новый текст в теге h2";
        document.body.appendChild(myText);
        let changeStyleButton = document.getElementById("changeStyleButton");
        changeStyleButton.addEventListener("click",function (){
                myText.style.color = "red";
        });
        let removeTextButton = document.getElementById("removeTextButton");
        removeTextButton.addEventListener("click", function (){
            myText.remove();
        });
    });
/*    // Кнопка для изменения цвета
    let changeStyleButton = document.getElementById("changeStyleButton");
    changeStyleButton.addEventListener("click", function(){
        myText.style.color = "red";
    });*/
    // Кнопка для удаления текста
/*    let removeTextButton = document.getElementById("removeTextButton");
        removeTextButton.addEventListener("click", function (){
            myText.textContent="";
        });*/

