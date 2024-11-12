function heroButton() {
    const feature = document.getElementById("feature");
    feature.scrollIntoView();
  }

  function bannerButton() {
    const smbanner = document.getElementById("sm-banner");
    smbanner.scrollIntoView();
  }

  function upButton() {
    const up = document.getElementById("header");
    up.scrollIntoView();
  }

//   CART

  document.addEventListener("DOMContentLoaded", () => {
    // Ссылки на элементы и переменные
    const modal = document.getElementById("modalCart");
    const modalOverlay = document.getElementById("modalOverlay");
    const cartLink = document.getElementById("cartLink");
    const closeBtn = document.getElementsByClassName("modal-cart-close")[0];
    const cartItems = [];
    const cartDisplay = document.querySelector(".modal-cart-content p");

    // Открытие модального окна

    cartLink.onclick = function () {
        modal.style.display = "block";               // Показывает модальное окно
        modalOverlay.style.display = "block";
        setTimeout(() => {
          modal.classList.add("show");               // Плавное отображение (через CSS анимацию)
          modalOverlay.classList.add("show");
        }, 10);
        updateCartDisplay();                         // Обновляет содержимое корзины
    };
    
    // Закрытие модального окна

    closeBtn.onclick = function () {
        modal.classList.remove("show");              // Начинает анимацию закрытия
        modalOverlay.classList.remove("show");
        setTimeout(() => {
          modal.style.display = "none";              // Убирает окно после завершения анимации
          modalOverlay.style.display = "none";
        }, 300);
    };

    // Закрытие при клике вне окна

    window.onclick = function (event) {
        if (event.target == modalOverlay) {                 // Проверяет, если клик был вне содержимого окна
          modal.classList.remove("show");
          modalOverlay.classList.remove("show");
          setTimeout(() => {
            modal.style.display = "none";
            modalOverlay.style.display = "none";
          }, 300);
        }
    };

    // Добавление товара в корзину

    const addToCartButtons = document.querySelectorAll(".product--buy");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const product = event.target.closest(".pro");
        const productName = product.querySelector(".product--name").textContent;
        const productPrice = product.querySelector(".product--price").textContent;
  
        cartItems.push({
          name: productName,
          price: productPrice,
        });
  
        displayConfirmation(productName);
        updateCartDisplay();
      });
    });


    // Функция обновления содержимого корзины
    
    function updateCartDisplay() {
        if (cartItems.length === 0) {
          cartDisplay.textContent = "Your cart is empty.";    // Если товаров нет
        } else {
          cartDisplay.innerHTML =                           // Если товары есть, показывает список
            "<ul>" +
            cartItems
              .map((item) => `<li>${item.name} - ${item.price}</li>`)
              .join("") +
            "</ul>";
        }
      }

    //   Функция подтверждения добавления товара

      function displayConfirmation(productName) {
        const confirmation = document.createElement("div");
        confirmation.className = "confirmation-message";
        confirmation.textContent = `${productName} has been added to the cart.`;
        document.body.appendChild(confirmation);
    
        setTimeout(() => {
          confirmation.remove();                           // Удаляет сообщение через 3 секунды
        }, 3000);
      }
    });




 