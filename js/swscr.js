//Скрипт на кнопку "вверх"
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#totopbtn').fadeIn();
        } else {
            $('#totopbtn').fadeOut();
        }
    });
    $('#totopbtn').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});
//Скрипт на прелоадер
function preloader() {
    const body = $('body');

    body.addClass('loaded_hiding');
    window.setTimeout(function () {
        body.addClass('loaded');
        body.removeClass('loaded_hiding');
    }, 500);
}
$(window).on('load', function () {
    preloader();
});
//Скрипт на мобильное меню
$(document).ready(function(){
    $('.openmenu').on("click", function(){ 
        $('#menum').toggle();
    });
});
//Скрипт на геолокацию
window.onload = function() {
    if (ymaps.geolocation.country == 'Россия') {
    jQuery(".reg_ru").show();
    jQuery(".reg_en").hide();
    }
    else {
    jQuery(".reg_ru").hide();
    jQuery(".reg_en").show();
    }
};