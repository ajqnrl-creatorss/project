//배너스와이퍼
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

//맛집여지도 애니메이션

const cloudL = document.querySelector("#map .inner .mapItem .cloudL");

cloudL.animate(
    [
        {
            transform: "translateY(0)",
        },
        {
            transform: "translateY(3px)",
        },
    ],
    {
        duration: 700,
        iterations: Infinity,
        direction: "alternate",
    }
);

const cloudR = document.querySelector("#map .inner .mapItem .cloudR");
cloudR.animate(
    [
        {
            transform: "translateY(5px)",
        },
        {
            transform: "translateY(0px)",
        },
    ],
    {
        duration: 700,
        iterations: Infinity,
        direction: "alternate",
    }
);

const diver = document.querySelector("#map .inner .mapItem .diver");
diver.animate(
    [
        {
            transform: "translateY(7px)",
        },
        {
            transform: "translateY(0px)",
        },
    ],
    {
        duration: 1000,
        iterations: Infinity,
        direction: "alternate",
    }
);
const wave1 = document.querySelector("#map .inner .mapItem .wave1");
wave1.animate(
    [
        {
            transform: "translateY(0px)",
        },
        {
            transform: "translateY(4px)",
        },
    ],
    {
        duration: 800,
        iterations: Infinity,
        direction: "alternate",
    }
);
const wave3 = document.querySelector("#map .inner .mapItem .wave3");
wave3.animate(
    [
        {
            transform: "translateY(0px)",
        },
        {
            transform: "translateY(4px)",
        },
    ],
    {
        duration: 800,
        iterations: Infinity,
        direction: "alternate",
    }
);
const wave2 = document.querySelector("#map .inner .mapItem .wave2");
wave2.animate(
    [
        {
            transform: "translateY(10px)",
        },
        {
            transform: "translateY(5px)",
        },
    ],
    {
        duration: 900,
        iterations: Infinity,
        direction: "alternate",
    }
);
const wave4 = document.querySelector("#map .inner .mapItem .wave4");
wave4.animate(
    [
        {
            transform: "translateY(10px)",
        },
        {
            transform: "translateY(5px)",
        },
    ],
    {
        duration: 900,
        iterations: Infinity,
        direction: "alternate",
    }
);

const ship = document.querySelector("#map .inner .mapItem .ship");
ship.animate(
    [
        {
            transform: "rotate(10deg)",
        },
        {
            transform: "rotate(-10deg)",
        },
    ],
    {
        duration: 1200,
        iterations: Infinity,
        direction: "alternate",
    }
);
//탭메뉴
$(".tabMenu > li").on("click", function (e) {
    e.preventDefault(); // tabMenu 클릭만 막음
    let i = $(this).index();
    console.log(i);
    $(".tabMenu > li").removeClass("on");
    $(this).addClass("on");

    $(".itemInner > ul").removeClass("on");
    $(".itemInner > ul").eq(i).addClass("on");
});


//왕복/편도/다구간
$(".top > ul > li").on("click", function (e) {
    e.preventDefault();
    let $this = $(this);
    let i = $this.index();

    // li 활성화
    $(".top > ul > li").removeClass("on");
    $this.addClass("on");

    // indicator 이동
    let left = $this.position().left;
    let width = $this.outerWidth();
    $(".indicator").css({
        left: left,
        width: width,
    });
});
// 초기 indicator 위치 잡기
$(window).on("load", function () {
    let $first = $(".top > ul > li.on");
    $(".indicator").css({
        left: $first.position().left,
        width: $first.outerWidth(),
    });
});

//체크박스
$(function () {
    $(".top > .check > p").on("click", function () {
        $(".top > .check > p").toggleClass("on");
    });
});

//맛집여지도 탭메뉴
$(".tabInner h2").on("click", function () {
    let tabNum = $(this).data("tab"); //클릭한 li의 data-tab 값
    console.log(tabNum);
    //클릭한 li에 on 클래스 추가
    $(".tabInner h2").removeClass("on");
    $(this).addClass("on");
});
//맛집여지도 탭메뉴
$(".tabMenu > li").on("click", function () {
    let i = $(this).index();
    console.log(i);
    $(".tabMenu > li").removeClass("on");
    $(this).addClass("on");

    $(".tabInner > h2").removeClass("on");
    $(".tabInner > h2").eq(i).addClass("on");
});

