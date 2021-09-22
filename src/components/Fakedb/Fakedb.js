function LocalStroge(id) {
    const exist = CheakItem();
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
    Add(shoping_cart)  
}

const Add=(cart)=>localStorage.setItem('shoping_cart', JSON.stringify(cart));
const CheakItem=()=>localStorage.getItem("shoping_cart");

function RemoveDb(id) {
    const exist = CheakItem();
    if(!exist){}
    else{
        const shoping_cart = JSON.parse(exist);
        delete shoping_cart[id];
        Add(shoping_cart);
    } 
}

export {LocalStroge, RemoveDb}