const selectButton = document.querySelector('.button-open-text');
const autoText = document.querySelector('.autoText');

selectButton.addEventListener('click', function(){
      autoText.focus();
      autoText.select();
});