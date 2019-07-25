import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

// cursor to be followed by circle

var $circle = $('.circle');

function moveCircle(e) {
    TweenLite.to($circle, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);

// cursor script ends here

// GSAP Animations starts



const controller = new ScrollMagic.Controller()


const partOneTl = new TimelineMax()
        .from('.main-container', 1, { opacity: 0, y:0 , ease: Power2.easeIn })
        .from('.main-container .logo', 1.2, { opacity: 0, x:-200 , ease: Power2.easeIn })
        .from('.main-container .vertical-line', 1, { height: 0 , ease: Power2.easeIn })
        .from('.main-container .contact-us a', 1, { opacity: 0 , ease: Power2.easeIn })
        .from('.main-container h1', 1, { height:0 ,x:500 ,opacity: 0 , ease: Power2.easeIn }, )
        .from('.main-container .vertical-social', 1, { height: 0 ,top:500 ,bottom:500 ,  ease: Power2.easeIn })
        .from('.main-container .fb-img', 1.2, { opacity: 0 , ease: Power2.easeIn })
        .from('.main-container .scroll-down-gif', 1, { opacity: 0, y:200 , ease: Power2.easeIn },"-=0.8")
controller.addScene(
        new ScrollMagic.Scene({
            triggerElement: '.main-container',
            // triggerHook: .7
        }).setTween(partOneTl)
    );

const partTwoTl = new TimelineMax()
        .from('.main-container-2 .dark-overlay', 1, { height: 0 , ease: Power2.easeIn })
        .from('.main-container-2 .transparent-overlay', 1, { width: 0 , ease: Power2.easeIn })
        .from('.main-container-2 .vertical-quarter-line', 1, { height: 0 , ease: Power2.easeIn })
        .from('.main-container-2 .horizontal-line-left', 1, { width: 0 , ease: Power2.easeIn })
        .from('.main-container-2 .grey-div-header', 1, { opacity: 0 , ease: Power2.easeIn })
        .from('.main-container-2 .horizontal-line-middle', 1, { opacity: 0 , height:0 , ease: Power2.easeIn })
        .from('.main-container-2 .grey-div-para', 1, { opacity: 0 , ease: Power2.easeIn })
        .from('.main-container-2 .horizontal-line-right', 1, { width: 0 , ease: Power2.easeIn })
        .from('.main-container-2 .vertical-3-quarter-line', 1, { top: 90 ,height: 0 ,  ease: Power2.easeIn })
       
controller.addScene(
        new ScrollMagic.Scene({
            triggerElement: '.main-container-2',
            triggerHook: .5
        }).setTween(partTwoTl)
    );

const partThreeTl = new TimelineMax()

    .from('.main-container-3 .vertical-line-container-3', 1, { top: 0 ,height: 0 ,  ease: Power2.easeIn })
    .from('.main-container-3 .container-overlay', 1, { height: 0 , ease: Power2.easeIn })
    .from('.main-container-3 .image-container-backview', 1, { x: -200 , opacity : 0 , ease: Power2.easeIn })
    .from('.main-container-3 .image-container', 1, { x: -200 , opacity : 0 , ease: Power2.easeIn })
    .from('.main-container-3 .border-overlay', 1, { x: -200 , opacity : 0 , ease: Power2.easeIn })
    .from('.main-container-3 .image-header', 1, { opacity : 0 , ease: Power2.easeIn })
    
controller.addScene(
    
    new ScrollMagic.Scene({
        triggerElement: '.main-container-3',
        triggerHook: .50
    }).setTween(partThreeTl)
);

const partFourTl = new TimelineMax()

    .from('.main-container-4 .merc', 1, { opacity:0.2 ,scale: 0.8 , ease: Power2.easeIn })
    .from('.main-container-4 .vertical-line-container-4', 1, { top: 0 ,height: 0 ,  ease: Power2.easeIn },"-=0.2")
    .to('.main-container-4 .vertical-line-container-4', 1, { width: 1 , ease: Power2.easeIn },"-=1")
    .to('.main-container-3 .vertical-line-container-3', 1, { width: 1 , ease: Power2.easeIn },"-=1")
    .from('.main-container-4 .merc-header', 1, { opacity:0.2 ,scale: 0.8 , ease: Power2.easeIn })
    .from('.main-container-4 .merc-sub-header', 1, { opacity:0 ,scale: 0.8 , ease: Power2.easeIn })
    .from('.main-container-4 .container-4-overlay', 1, { opacity: 0 , width: 0 , ease: Power2.easeIn })
    .from('.main-container-4 .container-4-overlay p', 1, { opacity: 0 , ease: Power2.easeIn },"-=0.5")

controller.addScene(
    
    new ScrollMagic.Scene({
        triggerElement: '.main-container-4',
        triggerHook: .7
    }).setTween(partFourTl)
);

// menu controller 


//home-link 

const homeMenuTl = new TimelineMax()

    .to('.hero-menu-container .home-link', 0.5, { width:120 , ease: Power2.easeIn })

controller.addScene(
    
    new ScrollMagic.Scene({
        triggerElement: '.main-container',
        // triggerHook: .7
    }).setTween(homeMenuTl)
);
// home link ends here


//about-us-link starts here

const aboutUsMenuTl = new TimelineMax()

    .to('.hero-menu-container .home-link', 0.5, { width:80 , ease: Power2.easeIn })
    .to('.hero-menu-container .about-us-link', 0.5, { width:120 , ease: Power2.easeIn },"-=0.7")

controller.addScene(
    
    new ScrollMagic.Scene({
        triggerElement: '.main-container-2',
        triggerHook: .5
    }).setTween(aboutUsMenuTl)
);
// about-us link ends here


//status-link starts here 

const statusMenuTl = new TimelineMax()

    .to('.hero-menu-container .about-us-link', 0.5, { width:75 , ease: Power2.easeIn })
    .to('.hero-menu-container .status-link', 0.5, { width:120 , ease: Power2.easeIn },"-=0.7")

controller.addScene(
    
    new ScrollMagic.Scene({
        triggerElement: '.main-container-3',
        // triggerHook: .7
    }).setTween(statusMenuTl)
);
// status link ends here


//cars-link 

const carsMenuTl = new TimelineMax()

    .to('.hero-menu-container .status-link', 0.5, { width:70 , ease: Power2.easeIn })
    .to('.hero-menu-container .cars-link', 0.5, { width:120 , ease: Power2.easeIn },"-=0.7")

controller.addScene(
    
    new ScrollMagic.Scene({
        triggerElement: '.main-container-4',
        // triggerHook: .7
    }).setTween(carsMenuTl)
);
// cars link ends here


//contact-us-link 

const contactUsMenuTl = new TimelineMax()

    .to('.hero-menu-container .cars-link', 0.5, { width:65 , ease: Power2.easeIn })
    .to('.hero-menu-container .contact-us-link', 0.5, { width:120 , ease: Power2.easeIn },"-=0.7")
    .from('.hero-menu-container .spinning-circle', 1, { rotate:360 , ease: Power2.easeIn })
controller.addScene(
    
    new ScrollMagic.Scene({
        triggerElement: '.main-container-5',
        // triggerHook: .7
    }).setTween(contactUsMenuTl)
);
// contact-us link ends here


//footer-link 

const footerMenuTl = new TimelineMax()

    .to('.hero-menu-container .contact-us-link', 0.5, { width:60 , ease: Power2.easeIn })
    .to('.hero-menu-container .footer-link', 0.5, { width:120 , ease: Power2.easeIn },"-=0.7")

controller.addScene(
    
    new ScrollMagic.Scene({
        triggerElement: '.main-container-6',
        // triggerHook: .7
    }).setTween(footerMenuTl)
);

// footer link ends here

