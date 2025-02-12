// THIS CODE IS MADE BY MOHAMED ELENANY (M7MDY9) AND IS NOT AUTHORIZED TO BE USED WITHOUT HIS PERMISSION.  2025 ©

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Smooth Scrollbar (using the OverscrollPlugin)
    // Make sure your element with id "smooth-wrapper" exists in your HTML.
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

    // Animate header elements using GSAP (example animations)
    gsap.fromTo("#header_1",
        {
          opacity: 0,
          y: 50,
          rotationX: 90,           // Start rotated 90° along the X-axis (facing down)
          transformOrigin: "bottom center" // Pivot from the top center
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,            // End at a normal, flat position
          duration: 1.3,
          delay: 0.3,
          ease: "power3.out"
        }
      );
    
    gsap.to("#small_header", {
        opacity: 1,
        y: -20,
        duration: 1.5,
        delay: 1.2,
        ease: "power1.out",
    });
    
    // Show the scroll prompt after 1 second
    setTimeout(function() {
        if (scrollbarInstance.scrollTop < 20){
            document.getElementById('scroll_prompt').style.opacity = 1;
        } else {
            document.getElementById('scroll_prompt').style.opacity = 0;
        }
    }, 3000);

    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Set up ScrollTrigger's scrollerProxy to use your custom smooth scroller.
    ScrollTrigger.scrollerProxy("#smooth-wrapper", {
        scrollTop(value) {
            // If a value is passed, set the scrollbar's scrollTop.
            if (arguments.length) {
                scrollbarInstance.scrollTop = value;
            }
            // Otherwise, return the current scrollTop.
            return scrollbarInstance.scrollTop;
        },
        // Provide a dummy getBoundingClientRect for ScrollTrigger to work properly.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
    });

    // Update ScrollTrigger on scroll events from the smooth scrollbar.
    scrollbarInstance.addListener(ScrollTrigger.update);

    // Animate the scroll prompt so that it fades out when scrolling down.
    gsap.to("#scroll_prompt", {
        force3D: true,
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
            trigger: ".header_div",   // The container to use as a reference.
            scroller: "#smooth-wrapper", // Specify your custom scroller.
            start: "top+=35 top",      // When the top of .header_div is 20px past the viewport top.
            toggleActions: "play none none reverse",
        }
    });
    gsap.from(".ai_def_div", {
        force3D: true,
        scrollTrigger: {
          trigger: ".ai_def_div",
          scroller: "#smooth-wrapper", // use smooth scrollbar container
          start: "top 65%"               // When the top of the image reaches 80% of the viewport
        },
        opacity: 0,
        duration: 1.1,
      });
      gsap.from("#NVIDIA_head", {
        force3D: true,
        scrollTrigger: {
          trigger: "#NVIDIA_header",
          scroller: "#smooth-wrapper", // use smooth scrollbar container
          start: "top 75%"               // When the top of the image reaches 80% of the viewport
        },
        opacity: 0,
        duration: 1.2,
      });
      gsap.from("#NVIDIA_3D_div", {
        force3D: true,
        scrollTrigger: {
          trigger: "#NVIDIA_3D_header",
          scroller: "#smooth-wrapper", // use smooth scrollbar container
          start: "top 75%"               // When the top of the image reaches 80% of the viewport
        },
        opacity: 0,
        duration: 1.2,
      });
});