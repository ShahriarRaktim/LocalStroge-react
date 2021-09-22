function LocalStroge(id) {
    const exist = localStorage.getItem("shoping_cart");
    let shoping_cart = {}
    if(!exist){
        shoping_cart[id] = 1;
    }
    else{
        shoping_cart = JSON.parse(exist);
        if(shoping_cart[id]){
            const newCount = shoping_cart[id]+1;
            shoping_cart[id] = newCount;
        }
        else{
            shoping_cart[id] = 1;
        }
    }

    localStorage.setItem('shoping_cart', JSON.stringify(shoping_cart));
    
}
export {LocalStroge}