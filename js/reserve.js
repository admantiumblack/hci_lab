var name;
var phonenum;
var numofperson;
var reservationTime;
var time;
var couponcode;

function validate1() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

function getDOM(){
    name = document.getElementById("name").value;
    phonenum = document.getElementById("phonenumber").value;
    numofperson = document.getElementById("numberofperson").value;
    reservationTime = document.getElementById("dob").value;
    time = document.getElementById("time").value;
    couponcode = document.getElementById("couponcode").value;
}

let date = new Date(dob).getTime();

if(Date.getTime() < date){
    document.getElementById("error_message").innerHTML
    = "<b>Input must be in the correct date</b>"
    return false;
}

function validate(){
    getDOM();
    if(username = ""){
        document.getElementById("error_message").innerHTML = "Username must be filled";
        alert("username can't be empty");
        return false;
    }
    if(numofperson.length > 4){
        document.getElementById("error_message").innerHTML = "<b> Please contact to our customer service for group of more than 4 people</b>";
        alert("number of person can't be empty");
        return false;
    }

    return false;
}


function validateForm(){
    getDOM()
    document.getElementById("error_message").innerHTML = "<b> Please contact to our customer service for group of more than 4 people</b>";
        alert("number of person can't be empty");
    return false
}