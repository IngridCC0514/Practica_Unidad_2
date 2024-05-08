
function captureKeys(event){

    var pressedKeysInput = document.getElementById("pressedKeys");
    var muestra = document.getElementById("lblPressedKeys");

    var pressedKeys = [];
    var key = event.key;


    muestra.innerHTML += key;
    pressedKeys.push(key);

    pressedKeysInput.value = pressedKeys;
}

document.getElementById("keyForm").addEventListener("submit", function (event){
    event.preventDefault();


    
    var pressedKeysInput = document.getElementById("pressendKeys");
    alert("Teclas presionadas: " + pressedKeysInput.value);
});
