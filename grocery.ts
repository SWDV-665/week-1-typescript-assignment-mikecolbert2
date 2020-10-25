class Grocery{
    purchased:boolean;
    qty: number;
    item: string;
    cost: number;
    
    constructor(qty: number, item: string){
        this.purchased = false;
        this.qty = qty;
        this.item = item;
        this.cost = 0;

        console.log(this.item + ' added to my list');
    }
    
}

let groceryArray = [];

groceryArray.push(new Grocery(1, 'milk'));
groceryArray.push(new Grocery(2, 'bread'));
groceryArray.push(new Grocery(1, 'eggs'));

for(var i = 0; i < groceryArray.length; i++){
    document.getElementById('grocery_list').innerHTML += "<p>" 
        + groceryArray[i].purchased + " &emsp; " 
        + groceryArray[i].qty + " &emsp; " 
        + groceryArray[i].item + " &emsp; "
        + groceryArray[i].cost + "</p>";
}