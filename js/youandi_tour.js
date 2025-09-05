$(".tabMenu > li").on("click", function (e) {
    e.preventDefault(); // tabMenu 클릭만 막음
    let i = $(this).index();
    console.log(i);
    $(".tabMenu > li").removeClass("on");
    $(this).addClass("on");

    $(".title > ul > li").removeClass("on");
    $(".title > ul > li").eq(i).addClass("on");
});