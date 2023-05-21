/* js icon timkiem */

let menu = document.querySelector('#search-icon')
let header = document.querySelector('.header');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search').classList.toggle('active');
    
}

/* js thongbao trang chu */
    // window.addEventListener('DOMContentLoaded', function() {
    //     var closeButton = document.querySelector('.close');
    //     var overlay = document.querySelector('.overlay');
        
    //     closeButton.addEventListener('click', function() {
    //         overlay.style.display = 'none';
    //     });
    // });
// Lấy phần tử overlay và modal
var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close');
var modalImage = document.querySelector('.modal img');
function closeModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
}
overlay.addEventListener('click', function(event) {
    event.stopPropagation();
    closeModal();
});
closeBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    closeModal();
});
modalImage.addEventListener('click', function(event) {
    event.stopPropagation();
});

    const images = document.querySelectorAll('.image');
    images.forEach((image) => {
    const originalSrc = image.src;
    const hoverSrc = image.dataset.hover;
    image.addEventListener('mouseover', function() {
        image.src = hoverSrc;
    });
    image.addEventListener('mouseout', function() {
        image.src = originalSrc;
    });
});

/* js slider */

window.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.slider');
    var sliderContainer = document.querySelector('.slider-container');
    var slides = document.querySelectorAll('.slide');
    var currentIndex = 0;
    function adjustSliderSize() {
        var windowWidth = window.innerWidth;
        var slideWidth = windowWidth;
        slider.style.width = `${slideWidth}px`;
        sliderContainer.style.width = `${slideWidth * slides.length}px`;
        slides.forEach(function(slide) {
            slide.style.width = `${slideWidth}px`;
        });
    }
    function slideTo(index) {
        var slideWidth = slides[0].offsetWidth;
        sliderContainer.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
    }
    function slideNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        slideTo(currentIndex);
    }
    window.addEventListener('resize', adjustSliderSize);
    adjustSliderSize();
    setInterval(slideNext, 3000);
});

  /* js cua hang */
var map = L.map('map').setView([21.0642985, 105.7801634], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);
L.marker([21.0642985, 105.7801634]).addTo(map);

/* js contactus */

$(document).ready(function() {
    $('#contact').submit(function(e) {
        var name = $('input[type=text]').val();
        var email = $('input[type=email]').val();
        var phone = $('input[type=tel]').val();
        var message = $('textarea').val();
        if(name == '' || email == '' || phone == '' || message == '') {
            alert('Vui lòng điền đầy đủ thông tin.');
        } else {
            $('#contact').unbind('submit').submit();
        }
    });
});


// Lấy phần tử menu, user-list, search-icon và shopping

