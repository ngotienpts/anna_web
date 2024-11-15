document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const backTop = document.querySelector("#back-top");

    // Khởi tạo slider với một item
    function initSliderOneItems() {
        const oneSlides = document.querySelectorAll(".js__oneSlidesContainer");
        if (oneSlides) {
            oneSlides.forEach((item) => {
                var slider = item.querySelector(".js__oneSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");

                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    loop:true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                });
            });
        }
    }

    // xử lý show search pc
    function handleShowSearchPc() {
        
        const searchPc = document.querySelector(".js__searchContainer");


        if (!searchPc ) return;


        const searchContent = searchPc.querySelector(".js__searchContent");
        const searchIcon = searchPc.querySelector(".js__searchIcon");
        const input = searchPc.querySelector(".js__inputSearch");


        searchIcon.onclick = function () {

            if(searchContent.classList.contains('active') && this.classList.contains('active')){

                searchContent.classList.remove("active");
                this.classList.remove('active');
                input.value = "";
            }else {
                searchContent.classList.add("active");
                this.classList.add('active');
                input.focus();
            }

        };
      
    }

    // sử lý show search mb
    function handleShowSearchMb() {
        
        const searchMb = document.querySelector(".js__searchMb");


        if (!searchMb) return;
        var closeSearchMb =
            document.querySelector(".js__closeSearchMb");

        var formSearchMb = document.querySelector(".js__formSearchMb");

        const focusElement =
            formSearchMb.querySelector(".js__focusSearchMb");

        searchMb.onclick = function () {
            formSearchMb.classList.add("active");
            focusElement.focus();
            if (formSearchMb.classList.contains("active")) {
                focusElement.value = "";
            }
        };
        closeSearchMb.onclick = function () {
            formSearchMb.classList.remove("active");
            focusElement.value = "";
        };
      
    }

    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
        
        if (!backTop) return;

        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

    }

    // xử lý sự kiện để show sub menu
    function handleShowSubMenu() {
        const subMenu = document.querySelector(".js__clickShowMenuMb");
        if (!subMenu) return;
        var closeSubMenu = document.querySelector(".js__closeSubMenu");
        var overlay = document.querySelector(".js__overlay");
        var parentBox = subMenu.parentElement;

        subMenu.onclick = function () {
            this.parentElement.classList.add("active");
            document.querySelector("body").style.overflow = "hidden";
        };
        closeSubMenu.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
        overlay.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
    }
    // Xử lý sự kiện để show dropdown submenu
    function handleShowDropdownSubMenu() {
        const dropdownSubMenu = document.querySelectorAll(".js__dropDown");
        dropdownSubMenu &&
            dropdownSubMenu.forEach((item) => {
                var parent = item.parentElement;
                var nextEle = parent.querySelector(".js__listSubMenu");
                item.onclick = function () {
                    parent.classList.toggle("active");
                    if (nextEle.style.maxHeight) {
                        nextEle.style.maxHeight = null;
                    } else {
                        nextEle.style.maxHeight = nextEle.scrollHeight + "px";
                    }
                };
            });
    }

    // Xử lý video tỉ lệ 16:9
    function handleVideo169() {
        const video169s = document.querySelectorAll(".js__video169");
        if (video169s) {
            video169s.forEach((video169) => {
                var videos = video169.querySelectorAll("iframe");
                if (videos) {
                    videos.forEach((video) => {
                        var w = video.offsetWidth;
                        video.style.height = (w * 9) / 16 + "px";
                    });
                }
            });
        }
    }


    // Xử lý thanh header dính
    function handleStickyHeader() {
        const stickyHeaderPC = document.querySelector(".js__stickyHeader");
        if (stickyHeaderPC) {
            const isSticky = scrollY > 300;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }

    // Hàm hiển thị nút backTop dựa trên vị trí cuộn trang
    function handleBackTopVisibility() {
        if (backTop) {
            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {
                backTop.style.opacity = 1;
                backTop.style.visibility = "visible";
            } else {
                backTop.style.opacity = 0;
                backTop.style.visibility = "hidden";
            }
        }
    }
    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        handleStickyHeader();
        handleBackTopVisibility()
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleBackTop();
        handleShowSearchPc();
        handleShowSearchMb();
        handleShowSubMenu();
        handleShowDropdownSubMenu();
        handleVideo169();
        // slide
        initSliderOneItems();
        
        window.addEventListener('scroll',handleWindowScroll);
        window.addEventListener('resize',handleWindowScroll);
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});