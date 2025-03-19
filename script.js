var countDownDate = new Date("Nov 27, 2026 22:57:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000)

const clickButton = document.querySelector(".button")
clickButton.addEventListener("click", function(){
    window.open("https://product-card-web.vercel.app/", "_blank", "width=800,height=600") //Mở một liên kết (URL) mới "_blank" cho phép trang mở ở tab mới;
                                                                                                                            //Hoạt động sau khi thao tác với alert
                                                                                                                            //Mở một cửa sổ popup nhỏ thay vì tab mới
})

window.onload = function() {
    const text = "Welcome to My Website!";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(() => {
                document.getElementById("typewriter").innerHTML = "";
                index = 0;
                typeEffect();
            }, 2000);
        }
    }
    typeEffect(); // Start the effect
};