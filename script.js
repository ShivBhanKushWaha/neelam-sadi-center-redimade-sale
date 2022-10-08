let product = {
    data:[
        {
            productName:"Rgular plane top Green color",
            category:"Topwear",
            price:"349",
            discount:"15%",
            image:"green-top-wear.png"
        },
        {
            productName:"Rgular jeans",
            category:"Jeans",
            price:"749",
            discount:"15%",
            image:"jeans.png"
        },
        {
            productName:"Regular white top ",
            category:"Topwear",
            price:"679",
            discount:"18%",
            image:"white-top.png"
        },
        {
            productName:"Regular red top wear",
            category:"Topwear",
            price:"449",
            discount:"13%",
            image:"red-top-wear.png"
        },
        {
            productName:"Regular top red color ",
            category:"Topwear",
            price:"249",
            discount:"05%",
            image:"Red-top.png"
        },
        {
            productName:"Plazo bottom wear for girls",
            category:"Bottomwear",
            price:"579",
            discount:"16%",
            image:"white-bottom-wear.png"
        },
        {
            productName:"Regular white cotton plazo",
            category:"Bottomwear",
            price:"879",
            discount:"45%",
            image:"white-bottom.png"
        },
        {
            productName:"Regular bottom wear paint for girls",
            category:"Bottomwear",
            price:"479",
            discount:"18%",
            image:"bottom-wear.png"
        },
        {
            productName:"Leather brown jacket",
            category:"Jacket",
            price:"839",
            discount:"11%",
            image:"leather-jacket.png"
        },
        {
            productName:"Leather light Black jacket",
            category:"Jacket",
            price:"1139",
            discount:"25%",
            image:"light-black-jacket.png"
        },
        {
            productName:"Leather red jacket",
            category:"Jacket",
            price:"1239",
            discount:"15%",
            image:"red-jacket.png"
        },
        {
            productName:"Regular Strech Lower",
            category:"Lower",
            price:"829",
            discount:"16%",
            image:"all-lower.png"
        },
        {
            productName:"Regular black Strech Lower",
            category:"Lower",
            price:"129",
            discount:"25%",
            image:"black-lower.png"
        },
        {
            productName:"White Strech Lower",
            category:"Lower",
            price:"129",
            discount:"35%",
            image:"white-cooton-lower.png"
        },
        {
            productName:"White and black lynon Strech Lower",
            category:"Lower",
            price:"229",
            discount:"26%",
            image:"white-lower.png"
        }
    ],
};

for(let i of product.data){
    //create card
    let card = document.createElement("div");

    //card should have category and should stay hidden initially
    card.classList.add("card", i.category,"hide");

    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container
    let container = document.createElement("div");
    container.classList.add("container");

    // product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    // price
    let price = document.createElement("h6");
    price.innerText = "₹" + i.price;
    container.appendChild(price);


    // discount
    let discount = document.createElement("h5");
    discount.innerText ="Discount " + i.discount;
    container.appendChild(discount);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

// parameter passed from button (parameter same as category)
function filterProduct(value){
    // button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        // check if values equal  innerText
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    // select all ards
    let elements = document.querySelectorAll(".card");

    //loop throught all cards
    elements.forEach((element) =>   {
        //display all card on all button
        if(value == "All"){
            element.classList.remove("hide");
        }
        else{
            // check if element contains category class
            if(element.classList.contains(value)){
                //display element based on category
                element.classList.remove("hide");
            }
            else{
                // hide other elements
                element.classList.add("hide");
            }
        }
    });

}

//search button click
document.getElementById("search").addEventListener
("click", () =>{
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    
    // lop throught all elements
    elements.forEach((element,index) =>{
        // check if text include the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
            // display matching card
            cards[index].classList.remove("hide");
        } 
        else{
            // hide others
            cards[index].classList.add("hide");
        }
    })
});

// initially display all category
window.onload = () =>{
    filterProduct("all");
}