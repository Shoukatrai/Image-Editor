function setWidth(width){
    // var width = document.getElementById("width").value;
    var width = width.value;
    var image = document.getElementById("realImage");
    image.style.width = `${width}px`;
}

function setHeight(height){
    // var height = document.getElementById("height").value;
    var height = height.value;
    var image = document.getElementById("realImage");
    image.style.height = `${height}px`;
}

function rotate(rotate){
    // var rotate = document.getElementById("height").value;
    var rotate = rotate.value;
    var image = document.getElementById("realImage");
    image.style.transform = `rotate(${rotate}deg)` ;
}