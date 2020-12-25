let cursor = $(".cursor");
let cursorFollow = $(".cursorFollow");
let title = $(".title");
let subtitle = $(".sub-title");

$(window).on("mousemove", function (e) {
  console.log("mousemove");
  gsap.to(cursor, {
    x: e.clientX - cursor.width() / 2, //lấy toạ độ mouse X
    y: e.clientY - cursor.height() / 2, //lấy toạ độ mouse Y
    duration: 0.2,
  });

  gsap.to(cursorFollow, {
    x: e.clientX - cursorFollow.width() / 2, //lấy toạ độ mouse X
    y: e.clientY - cursorFollow.height() / 2, //lấy toạ độ mouse Y
    duration: 0.5,
  });
});

title.on("mouseenter", function () {
  cursorFollow.addClass("active");
});

title.on("mouseleave", function () {
  cursorFollow.removeClass("active");
});


let tl = gsap.timeline({ delay: 2 });
tl.to([title, cursorFollow, cursor], { duration: 2, autoAlpha: 1 });
tl.play();
