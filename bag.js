let bagStr = localStorage.getItem('bagItems');
let bagItems = bagStr ? JSON.parse(bagStr) : [];
let quantity=new Array(9);
quantity.fill(0);
let full_display=document.querySelector('.bag-items-container');
let bag=document.querySelector('.display-items');
let display="";
onLoad();

function onLoad(){
    displayBagIcon(); 
    getItems();  
    console.log(quantity);
    items.forEach(function displayBagItems(item){
      if(quantity[item.id]>0)
      display+=`<img src="./assets/${item.image}" alt="" style="width:300px height=250px"></div>
      <div style="padding: 5px 12px 0;">
          <div class="company">${item.company}</div>
          <div class="item-name">${item.item_name}</div>
          <div>
         <span class="curr-price">Rs. ${item.current_price}</span>
         <span class="original-price">Rs. ${item.original_price}</span>
         <span class="discount">(${item.disend}% OFF)</span>
         </div>
      </div>
      <div style="color:rgb(41,41,41); font-weight: 600;">X</div><br>`
      full_display.innerHTML+=display;
    }
  )
}

function displayBagIcon() {
  let itemsinBag = document.querySelector('.item-order');
  if (bagItems.length != 0) {
      itemsinBag.style.opacity = 1;
  }
  else {
      itemsinBag.style.opacity = 0;
  }
  itemsinBag.textContent = bagItems.length;
}
function getItems(){
  console.log(bagItems);
  for(let i=0;i<bagItems.length;i++){
    console.log(bagItems[i]);
    quantity[bagItems[i]]++;
  }
}