sec1Animation();
sec2Animation();
sec3Animation();
ftrAnimation();
circleChaptaKaroo();
getCursorBigger4Hs();

function sec1Animation() {
  var tl = gsap.timeline();
  
  tl.from(".section1 .part2 i",{
    y: -30,
    opacity: 0,
    delay: 0.3,
    duration: 0.7,
  },"runalong")

  tl.from("nav h1,nav h4, nav button", {
    y: -30,
    opacity: 0,
    delay: 0.3,
    duration: 0.7,
    stagger: 0.15,
  },"runalong");

  tl.from(
    ".center-part-1 h1",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.from(".center-part-1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part-1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part-2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.7"
  );

  tl.from(".section1btm img", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
  });
}

function sec2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 10%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: -100,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 5,
      delay: 0.5,
    },
    "anim1"
  );

  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 5,
      delay: 0.5,
    },
    "anim1"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 5,
      delay: 0.8,
    },
    "anim2"
  );

  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 5,
      delay: 0.8,
    },
    "anim2"
  );
}

function sec3Animation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 50%",
      end: "top 10%",
      scrub: 2,
    },
  });

  tl3.from(".section3 .container", {
    opacity: 0,
  });

  tl3.from(
    ".section3 .container .rgt",
    {
      x: -500,
      opacity: 0,
      duration: 3,
    },
    "themBoth"
  );

  tl3.from(
    ".section3 .container .lft",
    {
      x: 500,
      opacity: 0,
      duration: 3,
    },
    "themBoth"
  );

  tl3.from(".section3 .caseStudy", {
    y: 500,
    opcity: 0,
  });
}

function ftrAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "footer",
      scroller: "body",
      start: "top 70%",
      end: "top 56%",
      scrub: 2,
    },
  });
  tl.from("footer", {
    scale: 1.6,
    duration: 4,
  });
  tl.from(
    "footer #rgtone",
    {
      x: -500,
    },
    "theseOnes"
  );
  tl.from(
    "footer #lftone",
    {
      x: 500,
    },
    "theseOnes"
  );
  tl.from(
    "#cntrone",
    {
      opacity: 0,
    },
    "theseOnes"
  );
  tl.from("footer #ftrP", {
    opacity: 0,
    scale: 0.5,
  });
}


function circleChaptaKaroo() {
  // define default scale value
  var timeout;
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", (dets) => {
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector(
        "#cursor"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    document.querySelector("#cursor").style.display = "block";
  });
  window.addEventListener("mouseleave", function (dets) {
    document.querySelector("#cursor").style.display = "block";
  });
}

function getCursorBigger4Hs(){
  const h2s = document.querySelectorAll("h2");

h2s.forEach((h2) => {
  h2.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      backgroundColor: "transparent",
      height: "30px",
      width: "30px",
      duration: 0.2,
      border: "1px solid black",
    });
  });

  h2.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      background: "#000",
      height: "18px",
      width: "18px",
      duration: 0.2,
    });
  });
});
};
//the fun part hehe
