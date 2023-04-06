1 

// Testing sets of conditions

// var weight = +prompt("Enter Your Weight");
// var time = +prompt("Enter Your Runtime");


// if (weight >= 300 && time <= 6) {
//      alert("Come to our Gym!");
//      }
//      else {
//      alert("Come to our Restaurants!");
//      }

// if statements nested With Percentage Calulator

var Value1 = +prompt("Enter First Value");
var Value2 = +prompt("Enter Second Value");
var Value3 = Value1+Value2;


if (Value3 == Value1+Value2) {

    var Percentage = (Value3/+prompt("Enter Value"))*100;

    if (Percentage == Percentage) {
        alert(Percentage + "%");
    }
    
} else {
    alert("Number Not Found");
}

// Array

var Pakistan =[" Balochistan ", " Khyber Pakhtunkhwa ", " Punjab ", " Sindh ", "Kashmir"];
Pakistan.pop();
Pakistan.push("Islamabad");

document.write("There Are "+Pakistan.length+" Of District" +Pakistan);

