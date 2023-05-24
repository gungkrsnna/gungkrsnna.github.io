// window.onload = function () {
//     var input = document.getElementById('myTextInput');
//     input.focus();
//     input.select();
//   }



const selectButtonMore = document.querySelector('.bg-form');
const autoTextMore = document.querySelector('.autoText2');

  selectButtonMore.addEventListener('click', function(){
        autoTextMore.focus();
        autoTextMore.select();
  });

//click to select and copy to clipboard