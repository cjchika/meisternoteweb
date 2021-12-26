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

const iconTabs = document.querySelectorAll('.icon');
const tabWatching = document.getElementById('tab-watching')
const tabSharing = document.getElementById('tab-sharing')
const tabCollaborative = document.getElementById('tab-collaborative')
const tabComments = document.getElementById('tab-comments')

const tabWatchingContent = document.getElementById('tab-watching-content');
const tabSharingContent = document.getElementById('tab-sharing-content');
const tabCollaborativeContent = document.getElementById('tab-collaborative-content');
const tabCommentContent = document.getElementById('tab-comment-content');


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const signupButton = document.getElementById('sign-up')
const loginButton = document.getElementById('login')
const backdrop = document.getElementById('backdrop');
const signupModal = document.getElementById('modal')
/* ------- Nav bar --------- */
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

/* ------- Nav bar end--------- */

/* ------- First Section Content Display--------- */

const displayContents = () => {
    
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            let tabSelect = e.currentTarget
            if(tabSelect === tabKnowledge){
                tabKnowledge.classList.add('active')
                knowledgeContent.className = 'visible'
            } else {
                tabKnowledge.classList.remove('active')
                knowledgeContent.className = 'invisible'
                
            }

            if(tabSelect === tabCommunication) {
                tabCommunication.classList.add('active')
                communicationContent.className = 'visible'
            } else {
                tabCommunication.classList.remove('active')
                communicationContent.className = 'invisible'
            }

            if(tabSelect === tabDocumentation) {
                tabDocumentation.classList.add('active')
                documentationContent.className = 'visible'
            } else {
                tabDocumentation.classList.remove('active')
                documentationContent.className = 'invisible'
            }

            if(tabSelect === tabMeetings) {
                tabMeetings.classList.add('active')
                managementContent.className = 'visible'
            } else {
                tabMeetings.classList.remove('active')
                managementContent.className = 'invisible'
            }
        })         
    });
}

displayContents()

/* ------- First Section Content Display End--------- */

/* ------- Section Section Content Display--------- */

const displayIconContents = () => {
    iconTabs.forEach(iconTab => {
        iconTab.addEventListener('click', e => {
            let iconTabSelect = e.currentTarget;
            if(iconTabSelect === tabWatching) {
                tabWatching.classList.add('active');
                tabWatchingContent.className = 'visible'
            } else {
                tabWatching.classList.remove('active')
                tabWatchingContent.className = 'invisible'
            }

            if(iconTabSelect === tabSharing) {
                tabSharing.classList.add('active');
                tabSharingContent.className = 'visible'
            } else {
                tabSharing.classList.remove('active')
                tabSharingContent.className = 'invisible'
            }

            if(iconTabSelect === tabCollaborative) {
                tabCollaborative.classList.add('active');
                tabCollaborativeContent.className = 'visible'
            } else {
                tabCollaborative.classList.remove('active')
                tabCollaborativeContent.className = 'invisible'
            }

            if(iconTabSelect === tabComments) {
                tabComments.classList.add('active');
                tabCommentContent.className = 'visible'
            } else {
                tabComments.classList.remove('active')
                tabCommentContent.className = 'invisible'
            }
        })
    })
}

displayIconContents();

/* ------- Second Section Content Display End--------- */

/* ------- Signup Page --------- */

signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickEvent = () => {
    signupModal.classList.toggle('visible');
    toggleBackdrop()
}

const toggleSignup = () => {
    backdropClickEvent()
};


backdrop.addEventListener('click', backdropClickEvent);
signupButton.addEventListener('click', toggleSignup);
loginButton.addEventListener('click', toggleSignup)

/* ------- Signup page end--------- */

/* ------- Animation --------- */

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
    duration: 2, y: '30%', opacity: 0, ease: 'power4'
})

gsap.from('.why-use__text-col', { 
    scrollTrigger: {
        trigger: '.why-use__text-col',
        toggleActions: 'play none none none'
    }, 
    duration: 2, y: '50%', opacity: 0, ease: 'power4'
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

gsap.from('.col-card', { 
    scrollTrigger: {
        trigger: '.row-card',
        toggleActions: 'play none none none'
    },
    duration: 2, y: '30%', opacity: 0, ease: 'expo'
})

gsap.from('.header-title2', { 
    scrollTrigger: {
        trigger: '.header-title2',
        toggleActions: 'play none none none'
    },
    duration: 2, y: '30%', opacity: 0, ease: 'expo'
})


