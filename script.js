//xác định
var countDownDate = new Date("Nov 27, 2026 22:57:00").getTime(); //Chuyển ngày 27/11/2026 22:57:00 thành đối tượng ngày giờ...
var x = setInterval(function(){                                  //Lấy timestamp
    var now = new Date().getTime();                              //Gọi hàm mỗi giây (1000ms) để cập nhật thời gian còn lại.
    var distance = countDownDate - now;                          //Tính thời gian còn lại => công thức tính biến distance

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
},1000)                                                         //function cập nhật mỗi giây

const clickButton = document.querySelector(".button")           //không đổi
clickButton.addEventListener("click", function(){
    window.open("https://product-card-web.vercel.app/", "_blank") //Mở một liên kết (URL) mới "_blank" cho phép trang mở ở tab mới;
                                                                  //window.open(url, target, options)
})

window.onload = function() {                                    //chạy hiệu ứng khi trang web mở lên
    const text = "Welcome to My Website!";                      //string, dùng const khai
    let index = 0;                                              // vị trí
    function typeEffect() { //On repeat
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index); //Hiện từng chữ; cập nhật vào HTML
            index++;
            setTimeout(typeEffect, 100);                         //dừng 0.1s mỗi chữ tạo hiệu ứng
        } else {
            setTimeout(() => {
                document.getElementById("typewriter").innerHTML = ""; //xóa và lặp lại
                index = 0;
                typeEffect();                                         //chạy function
            }, 2000);
        }
    }
    typeEffect(); // Start the effect khi trang web mở
};
