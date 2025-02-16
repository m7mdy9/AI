/*
 THIS CODE IS MADE BY MOHAMED ELENANY (M7MDY9) AND IS NOT AUTHORIZED TO BE USED WITHOUT HIS PERMISSION. 
 FOR MORE INFO VIEW LICENSE FILE - 2025 © MOHAMED ELENANY
*/

function isTouchDevice() {
    if('ontouchstart' in window || navigator.maxTouchPoints > 0){
        return true
    } else {
        return false
    }
}
console.log(isTouchDevice())
function adjustLayout() {
    const html = document.querySelector('html');
    const aiDefText = document.querySelector('#ai_def_text');
    const aiDefHead = document.querySelector('#ai_def_head');
    const aiDefImgDiv = document.querySelector('#ai_def_img_div');
    const aiDefImg = document.querySelector('#ai_def_img');
    const aiDefP = document.querySelector('#ai_def_p');
    const aiDefDiv = document.querySelector('.ai_def_div');

    const ratio = parseFloat(window.innerWidth / window.innerHeight).toFixed(5);
    const wide_ratio = ratio >= 3;
    const isPortrait = ratio < 1;
    const small_display = window.innerWidth <= 1024;
    const mid_ratio = ratio <= 0.85 && ratio >= 0.70;
    const mid_small_ratio = ratio < 0.70 && ratio >= 0.51;
    const small_ratio = ratio < 0.51 && ratio > 0.425;
    const tiny_ratio = ratio <= 0.425;

    if (isPortrait || small_display) {
        aiDefText.style.width = "100%";
        aiDefImgDiv.style.width = "100%";
        aiDefImg.style.transform = "translateY(-10rem)";
        aiDefImg.style.paddingRight = "0";
        aiDefDiv.style.flexWrap = "wrap";
        aiDefDiv.style.justifyContent = "center";
        aiDefText.style.maxWidth = "100vw";
        aiDefP.style.paddingRight = "7.5%";
        aiDefP.style.paddingLeft = "7.5%";
        aiDefHead.style.paddingRight = "5%";
        aiDefHead.style.paddingLeft = "5%";
        aiDefDiv.style.paddingLeft = "0%";
        aiDefImgDiv.style.maxWidth = "100vw";
        aiDefImgDiv.style.paddingRight = "5%";
        aiDefImgDiv.style.paddingLeft = "5%";
        aiDefImgDiv.style.minHeight = "50vw";
    } else {
        aiDefText.style.width = "";
        aiDefImgDiv.style.width = "";
        aiDefImg.style.transform = "";
        aiDefImg.style.paddingRight = "";
        aiDefDiv.style.flexWrap = "";
        aiDefDiv.style.justifyContent = "";
        aiDefP.style.margin = "";
        aiDefText.style.maxWidth = "";
        aiDefP.style.paddingRight = "";
        aiDefP.style.paddingLeft = "";
        aiDefHead.style.paddingRight = "";
        aiDefHead.style.paddingLeft = "";
        aiDefDiv.style.paddingLeft = "";
        aiDefImgDiv.style.maxWidth = "";
        aiDefHead.style.paddingRight = "";
        aiDefHead.style.paddingLeft = "";
        aiDefImgDiv.style.paddingRight = "";
        aiDefImgDiv.style.paddingLeft = "";
        aiDefImgDiv.style.minHeight = "";
    }

    if (mid_ratio) {
        html.style.fontSize = '0.85vh';
    } else if (mid_small_ratio) {
        html.style.fontSize = '0.75vh';
    } else if (small_ratio) {
        html.style.fontSize = '0.65vh';
    } else if (tiny_ratio) {
        html.style.fontSize = '0.55vh';
    } else if (wide_ratio) {
        html.style.fontSize = '1.25vh';
    } else {
        html.style.fontSize = '1vh';
    }
}

