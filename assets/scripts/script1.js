//learning to populate image following click on button 


var showImageButton = document.querySelector("#showimage");
var gallerySection = document.getElementById("gallery");


function image(event){
   event.stopPropagation();
   /// attempted to delay the appearance of image: var timer = setInterval("", 500);
    var gallery1 = document.createElement("img");
    gallery1.setAttribute("src", "./assets/images/Tulips.jpg");
    gallerySection.appendChild(gallery1);
    gallerySection.setAttribute("style", "background: pink");
}


showImageButton.addEventListener ("click", image);