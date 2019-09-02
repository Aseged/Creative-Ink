
   
   // initialize the rotating banner script 
    $(document).ready(function () {

        $('#banner-picture').innerfade({
            animationtype: 'fade', speed: 400, timeout: 9000, type: 'random', containerheight: '600px'
        });

    });
 
 
    // code for top sticky menu animation
    $(function () {
        var cubuk_seviye = $(document).scrollTop();
        var header_yuksekligi = $('#logoDiv').outerHeight();

        $(window).scroll(function () {
            var kaydirma_cubugu = $(document).scrollTop();

            if (kaydirma_cubugu > header_yuksekligi) { $('#logoDiv').addClass('gizle'); }
            else { $('#logoDiv').removeClass('gizle'); }

            if (kaydirma_cubugu > cubuk_seviye) { $('#logoDiv').removeClass('sabit'); }
            else { $('#logoDiv').addClass('sabit'); }

            cubuk_seviye = $(document).scrollTop();
        });
    }); 

	
	

    //code for scrolling transition for links

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    
    // code for scroll to top
    $(document).ready(function () {

        //Check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToTop').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
		
	 });	
	 
	 $(document).ready(function () {

        //Click event to scroll to top
        $('.scrollToBottom').click(function () {
            $('html, body').animate({scrollTop:$(document).height()}, 1000);
            return false;
        });
		
	 });
	 
	
	// form checking
	 //validating name box
	 
	function nameValidation () {
		var Name = document.getElementById("name").value;
		var nameValue = new RegExp("[a-zA-Z]");
		
		if (Name.match(nameValue)) {
			getSpanName("OK", "errorName", "green");
			document.getElementById("name").style.backgroundColor = "white";
			return true;
		}
		else {
			
			getSpanName("Please enter a valid name", "errorName", "black");
			document.getElementById("name").style.backgroundColor = "pink";
			return false;
		}
	}
	 
	 function getSpanName (message, errorLocation, color) {
		 
		 document.getElementById(errorLocation).innerHTML = message;
		 document.getElementById(errorLocation).style.color = color;
	 }
	 
	 
	//validating email box
	function emailValidation () {
		var Email = document.getElementById("email").value;
		var emailValue = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$");
		
		if (Email.match(emailValue)) {
			getSpanEmail("OK", "errorEmail", "green");
			document.getElementById("email").style.backgroundColor = "white";
			return true;
		}


	}
	 
	function getSpanEmail (message, errorLocation, color) {
		 
		 document.getElementById(errorLocation).innerHTML = message;
		 document.getElementById(errorLocation).style.color = color;
	 }
	 
	 //validating phone number 
	 
	 function phoneValidation () {
	 
		var Phone = document.getElementById("phone").value;
		var phoneValue = new RegExp("[0-9]");
		
		if (Phone.match(phoneValue)) {
			getSpanPhone("OK", "errorPhone", "green");
			document.getElementById("phone").style.backgroundColor = "white";
			return true;
		}
		else {
			
			getSpanPhone("Phone number is not valid", "errorPhone", "black");
			document.getElementById("phone").style.backgroundColor = "pink";
			return false;
		}
	}
	 
	 function getSpanPhone (message2, errorLocation2, color2) {
		 
		 document.getElementById(errorLocation2).innerHTML = message2;
		 document.getElementById(errorLocation2).style.color = color2;
	 }
		
	//validating message 
	 
	 function messageValidation () {
		var Message = document.getElementById("message").value;
		
		if (Message.length == 0) {
			getSpanMessage("Type your message", "errorMessage", "black");
			document.getElementById("message").style.backgroundColor = "pink";
			return false;
		}
		else {
						
			getSpanMessage("OK", "errorMessage", "green");
			document.getElementById("message").style.backgroundColor = "white";
			
			return true;
		}
	}
	 
	 function getSpanMessage (message, errorLocation, color) {
		 
		 document.getElementById(errorLocation).innerHTML = message;
		 document.getElementById(errorLocation).style.color = color;
	 }		

   
	
	
	
	
	//google map
	
	function initMap() {
        var mapDiv = document.getElementById("whereweare");
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 50.793546, lng: -1.076555},
          zoom: 8
        }); 
      }
	  
	