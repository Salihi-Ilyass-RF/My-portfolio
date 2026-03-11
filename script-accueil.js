window.addEventListener('DOMContentLoaded', function () {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
});

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    applyLangButtons(lang);

    const translations = {
        welcomeTitle:    { fr: '👋 Bienvenue sur mon site',      en: '👋 Welcome to my website' },
        introText:       { fr: 'Étudiant en génie informatique à l\'Université Mohammed Premier, Oujda. Passionné par le développement web et la programmation, je m\'efforce constamment d\'apprendre et de maîtriser les nouvelles technologies.',
                           en: 'Computer engineering student at Mohammed Premier University, Oujda. Passionate about web development and programming, I constantly strive to learn and master new technologies.' },
        missionContent:  { fr: 'Je mets mes compétences au service de vos projets pour créer des solutions innovantes et performantes. Que ce soit pour un site web, une application ou tout autre projet numérique, je suis là pour vous accompagner.',
                           en: 'I put my skills at the service of your projects to create innovative and efficient solutions. Whether for a website, an application, or any other digital project, I am here to support you.' },
        discoveryText:   { fr: 'Sur ce site, vous découvrirez mon parcours, mes compétences techniques, les services que je propose ainsi que les projets sur lesquels j\'ai travaillé. Chaque projet est une opportunité d\'apprendre, de grandir et de repousser mes limites.',
                           en: 'On this site, you will discover my background, my technical skills, the services I offer, and the projects I have worked on. Each project is an opportunity to learn, grow, and push my limits.' },
        statsTitle:      { fr: '📊 En Chiffres',                 en: '📊 By the Numbers' },
        contactText:     { fr: 'N\'hésitez pas à me contacter pour discuter de vos projets ou simplement pour échanger sur les dernières tendances en développement web. Je suis toujours ouvert aux nouvelles opportunités et collaborations !',
                           en: 'Feel free to contact me to discuss your projects or simply to exchange ideas about the latest trends in web development. I am always open to new opportunities and collaborations!' }
    };

    document.getElementById('welcome-title').textContent  = translations.welcomeTitle[lang];
    document.getElementById('intro-text').textContent     = translations.introText[lang];
    document.getElementById('mission-content').textContent = translations.missionContent[lang];
    document.getElementById('discovery-text').textContent = translations.discoveryText[lang];
    document.getElementById('stats-title').textContent    = translations.statsTitle[lang];
    document.getElementById('contact-text').textContent   = translations.contactText[lang];
}
 