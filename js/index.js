/*
//get keyname by index
var keyName = window.localStorage.key(0);

//put a value
window.localStorage.setItem("key", "value");

//get a value by key
var value = window.localStorage.getItem("key");

//remove a value by key
window.localStorage.removeItem("key");

//flush local storage/all key value pairs
window.localStorage.clear();
*/








var n;
var division;
var year;
var department;
var flag=0;
var flag1=0;


function initialiseInfo(){

year = window.localStorage.getItem("year");
division = window.localStorage.getItem("division");
department = window.localStorage.getItem("department");
var d = new Date();
n = d.getDay();
flag1=1;
csvDateSelector(n);

}


function Year(){

var e = document.getElementById("Year");
year = e.options[e.selectedIndex].text;
window.localStorage.setItem("year",year);

}
function Department(){
var e = document.getElementById("Department");
department = e.options[e.selectedIndex].text;

if(department=="IT"){
document.getElementById("DivisionOption").innerHTML="A";
document.getElementById("DivisionOption1").style.visibility="none";
$('#DivisionOption1').prop('disabled',true);
}
window.localStorage.setItem("department", department);

}
function Division(){
var e = document.getElementById("Division");
division = e.options[e.selectedIndex].text;
window.localStorage.setItem("division", division);
}
var day;
function csvDateSelector(day1){
flag=1;
day=parseInt(day1);
var d = new Date();
n = d.getDay();
if (day==n){
csv();
}
else{
n=day;
csv();
}
}

function csv(){
	var myApp=document.getElementById("dvCSV");
	var box=document.getElementById("box");
	var DayMenu=document.getElementById("DayMenu");
	  myApp.style.display="block";

	  DayMenu.style.display="block";
if(flag1==0){	
	box.style.display="none";
}
	$(document).ready(function() {

    if (department=="IT")
	{
	
	$.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/alichherawalla/Attendanceplusplus/master/IT.csv",
        dataType: "text",
        success: function(data) {processDataIT(data);}
     });
	 }
	 if(department=="Comp"){
	 
	 $.ajax({
        type: "GET",
        url: "https://raw.githubusercontent.com/alichherawalla/Attendanceplusplus/master/js/test.csv",
        dataType: "text",
        success: function(data) {processDataComp(data);}
     });
	 }
});
function processDataComp(fileUpload) {

var low;
var high;
if(flag==1){
n=day;
}
else{
var d = new Date();
n = d.getDay();
}

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


function processDataIT(fileUpload) {
var low;
var high;
if(flag==1){
n=day;
}
else{
var d = new Date();
n = d.getDay();
}
if(n<=6)
{

n=n*10-11;

}
if(year=="SE")
{
{
if(n==-1){

n=0;
low=0+n;
high=3+n;

}
else if(n==9){

low=0+n-2;
high=3+n-3;

}

else if(n==19)
{
low=0+n-6;
high=3+n-7;

}
else if(n==29)
{
low=0+n-10;
high=3+n-11;

}


else if(n==39)
{
low=0+n-14;
high=3+n-15;

}

else if(n==49)
{
low=0+n-18;
high=3+n-19;

}
}

}
if(year=="TE")
{
{
if(n==-1){n=0;
low=3+n;
high=5+n;
}
else if(n==9){
low=3+n-3;
high=5+n-3;

}


else if(n==19)
{
low=3+n-7;
high=5+n-7;

}
else if(n==29)
{
low=3+n-11;
high=5+n-11;

}
else if(n==39)
{
low=3+n-15;
high=5+n-15;

}

else if(n==49)
{
low=3+n-19;
high=5+n-19;

}

}
}

if(year=="BE")
{
{
if(n==-1){n=0;
low=5+n;
high=7+n;
}

else if(n==9){
low=5+n-3;
high=7+n-3;

}
else if(n==19){
low=5+n-7;
high=7+n-7;

}

else if(n==29)
{
low=5+n-11;
high=7+n-11;

}
else if(n==39)
{
low=5+n-15;
high=7+n-15;

}
else if(n==49)
{
low=5+n-19;
high=7+n-19;

}
}
}





var allText=fileUpload;
  var allTextLines = allText.split("\n");;
    var headers = allTextLines[5].split(',');
    var lines = [];
    var tarr = [];
    
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
	
    

