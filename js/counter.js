//Добавляем прослушку на всем окне
window.addEventListener("click", function (event) {
 
	//Обьявляем переменную для счетчика
	let counter;
  
	//Проверяем клик строго по кнопкам плюс/минус
	if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {
		
		//Находим обертку счетчика
		const counterWapper = event.target.closest(".counter-wrapper");

		//Находим див с числом
		counter = counterWapper.querySelector("[data-counter]");
	}

  //Проверяем является ли элемент кнопкой плюс
	if (event.target.dataset.action === "plus") {
		
		//Отслеживаем слик на кнопку btnPlus
		counter.innerText = ++counter.innerText;
	}
	

	//Проверяем является ли элемент кнопкой минус
	if (event.target.dataset.action === "minus") {
		
		
		
		
			//Проверяем чтобы счетчик был больше 1
		if (parseInt(counter.innerText) > 1) {
			
			//изменяем текст в счетчике уменьшая его на 1
			counter.innerText = --counter.innerText;
			
			//Проверка на товар который находится в корзине
		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			
			//Удаляем товар из корзины
			event.target.closest('.cart-item').remove();

			 //Отображение статуса корзины Пустая / Полная
			 toggleCartStatus();

			 //Пересчет общей стоимости 
			 calcCartPriceAndDelivery ();
		}
		
		
		
	}
	
	// Проверяем на клик + или - внутри корзины
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		
		//Пересчет общей стоимости 
        calcCartPriceAndDelivery ();
	}
});


