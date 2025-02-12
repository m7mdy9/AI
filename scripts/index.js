/*
 THIS CODE IS MADE BY MOHAMED ELENANY (M7MDY9) AND IS NOT AUTHORIZED TO BE USED WITHOUT HIS PERMISSION. 
 FOR MORE INFO VIEW LICENSE FILE - 2025 © MOHAMED ELENANY
*/
// Define a function that applies the desired styles based on screen dimensions/orientation
function adjustLayout() {
    // Get references to your elements
    const aiDefText = document.querySelector('#ai_def_text');
    const aiDefHead = document.querySelector('#ai_def_head');
    const aiDefImgDiv = document.querySelector('#ai_def_img_div');
    const aiDefImg = document.querySelector('#ai_def_img');
    const aiDefP = document.querySelector('#ai_def_p');
    const aiDefDiv = document.querySelector('.ai_def_div');
  
    const isPortrait = window.innerWidth < window.innerHeight;
    const isSmallScreen = window.innerWidth <= 1024;
    console.log(isSmallScreen, aiDefImg)
    if (isPortrait || isSmallScreen) {
      aiDefText.style.width = "100%";
      aiDefImgDiv.style.width = "100%";
      aiDefImg.style.transform = "translateY(-10vh)";
      aiDefImg.style.paddingRight = "0";
      aiDefDiv.style.flexWrap = "wrap";
      aiDefDiv.style.justifyContent = "center";
      aiDefText.style.maxWidth = "100vw"
      aiDefP.style.paddingRight = "7.5%"
      aiDefP.style.paddingLeft = "7.5%"
      aiDefHead.style.paddingRight = "5%"
      aiDefHead.style.paddingLeft = "5%"
      aiDefDiv.style.paddingLeft = "0%"
      aiDefImgDiv.style.paddingRight = "5%"
      aiDefImgDiv.style.paddingLeft = "5%"
      aiDefImgDiv.style.minHeight = "50vw"

    } else {
        aiDefText.style.width = "";
        aiDefImgDiv.style.width = "";
        aiDefImg.style.transform = "";
        aiDefImg.style.paddingRight = "";
        aiDefDiv.style.flexWrap = "";
        aiDefDiv.style.justifyContent = "";
        aiDefP.style.margin = "";
        aiDefText.style.maxWidth = ""
        aiDefP.style.paddingRight = ""
        aiDefP.style.paddingLeft = ""
        aiDefHead.style.paddingRight = ""
        aiDefHead.style.paddingLeft = ""
        aiDefDiv.style.paddingLeft = ""
        aiDefHead.style.paddingRight = ""
        aiDefHead.style.paddingLeft = ""
        aiDefImgDiv.style.paddingRight = ""
        aiDefImgDiv.style.paddingLeft = ""
        aiDefImgDiv.style.minHeight = ""

    }
}
  
document.addEventListener('DOMContentLoaded', () => {
    adjustLayout()
    const nvidia_span = document.querySelectorAll("#ai_span_nv")
    const nvidia_span1 = document.querySelectorAll("#ai_span_nv_main")
    nvidia_span.forEach(span => {
        span.setAttribute('title', "NVIDIA is a leading tech company known for its powerful GPUs and advancements in AI, gaming, and data centers.")
    })
    nvidia_span1.forEach(span => {
        span.setAttribute('title', "NVIDIA is a leading tech company known for its powerful GPUs and advancements in AI, gaming, and data centers.")
    })
    const d_span = document.querySelector('#ai_span_d_learn')
    const m_span = document.querySelector('#ai_span_m_learn')
    const tensor = document.querySelector('#ai_span_tensor')
    const cv = document.querySelector('#ai_span_cv')
    const ntp = document.querySelector('#ai_span_ntp')
    d_span.setAttribute('title', 'Deep learning is a subset of AI that uses neural networks to process vast amounts of data and solve complex problems.')
    m_span.setAttribute('title', 'Machine learning is a field of AI that enables systems to learn from data and improve performance without explicit programming.')
    tensor.setAttribute('title', 'Tensor Core technology is NVIDIA\'s specialized hardware designed to accelerate AI and deep learning computations.')
    cv.setAttribute('title', 'Computer vision is a field of AI that allows machines to interpret and understand visual information from the world.')
    ntp.setAttribute('title', 'Natural language processing is a branch of AI that enables machines to understand and interact with human language.')

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
            }
        },
    });
    gsap.fromTo("#header_1",
        {
          opacity: 0,
          y: 50,
          rotationX: 90,           
          transformOrigin: "bottom center" 
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.3,
          delay: 0.3,
          ease: "power3.out"
        }
      );
    
    gsap.to("#small_header", {
        opacity: 1,
        y: -20,
        duration: 1.25,
        delay: 1.2,
        ease: "power1.out",
    });
    
    setTimeout(function() {
        if (scrollbarInstance.scrollTop < 20){
            document.getElementById('scroll_prompt').style.opacity = 1;
        } else {
            document.getElementById('scroll_prompt').style.opacity = 0;
        }
    }, 3300);

    gsap.registerPlugin(ScrollTrigger);

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
                height: window.innerHeight
            };
        },
    });
/*
 THIS CODE IS MADE BY MOHAMED ELENANY (M7MDY9) AND IS NOT AUTHORIZED TO BE USED WITHOUT HIS PERMISSION. 
 FOR MORE INFO VIEW LICENSE FILE - 2025 © MOHAMED ELENANY
*/
    scrollbarInstance.addListener(ScrollTrigger.update);

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
        }
    });
    gsap.from(".ai_def_div", {
        force3D: true,
        scrollTrigger: {
            trigger: ".ai_def_div",
            scroller: "#smooth-wrapper",
            start: "top 65%"
        },
        opacity: 0,
        duration: 1.1,
      });
      gsap.from("#NVIDIA_head", {
        force3D: true,
        scrollTrigger: {
          trigger: "#NVIDIA_header",
          scroller: "#smooth-wrapper",
          start: "top 75%"
        },
        opacity: 0,
        duration: 1.2,
      });
      gsap.from("#NVIDIA_3D_div", {
        force3D: true,
        scrollTrigger: {
          trigger: "#NVIDIA_3D_header",
          scroller: "#smooth-wrapper",
          start: "top 75%"
        },
        opacity: 0,
        duration: 1.2,
      });
});
window.addEventListener('resize', () =>{
    adjustLayout()
});
/*
 THIS CODE IS MADE BY MOHAMED ELENANY (M7MDY9) AND IS NOT AUTHORIZED TO BE USED WITHOUT HIS PERMISSION. 
 FOR MORE INFO VIEW LICENSE FILE - 2025 © MOHAMED ELENANY
*/