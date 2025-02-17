/*
 THIS CODE IS MADE BY MOHAMED ELENANY (M7MDY9) AND IS NOT AUTHORIZED TO BE USED WITHOUT HIS PERMISSION. 
 FOR MORE INFO VIEW LICENSE FILE - 2025 © MOHAMED ELENANY
*/
const video = document.getElementById("aiBreakdown");
let targetTime = 0;
let isAnimating = false;
let at_end = false;
let lastScrollY;
const textLabel = document.getElementById("changing")
const stickyDiv = document.querySelector('#NVIDIA_3D_model');
const stickyDivRect = stickyDiv.getBoundingClientRect();
let model_trigger = isPhone()? false:true // false means mobile so trigger is false, otherwise it'd be on (true)
const switch_trigger = document.querySelector('#toggle')
function isTouchDevice() {
    return ('ontouchstart' in window || navigator.maxTouchPoints > 0);
}
function isPhone(){
    if('ontouchstart' in window || navigator.maxTouchPoints > 0){
        if(window.innerWidth <= 768){
            return true
        } else {
            return false;
        }
    } else {
        return false
    }
}

console.log('Is touch device:', isTouchDevice());

const modelSwitch = document.querySelector('.model_switch')
const N_3D_Div = document.querySelector("#NVIDIA_3D_model")
const N_no_anims = document.querySelector('.NVIDIA_no_anims')
// const N_no_anims = document.querySelector('.NVIDIA_no_anims')
async function model_trigger_func(boolean){
    if(!boolean){
        // modelSwitch.style.display = "none"
        N_3D_Div.style.opacity = "0"
        setTimeout(() => {
            N_no_anims.style.display = 'block'
            N_3D_Div.style.display = "none"   
        }, 700);
        setTimeout(() => {
            N_no_anims.style.opacity = '1'
        }, 900);
    } else {
        // modelSwitch.style.display = ""
        N_no_anims.style.opacity = '0'
        setTimeout(() => {
            N_3D_Div.style.display = ""
            N_no_anims.style.display = 'none'   
        }, 700);
        setTimeout(() => {
            N_3D_Div.style.opacity = "1"
        }, 900);
        return;
    }
}
function adjustLayout() {
    model_trigger = isPhone()? false:true
    if(!model_trigger){
        modelSwitch.style.display = "none"
        N_3D_Div.style.display = "none"
        N_no_anims.style.display = "block"
        N_no_anims.style.opacity = "1"
    } else {
        modelSwitch.style.display = ""
        N_3D_Div.style.display = ""
        N_no_anims.style.display = ""
        N_no_anims.style.opacity = ""
    }
    const html = document.querySelector('html');
    const aiDefText = document.querySelector('#ai_def_text');
    const aiDefHead = document.querySelector('#ai_def_head');
    const aiDefImgDiv = document.querySelector('#ai_def_img_div');
    const aiDefImg = document.querySelector('#ai_def_img');
    const aiDefP = document.querySelector('#ai_def_p');
    const aiDefDiv = document.querySelector('.ai_def_div');
    const N_3D_Div_2 = document.querySelector("#NVIDIA_3D_div")
    const models_no_anims = document.querySelectorAll(".models_no_anims")
    const models_no_anims_1 = document.querySelector(".models_no_anims")
    // const noAnimImg = document.querySelector(".no_anims_img")


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
        N_no_anims.style.width = "95vw"
        N_3D_Div_2.style.minHeight = `${537-(425/1.5)}vh`
        models_no_anims.forEach(el =>{
            el.style.height = "60vh"
        })
        models_no_anims_1.style.height = "40vh"
        // noAnimImg.style.paddingTop = "7vh"
    } else {
        [aiDefText, aiDefImgDiv, aiDefImg, aiDefDiv, aiDefP, aiDefHead].forEach(el => {
            el.style = '';
        });
        N_3D_Div.style.minHeight = ``
        N_no_anims.style.width = ""
        models_no_anims.forEach(el =>{
            el.style.height = ""
        })
        models_no_anims_1.style.height = ""
    }

    const fontSizeMap = {
        mid_ratio: '0.85vh',
        mid_small_ratio: '0.75vh',
        small_ratio: '0.65vh',
        tiny_ratio: '0.55vh',
        wide_ratio: '1.25vh',
        default: '1vh'
    };

    const matchedRatio = Object.entries({
        mid_ratio,
        mid_small_ratio,
        small_ratio,
        tiny_ratio,
        wide_ratio
    }).find(([key, value]) => value);
    
    html.style.fontSize = fontSizeMap[matchedRatio ? matchedRatio[0] : 'default'];
}

let locoScroll;

