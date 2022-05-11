var count1 = 0;
var count2 = 0;
var count3 = 0;

$(".A").click(function () {
  count1 = count1 + 1;
  console.log(count1);
});

$(".B").click(function () {
  count1 = count1 + 2;
  console.log(count1);
});

$(".C").click(function () {
  count1 = count1 + 3;
  console.log(count1);
});

$(".D").click(function () {
  count1 = count1 + 4;
  console.log(count1);
});

$(".E").click(function () {
  count1 = count1 + 5;
  console.log(count1);
});

$(".F").click(function () {
  count1 = count1 + 6;
  console.log(count1);
});

$(".A2").click(function () {
  count2 = count2 + 1;
  console.log(count2);
});

$(".B2").click(function () {
  count2 = count2 + 2;
  console.log(count2);
});

$(".C2").click(function () {
  count2 = count2 + 3;
  console.log(count2);
});

$(".D2").click(function () {
  count2 = count2 + 4;
  console.log(count2);
});

$(".E2").click(function () {
  count2 = count2 + 5;
  console.log(count2);
});

$(".F2").click(function () {
  count2 = count2 + 6;
  console.log(count2);
});

$(".A3").click(function () {
  count3 = count3 + 1;
  console.log(count3);
});

$(".B3").click(function () {
  count3 = count3 + 2;
  console.log(count3);
});

$(".C3").click(function () {
  count3 = count3 + 3;
  console.log(count3);
});

$(".D3").click(function () {
  count3 = count3 + 4;
  console.log(count3);
});

$(".E3").click(function () {
  count3 = count3 + 5;
  console.log(count3);
});

$(".F3").click(function () {
  count3 = count3 + 6;
  console.log(count3);
});

$(".final").click(function () {
  var finalCount = count1 + count2 + count3;
  console.log(finalCount);

  if (finalCount <= 4) {
    $("#A1").fadeToggle("slow");
    $("#final").hide();
  } else if (finalCount <= 7) {
    $("#A2").fadeToggle("slow");
    $("#final").hide();
  } else if (finalCount <= 10) {
    $("#A3").fadeToggle("slow");
    $("#final").hide();
  } else if (finalCount <= 13) {
    $("#A4").fadeToggle("slow");
    $("#final").hide();
  } else if (finalCount <= 16) {
    $("#A5").fadeToggle("slow");
    $("#final").hide();
  } else {
    $("#A6").fadeToggle("slow");
    $("#final").hide();
  }

  setTimeout(function () {
    $(".aaa").fadeIn("slow");
  }, 1800);
});

$(".pre1").click(function () {
  count1 = 0;
  console.log(count1);
});

$(".pre2").click(function () {
  count2 = 0;
  console.log(count2);
});

$(".pre3").click(function () {
  count3 = 0;
  console.log(count3);
});

$(".home").click(function () {
  window.location.hash = "#home";
  count1 = 0;
  console.log(count1);
  count2 = 0;
  console.log(count2);
  count3 = 0;
  console.log(count3);
});

$(".start").click(function () {
  $("#home").hide();
  $("#ani1").fadeToggle("slow");

  setTimeout(function () {
    $(".next1").fadeIn("slow");
  }, 2500);
  setTimeout(function () {
    $(".anim1").fadeIn("slow");
  }, 100);
});

$(".next1").click(function () {
  $("#ani1").hide();
  $("#Q1").fadeToggle("slow");
});

$(".pre1").click(function () {
  $("#ani2").hide();
  $("#Q1").fadeToggle("slow");
});

$(".pre2").click(function () {
  $("#ani3").hide();
  $("#Q2").fadeToggle("slow");
});

$(".pre3").click(function () {
  $("#final").hide();
  $("#Q3").fadeToggle("slow");
});

$(".next2").click(function () {
  $("#ani2").hide();
  $("#Q2").fadeToggle("slow");
});

$(".next3").click(function () {
  $("#ani3").hide();
  $("#Q3").fadeToggle("slow");
});

$(".button1").click(function () {
  $("#Q1").hide();
  $("#ani2").fadeToggle("slow");
  setTimeout(function () {
    $(".next2").fadeIn("slow");
  }, 2500);
  setTimeout(function () {
    $(".anim2").fadeIn("slow");
  }, 500);
});

$(".button2").click(function () {
  $("#ani3").fadeToggle("slow");
  $("#Q2").hide();
  setTimeout(function () {
    $(".next3").fadeIn("slow");
  }, 2500);
  setTimeout(function () {
    $(".anim3").fadeIn("slow");
  }, 100);
});

$(".button3").click(function () {
  $("#final").fadeToggle("slow");
  $("#Q3").hide();
  setTimeout(function () {
    $(".final").fadeIn("slow");
  }, 2500);
  setTimeout(function () {
    $(".anim4").fadeIn("slow");
  }, 100);
});

$(".home1").click(function () {
  $("#home").fadeToggle("slow");
  $("#A1").hide();
});

$(".home2").click(function () {
  $("#home").fadeToggle("slow");
  $("#A2").hide();
});

$(".home3").click(function () {
  $("#home").fadeToggle("slow");
  $("#A3").hide();
});

$(".home4").click(function () {
  $("#home").fadeToggle("slow");
  $("#A4").hide();
});

$(".home5").click(function () {
  $("#home").fadeToggle("slow");
  $("#A5").hide();
});

$(".home6").click(function () {
  $("#home").fadeToggle("slow");
  $("#A6").hide();
});