function calcCartPriceAndDelivery (){
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDeliveryCost = document.querySelector('[data-cart-delivery]');
    const cartDeliveryCostSmall = document.querySelector('.small');

    let priceTotal = 0;   

    //Обходим все блоки с ценами в корзине
    cartItems.forEach(function (item) {

        //Находим колличество товара
        const amountEL = item.querySelector('[data-counter]');
        const priceEL = item.querySelector('.price__currency');
        priceTotal += parseInt(amountEL.innerText) * parseInt(priceEL.innerText);

    });
   
    totalPriceEl.innerText = priceTotal;

    //Скрываем или показываем блок с стоимостью доставки
    if (priceTotal > 0) {
        cartDeliveryCost.classList.remove('none');
    } else {
        cartDeliveryCost.classList.add('none');
    }

    //Показываем стоимость доставки
    if (priceTotal >= 600 ) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }
}

