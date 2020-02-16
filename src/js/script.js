$(document).ready(function(){

    var specialElementHandler = {
        "#editor":function(element,renderer){
            return true;
        }
    };

    $("#cmd").click(function(){

        var doc = new jsPDF('p', 'pt', 'a4', true);

        doc.fromHTML($('#target').get(0), 15, 15, {
          'width': 500
        }, function (dispose) {
        doc.save('cv-luis-torres.pdf');
        }); 

    });
});