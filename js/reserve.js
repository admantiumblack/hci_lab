var name;
var phonenum;
var numofperson;
var reservationDate;
var time;
var couponcode;

function getDOM(){
    name = document.getElementById("name").value;
    phonenum = document.getElementById("phone").value;
    numofperson = document.getElementById("numOfPerson").value;
    reservationDate = new Date(document.getElementById("dateOfReservation").value);
    time = document.getElementById("reservationTime").value;
    couponcode = document.getElementById("coupon").value;
}

function validateToS(){
    var terms = document.getElementById("terms").getAttribute("checked")
    console.log(terms)
}

function validateForm(){
    getDOM()
    var errorMssg = document.getElementById("error-message")
    var terms = document.getElementById("terms").checked
    errorMssg.innerHTML = ""

    var isValid = true
    if(name == ""){
        errorMssg.innerHTML += "name must not be empty</br> </br>"
        isValid = false
    }

    if(!terms){
        errorMssg.innerHTML += "terms of service must be checkd</br> </br>"
        isValid = false
    }

    if(phonenum == ""){
        errorMssg.innerHTML += "phone number must not be empty </br></br>"
        isValid = false
    }
    else if(!isFinite(phonenum)){
        errorMssg.innerHTML += "phone number must be numeric</br></br>"
        isValid = false
    }
    else if(phonenum < 0){
        errorMssg.innerHTML += "phone number must not be negative</br></br>"
        isValid = false
    }

    var today = new Date()

    time = time.split(":")
    if(time.length == 1){
        isValid = false
        errorMssg.innerHTML += "time must be filled</br></br>"
    }
    else if(time[0] < 9 || time[0] > 21){
        isValid = false
        errorMssg.innerHTML += "time not valid</br></br>"
    }
    if(isNaN(reservationDate)){
        isValid = false
        errorMssg.innerHTML += "date must be filled</br></br>"
    }
    else if(reservationDate.getDate() < today.getDate() &&
        reservationDate.getMonth() <= today.getMonth()
        && reservationDate.getFullYear() <= today.getFullYear()){
        isValid = false
        errorMssg.innerHTML += "reservation date must be valid</br></br>"
    }
    else if(reservationDate.getDate() == today.getDate() &&
        reservationDate.getMonth() == today.getMonth()
        && reservationDate.getFullYear() == today.getFullYear() &&
        time[0] <= today.getHours() && time[1] <= today.getMinutes()){
            
        isValid = false
        errorMssg.innerHTML += "reservation date must be valid</br></br>"
    }

    if(numofperson < 0 || numofperson == ""){
        isValid = false
        errorMssg.innerHTML += "number of reservation must be positive</br></br>"
    }
    var validCoupons = ["EFGTHKJ", "GHFSDE", "DBSWQA"]
    if(couponcode in validCoupons && couponcode != ""){
        isValid = false
        errorMssg.innerHTML += "coupon code is not valid</br>"
    }

    if(isValid){
        alert("reservation success")
        return true
    }


    return false
}