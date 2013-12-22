$(".btn").click(function() {
    $('html, body').animate({
        scrollTop: $(".box2").offset().top
    }, 1000);
});


$(".btn2").click(function() {
    $('html, body').animate({
        scrollTop: $(".box3").offset().top
    }, 1000);
});


$(".btn3").click(function() {
    $('html, body').animate({
        scrollTop: $(".box4").offset().top
    }, 1000);
});



$(".btn4").click(function() {
    $('html, body').animate({
        scrollTop: $(".box5").offset().top
    }, 1000);
});

$(".btn5").click(function() {
    $('html, body').animate({
        scrollTop: $(".box6").offset().top
    }, 1000);
});

$(".btn6").click(function() {
    $('html, body').animate({
        scrollTop: $(".box7").offset().top
    }, 1000);
});

$(".btn7").click(function() {
    $('html, body').animate({
        scrollTop: $(".box8").offset().top
    }, 1000);
});



$("#to_top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
