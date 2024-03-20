i18next.init(
  {
    lng: 'sv',
    debug: true,
    fallbackLng: 'sv',
    resources: {
      en: {
        translation: {
          mainLink1: 'Home',
          mainLink2: 'FAQ',
          mainLink3: 'Services',
          mainLink4: 'About Krissäkra',
          mainLink5: 'Contact',
          mainLink6: 'Related links',
          subtitleText: 'Safe today, prepared tomorrow',
          aboutTitle:
            'Customized emergency and security planning for you, companies, and associations.',
          hisotry__headerText:
            'Crisis management and crisis plans are crucial components for both individuals and associations to effectively handle unforeseen situations. These strategies aim to minimize the damage of potential crises and ensure a swift recovery. By developing robust crisis plans, individuals and organizations can prepare for various scenarios and thus reduce the impact of negative events',
        },
      },
      sv: {
        translation: {
          mainLink1: 'Hem',
          mainLink2: 'FAQ',
          mainLink3: 'Tjänster',
          mainLink4: 'Om Krissäkra',
          mainLink5: 'Kontakta',
          mainLink6: 'Relaterade länkar',
          subtitleText: 'Trygg idag förberedd imorgon',
          aboutTitle:
            'Skräddarsydd beredskap och säkerhet planering för dig, företag och förening.',
          hisotry__headerText:
            'Krishantering och krisplaner är avgörande komponenter för både individer och föreningar för att effektivt hantera oförutsedda situationer. Dessa strategier syftar till att minimera skadan av potentiella kriser och säkerställa en snabb återhämtning. Genom att utveckla robusta krisplaner kan individer och organisationer förbereda sig för olika scenarier och därmed minska påverkan av negativa händelser.',
          // products
          productsSubtitleText1: 'Är du en okänd krislednings aktör?',
          productsSubtitleText2:
            'Samberedskap är inte enbart ett nytt ord, utan ett nytt sätt att tänka på',
          productsSubtitleText3:
            'Vår analys är mer än en plan för att hantera en eventuell kris.',
          productsSubtitleText4:
            'Förhindra, samarbeta och effektivt lösa situationer på egen hand',
          // productsSubtitleText5:
          //   'Med våra samarbets partners kan vi även erbjuda hjärt och lung räddning, brandskydd på plats!',
        },
      },
    },
  },
  function (err, t) {
    updateContent();
  }
);

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    var key = element.getAttribute('data-i18n');
    element.innerHTML = i18next.t(key);
  });
}

function changeLanguage(lng) {
  i18next.changeLanguage(lng, function () {
    updateContent();
    updateLanguageButtonText(lng);
  });

  function updateLanguageButtonText(currentLang) {
    const btn = document.getElementById('languageBtn');
    if (currentLang === 'sv') {
      btn.innerText = 'English';
      btn.setAttribute('onclick', "changeLanguage('en')");
    } else {
      btn.innerText = 'Svenska';
      btn.setAttribute('onclick', "changeLanguage('sv')");
    }
  }
}
