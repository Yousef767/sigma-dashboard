let input5 = document.getElementById('file55');
let picsInner5 = document.getElementById('imgcont55');

input5.addEventListener("input", () => {
  putImages5(input5.files);
});

function putImages5(arr) {
  picsInner5.innerHTML='';
  for (let i = 0; i < arr.length; i++) {
    picsInner5.innerHTML += `<div class="pImage">
    <video src="${URL.createObjectURL(arr[i])}" alt="" controls></video> 
    <i class="fa-light fa-trash-can" data-name="${arr[i].name}"></i>
    </div>
  `;
  }

  let del5 = document.querySelectorAll('#imgcont55 i');
  del5.forEach((e)=>{
    e.addEventListener('click',()=>{
      e.parentElement.remove();
      removeName5(e.dataset.name)
    })
  })
}


function removeName5(name){
  let arr = Array.from(input5.files)
  let filtered = arr.filter((e)=> e.name !== name);
  const dataTransfer = new DataTransfer();
  filtered.forEach(file => {
    dataTransfer.items.add(file);
  });
  input5.files = dataTransfer.files;

}

function removeName25(name){
  let arr = Array.from(input5.files)
  let filtered = arr.filter((e)=> e.name !== name);
  const dataTransfer2 = new DataTransfer();
  filtered.forEach(file => {
    dataTransfer2.items.add(file);
  });
  input5.files = dataTransfer2.files;
}

