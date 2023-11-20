function locoanimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoanimation();
function videoanimation(){
    let videocon=document.querySelector("#video-container");
let playcon=document.querySelector("#play");
videocon.addEventListener("mouseenter",function(){
    gsap.to(playcon,{
        scale:1,
        opacity:1 
    }) 
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playcon,{
        scale:0,
        opacity:0 
    }) 
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playcon,{
        left:dets.x-60,
        top:dets.y-70
    })
})

}
videoanimation();

function page1Animation(){
    gsap.to(".t1 h1",{
        y:0,
        delay:.2,
        duration:.5,
        stagger:.3
        })

        gsap.from("#video-container",{
            y:300,
            delay:1,

        })
}
page1Animation();

function contsinerAni(){
    document.querySelector("#fi").addEventListener("mousemove",function(dets){
        gsap.to("#play2",{
            left:dets.x-60,
        top:dets.y-70
        })
    })
    document.querySelector("#fi").addEventListener("mouseenter",function(){
        gsap.to("#play2",{
          opacity:1,
          scale:1
        })
    })
    document.querySelector("#fi").addEventListener("mouseleave",function(){
        gsap.to("#play2",{
          opacity:0,
          scale:0

        })
    })
    document.querySelector("#fii").addEventListener("mousemove",function(dets){
        gsap.to("#play2",{
            left:dets.x-60,
        top:dets.y-70
        })
    })
    document.querySelector("#fii").addEventListener("mouseenter",function(){
        gsap.to("#play2",{
          opacity:1,
          scale:1

        })
    })
    document.querySelector("#fii").addEventListener("mouseleave",function(){
        gsap.to("#play2",{
          opacity:0,
          scale:0

        })
    })
    //
    document.querySelector("#fi1").addEventListener("mousemove",function(dets){
        gsap.to("#play2",{
            left:dets.x-60,
            top:dets.y-70
        })
    })
    document.querySelector("#fi1").addEventListener("mouseenter",function(){
        gsap.to("#play2",{
          opacity:1,
          scale:1

        })
    })
    document.querySelector("#fi1").addEventListener("mouseleave",function(){
        gsap.to("#play2",{
          opacity:0,
          scale:0
        })
    })
//
document.querySelector("#fii2").addEventListener("mousemove",function(dets){
    gsap.to("#play2",{
        left:dets.x-80,
        top:dets.y-70
    })
})
document.querySelector("#fii2").addEventListener("mouseenter",function(){
    gsap.to("#play2",{
      opacity:1,
      scale:1

    })
})
document.querySelector("#fii2").addEventListener("mouseleave",function(){
    gsap.to("#play2",{
      opacity:0,
      scale:0
    })
})
}
contsinerAni()
function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#nav-part1 svg",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation();



  
   
  gsap.from("#fi",{
    y:100,
    opacity:0,
    scrollTrigger: {
        trigger: "#fi",
        scroller: "#main",
        start:"top 60%",
        end:"top 60%",
        scrub: 2,
      },
  })

  gsap.from("#fii",{
    y:100,
    opacity:0,
    scrollTrigger: {
        trigger: "#fii",
        scroller: "#main",
        start:"top 60%",
        end:"top 60%",
        scrub: 2,
      },
  })

  gsap.from("#fi1",{
    y:100,
    opacity:0,
    scrollTrigger: {
        trigger: "#fi1",
        scroller: "#main",
        start:"top 60%",
        end:"top 60%",
        scrub: 2,
      },
  })

  gsap.from("#fii2",{
    y:100,
    
    opacity:0,
    scrollTrigger: {
        trigger: "#fii2",
        scroller: "#main",
        start:"top 60%",
        end:"top 60%",
        scrub: 2,
      },
  })



  gsap.from(".elem",{
    y:50,
    opacity:0,
    stagger:1,
    duration:2,
    scrollTrigger:{
    trigger:".elem",
    scroller:"#main",
    start:"top 60%",
    end:"top 60%",
    scrub:2
    }
    
    })
    gsap.from("#line2",{
x:0,
duration:3,
opacity:0,
scrollTrigger:{
    trigger:"#line2",
    scroller:"#main",
    start:"top 70%",
    end:"top 70%",
    }
    })
