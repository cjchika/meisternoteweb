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
const tabCommunication = document.getElementById('tab-communication')
const tabDocumentation = document.getElementById('tab-documentation')
const tabMeetings = document.getElementById('tab-meetings')

const contentSection = document.querySelector('.tabs-contents')
const knowledgeContent = document.getElementById('tab-knoweledge-content')
const communicationContent = document.getElementById('tab-communication-content')
const documentationContent = document.getElementById('tab-documentation-content')
const managementContent = document.getElementById('tab-management-content')


// const toggleTabs = () => {
//     tabs.forEach(tab => {
//         tab.addEventListener("click", (e) => {
//             // console.log(e.currentTarget.dataset.id);
//             const tabSelect = e.currentTarget;
//             console.log(tabSelect);
//         })
//     })
// }

// const knowledgeTab = () => {
//     if(tabCommunication.className === 'border inactive' && tabDocumentation.className === 'border inactive' && tabMeetings.className === 'border inactive') {
//         tabKnowledge.classname = 'border active'
//         knowledgeContent.className = 'visible'
//         contentSection.append(knowledgeContent)
//     } else { 
//         tabKnowledge.className = 'border inactive';
//         knowledgeContent.className = 'invisible'
//         contentSection.removeChild(knowledgeContent)
//     }
// }

// const communicationTab = () => {
//     if(tabKnowledge.className === 'border inactive' && tabDocumentation.className === 'border inactive' && tabMeetings.className === 'border inactive') {
//         tabCommunication.classname = 'border active'
//         communicationContent.className = 'visible'
//         contentSection.append(communicationContent)
//     } else {
//         tabCommunication.className = 'border inactive';
//         communicationContent.className = 'invisible'
//         contentSection.removeChild(communicationContent)
//     }
// }


tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        const tabSelect = e.currentTarget;
        if(tabSelect === tabKnowledge) {
            tabKnowledge.className = 'border active'
            knowledgeContent.className = 'visible'
            
        } else if(tabSelect === tabCommunication) {
            tabCommunication.className = 'border active'
            communicationContent.className = 'visible'
            contentSection.replaceChild(documentationContent)
            tabCommunication.className = 'border inactive'
            communicationContent.className = 'invisible'
            tabKnowledge.className = 'border inactive'
            knowledgeContent.className = 'invisible'
        }
    })
})

