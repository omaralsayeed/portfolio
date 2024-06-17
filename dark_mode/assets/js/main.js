$('header, section, footer').hide();
function hideLoader() {
    $('header, section, footer').fadeIn();
    $('#loading').fadeOut();
    AOS.init();
}
setTimeout(hideLoader, 2000)
function isCalendlyEvent(e) {
    return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
};

window.addEventListener("message", function(e) {
    if(isCalendlyEvent(e)) {
      /* Example to get the name of the event */
        console.log("Event name:", e.data.event);

      /* Example to get the payload of the event */
        console.log("Event details:", e.data.payload);
    }
});

let navbarCheckbox = document.querySelector('input[type=checkbox]#nav-mobile-open')
navbarCheckbox.addEventListener('click', (e) => {
    var menuIcon = document.querySelector('span#nav-mobile label i')
    var navBarList = document.querySelector('ul.nav-links')
    if (e.target.checked) {
        menuIcon.className = 'bx bx-x-circle'
        navBarList.style.display = 'block'
    } else {
        menuIcon.className = 'bx bx-menu-alt-right'
        navBarList.style.display = 'none'
    }
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight - 80,
            behavior: 'smooth'
        });
    });
});



const experiences = [
    {
        role: 'Wordpress Developer Intern',
        company: 'Artnize',
        duration: 'Dec. 2020 – Feb. 2021',
        location: 'Giza, Egypt',
        achievements: [
            'Created custom themes and plugins to enhance website functionality.',
            'Streamlined the content management system, resulting in a 30% reduction in content creation time.',
            'Leveraged WordPress and Elementor to enhance the overall user experience on the website.',
            'Evaluated website performance metrics, identifying areas for improvement.'
        ]
    },
    {
        role: 'Student Guide',
        company: 'DECI',
        duration: 'Jun. 2023 - Sept. 2023',
        location: 'Cairo, Egypt',
        achievements: [
            'Assisted students in developing essential digital literacy skills, including effective communication and collaboration.',
            'Encouraged critical thinking and problem-solving skills in the digital context.',
            'Provided personalized support to 150+ students as they navigated the digital landscape.'
        ]
    },
    {
        role: 'Coding Instructor',
        company: 'iSchool',
        duration: 'Oct. 2023 - Present',
        location: 'Remote',
        achievements: [
            'Actively worked on personal development based on monthly performance reports, and Maintained a performance score of 96% or higher consistently.',
            'Regularly stayed informed about the latest iSchool curricula to ensure relevance and alignment with industry standards.',
            'Provided detailed feedback for each student at the end of each session which help enhance student performance by addressing areas of improvement.'
        ]
    }
]

showExpeirence = (index) => {
    var experienceElement = document.querySelector('span#experience')
    experienceElement.querySelector('h4#experience-role').innerHTML = `${experiences[index].role} @ <span class="dark-green">${experiences[index].company}</span>`
    experienceElement.querySelector('h5#experience-duration').textContent = experiences[index].duration
    experienceElement.querySelector('h5#experience-location').textContent = experiences[index].location
    textAchievements = ''

    experiences[index].achievements.forEach((ach) => {
        textAchievements += `<li>${ach}</li>`
    })
    experienceElement.querySelector('ul.achievements').innerHTML = textAchievements
}

var timeLineSubjectsElement = document.querySelector('div#timeline ul#timeline-subjects')
var timeLineSubjects = ''
experiences.forEach((exp, index) => {
    timeLineSubjects += `<li class="timeline-items sans-semibold" onclick="showExpeirence(${index});">${exp.company}</li>`
})
timeLineSubjectsElement.innerHTML = timeLineSubjects

const technologiesIcon = {
    bootstrap: `<i class='bx bxl-bootstrap'></i>`,
    jquery: `<i class='bx bxl-jquery'></i>`,
    javascript: `<i class='bx bxl-javascript'></i>`,
    php: `<i class='bx bxl-php'></i>`,
    mysql: `<i class='bx bx-data' ></i>`,
    mongo: `<i class='bx bxl-mongodb' ></i>`
}

const projects = [
    {
        title: 'Chemistry Arena',
        link: 'http://chemistry-arena.com',
        images: [
            './assets/img/projects/chemistry-arena.jpg',
            './assets/img/projects/chemistry-arena-admin-panel.png',
        ],
        description: '',
        technologies: [
            'javascript',
            'mysql',
            'php',
            'jquery'
        ]
    },
    {
        title: 'Dr. Ziad Anwar',
        link: '#',
        images: [
            './assets/img/projects/drziadanwar.png',
            './assets/img/projects/dr-ziad-anwar.jpg'
        ],
        description: '',
        technologies: [
            'bootstrap',
            'javascript',
            'mysql',
            'php',
            'jquery'
        ]
    },
    {
        title: 'The True Tutor',
        link: 'https://thetruetutor.com',
        images: [
            './assets/img/projects/thetruetutor-home.png',
            './assets/img/projects/thetruetutor-admin.png',
        ],
        description: '',
        technologies: [
            'bootstrap',
            'javascript',
            'mysql',
            'php',
            'jquery'
        ]
    },
]

let howGoodAreYouElement = document.querySelector('div#how-good-are-you')
projects.forEach((prjct) => {
    var imagesText = ''
    var technologiesHTML = ''
    prjct.images.forEach((img) => {
        imagesText += `<img src="${img}" width="400" height="300" alt="${prjct.title}">`
    })
    prjct.technologies.forEach((tchnology) => {
        technologiesHTML += technologiesIcon[tchnology]
    })
    
    howGoodAreYouElement.innerHTML += `<div class="project-container">
        <div class="project-details">
            ${imagesText}
            <br><br>
            <h3 class="sans-semibold dark-green">${prjct.title}</h3>
            <p class="sans-light">${prjct.description}</p>
            <br>
            <div class="project-technologies">
                ${technologiesHTML}
            </div>
        </div>
    </div>`
})