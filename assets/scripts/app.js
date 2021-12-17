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

let tabs = document.querySelectorAll('.border')
const tabKnowledge = document.getElementById('tab-knowledge')
const tabCommunication = document.getElementById('tab-knowledge')
const tabDocumentation = document.getElementById('tab-documentation')
const tabMeetings = document.getElementById('tab-meetings')

const knowledgeContent = document.getElementById('tab-knoweledge-content')
const communicationContent = document.getElementById('tab-communication-content')
const documentationContent = document.getElementById('tab-documentation-content')
const managementContent = document.getElementById('tab-management-content')

