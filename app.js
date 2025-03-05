onload();

function onload(){
    let itemContainer = document.querySelector('.items-container');
    let content = "";

    let bagItems = [];
    displayBagIcon();
    let bagStr = localStorage.getItem('bagItems');
    bagItems = bagStr ? JSON.parse(bagStr) : [];

    function addtoBag(itemid) {
        bagItems.push(itemid);
        displayBagIcon();
        localStorage.setItem('bagItems', JSON.stringify(bagItems));
    }

    items.forEach(item => {
        content += `<div class="item-container">
                <img src="./assets/${item.image}" alt="">
                <div class="rating text-center space-between">${item.rating.start}⭐| ${item.rating.end}</div>
                <div class="company">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price"><span class="curr-price">Rs. ${item.current_price}</span><span class="original-price">Rs. ${item.original_price}</span><span class="discount">(${item.discount}% OFF)</span></div>
                <button class="add-to-bg" onClick={addtoBag(${item.id})}>Add to Bag</button>
            </div>`
    });
    itemContainer.innerHTML = content;

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
}

export default { bagItems, displayBagIcon };