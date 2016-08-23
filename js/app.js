$(function(){
      //$("#header").load("views/menu.html");
      // $(".cv").load("views/cv.html"); 
      // $(".about").load("views/about.html"); 
      // $(".contact").load("views/contact.html"); 
      
      $('#link-home').click(function(){ 
          $('.main').fadeOut('slow', function(){
              $('.main').load("views/home.html", function(){
                  $('.main').fadeIn('slow');
              });
          }); 
      });
      $('#link-portfolio').click(function(){ 
          $('.main').fadeOut('slow', function(){
              $('.main').load("views/cv.html", function(){
                  $('.main').fadeIn('slow');
              });
          }); 
      });
      $('#link-about').click(function(){ 
          $('.main').fadeOut('slow', function(){
              $('.main').load("views/about.html", function(){
                  $('.main').fadeIn('slow');
              });
          });  
      });
      $('#link-contact').click(function(){ 
          $('.main').fadeOut('slow', function(){
              $('.main').load("views/contact.html", function(){
                  $('.main').fadeIn('slow');
              });
          });  
      });

      $('.main').fadeOut('slow', function(){
          $('.main').load("views/home.html", function(){
              $('.main').fadeIn('slow');
          });
      }); 

});