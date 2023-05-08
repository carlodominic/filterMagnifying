function magnifyProductImage(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    var container = img.parentElement;
  
    glass = document.createElement("DIV");
    glass.setAttribute("class", "product-magnifier-glass");
  
    container.insertBefore(glass, img);
  
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

  
    container.addEventListener("mousemove", moveMagnifier);
    container.addEventListener("touchmove", moveMagnifier);
    container.addEventListener("wheel", zoomMagnifier);
  
    function moveMagnifier(e) {
        var pos, x, y;
        e.preventDefault();
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
        if (x < w / zoom) {x = w / zoom;}
        if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
        if (y < h / zoom) {y = h / zoom;}
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        glass.style.display = "block";
    }
  
    container.addEventListener("mouseleave", function() {
        glass.style.display = "none";
    });
  
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
  
    function zoomMagnifier(e) {
        e.preventDefault();
        var oldZoom = zoom; // store old zoom level
        zoom += e.deltaY * -0.01;
        if (zoom < 1) {zoom = 1;}
        if (zoom > 10) {zoom = 10;}
        glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
        glass.style.transition = "background-size 0.2s ease-out"; // add transition effect
        setTimeout(function() { // remove transition effect after 0.2 seconds
            glass.style.transition = "";
        }, 200);
    }
}

let products = {
    data:[
        {
            productName: "Gorillaz Variant Oversized Fit T-shirt",
            category: "Topwear",
            price: "899",
            image:"images/oversized-black-fit-t-shirt.png",
            id: "product-1"
        },
        {
            productName: "Oversized Printed T-shirt",
            category: "Topwear",
            price: "899",
            image:"images/oversized-printed-t-shirt.png",
            id: "product-2"
        },
        {
            productName: "Notorious BIG Variant Oversized Fit T-shirt",
            category: "Topwear",
            price: "899",
            image:"images/oversized-notg-fit-t-shirt.png",
            id: "product-3"
        },
        {
            productName: "Scarface Variant Oversized Fit T-shirt",
            category: "Topwear",
            price: "899",
            image:"images/oversized-scarface-t-shirt.png",
            id: "product-4"
        },


        {
            productName: "Beige / Cream Regular Fit Sweatshort",
            category: "Bottomwear",
            price: "499",
            image:"images/beige-cream-regular-fit-sweatshort.png",
            id: "product-5"
        },
        {
            productName: "Black / Grey Regular Fit Sweatshort",
            category: "Bottomwear",
            price: "499",
            image:"images/black-grey-regular-fit-sweatshort.png",
            id: "product-6"
        },
        {
            productName: "Purple / Greyblue Regular Fit Sweatshort",
            category: "Bottomwear",
            price: "499",
            image:"images/purple-greyblue-regular-fit-sweatshort.png",
            id: "product-7"
        },
        {
            productName: "Dark Blue / Light Blue Regular Fit Sweatshort",
            category: "Bottomwear",
            price: "499",
            image:"images/dark-blue-regular-fit-sweatshort.png",
            id: "product-8"
        },


        {
            productName: "Rick and Morty Regular Fit Hoodie",
            category: "Jacket/Hoodie",
            price: "1099",
            image:"images/ricknmorty-regularfit-hoodie.png",
            id: "product-9"
        },
        {
            productName: "White Hooded Jacket",
            category: "Jacket/Hoodie",
            price: "1099",
            image:"images/white-hooded-jacket.png",
            id: "product-10"
        },
        {
            productName: "Spongebob Regular Fit Hoodie",
            category: "Jacket/Hoodie",
            price: "1099",
            image:"images/spongebob-regularfit-hoodie.png",
            id: "product-11"
        },
        {
            productName: "Black Hooded Jacket",
            category: "Jacket/Hoodie",
            price: "1099",
            image:"images/black-hooded-jacket.png",
            id: "product-12"
        },
    ],
};

for (let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card", i.category , "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("id", i.id);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "₱" + i.price;
    container.appendChild(price);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);

    magnifyProductImage(i.id, 4);
}


function filterProduct(value){
    let buttons  = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if  (value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach(element => {
        if (value == "all"){
            element.classList.remove("hide");
        }
        else {
            if (element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    
    elements.forEach((element, index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
})


window.onload = () => {
    filterProduct("all");
};
