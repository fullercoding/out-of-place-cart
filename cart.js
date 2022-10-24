var action = "add to cart";
var shoppingcart = [];
var prod = {id: 1};

switch(action) {
    case "add to cart": 
        shoppingcart.push(prod);
        break;

    case "remove everything from cart":
        shoppingcart = [];
        break;
    
    case "remove from cart":
        var index = shoppingcart.indexOf(prod);
        if (index > -1) {
            shoppingcart.splice(index, 1);
        }
        break;
    case "empty cart":
        shoppingcart = [];
        break;
}