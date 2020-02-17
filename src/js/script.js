$(document).ready(function(){

    ///////////////////////////
    // //Get the button
    var mybutton = document.getElementById("back-to-top");

    // // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
     if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
    }
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
    });
    ///////////////////////////

    // //Get the button
    // var mybutton = document.getElementById("back-to-top");

    // // When the user scrolls down 20px from the top of the document, show the button
    // window.onscroll = function() {scrollFunction()};

    // function scrollFunction() {
    // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     mybutton.style.display = "block";
    // } else {
    //     mybutton.style.display = "none";
    // }
    // }

    // // When the user clicks on the button, scroll to the top of the document
    // function topFunction() {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    // }
    var specialElementHandler = {
        "#editor":function(element,renderer){
            return true;
        }
    };

    $("#cmd").click(function(){

        var doc = new jsPDF('p', 'pt', 'a4', true);

        doc.fromHTML($('#target').get(0), 15, 15, {
          'width': 800,
          'windowWidth':800
        }, function (dispose) {
        // set a variable
        //var now = Date.now();
        var today = moment().format('DD-MM-YYYY_HH-mm-ss');     
        doc.save('cv-luis-torres-'+today+'.pdf');
        window.open(pdf.output('bloburl', { filename: fileName }), '_blank');
        }); 

    });

    $("#cmd-print").click(function(){
        window.print();
    });

    $("#cmd-screen").click(function(){

        var doc = new jsPDF('p', 'pt', 'a4',true);

        html2canvas(document.body).then(function(canvas) {            
            //window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
            //document.body.appendChild(canvas);
            var ctx = canvas.getContext('2d');
            var imgData = canvas.toDataURL("image/png", 1.0);
            //var width = canvas.width;
            var width = 670;
            //var height = canvas.height;
            var height = 2400;
            doc.addImage(imgData, 'PNG', 20, 20, (width - 10), (height));
            var today = moment().format('DD-MM-YYYY_HH-mm-ss');     
            doc.save('cv-luis-torres-'+today+'.pdf');
            window.open(doc.output('bloburl', { filename: fileName }), '_blank');
        });
    });

 
});