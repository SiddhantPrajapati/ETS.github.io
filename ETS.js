setInterval(toggle,1000);
var currentIndex = 1;
function toggle() {
    setSlides(-1);
}
function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}

function setSlides(num) {
    displaySlides(currentIndex += num);
}


setInterval(toggle1,1000);
var current = 1;
function toggle1() {
    setS(-1);
}
function displayS(num) {
    var x;
    var slides = document.getElementsByClassName("imageS");
    if (num > slides.length) { current = 1 }
    if (num < 1) { current = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[current - 1].style.display = "block";
}

function setS(num) {
    displayS(current += num);
}

function hide(){
    document.getElementById("form1").style.display = "block";
}


// Initialize and add the map
function initMap() {

    // The location of Geeksforgeeks office
    const gfg_office = {
        lat: 28.50231,
        lng: 77.40548
    };

    // Create the map, centered at gfg_office
    const map = new google.maps.Map(
            document.getElementById("map"), {

        // Set the zoom of the map
        zoom: 17.56,
        center: gfg_office,
    });
}


var captcha;
function generate() {
    // Clear old input
    document.getElementById("submit").value = "";

    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
    var uniquechar = "";

    const randomchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
        Math.random() * randomchar.length)
    }

    // Store generated input
    captcha.innerHTML = uniquechar;
}

function printmsg() {
    const usr_input = document.getElementById("submit").value;

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
        var s = document.getElementById("key").innerHTML = "Matched";
        generate();
    }
    else {
        var s = document.getElementById("key").innerHTML = "not Matched";
        generate();
    }
}