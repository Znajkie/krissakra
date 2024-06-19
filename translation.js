i18next.init(
  {
    lng: 'sv',
    debug: true,
    fallbackLng: 'sv',
    resources: {
      //* Engelska
      en: {
        translation: {
          //* Navbar
          mainLink1: 'Home',
          mainLink2: 'About us',
          mainLink3: 'Services',
          mainLink4: 'Why Krissäkra?',
          mainLink5: 'Contact',
          //* Header title
          titleText: 'Did you know that 80% of all crises are foreseeable?',
          titleText2: 'Secure your building today, for a safer tomorrow!',
          //* Booking button
          bookingBtn: 'Contact us!',
          //* Why us
          whyUs: 'Why Krissäkra?',
          whyUs1:
            'At Krissäkra Sverige AB, we offer the tools and knowledge needed for housing cooperatives and communities to navigate before, during, and after a crisis.',
          whyUs2:
            'The common framework and individually tailored action plan form a foundation and insurance that protects your collective and individual values.',
          whyUs3:
            'We realized that a new concept was needed to clarify our vision, Collective Preparedness.',
          whyUs4:
            'Strengthening both the individual and your group while safeguarding your shared values.',
          whyUs5: 'Think ahead and choose us for an investment in your future!',
          //* About us
          aboutUs: 'Who are we at Krissäkra?',
          aboutUs1:
            'The team at Krissäkra consists of three founders with different backgrounds and experiences. ',
          aboutUs2:
            'We have successfully combined academic knowledge with practical experience to create a broad knowledge base and depth in our "know-how".',
          aboutUs3:
            'At Krissäkra Sverige AB, we strive not only to strengthen individual capability but also to promote collective preparedness and crisis management capability.',
          aboutUs4:
            'Our passion and driving force is to support society by helping companies, housing cooperatives, and communities develop effective contingency plans and crisis management strategies.',
          aboutUs5:
            'With our combined knowledge and experience, we create tailored solutions that prepare you for a safer future in a rapidly changing world, helping you both today and tomorrow.',
          aboutUs6:
            'For us, preparedness should be simple, and with the right conditions, it is also possible.',

          //* Product list
          product_listh3: 'What does it mean to Krissäkra?',
          product_list1_header: 'Site visit',
          product_list2_header: 'RSA (Risk and Vulnerability Analysis)',
          product_list3_header: 'Contingency plan',
          product_list4_header: 'Collective preparedness',
          product_list5_header: 'Equipment',
          product_list6_header: 'Krissäkra certification',
          product_list7_header: 'Safety and capability',
          // product_list8_header: '',
        },
      },
      //* Svenska
      sv: {
        translation: {
          //* Navigationsbar
          mainLink1: 'Hem',
          mainLink2: 'Om oss',
          mainLink3: 'Tjänster',
          mainLink4: 'Varför Krissäkra?',
          mainLink5: 'Kontakta',

          //* Huvudrubrik
          titleText:
            'Visste du att 80% av alla kriser var möjliga att förutse?',
          titleText2:
            'Krissäkra er fastighet idag, för en tryggare framtid imorgon!',
          //* Boka knapp
          bookingBtn: 'Boka nu!',

          //* Varför oss
          whyUs: 'Varför välja att Krissäkra?',
          whyUs1:
            'Vi på Krissäkra Sverige AB erbjuder de verktyg och den kunskap som krävs för att bostadsrättsföreningar och samfälligheter ska kunna navigera före, under och efter en kris.',
          whyUs2:
            'Det gemensamma ramverket och den individuellt framtagna handlingsplanen utgör en grund och försäkring som skyddar era gemensamma och individuella värden.',
          whyUs3:
            'Vi insåg att det behövdes ett nytt begrepp för att tydliggöra vår vision, Samberedskap.',
          whyUs4:
            'Den gemensamma beredskapen skapar en stabil grund för att skydda era gemensamma värden.',
          whyUs5:
            'Tänk efter före och välj oss för en investering som gör skillnad.',
          //* Om oss
          aboutUs: 'Vilka är vi på Krissäkra?',
          aboutUs1:
            'Teamet på Krissäkra utgörs av tre grundare med olika bakgrunder och erfarenheter.',
          aboutUs2:
            'Vi har framgångsrikt kombinerat akademisk kunskap med praktisk erfarenhet för att skapa en bred kunskapsbas och ett djup i vårt "know-how".',
          aboutUs3:
            'På Krissäkra Sverige AB strävar vi inte bara efter att stärka individuell förmåga utan även att främja kollektiv beredskap och krishanteringsförmåga.',
          aboutUs4:
            'Vår passion och drivkraft är att stötta samhället genom att hjälpa företag, bostadsrättsföreningar och samfälligheter att utveckla effektiva beredskapsplaner och krisledningsstrategier.',
          aboutUs5:
            'Med vår samlade kunskap och erfarenhet skapar vi skräddarsydda lösningar som förbereder er för en tryggare framtid i en snabbt föränderlig omvärld vilket hjälper er både idag och imorgon.',
          aboutUs6:
            'För oss ska beredskap vara enkelt, och med rätt förutsättningar är det också möjligt.',

          //* Produktlista
          product_listh3: 'Vilka steg tar vi för att Krissäkra just er?',
          product_list1_header: 'Platsbesök',
          product_list2_header: 'RSA (Risk och sårbarhetsanalys)',
          product_list3_header: 'Beredskapsplan',
          product_list4_header: 'Samberedskap',
          product_list5_header: 'Utrustning',
          product_list6_header: 'Krissäkra certifiering',
          product_list7_header: 'Trygghet och förmåga',
          // product_list8_header: '',
        },
      },
    },
  },
  function (err, t) {
    // Language initialization callback
    if (err) {
      console.error('Error initializing i18next:', err);
      return;
    }

    updateContent(); // Initial content update
  }
);

// Function to update content based on translation
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    var key = element.getAttribute('data-i18n');
    element.innerHTML = i18next.t(key);
  });
}

// Function to change language
function changeLanguage(lng) {
  i18next.changeLanguage(lng, function (err, t) {
    if (err) {
      console.error('Error changing language:', err);
      return;
    }
    updateContent(); // Update content after language change
    updateLanguageButtonText(lng); // Update language button text
  });
}

// Function to update language button text
function updateLanguageButtonText(currentLang) {
  const btn = document.getElementById('languageBtn');
  if (currentLang === 'sv') {
    btn.setAttribute('onclick', "changeLanguage('en')");
  } else {
    btn.setAttribute('onclick', "changeLanguage('sv')");
  }
}
