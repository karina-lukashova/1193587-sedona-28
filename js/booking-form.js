var bookingButton = document.querySelector(".head-booking-button");
var bookingFormSection = document.querySelector(".booking-form-section");
var bookingForm = document.querySelector(".booking-form");
var arriveInput = document.querySelector(".arrive-date-input");
var departInput = document.querySelector(".depart-date-input");
var adultsInput = document.querySelector(".adults-number-input");
var childrenInput = document.querySelector(".children-number-input");
var lessAdults = document.querySelector(".count-less-adults");
var moreAdults = document.querySelector(".count-more-adults");
var lessChildren = document.querySelector(".count-less-children");
var moreChildren = document.querySelector(".count-more-children");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

// Проверяем, есть ли у браузера localStorage
try {
  storageAdults = localStorage.getItem("adultsNumber");
  storageChildren = localStorage.getItem("childrenNumber");
} catch (err) {
  isStorageSupport = false;
}

// Если localStorage есть, сразу берем из него значения количества взрослых и детей
if (storageAdults && storageChildren) {
  adultsInput.value = storageAdults;
  childrenInput.value = storageChildren;
}

// Закрывает и открываем секцию с формой поиска
bookingButton.addEventListener("click", function () {
  bookingFormSection.classList.toggle("booking-form-closed");
})

// Добавляют и уменьшают количество взрослых и детей при клике на плюс/минус
lessAdults.addEventListener("click", function () {
  adultsInput.value--;
})

moreAdults.addEventListener("click", function () {
  adultsInput.value++;
})

lessChildren.addEventListener("click", function () {
  childrenInput.value--;
})

moreChildren.addEventListener("click", function () {
  childrenInput.value++;
})

// Проверяем форму на обязательные поля. Сейчас не работает, т.к. срабатывает required у инпутов :(
bookingForm.addEventListener("submit", function (evt) {
  if (!arriveInput.value || !departInput.value || !adultsInput.value || !childrenInput.value) {
    evt.preventDefault();
    bookingFormSection.classList.remove("booking-form-error");
    bookingFormSection.offsetWidth = bookingFormSection.offsetWidth;
    bookingFormSection.classList.add("booking-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adultsNumber", adultsInput.value);
      localStorage.setItem("childrenNumber", childrenInput.value);
    }
  }
})