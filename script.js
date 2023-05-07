let products = {
    data:[
        {
            productName: "Gorillaz Variant Oversized Fit T-shirt",
            category: "Topwear",
            price: "899",
            image:"images/oversized-black-fit-t-shirt.png",
        },
        {
            productName: "Oversized Printed T-shirt",
            category: "Topwear",
            price: "899",
            image:"images/oversized-printed-t-shirt.png",
        },
        {
            productName: "Notorious BIG Variant Oversized Fit T-shirt",
            category: "Topwear",
            price: "899",
            image:"images/oversized-notg-fit-t-shirt.png",
        },
        {
            productName: "Scarface Variant Oversized Fit T-shirt",
            category: "Topwear",
            price: "899",
            image:"images/oversized-scarface-t-shirt.png",
        },


        {
            productName: "Beige / Cream Regular Fit Sweatshort",
            category: "Bottomwear",
            price: "499",
            image:"images/beige-cream-regular-fit-sweatshort.png",
        },
        {
            productName: "Black / Grey Regular Fit Sweatshort",
            category: "Bottomwear",
            price: "499",
            image:"images/black-grey-regular-fit-sweatshort.png",
        },
        {
            productName: "Purple / Greyblue Regular Fit Sweatshort",
            category: "Bottomwear",
            price: "499",
            image:"images/purple-greyblue-regular-fit-sweatshort.png",
        },
        {
            productName: "Dark Blue / Light Blue Regular Fit Sweatshort",
            category: "Bottomwear",
            price: "499",
            image:"images/dark-blue-regular-fit-sweatshort.png",
        },


        {
            productName: "Rick and Morty Regular Fit Hoodie",
            category: "Jacket/Hoodie",
            price: "1099",
            image:"images/ricknmorty-regularfit-hoodie.png",
        },
        {
            productName: "White Hooded Jacket",
            category: "Jacket/Hoodie",
            price: "1099",
            image:"images/white-hooded-jacket.png",
        },
        {
            productName: "Spongebob Regular Fit Hoodie",
            category: "Jacket/Hoodie",
            price: "1099",
            image:"images/spongebob-regularfit-hoodie.png",
        },
        {
            productName: "Black Hooded Jacket",
            category: "Jacket/Hoodie",
            price: "1099",
            image:"images/black-hooded-jacket.png",
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