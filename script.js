/**
Existem diferentes formas de executar o click do botão:
  
1)
Poderia colocar na div#switch o evento onclick chamando o método toggleMode, dessa forma:
    <div id="switch" onclick="toggleMode()">
  
2) 
Buscar a div#switch no documento e adicionar o evento de click e a chamada do método, dessa forma:
    const switchBtn = document.querySelector("#switch");

    switchBtn.addEventListener("click", toggleMode);

    function toggleMode() {
        ...
    }

3)
A seguinte forma:
*/

const switchBtn = document.querySelector("#switch");

switchBtn.addEventListener("click", () => {
    const html = document.documentElement;
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png");
    } else {
        img.setAttribute("src", "./assets/avatar.png");
    }
});