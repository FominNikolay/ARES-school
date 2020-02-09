// section gallery 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

// section form 
//              Telegram bot
var submit = document.querySelector('#submit_btn');
submit.addEventListener('click', sendForm);
function sendForm() {
    let name = document.querySelector('#name').value;
    let lastName = document.querySelector('#lastName').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;
    let userQuestion = document.querySelector('#userQuestion').value;
    const token = "1008832702:AAFPEjEQAGNyPKYDf3ySndlfuSNihqPvV4A";
    const chatId = "-1001494143816";
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=`;

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        let modalWindowContent = document.getElementById("modalWindowContent");
        let modalWindow = document.getElementById("modalWindow");
        if (this.readyState == 4 && this.status == 200) {
            modalWindowContent.innerHTML = "Запрос был успешно отправлен!";
            modalWindow.style.display = "flex";
            setTimeout(showModalWindow, 1000);
            function showModalWindow() {
                modalWindow.style.opacity = 1;
            }
        } else {
            modalWindowContent.innerHTML = "Запрос не был отправлен! Пожалуйста проверьте ваше подключение к интернету!";
            modalWindow.style.display = "flex";
            setTimeout(showModalWindow, 1000);
            function showModalWindow() {
                modalWindow.style.opacity = 1;
            }
            let closeModalWindow = document.getElementById('closeModalWindow');
            closeModalWindow.addEventListener('click', closeModal);
        }
    };
    xhttp.open("GET", url + `С Вами хочет связаться новый клиент. Его Имя: ${name}, Фамилия: ${lastName}, Телефон: ${phone}, Email: ${email}. Его вопрос : "${userQuestion}". Пожалуйста свяжитесь с ним.`, true);
    xhttp.send();
};

function closeModal() {
    modalWindowContent = document.getElementById("modalWindowContent");
    modalWindowContent.innerHTML = "";
    modalWindow = document.getElementById("modalWindow");
    modalWindow.style.display = "none";
    modalWindow.style.opacity = 0;
}


// section animaton


// Smooth transition
$(document).ready(function () {
    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    $(".up").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