function initializeSmoothScrollbar() {
    if (!isTouchDevice() && window.innerWidth >= 768) {
        Scrollbar.use(window.OverscrollPlugin);

        const scrollbarInstance = Scrollbar.init(document.querySelector("#smooth-wrapper"), {
            damping: 0.1,
            thumbMinSize: 20,
            renderByPixels: true,
            continuousScrolling: true,
            alwaysShowTracks: false,
            plugins: {
                overscroll: {
                    effect: 'bounce',
                    maxOverscroll: 150,
                },
            },
        });

        ScrollTrigger.scrollerProxy("#smooth-wrapper", {
            scrollTop(value) {
                if (arguments.length) {
                    scrollbarInstance.scrollTop = value;
                }
                return scrollbarInstance.scrollTop;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
        });

        scrollbarInstance.addListener(ScrollTrigger.update);
        scrollbarInstance.addListener(() => {
            ScrollTrigger.update(); // Ensure ScrollTrigger updates with Smooth Scrollbar
        });
        scrollbarInstance.addListener((status) => {
            console.log("Smooth Scrollbar Scroll Position:", status.offset.y);
            ScrollTrigger.update();
        });
        return scrollbarInstance;
    } else {
        
    // Fallback to native scrolling
    ScrollTrigger.scrollerProxy("body", {
        scrollTop(value) {
            if (arguments.length) {
                window.scrollTo(0, value);
            }
            return window.scrollY;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
    });

    // Add scroll event listener for native scrolling
    document.addEventListener("scroll", () => {
        ScrollTrigger.update();
    });
        const smoothWrapper = document.querySelector("#smooth-wrapper");
        const html = document.querySelector('html')
        const body= document.querySelector('body')
        smoothWrapper.style.overflow = "visible"
        smoothWrapper.style.height = "auto"
        smoothWrapper.style.webkitOverflowScrolling = "touch";
        html.style.overflow = "visible"
        body.style.overflow = "visible"
        body.style.webkitOverflowScrolling = "touch"
        return null;
    }
}

function destroySmoothScrollbar(scrollbarInstance) {
    if (scrollbarInstance) {
        scrollbarInstance.destroy();
        const smoothWrapper = document.querySelector("#smooth-wrapper");
        const html = document.querySelector('html')
        const body= document.querySelector('body')
        smoothWrapper.style.overflow = "visible"
        smoothWrapper.style.height = "auto"
        smoothWrapper.style.webkitOverflowScrolling = "touch";
        html.style.overflow = "visible"
        body.style.overflow = "visible"
        body.style.webkitOverflowScrolling = "touch"
        ScrollTrigger.scrollerProxy("body", {
            scrollTop(value) {
                if (arguments.length) {
                    window.scrollTo(0, value);
                }
                return window.scrollY;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
        });
    }
}

function setupAnimations(scrollbarInstance) {
    gsap.fromTo("#header_1", {
        opacity: 0,
        y: 50,
        rotationX: 90,
        transformOrigin: "bottom center",
    }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.3,
        delay: 0.3,
        ease: "power3.out",
    });

    gsap.to("#small_header", {
        opacity: 1,
        y: -20,
        duration: 1.25,
        delay: 1.2,
        ease: "power1.out",
    });

    if (scrollbarInstance) {
        setTimeout(function () {
            if (scrollbarInstance.scrollTop < 20) {
                document.getElementById('scroll_prompt').style.opacity = 1;
            } else {
                document.getElementById('scroll_prompt').style.opacity = 0;
            }
        }, 3300);

        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#scroll_prompt", {
            force3D: true,
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".header_div",
                scroller: "#smooth-wrapper",
                start: "top+=35 top",
                toggleActions: "play none none reverse",
            },
        });

        gsap.from(".ai_def_div", {
            force3D: true,
            scrollTrigger: {
                trigger: ".ai_def_div",
                scroller: "#smooth-wrapper",
                start: "top 65%",
            },
            opacity: 0,
            duration: 1.1,
        });

        gsap.from("#NVIDIA_head", {
            force3D: true,
            scrollTrigger: {
                trigger: "#NVIDIA_header",
                scroller: "#smooth-wrapper",
                start: "top 75%",
            },
            opacity: 0,
            duration: 1.2,
        });

        gsap.from("#NVIDIA_3D_div", {
            force3D: true,
            scrollTrigger: {
                trigger: "#NVIDIA_3D_header",
                scroller: "#smooth-wrapper",
                start: "top 75%",
            },
            opacity: 0,
            duration: 1.2,
        });
    } else {
        setTimeout(function () {
            if (window.scrollY < 20) { // Use window.scrollY for native scrolling
                document.getElementById('scroll_prompt').style.opacity = 1;
            } else {
                document.getElementById('scroll_prompt').style.opacity = 0;
            }
        }, 3300);

        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#scroll_prompt", {
            force3D: true,
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".header_div",
                scroller: "body",
                start: "top+=35 top",
                toggleActions: "play none none reverse",
            },
        });

        gsap.from(".ai_def_div", {
            force3D: true,
            scrollTrigger: {
                trigger: ".ai_def_div",
                scroller: "body",
                start: "top 65%",
            },
            opacity: 0,
            duration: 1.1,
        });

        gsap.from("#NVIDIA_head", {
            force3D: true,
            scrollTrigger: {
                trigger: "#NVIDIA_header",
                scroller: "body",
                start: "top 75%",
            },
            opacity: 0,
            duration: 1.2,
        });

        gsap.from("#NVIDIA_3D_div", {
            force3D: true,
            scrollTrigger: {
                trigger: "#NVIDIA_3D_header",
                scroller: "body",
                start: "top 75%",
            },
            opacity: 0,
            duration: 1.2,
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    adjustLayout();
    let scrollbarInstance = initializeSmoothScrollbar();
        const currentScrollbarInstance = Scrollbar.get("#smooth-wrapper");

        if (currentScrollbarInstance) {
            if (isTouchDevice()) {
                destroySmoothScrollbar(currentScrollbarInstance);
                scrollbarInstance = null
                setupAnimations(scrollbarInstance); // Reinitialize animations with native scrolling
            }
        } else if (!isTouchDevice() && window.innerWidth >= 768) {
                scrollbarInstance = initializeSmoothScrollbar();
                setupAnimations(scrollbarInstance); // Reinitialize animations with Smooth Scrollbar
        } else {
            setupAnimations(scrollbarInstance)
        }
    const nvidia_span = document.querySelectorAll("#ai_span_nv");
    const nvidia_span1 = document.querySelectorAll("#ai_span_nv_main");
    
    nvidia_span.forEach(span => {
        span.setAttribute('title', "NVIDIA is a leading tech company known for its powerful GPUs and advancements in AI, gaming, and data centers.");
    });

    nvidia_span1.forEach(span => {
        span.setAttribute('title', "NVIDIA is a leading tech company known for its powerful GPUs and advancements in AI, gaming, and data centers.");
    });

    const d_span = document.querySelector('#ai_span_d_learn');
    const m_span = document.querySelector('#ai_span_m_learn');
    const tensor = document.querySelector('#ai_span_tensor');
    const cv = document.querySelector('#ai_span_cv');
    const ntp = document.querySelector('#ai_span_ntp');

    d_span.setAttribute('title', 'Deep learning is a subset of AI that uses neural networks to process vast amounts of data and solve complex problems.');
    m_span.setAttribute('title', 'Machine learning is a field of AI that enables systems to learn from data and improve performance without explicit programming.');
    tensor.setAttribute('title', 'Tensor Core technology is NVIDIA\'s specialized hardware designed to accelerate AI and deep learning computations.');
    cv.setAttribute('title', 'Computer vision is a field of AI that allows machines to interpret and understand visual information from the world.');
    ntp.setAttribute('title', 'Natural language processing is a branch of AI that enables machines to understand and interact with human language.');
    
    ScrollTrigger.refresh();
});
window.addEventListener('resize', () => {
    adjustLayout
    ScrollTrigger.refresh(); // Refresh ScrollTrigger after resizing
});
/*
 THIS CODE IS MADE BY MOHAMED ELENANY (M7MDY9) AND IS NOT AUTHORIZED TO BE USED WITHOUT HIS PERMISSION. 
 FOR MORE INFO VIEW LICENSE FILE - 2025 © MOHAMED ELENANY
*/