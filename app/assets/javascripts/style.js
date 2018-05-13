$(document).ready(function(){  
  var btn = document.getElementById('clipboard-btn');
  var clipboard = new Clipboard(btn);
  
  $('#clipboard-btn').click(function(e) {
    e.target.classList.add('copied');
    setTimeout(function() { e.target.classList.remove('copied'); }, 1500);
  });  

  clipboard.on('success', function(e) {
    console.log(e);
  });

  clipboard.on('error', function(e) {
    console.log(e);
  });
});