function initLocoScroll() {
    if (typeof LocomotiveScroll === 'undefined') return;

    locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: false,
        smartphone: {
            smooth: false,
            breakpoint: 0,
        },
        tablet: {
            smooth: false,
            breakpoint: 0,
        },
        lerp: 0.125,
        multiplier: 0.8,
    });

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
        scrollTop(value) {
            return arguments.length ? 
                locoScroll.scrollTo(value, { duration: 0, disableLerp: true }) : 
                locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.defaults({ scroller: '[data-scroll-container]' });
    ScrollTrigger.refresh();

    if (isTouchDevice()) {
        document.addEventListener('scroll', handleNativeScroll);
    }
}

function handleNativeScroll() {
    ScrollTrigger.update();
}

function setupAnimations() {
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

    setTimeout(() => {
        const scrollY = locoScroll ? locoScroll.scroll.instance.scroll.y : window.scrollY;
        document.getElementById('scroll_prompt').style.opacity = scrollY < 20 ? 1 : 0;
    }, 3300);

    gsap.to("#scroll_prompt", {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".header_div",
            start: "top+=35 top",
            toggleActions: "play none none reverse",
        }
    });

    const createScrollTrigger = (trigger, id) => {
        gsap.from(trigger, {
            opacity: 0,
            duration: 1.2,
            scrollTrigger: {
                trigger: id,
                start: "top 75%",
            }
        });
    };

    createScrollTrigger(".ai_def_div", ".ai_def_div");
    createScrollTrigger("#NVIDIA_head", "#NVIDIA_header");
    createScrollTrigger("#NVIDIA_3D_div", "#NVIDIA_3D_header");
}
video.addEventListener("loadedmetadata", () => {
    console.log("Video duration:", video.duration); // Debugging
    updateTargetTime();
});
let state = 0;
function updateTargetTime() {
    if (!video.duration || video.duration <= 0) {
        console.warn("Video duration is not loaded or invalid.");
        return;
    }
    // if(locoScroll.scroll.instance.scroll.y < window.innerHeight * 200){
        //     return;
        // }
        const textLabel = document.getElementById("changing")
        targetTime = ((locoScroll.scroll.instance.scroll.y).toFixed(2) / window.innerHeight) * 100;    
        // console.log("Scroll",locoScroll.scroll.instance.scroll.y, targetTime)
    // if (targetTime >= 490 && targetTime <= 570) {
    //     textLabel.innerText = "A heat sink, which is typically made of aluminum, transfers heat from plates on the back that touch 'hot spots'.This heat then gets transferred through the plates and blown away by fans."
    //     textLabel.style.opacity = 1
    // } else if (targetTime > 570) {
    //     textLabel.innerText = "Finally, the die. The die is the chip that provides foundation for everything else to run.Surrounding it are VRAM modules, which hold important memory that allows the die to recieve it quicker."
    //     textLabel.style.opacity = 1
    // } else if (targetTime >= 448 && targetTime <= 490) {
    //     textLabel.innerText = "Graphics Cards being used for AI models are typically being worked at full capacity, and so they generate a lot of heat.One way to combat this is by the use of fans to remove heat."
    //     textLabel.style.opacity = 1
    // }
    const text_list = [
    "This is the RTX 3080 MSI."
    ,"These are the cooling fans, responsible for cooling the GPU by bringing the hot air out, as the GPU generates heat when being used, and depending on the usage it can get really hot quickly."
    ,"This is the heatsink, which is typically made of aluminum, it's purpose is to transfer the heat from plates on the back that touch the 'hot spots'. This heat then gets transferred through the plates and is blown away by fans."
    ,"Lastly, the die. The die is the chip that provides the base for everything else to run. Surrounding it are VRAM modules, which store memory so the die can get quick access to the data it needs."
    ]
    const list_of_times = [
        448+10, 490+7, 570+12
    ]
    let duration_used;
    if (targetTime >= list_of_times[0] && targetTime <= list_of_times[1] && state !== 1){
        if(isAnimating) return;
        isAnimating = true;
        if (state === 0){
            duration_used = 1.25;
        }
        if (state === 2){
            duration_used = 4
        }
        if (state === 3){
            duration_used = 8
        }
        state = 1
        textLabel.style.opacity = 0
        set_text_and_opacity_time(textLabel, text_list[state], duration_used-0.5)
        gsap.to(video, {
            currentTime: 1.5,
            duration: duration_used,
            onComplete: () => {
                isAnimating = false;
            } 
        });
    } 
     if (targetTime < list_of_times[0] && state !== 0){
         if(isAnimating) return;
         isAnimating = true;
         if (state === 1){
            duration_used = 1.25;
        }
        if (state === 2){
            duration_used = 5
        }
        if (state === 3){
            duration_used = 9
        }
         state = 0
        textLabel.style.opacity = 0
        set_text_and_opacity_time(textLabel, text_list[state], duration_used)
        gsap.to(video, {
            currentTime: 0.05,
            duration: duration_used,
            onComplete: () => {
                isAnimating = false;
            } 
        });
    }
     if (targetTime > list_of_times[2] && state !== 3){
        if(isAnimating) return;
        isAnimating = true;
        if (state === 0){
            duration_used = 10
        }
        if (state === 1){
            duration_used = 8.75
        }
        if (state === 2){
            duration_used = 5
        }
        state = 3
        // if(targetTime < 9.5) return;
        textLabel.style.opacity = 0
        set_text_and_opacity_time(textLabel, text_list[state], duration_used-1)
        console.log(targetTime, video.currentTime)
        gsap.to(video, {
            currentTime: video.duration,
            duration: duration_used,
            onComplete: () => {
                isAnimating = false;
            }
        });
        } 
         if(targetTime >= list_of_times[1] && targetTime <= list_of_times[2] && state !== 2) {
             if(isAnimating) return;
             isAnimating = true;
            if (state === 0){
                duration_used = 5.5
            }
            if (state === 1){
                duration_used = 4
            }
            if (state === 3){
                duration_used = 4
            }
            state = 2 
            textLabel.style.opacity = 0
            set_text_and_opacity_time(textLabel, text_list[state], duration_used-1)
            console.log("2nd", video.currentTime >= 12.5)
            console.log(targetTime)
            gsap.to(video, {
                currentTime: 7.9,
                duration: duration_used,
                onComplete: () => {
                    isAnimating = false;
                } 

            });
        } 
        //  if (targetTime > 4000.8  && targetTime <= 9000){
        //     if(isAnimating) return;
        //     isAnimating = true;
        //     at_end = false
        //     return gsap.to(video, {
        //         currentTime: 6.85,
        //         duration: 2,
        //         onComplete: () => {
        //             isAnimating = false;
        //         } 

        //     });
        // }
        //  else {
        //     console.log("3rd")
        // console.log("Scroll Position:", scrollPosition, "Scroll %:", scrollPercentage, "Target Time:", targetTime);
    
        // animateVideo();
        // }
}

