import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// EMAIL: This section create an alert for Email not required!

const floatPopUp = document.querySelector('#floatMessage');
const email = document.querySelector('#email');

function floatMessage(){
    floatPopUp.innerHTML = `<span class="toast">Your Email is not required! click Continue to login</span>`;
    email.classList.replace('focus:border-teal-500', 'focus:border-red-600');
}
email.addEventListener('keydown', floatMessage); 




// WINDOW: This section loads the pop model on DOMContnentLoad event
document.addEventListener('DOMContentLoaded', ()=>{
    overlay.classList.remove('hidden');
    modelFirst.classList.remove('hidden');
    wrapper.classList.replace('hidden','flex');

    console.log(overlay);
});

// MODEL: This section creates an model pop when the page loods
/*first model pop variables*/
const modelBtnFirst = document.querySelector('#modelBtnFirst');
const modelFirst = document.querySelector('#modelFirst');
const wrapper = document.querySelector('#wrapper');

/*-------------------------------------------------------------------*/ 
/*second model pop variables*/
const modelSecond = document.querySelector('#modelSecond');
const modelBtnSecondBack = document.querySelector('#modelBtnSecondBack');
const modelBtnSecondNext = document.querySelector('#modelBtnSecondNext');

/*-------------------------------------------------------------------*/ 
/*Third model pop variables*/
const modelThird = document.querySelector('#modelThird');
const modelBtnThirdBack = document.querySelector('#modelBtnThirdBack');
const modelBtnThirdDone = document.querySelector('#modelBtnThirdDone');
/*overlay displaay background*/
const overlay = document.querySelector('#overlay');

// Set the first Model to hidden and Remove Hidden from the second element
/* Move to the second Model*/
modelBtnFirst.addEventListener('click', ()=>{
    modelFirst.classList.add('hidden');
    modelSecond.classList.remove('hidden');
});

/* Move back to the first Model*/
modelBtnSecondBack.addEventListener('click', ()=>{
    modelSecond.classList.add('hidden');
    modelFirst.classList.remove('hidden');
});

// Set the Second element to hidden and remove hidden from the third element
/* Move Next to the third Model*/
modelBtnSecondNext.addEventListener('click', ()=>{
    modelSecond.classList.add('hidden');
    modelThird.classList.remove('hidden');
});

/* Move Back to the Second Model*/
modelBtnThirdBack.addEventListener('click', ()=>{
    modelThird.classList.add('hidden');
    modelSecond.classList.remove('hidden');
});

// Set all elements of the Model to Hidden
/* set the Done button to set all element to none*/
modelBtnThirdDone.addEventListener('click', ()=>{
    modelThird.classList.add('hidden');
    overlay.classList.add('hidden');
    wrapper.classList.replace('flex','hidden');

});














// 
// function clearMessage(){
//     floatPopUp.style.display = 'none';
//     email.classList.replace('focus:border-red-600', 'focus:border-teal-500');
// }

// email.addEventListener('keyup', clearMessage); 
// setTimeout(clearMessage, 2000);

// console.log(email);
// setTimeout(floatMessage())