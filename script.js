
//locomotive code

function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);



    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
       // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
        
}

locoScroll()

 //cursor Effect 
function cursorEffect(){
    var page1Content = document.querySelector(".page-1-content")
     document.querySelector(".curosr")

page1Content.addEventListener("mousemove", function(dets){

    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
        
    })
 
})

 
page1Content.addEventListener("mouseenter", function(){
    gsap.to(".cursor",{
        scale:1,
        opacity:1
    
    })

})
page1Content.addEventListener("mouseleave", function(){
gsap.to(".cursor",{
    scale:0,
    opacity:0

})

})

}
cursorEffect()




var tl = gsap.timeline();
tl.from(".page3LinkHead a",{
    y:50,
    opcity:0,
    stagger:0.5,
    duration:1,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start:"top 35%",
        end:"top 37%",
        scrub:2,
        // markers:true,
    }

})

    //page loader gsap
var tl = gsap.timeline();
tl.from(".loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1

})
tl.to(".loader h3",{
   opacity:0,
   x:-10,
   stagger:0.1,
   duration:1
})
tl.to(".loader",{
   opacity:0 
})
tl.from(".page-1-content h1  span",{
    y:100,
    opacity:0,
    stagger:0.2,
    duration:0.5,
    delay:-0.5,
 })
tl.to(".loader",{
    display:"none" 
 })



var tl = gsap.timeline();
tl.from(".page3-elements-heading h1",{
    x:50,
    stagger:0.5,
    duration:1,
    scrollTrigger:{
        trigger:".page3-elements-heading",
        scroller:".main",
        start:"top 35%",
        end:"top 33%",
        scrub:2,
        // markers:true,
    }

})

var tl = gsap.timeline();
tl.from(".page3-elements-heading .work-heading",{
    yoyo:1,
    y:-40,
    repeat:-1,
    stagger:0.5,
    duration:1,

})


var tl = gsap.timeline();
tl.from(".page4-heading h1",{
    x:100,
    stagger:0.5,
    duration:1,
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        start:"top 36%",
        end:"top 35%",
        scrub:2,
        // markers:true,
    }

})

var tl = gsap.timeline();
tl.from(".page4-heading h2",{
    x:70,
    stagger:0.5,
    duration:1,
    scrollTrigger:{
        trigger:".page4",
        scroller:".main",
        start:"top 37%",
        end:"top 36%",
        scrub:2,
        // markers:true,
    }

})


var tl = gsap.timeline();
tl.from(".para-of-page4-heading h1 ",{
    x:70,
    stagger:0.5,
    opacity:0,
    delay:0.5,
    duration:1.5,
    scrollTrigger:{
        trigger:".para-of-page4-heading",
        scroller:".main",
        start:"top 33%",
        end:"top 32%",
        scrub:5,
        // markers:true,
    }

})


var tl = gsap.timeline();
tl.from(".left-heading h4",{
    x:100,
    stagger:0.5,
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        start:"top 35%",
        end:"top 37%",
        scrub:2,
        // markers:true,
    }

})

var tl = gsap.timeline();
tl.from(".right-heading h4",{
    x:-50,
    stagger:0.5,
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        start:"top 43%",
        end:"top 45%",
        scrub:2,
        // markers:true,
    }

})
var tl = gsap.timeline();
tl.from(".page6-heading-section h2 ",{
    x:100,
    stagger:0.5,
    opacity:0,
    delay:0.5,
    duration:1.5,
    scrollTrigger:{
        trigger:".page6-heading-section",
        scroller:".main",
        start:"top 30%",
        end:"top 32%",
        scrub:3,
        // markers:true,
    }

})



var tl = gsap.timeline();
tl.from(".page6-heading-para h2 ",{
    x:70,
    stagger:0.5,
    opacity:0,
    delay:0.5,
    duration:1.5,
    scrollTrigger:{
        trigger:".page6-heading-para",
        scroller:".main",
        start:"top 33%",
        end:"top 32%",
        scrub:3,
        // markers:true,
    }

})


var tl = gsap.timeline();
tl.from(".page7 h1",{
    x:50,
    stagger:0.5,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:".page7",
        scroller:".main",
        start:"top 60%",
        end:"top 62%",
        scrub:2,
        // markers:true,
    }

})

var tl = gsap.timeline();
tl.from(".aboutUs-container h4",{
    x:50,
    stagger:0.5,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".aboutUs-container",
        scroller:".main",
        start:"top 64%",
        end:"top 66%",
        scrub:2,
        // markers:true,
    }

})
var tl = gsap.timeline();
tl.from(".aboutUs-container h2",{
    yoyo:1,
    y:10,
    repeat:-1,
    stagger:0.5,
    duration:1,
  

})
var tl = gsap.timeline();
tl.from(".footer-webName h1",{
    yoyo:1,
    y:-20,
    repeat:-1,
    stagger:0.5,
    duration:1,

})




  //swipper js  Animation
function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            // disableOnInteraction: true,
          },
      });
}
sliderAnimation()


function page2Animation(){
    var tl = gsap.timeline();
    tl.from(".detailOfHeading h1",{
        y:100,
        stagger:0.5,
        duration:1,
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
          
            start:"top 28%",
            end:"top 30%",
            scrub:2,
            // markers:true,
        }
    
    })
    

}
page2Animation()




