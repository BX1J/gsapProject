page1Animation();
page2Animation();


function page1Animation(){
    var tl = gsap.timeline();

tl.from("nav h1,nav h4, nav button", {
  y: -30,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
  stagger: 0.15,
});

tl.from(".center-part-1 h1",{
    x:-300,
    opacity:0,
    duration:0.5,
},"-=0.3");

tl.from(".center-part-1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
});

tl.from(".center-part-1 button",{
    opacity:0,
    duration:0.4,
});

tl.from(".center-part-2 img",{
    opacity:0,
    duration:0.5,
    x:200,
},"-=0.7")

tl.from(".section1btm img",{
    y:30,
    opacity:0,
    duration:0.6,
    stagger:0.15
})
};

function page2Animation(){
    
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top 10%",
        scrub:2,
    }
});

tl2.from(".services",{
    y:-100,
    opacity:0,
    duration:0.5,
})

tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:5,
    delay:0.5,
},"anim1");

tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:5,
    delay:0.5,
},"anim1");
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:5,
    delay:0.8,
},"anim2");

tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:5,
    delay:0.8,
},"anim2");
}