function set_text_and_opacity_time(el, text, time){
    setTimeout(() => {
        if(el){
            el.innerText = text.toString()
            el.style.opacity = 1
        }
    }, (time)*1000);
}

function throttle_ignore(func, limit) {
    let lastRan = 0;

    return function(...args) {
        const context = this;
        const now = Date.now();

        if (now - lastRan >= limit) {
            func.apply(context, args);
            lastRan = now;
        } else {
            return;
        }
    };
}
document.addEventListener('DOMContentLoaded', () => {
    initLocoScroll();
    adjustLayout();
    setupAnimations();
    const setupTooltip = (selector, text) => {
        const element = document.querySelector(selector);
        if (element) element.setAttribute('title', text);
    };

    document.querySelectorAll(".ai_span_nv, .ai_span_nv_main").forEach(span => {
        span.setAttribute('title', "NVIDIA is a leading tech company known for its powerful GPUs and advancements in AI, gaming, and data centers.");
    });

    setupTooltip('.ai_span_d_learn', 'Deep learning is a subset of AI that uses neural networks to process vast amounts of data and solve complex problems.');
    setupTooltip('.ai_span_m_learn', 'Machine learning is a field of AI that enables systems to learn from data and improve performance without explicit programming.');
    setupTooltip('.ai_span_tensor', 'Tensor Core technology is NVIDIA\'s specialized hardware designed to accelerate AI and deep learning computations.');
    setupTooltip('.ai_span_cv', 'Computer vision is a field of AI that allows machines to interpret and understand visual information from the world.');
    setupTooltip('.ai_span_ntp', 'Natural language processing is a branch of AI that enables machines to understand and interact with human language.');
    
    locoScroll.on('scroll', () => {
        ScrollTrigger.update
        if(model_trigger){
            throttle_ignore(updateTargetTime(), 1000)
        }
    });
    ScrollTrigger.refresh();
    switch_trigger.addEventListener('change', ()=>{
        model_trigger = switch_trigger.checked? false:true
        console.log(model_trigger)
        model_trigger_func(model_trigger)
        // adjustLayout()
    })
});

window.addEventListener('resize', () => {
    adjustLayout();
    model_trigger = switch_trigger.checked? false:true
    model_trigger_func(model_trigger)
    ScrollTrigger.refresh();
});
// window.addEventListener('beforeunload', () => {
//     destroyLocoScroll();
//     ScrollTrigger.killAll();
// });

/*
 THIS CODE IS MADE BY MOHAMED ELENANY (M7MDY9) AND IS NOT AUTHORIZED TO BE USED WITHOUT HIS PERMISSION. 
 FOR MORE INFO VIEW LICENSE FILE - 2025 © MOHAMED ELENANY
*/