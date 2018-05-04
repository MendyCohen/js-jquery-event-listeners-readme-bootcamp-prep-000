//define functions here

$(document).ready(function(){

// call functions here

});

function getIt() {
<<<<<<< HEAD
  $('p').click('eventname');
=======
  $('p').on('eventname');
>>>>>>> 3043f4e21b4e3a838b12fa9111bc54403cb85a6e
  alert('Hey!');
}
  

function frameIt() {
  $('img').addClass('tasty', 'load');
  
}

function pressIt() {
<<<<<<< HEAD
  $('input').on('keydown', function(e){
    if(e.which == 71){
    alert();
    }
  });
=======
  $('form').on('keydown');
  if($('input').val()=== 'G'){
    return; 
  }
>>>>>>> 3043f4e21b4e3a838b12fa9111bc54403cb85a6e
}

function submitIt() {
  $('form').on('submit');
  alert("Your form is going to be submitted now.");
}