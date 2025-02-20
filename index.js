document.addEventListener('DOMContentLoaded', ()=>{
    gsap.fromTo("#header_1", {
        opacity: 0,
        y: 50,
    }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        delay: 0.25,
        ease: "power1.out",
    });
    gsap.fromTo(".flags", {
        opacity: 0,
        y: 50,
    }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        delay: 1.25,
        ease: "power1.out",
    });
    const flags = document.querySelectorAll(".flag_div")
    flags.forEach(el =>{
        el.addEventListener('click', ()=>{
            open(`./${el.id}/index.html`, "_self")
        })
    })
})