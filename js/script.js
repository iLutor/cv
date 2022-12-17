$(document).ready(function(){

    ///////////////////////////
    // //Get the button
    let mybutton = document.getElementById("back-to-top");
    // // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
    }

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
    });

    $("#cmd-print").click(function(){
        window.print();
    });  
 
});