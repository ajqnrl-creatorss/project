$(".tabMenu > li").on("click", function (e) {
    e.preventDefault(); // tabMenu 클릭만 막음
    let i = $(this).index();
    console.log(i);
    $(".tabMenu > li").removeClass("on");
    $(this).addClass("on");

    $(".course > ul > li > img").removeClass("on");
    $(".course > ul > li > img").eq(i).addClass("on");
});