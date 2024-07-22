document.querySelector('.addKey').addEventListener('click', function() {
  const keysContainer = document.querySelector('.keys');
  const keyCount = keysContainer.querySelectorAll('.key').length + 1;

  const newKey = document.createElement('div');
  newKey.classList.add('key');
  newKey.innerHTML = `
    <h3>Key ${keyCount} <i class="fas fa-trash-alt"></i></h3>
    <div class="twoIns">
      <div class="input">
        <span>Key EN Title :</span>
        <input type="text" placeholder="Key EN Title :">
      </div>
      <div class="input">
        <span>Key AR Title :</span>
        <input type="text" placeholder="Key AR Title :">
      </div>
    </div>
    <div class="twoIns">
      <div class="input">
        <span>Key EN Description :</span>
        <textarea placeholder="Key EN Description :"></textarea>
      </div>
      <div class="input">
        <span>Key AR Description :</span>
        <textarea placeholder="Key AR Description :"></textarea>
      </div>
    </div>
  `;

  // Add the event listener for the delete button
  newKey.querySelector('.fa-trash-alt').addEventListener('click', function() {
    newKey.remove();
    updateKeyNumbers();
  });

  keysContainer.appendChild(newKey);
});

// Function to update key numbers
function updateKeyNumbers() {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key, index) => {
    key.querySelector('h3').innerHTML = `Key ${index + 1} <i class="fas fa-trash-alt"></i>`;
    key.querySelector('.fa-trash-alt').addEventListener('click', function() {
      key.remove();
      updateKeyNumbers();
    });
  });
}

// Initial event listener for the existing key
document.querySelector('.key .fa-trash-alt').addEventListener('click', function() {
  this.closest('.key').remove();
  updateKeyNumbers();
});