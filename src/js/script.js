$(document).ready(function(){

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