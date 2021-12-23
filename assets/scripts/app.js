let tabs = document.querySelectorAll('.border')
const tabKnowledge = document.getElementById('tab-knowledge')
const tabCommunication = document.getElementById('tab-communication')
const tabDocumentation = document.getElementById('tab-documentation')
const tabMeetings = document.getElementById('tab-meetings')

const contentSection = document.querySelector('.tabs-contents')
const knowledgeContent = document.getElementById('tab-knoweledge-content')
const communicationContent = document.getElementById('tab-communication-content')
const documentationContent = document.getElementById('tab-documentation-content')
const managementContent = document.getElementById('tab-management-content')

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const tabSelect = e.currentTarget;
        if(tabSelect === tabKnowledge) {
            tabKnowledge.classList.add('active')
            knowledgeContent.classList.add('visible')
            
        } else if(tabSelect === tabCommunication) {
            tabCommunication.classList.add('active')
            communicationContent.classList.add('visible')
            contentSection.replaceChild(knowledgeContent, communicationContent)
            tabCommunication.className = 'border inactive'
            communicationContent.className = 'invisible'
            tabKnowledge.className = 'border inactive'
            knowledgeContent.className = 'invisible'
        }
    })
})


gsap.from('.features-container', { 
    scrollTrigger: {
        trigger: '.features-container',
        start: "10px 90%",
        toggleActions: 'play none none none'
    },
    duration: 1, y: '30%', opacity: 0, ease: 'power4'
})

gsap.from('.note-container', { 
    scrollTrigger: {
        trigger: '.note-container',
        start: "10px 100%",
        toggleActions: 'play none none none'
    },
    
    duration: 2, y: '70%', opacity: 0, ease: 'power4'
})


gsap.from('.main-feature__container', { 
    scrollTrigger: {
        trigger: '.main-feature__container',
        toggleActions: 'play none none none'
    },
    duration: 2, y: '50%', opacity: 0, ease: 'power4'
})

gsap.from('.tabs-hori', {
    scrollTrigger: {
        trigger: '.tabs-hori',
        toggleActions: 'play none none none'
    },
    duration: 2, y: '100%', opacity: 0, ease: 'power4'
})


gsap.from('.tabs-contents', { 
    scrollTrigger: {
        trigger: '.tabs-contents',
        toggleActions: 'play none none none'
    },
    duration: 1, y: '50%', opacity: 0, ease: 'power4'
})

gsap.from('.sub-feature__row', { 
    scrollTrigger: {
        trigger: '.sub-feature__row',
        toggleActions: 'play none none none'
    },
    duration: 2, y: '50%', opacity: 0, ease: 'back'
})

gsap.from('.main-cta', {
    scrollTrigger: {
        trigger: '.main-cta',
        toggleActions: 'play none none none'
    }, 
    duration: 2, y: '-100%', opacity: 0, ease: 'power4'
})

gsap.from('.why-use__img', { 
    scrollTrigger: {
        trigger: '.why-use__img',
        toggleActions: 'play none none none'
    }, 
    duration: 2, y: '30%', opacity: 0, ease: 'expo'
})

gsap.from('.why-use__text-col', { 
    scrollTrigger: {
        trigger: '.why-use__text-col',
        toggleActions: 'play none none none'
    }, 
    duration: 2, y: '50%', opacity: 0, ease: 'expo'
})

gsap.from('.aux-feature__col', { 
    scrollTrigger: {
        trigger: '.aux-feature__col',
        toggleActions: 'play none none none'
    },
    duration: 2, y: '50%', opacity: 0, ease: 'back'
})

gsap.from('.int-platform-contain', { 
    scrollTrigger: {
        trigger: '.int-platform-contain',
        toggleActions: 'play none none none'
    }, 
    duration: 1, y: '-100%', opacity: 0, ease: 'bounce'
})

gsap.from('.int-col', { 
    scrollTrigger: {
        trigger: '.int-col',
        toggleActions: 'play none none none'
    }, 
    duration: 5, y: '-50%', opacity: 0, ease: 'power4', stagger: .3
})

gsap.from('.privacy-img', { 
    scrollTrigger: {
        trigger: '.privacy-img',
        toggleActions: 'play none none none'
    }, 
    duration: 2, y: '50%', opacity: 0, ease: 'power4'
})

gsap.from('.privacy-text__container', { 
    scrollTrigger: {
        trigger: '.privacy-text__container',
        toggleActions: 'play none none none'
    }, 
    duration: 2, y: '50%', opacity: 0, ease: 'power4'
})

gsap.from('.extra-feature__text', { 
    scrollTrigger: {
        trigger: '.extra-feature__text',
        toggleActions: 'play none none none'
    },
    duration: 2, y: '50%', opacity: 0, ease: 'expo'
})

gsap.from('.extra-cta__text', { 
    scrollTrigger: {
        trigger: '.extra-cta__text',
        toggleActions: 'play none none none'
    },
    duration: 2, y: '50%', opacity: 0, ease: 'expo'
})

gsap.from('.row-card', { 
    scrollTrigger: {
        trigger: '.row-card',
        toggleActions: 'play none none none'
    },
    duration: 1, y: '30%', opacity: 0, ease: 'expo'
})

gsap.from('.header-title2', { 
    scrollTrigger: {
        trigger: '.header-title2',
        toggleActions: 'play none none none'
    },
    duration: 2, y: '30%', opacity: 0, ease: 'expo'
})


