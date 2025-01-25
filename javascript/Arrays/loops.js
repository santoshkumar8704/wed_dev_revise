let cost = document.getElementById("cost");
let cart = document.getElementById("cart");
let html = "";
let itemPrice = 0;
const list = [
  { name: "bread", price: 10, need: true },
  { name: "chicken", price: 50, need: true },
  { name: "carrot", price: 8, need: false },
  { name: "juice", price: 30, need: false },
  { name: "eggs", price: 6, need: true },
  { name: "cheese", price: 20, need: false },
];
// for (let i = 0; i < list.length; i++) {
//   item = list[i];
//   if (item.need) {
//     html += `<li>${item.name}</li>`;
//     itemPrice += item.price;
//   }
// }
// list.forEach(({name,price,need}) => {
//   if (need) {
//     html += `<li>${name}</li>`;
//     itemPrice += price;
//   }
// });

for(let {name,price,need} of list){
    if (need) {
        html += `<li>${name}</li>`;
        itemPrice += price;
      }

}
cart.innerHTML = html;
cost.innerHTML = itemPrice;
