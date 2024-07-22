let showPopUp = document.querySelectorAll('#show-popUp');
let editPopUp = document.querySelectorAll('#edit-popUp');
let popUp = document.getElementById('popUp');
let popUp2 = document.getElementById('popUp2');
let closeBtn = document.querySelectorAll('#close');

showPopUp.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUp.style.display='flex';
    let input = document.querySelector('#popUp .form input');
    if(input){
      input.focus();
    }
  });
})

closeBtn.forEach((e)=>{
  e.addEventListener('click',()=>{
    if(popUp){
      popUp.style.display='none';
    }
    if(popUp2){
      popUp2.style.display='none';
    }
  });
})

editPopUp.forEach((e)=>{
  e.addEventListener('click',()=>{
    popUp2.style.display='flex';
    let input = document.querySelector('#popUp2 .form input');
    if(input){
      input.focus();
    }
  });
})