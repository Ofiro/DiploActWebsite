(()=>{"use strict";var e,t={664:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(601),i=r.n(o),n=r(314),a=r.n(n)()(i());a.push([e.id,'.outline-button .outline-button-outline,.outline-button .arrow-right{transition:.3s ease-in-out}.outline-button:hover .outline-button-outline{height:.45rem}.outline-button:hover .arrow-right{transform:translateX(0.5rem) rotate(-90deg)}html,body{overflow-x:hidden;overflow-y:auto}.news_item:hover .news_read_more_wrapper,.news_item_inline:hover .news_read_more_wrapper{opacity:1;transform:translateY(0)}.news_item:hover .news_item_image_wrapper .image_cover_fill,.news_item_inline:hover .news_item_image_wrapper .image_cover_fill{filter:brightness(0.65)}.news_item .news_read_more_wrapper,.news_item_inline .news_read_more_wrapper{opacity:0;transform:translateY(1rem)}.news_item .news_read_more_wrapper,.news_item .news_item_image_wrapper .image_cover_fill,.news_item_inline .news_read_more_wrapper,.news_item_inline .news_item_image_wrapper .image_cover_fill{transition:all .5s ease-in-out}.button.is-secondary{position:relative;overflow:hidden;transition:color .3s ease-in-out}.button.is-secondary:before,.button.is-secondary:after{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;z-index:-1;transition:left .3s ease-in-out}.button.is-secondary:before{background-color:var(--brand-colors--dark-blue);transition-delay:0s}.button.is-secondary:after{background-color:var(--brand-colors--middle-blue);transition-delay:.1s}.button.is-secondary:hover{color:var(--colors--base--white)}.button.is-secondary:hover:before,.button.is-secondary:hover:after{left:0}.button.is-secondary span{position:relative;z-index:1}.is-shadow{box-shadow:0px 0px 0px 1px rgba(16,24,40,.18) inset,0px -2px 0px 0px rgba(16,24,40,.05) inset,0px 1px 2px 0px rgba(16,24,40,.05)}.swiper-posts .swiper-wrapper>*{transition:all .5s ease-in-out !important;filter:none;opacity:1}.swiper-posts .swiper-wrapper>*:hover{filter:none;opacity:1}.swiper-posts .swiper-wrapper:hover>*:not(:hover){filter:grayscale(100%);opacity:.8}.block_wrapper:before,.block_wrapper:after{content:"";position:absolute;top:0;width:100%;height:100%;z-index:0;opacity:0;transition:right .3s ease-out,opacity .5s ease-out}.block_wrapper:before{right:-100%;background-color:var(--brand-colors--dark-blue);transition-delay:.3s}.block_wrapper:after{right:-120%;background-color:var(--brand-colors--middle-blue)}.block_wrapper:hover .block_desc{opacity:1;transition:opacity .5s ease-in-out .2s}.block_wrapper:hover:before,.block_wrapper:hover:after{opacity:.75;right:0}.block_wrapper:hover:before{z-index:3}.block_wrapper:hover:after{z-index:2}.block_wrapper:hover .block_arrow_wrapper{background-color:var(--brand-colors--middle-blue);transition:background-color .5s ease-in-out .4s}.block_wrapper:not(:hover) .block_desc{opacity:0;transition:opacity .5s ease-in-out .2s}.block_wrapper:not(:hover) .block_arrow_wrapper{background-color:rgba(0,0,0,0);transition:background-color .5s ease-in-out .4s}.impact_number_wrapper .display_5xl-bold{background:linear-gradient(to right, var(--brand-colors--middle-blue) 50%, var(--brand-colors--dark-blue) 50%);-webkit-background-clip:text;background-clip:text;color:rgba(0,0,0,0);background-size:200% 100%;background-position:100% 0;transition:background-position .5s ease-in-out}.impact_number_wrapper:hover .display_5xl-bold{background-position:0 0}.swiper-gallery{display:flex;overflow:hidden;position:relative}.gallery_wrapper{animation:scroll 20s linear infinite}@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.gallery_label_wrapper{position:absolute;left:0;bottom:0;width:100%;padding:2rem;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}@media(min-width: 991px){.gradient_section_mask{-webkit-mask-image:linear-gradient(to right, transparent, black 30%, black 80%, transparent);mask-image:linear-gradient(to right, transparent, black 30%, black 80%, transparent)}}.swiper-hero-wrapper{transition-timing-function:linear !important;-webkit-transition-timing-function:linear !important;-o-transition-timing-function:linear !important;transition-timing-function:linear !important}.lineParent,.wordParent,.charParent{overflow:hidden;vertical-align:top}.swiper-slide.is-gallery .gallery-img__wrapper{opacity:.25;transform:scale(0.6)}.swiper-slide.is-gallery .gallery-info__wrapper{opacity:0;transform:translateY(50%)}.swiper-slide.is-gallery.swiper-slide-active .gallery-img__wrapper{opacity:1;transform:scale(1)}.swiper-slide.is-gallery.swiper-slide-active .gallery-img__wrapper img{height:100%;width:100%}.swiper-slide.is-gallery.swiper-slide-active .gallery-info__wrapper{opacity:1;transform:translateY(0%)}',""]);const l=a},259:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var o=r(72),i=r.n(o),n=r(825),a=r.n(n),l=r(659),s=r.n(l),c=r(56),p=r.n(c),d=r(540),u=r.n(d),g=r(113),f=r.n(g),A=r(664),y={};y.styleTagTransform=f(),y.setAttributes=p(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=u();i()(A.A,y);const h=A.A&&A.A.locals?A.A.locals:void 0},725:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initializeScrollSmoother=void 0;var o=r(904);t.initializeScrollSmoother=function(){if(window.innerWidth>=992)try{o.ScrollSmoother.create({wrapper:".page-wrapper",content:".main-wrapper",smooth:.8,effects:!0,normalizeScroll:!0,onUpdate:function(e){},onStop:function(e){}})}catch(e){console.error("Error creating ScrollSmoother:",e)}}},46:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createScrubAnimation=void 0;var o=r(904),i=r(242);t.createScrubAnimation=function(e){document.querySelectorAll(e).length>0&&((0,i.applySplitText)(e,"words"),o.gsap.fromTo(e+" .wordChild",{autoAlpha:.3},{autoAlpha:1,stagger:.3,duration:2,scrollTrigger:{trigger:e,start:"top bottom",end:"center center",scrub:1}}))}},242:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.applySplitText=void 0;var o=r(904);t.applySplitText=function(e,t){document.querySelectorAll(e).forEach((function(e){switch(t){case"lines":new o.SplitText(e,{type:"lines",linesClass:"lineChild"}),new o.SplitText(e,{type:"lines",linesClass:"lineParent"});break;case"words":new o.SplitText(e,{type:"words",wordsClass:"wordParent"}),new o.SplitText(e,{type:"words",wordsClass:"wordChild"});break;case"chars":new o.SplitText(e,{type:"chars",charsClass:"charChild"}),new o.SplitText(e,{type:"chars",charsClass:"charParent"});break;default:console.error("Invalid splitType value for element: ".concat(e))}}))}},765:function(e,t,r){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.createSectionTimeline=void 0;var i=r(904),n=r(242);t.createSectionTimeline=function(e){e.splitText&&e.splitText.forEach((function(e){(0,n.applySplitText)(e.selector,e.type)}));var t=document.querySelectorAll(e.trigger),r=[],a=function(t){var n=i.gsap.utils.selector(t),a=i.gsap.timeline({scrollTrigger:e.scrollTrigger?{trigger:t,start:"top 80%",toggleActions:"play reverse play reverse"}:void 0});e.animations.forEach((function(e){var t=n(e.targets);if(t.length>0){var r=o(o({},e.from),{ease:e.ease||"power1.inOut"}),i=o(o({},e.to),{ease:e.ease||"power1.inOut"});e.from&&e.to?a.fromTo(t,r,i,e.offset):e.from?a.from(t,r,e.offset):e.to&&a.to(t,i,e.offset)}})),r.push(a)};return e.multiple?t.forEach(a):t.length>0&&a(t[0]),r.length>0?r[0]:i.gsap.timeline()}},509:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getAnimationsByTrigger=t.sectionConfigs=void 0;var o=r(904),i=[{trigger:".section_video_hero",animations:[{targets:".section_video_hero",from:{opacity:0},to:{opacity:1}},{targets:".section_video_hero .display_xl-bold .lineChild",from:{opacity:.8,y:100},to:{opacity:1,y:0,duration:1,stagger:.1},offset:"-=0.4"},{targets:".hero_arrow_down_wrapper",from:{scale:2,opacity:0},to:{scale:1,opacity:1}}],splitText:[{selector:".section_video_hero .display_xl-bold",type:"lines"}]},{trigger:".section_intro",scrollTrigger:!0,animations:[{targets:".intro_image-content img",from:{scale:2,autoAlpha:.2,duration:1.5}},{targets:".intro_image-content",from:{clipPath:o.clipPathDirections.center,scale:1},to:{clipPath:o.clipPathDirections.full,duration:1,ease:"power2.inOut"},offset:0},{targets:".intro_image-content",to:{scale:.95,duration:1,ease:"power2.out"},offset:0},{targets:".intro_content .display_small_bold .lineChild",from:{opacity:.4,yPercent:100},to:{opacity:1,yPercent:0,duration:1.4,stagger:.1,ease:"power2.out"},offset:0},{targets:".intro_content .display_xs_medium",from:{opacity:0,y:50},to:{opacity:1,y:0,duration:1.4,ease:"power2.out"},offset:.8},{targets:".intro_content .outline-button",from:{opacity:0,y:50},to:{opacity:1,y:0,duration:1.4,ease:"power2.out"},offset:1}],splitText:[{selector:".intro_content .display_small_bold",type:"lines"}]},{trigger:".section_latest_news",scrollTrigger:!0,animations:[{targets:".section_latest_news .news_item",from:{opacity:0},to:{opacity:1,duration:.8,stagger:.5,ease:"power2.out"}},{targets:".section_latest_news .news_item_image_wrapper",from:{clipPath:o.clipPathDirections.midX},to:{clipPath:o.clipPathDirections.full,stagger:.5,duration:1,ease:"power2.out"},offset:0},{targets:".section_latest_news .button",from:{opacity:0,y:50},to:{opacity:1,y:0,stagger:.5,duration:1.4,ease:"power2.out"},offset:1}]},{trigger:".section_cta",scrollTrigger:!0,animations:[{targets:".section_cta .display_xl-bold .lineChild",from:{opacity:0,y:100},to:{opacity:1,y:0,duration:1,stagger:.5},offset:0},{targets:".section_cta .pattern_overlay",from:{opacity:0,duration:1,ease:"power2.out"},offset:0},{targets:".section_cta .button",from:{opacity:0,y:50},to:{opacity:1,y:0,stagger:.5,duration:1.4,ease:"power2.out"},offset:1}],splitText:[{selector:".section_cta .display_xl-bold",type:"lines"}]},{trigger:".section_social_feed",scrollTrigger:!0,animations:[{targets:".section_social_feed .display_lg-bold .lineChild",from:{opacity:.6,yPercent:200},to:{opacity:1,yPercent:0,duration:.6,stagger:.1},offset:0},{targets:".section_social_feed .social_icon_linkblock",from:{opacity:0},to:{opacity:1,duration:1,stagger:.2},offset:0},{targets:".section_social_feed .ig_post_wrapper",from:{opacity:.3,scale:.9,clipPath:o.clipPathDirections.bottom},to:{opacity:1,scale:1,clipPath:o.clipPathDirections.full,duration:1,stagger:.2},offset:0}],splitText:[{selector:".section_social_feed .display_lg-bold",type:"lines"}]},{trigger:".section_footer",scrollTrigger:!0,animations:[{targets:".section_footer .footer_link",from:{autoAlpha:.2,duration:1.2},offset:0},{targets:".section_footer .display_md-bold .lineChild",from:{opacity:.8,y:100},to:{opacity:1,y:0,duration:.8,stagger:.075},offset:0},{targets:".section_footer .text-field",from:{opacity:0},to:{opacity:1,duration:.4,stagger:.15},offset:1},{targets:".section_footer .footer_form_button_wrapper",from:{opacity:0},to:{opacity:1,duration:1.2},offset:1},{targets:".section_footer .footer_logo",from:{opacity:0,scale:.5},to:{opacity:1,scale:1,duration:.4},offset:1.5}],splitText:[{selector:".section_footer .display_md-bold",type:"lines"}]},{trigger:".section_page_header",scrollTrigger:!0,animations:[{targets:".section_page_header h1 .wordChild",from:{opacity:0,yPercent:120},to:{opacity:1,yPercent:0,duration:1,stagger:.5},offset:0},{targets:".section_page_header h2 .lineChild",from:{opacity:0,yPercent:100},to:{opacity:1,yPercent:0,duration:1,stagger:.2},offset:.3}],splitText:[{selector:".section_page_header h1",type:"words"},{selector:".section_page_header h2",type:"lines"}]},{trigger:".section_project",scrollTrigger:!0,multiple:!0,animations:[{targets:".section_project h3 .lineChild",from:{opacity:.3,yPercent:150},to:{opacity:1,yPercent:0,duration:1,stagger:.5},offset:0},{targets:".section_project .project_picture img",from:{scale:2,autoAlpha:.2,duration:.5},offset:0},{targets:".section_project .project_picture",from:{clipPath:o.clipPathDirections.center,scale:1},to:{clipPath:o.clipPathDirections.full,duration:1,ease:"power2.inOut"},offset:0},{targets:".section_project .project_picture",to:{scale:.95,duration:1,ease:"power2.out"},offset:1},{targets:".section_project h4",from:{opacity:0},to:{opacity:1,duration:1,stagger:.2},offset:1},{targets:".section_project .button",from:{yPercent:100,opacity:0},to:{yPercent:0,opacity:1,duration:1,stagger:.2},offset:1}],splitText:[{selector:".section_project h3",type:"lines"}]},{trigger:".section_impact_numbers",scrollTrigger:!0,animations:[{targets:".section_impact_numbers h3",from:{autoAlpha:0},to:{autoAlpha:1,duration:1,stagger:.3},offset:0},{targets:".section_impact_numbers h4",from:{autoAlpha:0},to:{autoAlpha:1,duration:1,stagger:.5},offset:.5}]},{trigger:".section_blocks",scrollTrigger:!0,animations:[{targets:".section_blocks .block_wrapper",from:{autoAlpha:.4,clipPath:o.clipPathDirections.center},to:{autoAlpha:1,clipPath:o.clipPathDirections.full,duration:1,stagger:.35,ease:"power5.inOut"},offset:0},{targets:".section_blocks h3",from:{autoAlpha:0},to:{autoAlpha:1,duration:1,stagger:.5},offset:1},{targets:".section_blocks .block_arrow_wrapper",from:{autoAlpha:0},to:{autoAlpha:1,duration:1,stagger:.5},offset:1}]},{trigger:".section_gallery_carousel",scrollTrigger:!0,animations:[{targets:".section_gallery_carousel .swiper-slide-gallery",from:{autoAlpha:.4,clipPath:o.clipPathDirections.top},to:{autoAlpha:1,clipPath:o.clipPathDirections.full,duration:1,stagger:.35,ease:"power5.inOut"},offset:0}]},{trigger:".section_hero_header",scrollTrigger:!0,animations:[{targets:".section_hero_header h1 .lineChild",from:{opacity:.8,yPercent:100},to:{opacity:1,yPercent:0,duration:1,stagger:.5}},{targets:".section_hero_header p",from:{opacity:0,yPercent:10},to:{opacity:1,yPercent:0,duration:1,stagger:.5},offset:1},{targets:".section_hero_header .button",from:{opacity:0,yPercent:50},to:{opacity:1,yPercent:0,duration:1,stagger:.5},offset:1}],splitText:[{selector:".section_hero_header h1",type:"lines"}]}];t.sectionConfigs=new Map(i.map((function(e){return[e.trigger,e]}))),t.getAnimationsByTrigger=function(e){return t.sectionConfigs.get(e)}},637:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("mousemove",(function(e){var t=document.querySelector(".light_gradient");if(t){var r=t.getBoundingClientRect(),o=Math.round((e.clientX-r.left)/r.width*100),i=Math.round((e.clientY-r.top)/r.height*100);t.style.background="radial-gradient(circle at ".concat(o,"% ").concat(i,"%, var(--brand-colors--light-blue) 50%, var(--brand-colors--middle-blue))")}}));var e=document.querySelectorAll(".faq_item_question");if(0!==e.length);}))},122:function(e,t,r){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.initializeHeaderAnimation=void 0;var i=r(904),n=function(){function e(e,t,r){this.defaultStyle=o({},e),this.transparentStyle=o({},t),this.initialMode=r,this.currentStyle=o({},"default"===r?e:t),this.previousStyle=o({},this.currentStyle)}return e.prototype.getCurrentStyle=function(){return o({},this.currentStyle)},e.prototype.setWhiteMode=function(){this.updateStyle(this.defaultStyle)},e.prototype.setTransparentMode=function(){this.updateStyle(this.transparentStyle)},e.prototype.returnToDefault=function(){var e="default"===this.initialMode?this.defaultStyle:this.transparentStyle;this.updateStyle(e)},e.prototype.returnToPrevState=function(){var e;e=[this.previousStyle,this.currentStyle],this.currentStyle=e[0],this.previousStyle=e[1],l(this.currentStyle)},e.prototype.updateStyle=function(e){this.previousStyle=o({},this.currentStyle),this.currentStyle=o({},e),l(this.currentStyle)},e}();t.default=n;var a={white:{"--header--link-color":"var(--colors--brand--900)","--header--background-color":"var(--colors--base--white)","--header--border-color":"var(--colors--brand--950)","--header--logo-color-1":"var(--brand-colors--dark-blue)","--header--logo-color-2":"var(--brand-colors--middle-blue)","--header--hamburger-color":"var(--brand-colors--middle-blue)"},transparent:{"--header--link-color":"var(--colors--base--white)","--header--hamburger-color":"var(--colors--base--white)","--header--background-color":"var(--colors--base--transparent)","--header--border-color":"var(--component-colors--alpha--alpha-white-30)","--header--logo-color-1":"var(--brand-colors--middle-blue)","--header--logo-color-2":"var(--brand-colors--light-blue)"}};function l(e){var t=document.documentElement;Object.entries(e).forEach((function(e){var r=e[0],o=e[1];t.style.setProperty(r,o)}))}function s(e,t,r){var o=document.querySelector(e);null==o||o.addEventListener("click",(function(){var e,o=i.ScrollSmoother.get();null==o||o.paused(t),e=t?"hidden":"auto",document.body.style.overflow=e,t?r.setWhiteMode():r.returnToPrevState()}))}t.initializeHeaderAnimation=function(){var e=document.querySelector(".main-header");if(e){var t=e.getAttribute("data-mode")||"default",r=new n(a.white,a.transparent,t);l(r.getCurrentStyle());var o,p=function(e){return i.gsap.from(e,{yPercent:-100,paused:!0,duration:.2,ease:"power1.inOut"}).progress(1)}(e),d=!1;i.ScrollTrigger.create({start:"top top",end:"max",onUpdate:function(e){d?function(e,t,r){e.direction!==c&&(-1===e.direction?(t.play(),r.setWhiteMode()):(t.reverse(),r.returnToDefault()),c=e.direction)}(e,p,r):d=!0}}),o=function(){return r.returnToDefault()},i.ScrollTrigger.create({trigger:document.documentElement,start:"top top",onEnterBack:o}),s(".hamburger_mobile",!0,r),s(".close_menu",!1,r),function(e,t){e.addEventListener("mouseenter",(function(){JSON.stringify(t.getCurrentStyle())===JSON.stringify(a.transparent)&&t.setWhiteMode()})),e.addEventListener("mouseleave",(function(){JSON.stringify(t.getCurrentStyle())===JSON.stringify(a.white)&&t.returnToPrevState()}))}(e,r)}else console.error("Header element not found")};var c=null},648:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.duplicateSlides=void 0,t.duplicateSlides=function(){try{var e=document.querySelector(".swiper-gallery"),t=null==e?void 0:e.querySelector(".gallery_wrapper"),r=null==t?void 0:t.querySelectorAll(".swiper-slide-gallery");t&&e&&r&&r.length>0?(r.forEach((function(e){var r=e.cloneNode(!0);t.appendChild(r)})),setTimeout((function(){var e=Array.from(r).reduce((function(e,t){return e+t.getBoundingClientRect().width}),0);t.style.width="".concat(2*e,"px"),function(e,t){try{var r=t/100*1;e.style.animation="scroll ".concat(r,"s linear infinite"),e.addEventListener("animationiteration",(function(){e.style.animation="none",e.offsetHeight,e.style.animation="scroll ".concat(r,"s linear infinite")}))}catch(e){console.error("Error starting animation:",e)}}(t,e),r.forEach((function(e){return function(e,t){try{e.addEventListener("mouseenter",(function(){return function(e){try{e.style.animationPlayState="paused"}catch(e){console.error("Error pausing animation:",e)}}(t)})),e.addEventListener("mouseleave",(function(){return function(e){try{e.style.animationPlayState="running"}catch(e){console.error("Error resuming animation:",e)}}(t)}))}catch(e){console.error("Error setting hover events:",e)}}(e,t)}))}),100)):console.error("Error duplicating slides: Gallery elements not found or no slides available")}catch(e){console.error("Error duplicating slides:",e)}}},393:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initHeroGallery=void 0,t.initHeroGallery=function(e,t,r){try{new e(".swiper-hero-gallery",{modules:[t,r],slidesPerView:"auto",centeredSlides:!0,speed:800,loop:!0,spaceBetween:60,grabCursor:!0,parallax:!0,autoplay:{delay:3e3,disableOnInteraction:!1}})}catch(e){console.error("Error initializing hero gallery Swiper:",e)}}},142:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=r(236);r(534);var i=r(94),n=r(798),a=r(648),l=r(393),s=r(711),c=r(354);document.addEventListener("DOMContentLoaded",(function(){try{document.querySelector(".swiper-posts")&&(0,n.initializePostSwiper)(o.default),document.querySelector(".swiper-gallery")&&(0,a.duplicateSlides)(),document.querySelector(".swiper.is-gallery")&&(0,c.initMissionsSwiper)(o.default,i.Parallax,i.Autoplay),document.querySelector(".swiper-hero-gallery")&&(0,l.initHeroGallery)(o.default,i.Parallax,i.Autoplay),document.querySelector(".swiper-testimonials")&&(0,s.initTestimonialsSwiper)(o.default,i.Parallax,i.Autoplay)}catch(e){console.error("Error initializing Swiper instances:",e)}})),window.addEventListener("resize",(function(){try{document.querySelector(".swiper-hero-gallery")&&(0,l.initHeroGallery)(o.default,i.EffectCoverflow,i.Autoplay)}catch(e){console.error("Error handling window resize:",e)}}))},354:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initMissionsSwiper=void 0,t.initMissionsSwiper=function(e,t,r){try{new e(".swiper.is-gallery",{modules:[t,r],slidesPerView:"auto",centeredSlides:!0,speed:800,loop:!0,spaceBetween:60,grabCursor:!0,parallax:!0,autoplay:{delay:3e3,disableOnInteraction:!1}})}catch(e){console.error("Error initializing material Swiper:",e)}}},798:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initializePostSwiper=void 0;var o=r(756);t.initializePostSwiper=function(e){try{var t=new e(".swiper-posts",{modules:[],loop:!0,slidesPerView:"auto",spaceBetween:16,autoplay:!1,pagination:!1,speed:1e3,effect:"slide",navigation:!1});(0,o.setupNavigationButtons)(t,".custom-swiper-button-prev",".custom-swiper-button-next")}catch(e){console.error("Error initializing post Swiper:",e)}}},756:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setupNavigationButtons=void 0,t.setupNavigationButtons=function(e,t,r){try{var o=document.querySelector(t),i=document.querySelector(r);o?o.addEventListener("click",(function(){return e.slidePrev()})):console.error("Left arrow element not found"),i?i.addEventListener("click",(function(){return e.slideNext()})):console.error("Right arrow element not found")}catch(e){console.error("Error setting up navigation buttons:",e)}}},711:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initTestimonialsSwiper=void 0,t.initTestimonialsSwiper=function(e,t,r){try{new e(".swiper-testimonials",{modules:[t,r],slidesPerView:"auto",centeredSlides:!0,spaceBetween:32,loop:!0,speed:6e3,parallax:!0,autoplay:{delay:0,disableOnInteraction:!1}})}catch(e){console.error("Error initializing testimonials Swiper:",e)}}},904:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.clipPathDirections=t.SplitText=t.ScrollSmoother=t.ScrollTrigger=t.gsap=t.initializeGSAPPlugins=void 0;var o=r(880);Object.defineProperty(t,"gsap",{enumerable:!0,get:function(){return o.gsap}});var i=r(575);Object.defineProperty(t,"ScrollTrigger",{enumerable:!0,get:function(){return i.ScrollTrigger}});var n=r(216);Object.defineProperty(t,"ScrollSmoother",{enumerable:!0,get:function(){return n.ScrollSmoother}});var a=r(709);function l(){var e=function(){try{o.gsap&&!o.gsap.plugins.ScrollTrigger&&o.gsap.registerPlugin(i.ScrollTrigger),o.gsap&&!o.gsap.plugins.ScrollSmoother&&o.gsap.registerPlugin(n.ScrollSmoother),o.gsap&&!o.gsap.plugins.SplitText&&o.gsap.registerPlugin(a.SplitText),console.log("GSAP plugins registered successfully.")}catch(e){console.error("Error registering GSAP plugins:",e)}};"complete"===document.readyState||"interactive"===document.readyState?setTimeout(e,0):document.addEventListener("DOMContentLoaded",e)}Object.defineProperty(t,"SplitText",{enumerable:!0,get:function(){return a.SplitText}}),t.initializeGSAPPlugins=l,l(),t.clipPathDirections={top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",full:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",midX:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",midY:"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",center:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"}},91:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initializeTimelines=void 0;var o=r(122),i=r(725),n=r(46),a=r(509),l=r(765);function s(){console.log("initializing timelines"),a.sectionConfigs.forEach((function(e){document.querySelector(e.trigger)&&(0,l.createSectionTimeline)(e)}))}r(259),document.addEventListener("DOMContentLoaded",(function(){(0,i.initializeScrollSmoother)(),(0,o.initializeHeaderAnimation)(),s(),(0,n.createScrubAnimation)(".section_centered_intro p")})),t.initializeTimelines=s},156:(e,t,r)=>{r(91),r(142),r(637),document.addEventListener("DOMContentLoaded",(function(){try{console.log("DOM fully loaded and parsed"),console.log("Modules imported and executed")}catch(e){console.error("Error during DOMContentLoaded initialization:",e)}})),window.addEventListener("load",(function(){try{console.log("Window fully loaded"),console.log("Modules imported and executed")}catch(e){console.error("Error during window load initialization:",e)}}))},85:e=>{e.exports="data:application/font-woff;charset=utf-8;base64, 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"}},r={};function o(e){var i=r[e];if(void 0!==i)return i.exports;var n=r[e]={id:e,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,r,i,n)=>{if(!r){var a=1/0;for(p=0;p<e.length;p++){for(var[r,i,n]=e[p],l=!0,s=0;s<r.length;s++)(!1&n||a>=n)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,i,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o.b=document.baseURI||self.location.href;var e={792:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,[a,l,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(s)var p=s(o)}for(t&&t(r);c<a.length;c++)n=a[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(p)},r=self.webpackChunkdiploact_x_webflow=self.webpackChunkdiploact_x_webflow||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.nc=void 0;var i=o.O(void 0,[121],(()=>o(156)));i=o.O(i)})();