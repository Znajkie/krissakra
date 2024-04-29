i18next.init(
  {
    lng: 'sv',
    debug: true,
    fallbackLng: 'sv',
    resources: {
      en: {
        translation: {
          mainLink1: 'Home',
          mainLink2: 'About us',
          mainLink3: 'Services',
          mainLink4: 'Why Krissäkra?',
          mainLink5: 'Contact',

          subtitleText: 'Did you know that 80% of all crises are foreseeable?',
          subtitleText2: 'Secure your building today, for a safer tomorrow!',
          whyUs: 'Why Krissäkra?',
          whyUs1:
            'The current global situation has placed new and increased demands on society.',
          whyUs2:
            'Securing your housing association (BRF) or community creates a strong and proactive foundation for effective crisis management and contingency planning, so that together you have the conditions and capabilities to face the future, no matter in what form it manifests.',
          whyUs3:
            'With proper preparation and effective contingency planning, you have the ability to act when crisis strikes.',
          whyUs4:
            'Krissäkra Sverige AB, offer the tools and knowledge required to prepare you to safely navigate before, during, and after a crisis.',
          whyUs5:
            'Strengthening both the individual and your group while safeguarding your shared values.',
          whyUs6: 'Think ahead and choose us for an investment in your future!',

          aboutUs: 'Who are we at Krissäkra?',
          aboutUs1:
            'The team at Krissäkra consists of three founders with diverse backgrounds and experiences, where we have combined academic expertise with practical experience to create a solid knowledge base and know-how.',
          aboutUs2:
            'At Krissäkra Sverige AB, we strive not only to strengthen individual capabilities but also to contribute to collective preparedness and crisis management capabilities.',
          aboutUs3:
            'Our team is dedicated to supporting businesses, housing associations, and communities by developing effective contingency plans and crisis management capabilities.',
          aboutUs4:
            'Through our collective knowledge and experience, we create tailored solutions that prepare you for a safer and more stable future, both today and tomorrow.',
        },
      },
      sv: {
        translation: {
          //NAVBAR SWE
          mainLink1: 'Hem',
          mainLink2: 'Om oss',
          mainLink3: 'Tjänster',
          mainLink4: 'Varför Krissäkra?',
          mainLink5: 'Kontakta',

          //HEADER SWE
          subtitleText:
            'Visste du att 80% av alla kriser var möjliga att förutse?',
          subtitleText2:
            'Krissäkra din fastighet idag, för en tryggare framtid imorgon!',

          // WHY US SECTION SWE
          whyUs: 'Varför välja att Krissäkra?',
          whyUs1:
            'Det rådande omvärldsläget ställer nya och ökade krav på samhället.',
          whyUs2:
            'Att krissäkra din bostadsrättsförening (BRF) eller samfällighet skapar en stark och proaktiv grund för en effektiv krishantering och beredskapsplanering, vilket gör att ni tillsammans skapar förutsättningar för att möta framtiden, oavsett i vilken form den manifesterar sig.',
          whyUs3:
            'Med rätt förberedelse och en effektiv beredskapsplanering har ni förmågan att agera om väl krisen slår till.',
          whyUs4:
            ' Vi på Krissäkra Sverige erbjuder de verktyg och den kunskap som krävs för ni ska kunna navigera före under och efter en kris, vilket stärker både individen och er som grupp.',
          whyUs5:
            'Den gemensamma beredskapen skapar en stabil grund för att skydda era gemensamma värden.',
          whyUs6:
            'Tänk efter före och välj oss för en investering som gör skillnad.',
          // ABOUT US SECTION SWE
          aboutUs: 'Vilka är vi på Krissäkra?',
          aboutUs1:
            'Teamet på Krissäkra består av tre grundare med olika bakgrunder och erfarenheter där vi kombinerat akademisk expertis med praktisk erfarenhet för att skapa en stabil kunskapsbas och ett ”know how”.',
          aboutUs2:
            'På Krissäkra Sverige AB strävar vi efter att inte bara stärka individuell förmåga utan också bidra till kollektiv beredskap och krishanteringsförmåga.',
          aboutUs3:
            'Vårt team brinner för att stödja företag, bostadsrättsföreningar och samfälligheter genom att utveckla effektiva beredskapsplaner och krisledningsförmågor.',
          aboutUs4:
            'Genom vår samlade kunskap och erfarenhet skapar vi skräddarsydda lösningar som förbereder er för en tryggare och mer stabil framtid, både idag och imorgon.',
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
