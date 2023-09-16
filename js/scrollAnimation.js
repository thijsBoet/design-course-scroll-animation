// gsap animation
let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.animated-element',
		start: '-50% center',
		end: '200% center',
		scrub: false,
		markers: true,
		// Works only when scrub is set to false
    // Possible values play | pause | reset | restart | resume | reverse | complete | none | auto 
    toggleActions: 'onEnter onLeave onEnterBack onLeaveBack',
	},
});

tl.to('.animated-element', {
  x: 800,
  duration: 1,
})

//  smooth scroll
const lenis = new Lenis();

lenis.on('scroll', (e) => {
	console.log(e);
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
