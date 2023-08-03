'use srtict'
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

for (let i = 0 ; i < btnsShowModal.length ; i++){
    (btnsShowModal[i].addEventListener('click', function(){
       modal.classList.remove('hidden');
       overlay.classList.remove('hidden');
    }));
}
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}
btnCloseModal.addEventListener('click',closeModal); //when we click on close button in the modal
 overlay.addEventListener('click', closeModal);  //wehn we click outside the modal, it will close the modal;


//add keyborad event
document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
   closeModal();
    }
});