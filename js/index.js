function Year(){
var e = document.getElementById("Year");
var Year = e.options[e.selectedIndex].text;
}
function Department(){

var e = document.getElementById("Department");
var e = document.getElementById("Department");
var Department = e.options[e.selectedIndex].text;

if(Department=="IT"){
document.getElementById("DivisionOption").innerHTML="A";
document.getElementById("DivisionOption1").style.visibility="none";
$('#DivisionOption1').prop('disabled',true);

}

}
function Division(){
var e = document.getElementById("Division");
var Division = e.options[e.selectedIndex].text;
}
function csv(){
alert("cd");
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://localhost/www/data.txt",
        dataType: "text",
        success: function(data) {processData(data);alert("sa");}
     });
});
function processData(allText) {
alert("cd");  
  var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
     alert(lines);
}
}