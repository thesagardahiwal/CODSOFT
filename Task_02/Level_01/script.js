
gsap.to ("#about .leftSide", {
    scrollTrigger: {
        trigger: "#about .leftSide",
        scroller:"body",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 3
    },
    translateX: 50,
    
})
gsap.to ("#about .rightSide", {
    scrollTrigger: {
        trigger: "#about .rightSide",
        scroller:"body",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 3
    },
    translateX: -30,
    
})
gsap.to ("#about .rightSide img", {
    scrollTrigger: {
        trigger: "#about .rightSide",
        scroller:"body",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 4
    },
    translateX: -10,
    
})

gsap.to ("#home .rightSide img", {
    scrollTrigger: {
        trigger: "#about .rightSide",
        scroller:"body",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 4,
    },
    translateX: -10,
    
})
gsap.set ("#skills .items .logo",{
    opacity: 0,
    translateX: -20,
    translateY: 20,
    rotateX: 30,
    perspective: 10
})
gsap.to ("#skills .items .logo", {
    scrollTrigger: {
        trigger: "#skills .items",
        scroller:"body",
        start: "top 80%",
        end: "bottom 40%",
        scrub: 3,
    },
    opacity: 1,
    translateX: 10,
    translateY: -60,
    rotateX: 0,
    
})
gsap.set ("#skills .items .item .title", {
    rotationY: 80
})
gsap.to ("#skills .items .item .title", {
    scrollTrigger: {
        trigger: "#skills",
        scroller: "body",
        start: "top 80%",
        end: "botton 50%",
        scrub: 1,
    },
    duration: 2,
    rotationY: 0
})
gsap.set("#project .items .item", {
    transformPerspective: 500,
    rotationY: 120,
    scale: 1.1,
    translateX:40

})
gsap.to("#project .items .item", {
    scrollTrigger: {
        trigger: "#skills .items",
        scroller:"body",
        start: "top 80%",
        end: "bottom 20%",
        scrub : 3
    },
    rotationY: 0,
    duration: 2,
    scale:1
})
gsap.set("#about .rightSide .image img", {
    perspective: 100,
    translateY: -150,
    rotateY: 40,
    scale: 1.3,
    
})
gsap.to("#about .rightSide .image img", {
    scrollTrigger: {
        trigger: "#about .rightSide .image",
        scroller: "body",
        start: "top 80%",
        end: "botton 20%",
        scrub: 3
    },
    duration: 2,
    rotateY: 0

})

let circle = document.querySelector('.circle');
window.addEventListener("mousemove", function(e){
    let x = e.pageX;
    let y = e.pageY;
    this.setTimeout(()=>{
        circle.style.top = y + "px";
        circle.style.left = x + "px";
    }, 100)  
})

