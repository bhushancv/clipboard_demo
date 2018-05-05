$(document).ready(function(){  
  var clipboard = new Clipboard('.clipboard-btn');
  $('.clipboard-btn').click(function(e) {
    e.target.classList.add('copied');
    setTimeout(function() { e.target.classList.remove('copied'); }, 1500);
  });  
});
