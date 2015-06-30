var division;
var year;
var department;
function Year(){
var e = document.getElementById("Year");
year = e.options[e.selectedIndex].text;
}
function Department(){
var e = document.getElementById("Department");
department = e.options[e.selectedIndex].text;

if(department=="IT"){
document.getElementById("DivisionOption").innerHTML="A";
document.getElementById("DivisionOption1").style.visibility="none";
$('#DivisionOption1').prop('disabled',true);
}
}
function Division(){
var e = document.getElementById("Division");
division = e.options[e.selectedIndex].text;
}

function csv(){
var myDiv = document.getElementById("box");
	var myApp=document.getElementById("dvCSV");
	  myDiv.style.display = "none";
	  myApp.style.display="block";
      
$(document).ready(function() {
    if (department=="IT")
	{
	$.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/alichherawalla/Attendanceplusplus/master/js/test.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
	 }
	 if(department=="Comp"){
	 $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/alichherawalla/Attendanceplusplus/master/js/test.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
	 }
});
function processData(fileUpload) {
var low;
var high;

var d = new Date();
var n = d.getDay();

if(n<=6)
{
n=n*20-21;

}
if(year=="SE")
{
if(division=="A")
{
if(n==-1){

n=0;
low=0+n;
high=3+n;

}
else if(n==19){

low=0+n;
high=3+n-1;

}

else if(n==39)
{
low=0+n-2;
high=3+n-3;

}
else if(n==59)
{
low=0+n-4;
high=3+n-5;

}


else if(n==79)
{
low=0+n-6;
high=3+n-7;

}

else if(n==99)
{
low=0+n-8;
high=3+n-9;

}
}
else if(division=="B")
{
if(n==-1){n=0;
low=3+n;
high=5+n;
}
else if(n==19){
low=3+n-1;
high=5+n-1;

}


else if(n==39)
{
low=3+n-3;
high=5+n-3;

}


else if(n==59)
{
low=3+n-5;
high=5+n-5;

}

else if(n==79)
{
low=3+n-7;
high=5+n-7;

}
else if(n==99)
{
low=3+n-9;
high=5+n-9;

}
}
else if(division=="C")
{
if(n==-1){n=0;
low=5+n;
high=7+n;
}
else if(n==19){
low=5+n-1;
high=7+n-1;

}

else if(n==39)
{
low=5+n-3;
high=7+n-3;

}
else if(n==59)
{
low=5+n-5;
high=7+n-5;

}
else if(n==79)
{
low=5+n-7;
high=7+n-7;

}

else if(n==99)
{
low=5+n-9;
high=7+n-9;

}
}
}
if(year=="TE")
{
if(division=="A")
{
if(n==-1){n=0;
low=7+n;
high=9+n;
}
else if(n==19){
low=7+n-1;
high=9+n-1;

}


else if(n==39)
{
low=7+n-3;
high=9+n-3;

}
else if(n==59)
{
low=7+n-5;
high=9+n-5;

}
else if(n==79)
{
low=7+n-7;
high=9+n-7;

}

else if(n==99)
{
low=7+n-9;
high=9+n-9;

}

}
else if(division=="B")
{
if(n==-1){n=0;
low=9+n;
high=11+n;
}
else if(n==19){
low=9+n-1;
high=11+n-1;

}

else if(n==39)
{
low=9+n-3;
high=11+n-3;

}
else if(n==59)
{
low=9+n-5;
high=11+n-5;

}
else if(n==79)
{
low=9+n-7;
high=11+n-7;

}

else if(n==99)
{
low=9+n-9;
high=11+n-9;

}
}
else if(division=="C")
{
if(n==-1){n=0;
low=11+n;
high=13+n;
}
else if(n==19){
low=11+n-3;
high=13+n-3;

}

else if(n==39)
{
low=11+n-3;
high=13+n-3;

}
else if(n==59)
{
low=11+n-5;
high=13+n-5;

}
else if(n==79)
{
low=11+n-7;
high=13+n-7;

}

else if(n==99)
{
low=11+n-9;
high=13+n-9;

}
}
}



if(year=="BE")
{
if(division=="A")
{
if(n==-1){n=0;
low=13+n;
high=15+n;
}
else if(n==19){
low=13+n-1;
high=15+n-1;

}

else if(n==39)
{
low=13+n-3;
high=15+n-3;

}
else if(n==59)
{
low=13+n-5;
high=15+n-5;

}
else if(n==79)
{
low=13+n-7;
high=15+n-7;

}

else if(n==99)
{
low=13+n-9;
high=15+n-9;

}
}
else if(division=="B")
{
if(n==-1){n=0;
low=15+n;
high=17+n;
}
else if(n==19){
low=15+n-1;
high=17+n-1;

}


else if(n==39)
{
low=15+n-3;
high=17+n-3;

}
else if(n==59)
{
low=15+n-5;
high=17+n-5;

}
else if(n==79)
{
low=15+n-7;
high=17+n-7;

}

else if(n==99)
{
low=15+n-9;
high=17+n-9;

}
}


else if(division=="C")
{
if(n==-1){n=0;
low=17+n;
high=19+n;
}
else if(n==19){
low=17+n-1;
high=19+n-1;

}

else if(n==39)
{
low=17+n-3;
high=19+n-3;

}
else if(n==59)
{
low=17+n-5;
high=19+n-5;

}
else if(n==79)
{
low=17+n-7;
high=19+n-7;

}

else if(n==99)
{
low=17+n-9;
high=19+n-9;

}
}
}




var allText=fileUpload;
  var allTextLines = allText.split("\n");;
    var headers = allTextLines[5].split(',');
    var lines = [];
    var tarr = [];
    {
	var table = document.createElement("table");
                var rows = allText.split("\n");
				
               for (var i = 4; i < 38; i++){
			    var row = table.insertRow(-1);
                    var cells = rows[i].split(",");
j=0;
while(j<high){
if((j<1) | (j>=low & j<high))      
	   {
	   
                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[j];
        }
		j++;
		}
	    }
		  var dvCSV = document.getElementById("dvCSV");
                dvCSV.innerHTML = "";
					
                dvCSV.appendChild(table);
				
			 
				
    }
	
    
}
}
