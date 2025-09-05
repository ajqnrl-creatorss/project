//gnb 메뉴바
$(function () {
    $(".menu").on("click", function () {
        $(this).toggleClass("on");
        $(".category").slideToggle();
    });
});
$(".menu").on("click", function (e) {
    e.preventDefault();
});

//휴애리 정보 더보기 버튼 누르면 토글
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".more_pc_btn");
    const moreContent = document.querySelector(".m_more");

    button.addEventListener("click", function () {
        moreContent.classList.toggle("active");

        if (moreContent.classList.contains("active")) {
            button.textContent = "접기";
        } else {
            button.textContent = "더보기";
        }
    });
});
