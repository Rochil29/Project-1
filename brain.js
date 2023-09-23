var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    
})

document.addEventListener("mousemove",function(dets){
    blur.style.left = dets.x-70+"px"
    blur.style.top = dets.y-70+"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 4;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
        crsr.style.transition = "all ease 0.4s";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid rgba(255, 255, 255, 0.71)";
        crsr.style.backgroundColor = "rgba(255, 255, 255, 0.71)";
        
    })

    

})

gsap.to("#nav",{
    backgroundColor:"black",
    height:"80px",
    duration:1,
    opacity:0.9,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end: "top -70%",
        // markers:true,
        // end:"top -100vh"
        scrub:3.2
    }
})

gsap.from(".page1 #arrow",{
    scale:0.1,
    opacity:0,
    duration:1
})
gsap.to(".page1 #arrow",{
    // scale:0.1,
    // opacity:0,
    // duration:1
    y:50,
    yoyo:"true",
    repeat:"-1",
    duration:1
})

gsap.from("#about-us ,#about-us-in",{
    y:50,
    opacity:0,
    duration:2,
    // stagger:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4
    }
})
gsap.from("#cards-container",{
    y:50,
    opacity:0,
    duration:3,
    // stagger:0.5,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:4
    }
})
gsap.from(".pg",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.5,
    scrollTrigger:{
        trigger:".pg",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#mini-container",{
    y:50,
    opacity:0,
    duration:2,
    // stagger:0.5,
    scrollTrigger:{
        trigger:"#mini-container",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 77%",
        scrub:4
    }
})

gsap.from("#colon1",{
    y:-50,
    x:-50,
    opacity:0,
    // duration:1,
    // stagger:0.5,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 47%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:50,
    x:50,
    opacity:0,
    // duration:1,
    // stagger:0.5,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 99%",
        scrub:4
    }
})

gsap.from(".page4 h4",{
    y:50,
    
    opacity:0,
    duration:2,
    // stagger:0.5,
    scrollTrigger:{
        trigger:".page4 h4",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 87%",
        scrub:4
    }
})

