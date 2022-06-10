const popup = document.querySelector('.popup')

let popupToggle = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__closed');
let popupName = document.querySelector('.popup__input_type_name'); 
let popupProfession = document.querySelector('.popup__input_type_profession');
let popupTitle = document.querySelector('.profile__name');   
let popupSubtitle = document.querySelector('.profile__text'); 

function openPopup() { 
    popup.classList.add('popup_opened'); 
    popupName.value = popupTitle.textContent; 
    popupProfession.value = popupSubtitle.textContent; 
};
 

function closePopup() { 
    popup.classList.remove('popup_opened'); 
};

let popupForm = document.querySelector('.popup__form'); 

function formSubmitHandler (evt) { 
evt.preventDefault();  
popupTitle.textContent = popupName.value; 
popupSubtitle.textContent = popupProfession.value; 
closePopup();
};

popupForm.addEventListener('submit', formSubmitHandler); 
popupClose.addEventListener('click', closePopup); 
popupToggle.addEventListener('click', openPopup); 