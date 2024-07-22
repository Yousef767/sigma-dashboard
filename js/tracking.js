let showPopUpBtns = document.querySelectorAll('#show-popUp');
let raw = document.querySelector('#dRa');
showPopUpBtns.forEach((e)=>{
  e.addEventListener('click',()=>{
    let list = e.closest('tr').querySelectorAll('td');
    raw.innerHTML = list[4].innerHTML;
  })
})