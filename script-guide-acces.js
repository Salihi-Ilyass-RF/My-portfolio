const TRANSLATIONS = {
    fr: {
        title:       "Accès Restreint",
        subtitle:    "Le Guide de Création est une ressource exclusive réservée aux membres connectés. Connectez-vous ou créez un compte pour accéder au contenu complet.",
        previewTitle:"✨ Ce que vous découvrirez :",
        previewItems:[
            "Les technologies utilisées (HTML, CSS, JavaScript)",
            "Architecture et structure du site",
            "Animations et effets visuels",
            "Système d'authentification",
            "Gestion des commentaires",
            "Conseils et astuces de développement"
        ],
        infoBox:  "💡 Astuce : L'inscription est gratuite et ne prend que quelques secondes !",
        btnLogin: "🔐 Se connecter / S'inscrire",
        btnHome:  "🏠 Retour à l'accueil"
    },
    en: {
        title:       "Restricted Access",
        subtitle:    "The Creation Guide is an exclusive resource reserved for logged-in members. Log in or create an account to access the full content.",
        previewTitle:"✨ What you will discover:",
        previewItems:[
            "Technologies used (HTML, CSS, JavaScript)",
            "Site architecture and structure",
            "Animations and visual effects",
            "Authentication system",
            "Comments management",
            "Development tips and tricks"
        ],
        infoBox:  "💡 Tip: Registration is free and only takes a few seconds!",
        btnLogin: "🔐 Log in / Sign up",
        btnHome:  "🏠 Back to home"
    }
};

let currentTheme = localStorage.getItem('preferredTheme') || 'endra';
let currentLang  = localStorage.getItem('preferredLanguage') || 'fr';

function changeTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('preferredTheme', theme);
    applyTheme(theme);
}

function applyTheme(theme) {
    document.body.classList.remove('theme-endra', 'theme-normal');
    document.body.classList.add('theme-' + theme);

    document.querySelectorAll('#themeSwitcher .ctrl-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function changeLang(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    applyLang(lang);
}

function applyLang(lang) {
    const t = TRANSLATIONS[lang];

    document.getElementById('title').textContent       = t.title;
    document.getElementById('subtitle').textContent    = t.subtitle;
    document.getElementById('previewTitle').textContent= t.previewTitle;
    document.getElementById('infoBox').textContent     = t.infoBox;
    document.getElementById('btnLogin').textContent    = t.btnLogin;
    document.getElementById('btnHome').textContent     = t.btnHome;

    const ul = document.getElementById('previewList');
    ul.innerHTML = t.previewItems
        .map(item => `<li>${item}</li>`)
        .join('');

    document.querySelectorAll('#langSwitcher .ctrl-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
}

function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        window.location.href = 'guide.html';
    }
}

window.addEventListener('DOMContentLoaded', function () {
    checkAuth();
    applyTheme(currentTheme);
    applyLang(currentLang);
});
