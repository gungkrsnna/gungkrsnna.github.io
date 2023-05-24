// window.onload = function () {
//     var input = document.getElementById('myTextInput');
//     input.focus();
//     input.select();
//   }



const selectButton = document.querySelector('.button-open-text');
const autoText = document.querySelector('.autoText');

  selectButton.addEventListener('click', function(){
        autoText.focus();
        autoText.select();
  });

//click to select and copy to clipboard