$(document).ready(function () {
    // 출발 드롭다운 열고 닫기
    $("#departureDropdown").on("click", function () {
        $(".departureBox").toggle();
        $(".endBox").hide(); // 도착 박스는 닫기
    });

    // 출발지 선택 시 텍스트 변경
    $(".departureBox li").on("click", function () {
        let selectedText = $(this).attr("value");
        $("#departureBtn").text(selectedText);
        $(".departureBox").hide();
    });

    // 도착 드롭다운 열고 닫기
    $("#endDropdown").on("click", function () {
        $(".endBox").toggle();
        $(".departureBox").hide(); // 출발 박스는 닫기
    });

    // 도착지 선택 시 텍스트 변경
    $(".endBox li").on("click", function () {
        let selectedText = $(this).attr("value");
        $("#endBtn").text(selectedText);
        $(".endBox").hide();
    });

    // 바깥 클릭 시 닫기
    $(document).on("click", function (e) {
        if (!$(e.target).closest("#departureDropdown, #endDropdown").length) {
            $(".departureBox, .endBox").hide();
        }
    });
});

$(document).ready(function () {
    // 가는날 클릭 시 달력 열기
    $(".go").on("click", function () {
        $(".cal").toggle(); // 가는날 달력 열고 닫기
        $(".cal2").hide(); // 오는날 달력 닫기
    });

    // 오는날 클릭 시 달력 열기
    $(".coming").on("click", function () {
        $(".cal2").toggle(); // 오는날 달력 열고 닫기
        $(".cal").hide(); // 가는날 달력 닫기
    });

    // 가는날 선택 시 텍스트 변경
    $(".cal td").on("click", function () {
        let selectText = $(this).attr("data-date");
        $("#startDate").text(selectText);
        $(".cal").hide(); // 달력 닫기
    });

    // 오는날 선택 시 텍스트 변경
    $(".cal2 td").on("click", function () {
        let selectedText = $(this).attr("data-date");
        $("#endDate").text(selectedText);
        $(".cal2").hide(); // 달력 닫기
    });
});
const passengerBtn = document.getElementById("passengerBtn");
const passengerPopup = document.getElementById("passengerPopup");
const closePopup = document.getElementById("closePopup");

let counts = { adult: 1, child: 0, infant: 0 };

function updateDisplay() {
    document.getElementById("adultCount").textContent = counts.adult;
    document.getElementById("childCount").textContent = counts.child;
    document.getElementById("infantCount").textContent = counts.infant;
    passengerBtn.textContent = `성인 ${counts.adult} · 소아 ${counts.child} · 유아 ${counts.infant}`;
}

// 버튼 클릭하면 팝업 열기
passengerBtn.addEventListener("click", () => {
    passengerPopup.classList.toggle("hidden");
});

// 닫기 버튼
closePopup.addEventListener("click", () => {
    passengerPopup.classList.add("hidden");
});

// 증감 버튼 이벤트
document.querySelectorAll(".plus").forEach((btn) => {
    btn.addEventListener("click", () => {
        let type = btn.getAttribute("data-type");
        counts[type]++;
        updateDisplay();
    });
});

document.querySelectorAll(".minus").forEach((btn) => {
    btn.addEventListener("click", () => {
        let type = btn.getAttribute("data-type");
        if (counts[type] > 0) {
            counts[type]--;
            updateDisplay();
        }
    });
});
// 초기 세팅
updateDisplay();

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

//탭메뉴 고정
$(function () {
    $('.content').each(function () {
        const $win = $(window),
            $header = $(this);
        let headerOffsetTop = $header.offset().top;
        $win.on('scroll', function () {
            let scrollTop = $win.scrollTop();
            if (scrollTop > headerOffsetTop) {
                $header.addClass('on')
            } else {
                $header.removeClass('on')
            }
        })
    })
}) 