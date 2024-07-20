
// PRE LOAD
window.addEventListener("load", () => {
    inAniBOSE();

    setTimeout(() => {
        mainANI();
        gsap.to("#page1 #bose", {
            top : "50%",
            delay : "0.02",
            duration : "1.2",
            ease: "expo.inOut",
        })
    }, 1500);

    setTimeout(() => {
        letterANI();
    }, 2500);

    setTimeout(() => {
        gsap.to("body", {
            overflow : "visible",
        })
        // LENIS JS -----
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        console.log(e)
        })

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Mouse Follower
        mouseFollower();
        // document.getElementById("main").addEventListener("mouseover", function(dets) {
        //     const mF = document.querySelector("#mouseFollower");
        //     mF.style.top = dets.y;
        //     mF.style.left = dets.x;
        // })
    }, 4300);
})

let bose = document.querySelector("#page0 h1");

function inAniBOSE() {
    gsap.from(bose, {
        left : "100%",
        duration : "3",
        ease: "expo.inOut",
    })
    return 0;
}

function mainANI() {
    gsap.to("#page1", {
        top : 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        duration : "1.2",
        ease: "expo.inOut",
    });
}

function letterANI() {
    gsap.to("#page1 #bose #BofBOSE", {
        top: "50%",
        duration : "0.8",
        ease: "expo.inOut",
        delay: "0.4"
    })
    gsap.to("#page1 #bose #two", {
        top: "50%",
        duration : "0.8",
        ease: "expo.inOut",
    })
    gsap.to("#page1 #bose #SofBOSE", {
        top: "50%",
        duration : "0.8",
        ease: "expo.inOut",
        delay: "0.2",
    })
    gsap.to("#page1 #bose #EofBOSE", {
        top: "50%",
        duration : "0.8",
        ease: "expo.inOut",
        delay: "0.6"
    })


    gsap.to("#page1 #bose #one", {
        top: "140%",
        duration : "0.8",
        ease: "expo.inOut",
        delay: "0.4"
    })
    gsap.to("#page1 #bose #OofBOSE", {
        top: "-40%",
        duration : "0.8",
        ease: "expo.inOut",
    })
    gsap.to("#page1 #bose #thrd", {
        top: "140%",
        duration : "0.8",
        ease: "expo.inOut",
        delay: "0.2"
    })
    gsap.to("#page1 #bose #frth", {
        top: "-40%",
        duration : "0.8",
        ease: "expo.inOut",
        delay: "0.6"
    })
}


// PAGE 2

gsap.from("#page2 #img2", {
    scale: 0.5,
    top: "100%",
    rotate: "90deg",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 25%",
        scrub: 2,
    }
})
gsap.from("#page2 #img1", {
    scale: 0.5,
    top: "100%",
    rotate: "-90deg",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 25%",
        scrub: 2,
    }
})

//PAGE 3
gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray("#container .item");

gsap.to(contents, {
  xPercent: -100 * (contents.length -1),
  scrollTrigger: {
    trigger: "#container",
    scroller: "body",
    start: "top 0%",
    end : "top -400%",
    pin: true,
    scrub: 1,
  }
})

const contents2 = gsap.utils.toArray("#container2 .item");

gsap.to(contents2, {
  xPercent: 100 * (contents2.length -1),
  scrollTrigger: {
    trigger: "#container2",
    scroller: "body",
    start: "top 0%",
    end : "top -400%",
    pin: true,
    scrub: 1,
  }
})

gsap.to("#container", {
    backgroundColor : "#000",
    color : "#fff",
    scrollTrigger: {
        trigger: "#container",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 45%",
        scrub: 2,
    }
})

gsap.from("#container #item1 #img1", {
    top : "-50%",
    rotate : "90deg",
    scrollTrigger: {
        trigger: "#container",
        scroller: "body",
        markers: false,
        start: "top 120%",
        // end: "top 45%",
        scrub: 2,
    }
})
gsap.from("#container #item1 #img2", {
    left : "-50%",
    rotate : "-90deg",
    delay: "0.2",
    scrollTrigger: {
        trigger: "#container",
        scroller: "body",
        markers: false,
        start: "top 300%",
        // end: "top 30%",
        scrub: 2,
    }
})
gsap.from("#container #item1 #img3", {
    top : "150%",
    rotate : "-45deg",
    delay: "0.4",
    scrollTrigger: {
        trigger: "#container",
        scroller: "body",
        markers: false,
        start: "top 70%",
        // end: "top 25%",
        scrub: 2,
    }
})

gsap.from("#container #item2 #img1", {
    top : "-70%",
    rotate : "-90deg",
    delay: "0.4",
    scrollTrigger: {
        trigger: "#container",
        scroller: "body",
        markers: false,
        start: "top 50%",
        scrub: 2,
    }
})
gsap.from("#container #item2 #img2", {
    top : "150%",
    rotate : "180deg",
    delay: "0.4",
    scrollTrigger: {
        trigger: "#container",
        scroller: "body",
        markers: false,
        start: "top 0",
        scrub: 2,
    }
})
gsap.from("#container #item2 #img3", {
    top : "-100%",
    rotate : "-90deg",
    delay: "0.4",
    scrollTrigger: {
        trigger: "#container2",
        scroller: "body",
        markers: false,
        start: "top 1000%",
        scrub: 2,
    }
})

gsap.from("#container #item4 #img1", {
    top : "150%",
    rotate : "-90deg",
    delay: "0.4",
    scrollTrigger: {
        trigger: "#container #item4 #img1",
        scroller: "body",
        markers: false,
        start: "top 10%",
        scrub: 2,
    }
})

gsap.from("#container #item4 #img2", {
    right : "-50%",
    rotate : "90deg",
    delay: "0.4",
    scrollTrigger: {
        trigger: "#container2",
        scroller: "body",
        markers: false,
        start: "top 500%",
        scrub: 2,
    }
})

gsap.to("#container2", {
    backgroundColor : "#000",
    color : "#fff",
    scrollTrigger: {
        trigger: "#container2",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,
    }
})


//FOOTER
gsap.to("#footer", {
    backgroundColor : "#000",
    color : "#fff",
    scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
        scrub: 2,
    }
})

gsap.to("#footer #visit", {
    top: "20%",
    scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        markers: false,
        start: "top 150%",
        scrub: 2,
    }
})

// Mouse Cursor
function mouseFollower() {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
    "transparent",
    "transparent",
    "transparent",
    "#b7b7b7",
    "#a7a7a7",
    "#979797",
    "#888888",
    "#767676",
    "#7e7e7e",
    "#676767",
    "#5b5b5b",
    "#4b4b4b",
    "#404040",
    "#3a3a3a",
    "#2d2d2d",
    "#2c2c2c",
    "#171717",
    "#161616",
    "#151515",
    "#141414",
    "#131313",
    "#121212",
    "#111111",
    "#000"
    ];

    circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;
    
    });

    function animateCircles() {
    
        let x = coords.x;
        let y = coords.y;
    
        circles.forEach(function (circle, index) {
            circle.style.left = x - 0 + "px";
            circle.style.top = y - 0 + "px";
        
            circle.style.scale = (circles.length - index) / circles.length;
        
            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });
    
        requestAnimationFrame(animateCircles);
    }

    animateCircles();
};