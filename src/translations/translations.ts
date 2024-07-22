import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  CookieBannerTranslation,
  ExitboxTranslation,
  FooterTranslation,
  JumbotronTranslation,
  LoadingScreenTranslation,
  RotationGuardTranslation,
  SocialIconsTranslation,
  StoryCardTranslation,
  TagboxTranslation,
  TagListTranslation,
  TemplateLandingPageTranslation,
  Translation,
} from './types';

// CookieBanner
export const CookieBannerTranslations: CookieBannerTranslation = {
  en: {
    headline:
      'Did you bring any cookies to make your story time more enjoyable?',
    firstPart:
      'We brought our own, but these are not suitable for eating. Our cookies are small files that we save on your device to provide you with the best quality service',
    secondPart:
      'We store information about the application settings you have selected in them. If you do not agree to this, please leave this website. If you would like to find out more, feel free to contact us.',
  },
  pl: {
    headline:
      'Czy przyniosłeś ciasteczka, aby umilić sobie spotkanie z bajkami?',
    firstPart:
      'My przynieśliśmy swoje, ale te nie nadają się do jedzenia. Nasze ciasteczka to niewielkie pliki, które zapisujemy na Twoim urządzeniu, aby móc dostarczyć Ci usługę w najlepszej jakości.',
    secondPart:
      'Zapisujemy w nich informacje o ustawieniach aplikacji, jakie zostały przez ciebie wybrane. Jeżeli nie wyrażasz na to zgody, opuść tę stronę. Jeśli chciałbyś dowiedzeć się więcej, skontaktuj się z nami.',
  },
};

// Exitbox
export const ExitboxTranslations: ExitboxTranslation = {
  en: {
    headline: 'Would you like to stop reading and return to the home page?',
    acceptButton: 'Yes, take me to the home page',
    declineButton: 'No, I want to keep reading',
  },
  pl: {
    headline: 'Czy chesz zakończyć czytanie i wrócić do strony głównej?',
    acceptButton: 'Tak, wracam do strony głównej',
    declineButton: 'Nie, chcę czytać dalej',
  },
};

// Footer
export const FooterTranslations: FooterTranslation = {
  en: {
    mainCopyrights: 'Fabledose Team. All rights reserved.',
    copyrightsNote:
      'The copyrights on this page belong to the individuals participating in project:',
  },
  pl: {
    mainCopyrights: 'Zespół Fabledose. Wszelkie prawa zastrzeżone.',
    copyrightsNote:
      'Prawa autorskie na tej stronie należą do osób prywatnych tworzących projekt:',
  },
};

// Jumbotron
export const JumbotronTranslations: JumbotronTranslation = {
  en: {
    subtitle: 'Fabledose',
    before: 'a place where fairy tales',
    after: 'while reading',
    redLineText: 'come to life',
  },
  pl: {
    subtitle: 'Fabledose',
    before: 'miejsce, w którym baśnie',
    after: 'podczas czytania',
    redLineText: 'ożywają',
  },
};

// LoadingScreen
export const LoadingScreenTranslations: LoadingScreenTranslation = {
  en: {
    alt: 'Loading...',
    label: 'Loading Fable',
  },
  pl: {
    alt: 'Ładowanie...',
    label: 'Ładowanie Bajki',
  },
};

// RotationGuard
export const RotationGuardTranslations: RotationGuardTranslation = {
  en: {
    mainMessage: 'Rotate your device to view our fable.',
    detailedMessage: [
      'Our stories have been optimised for devices in a horizontal layout.',
      'Rotate your device (or enlarge the browser window) if you see this message.',
      'Tablets, laptops, and larger monitors will provide you with the best reading experience.',
      'If you are using a mobile phone, consider switching to a different device.',
    ],
  },
  pl: {
    mainMessage: 'Obróć urządzenie aby zobaczyć bajkę.',
    detailedMessage: [
      'Nasze bajki zostały zoptymalizowane pod urządzenia w ułożeniu horyzontalnym.',
      'Obróć swoje urządzenie (lub rozciągnij okno przegladarki) jeżeli widzisz ten komunikat.',
      'Tablety, laptopy i większe monitory zapewnią ci najlepsze doświadczenie podczas czytania.',
      'Jeżeli używasz telefonu komórkowego, rozważ zmianę urządzenia do oglądania naszych propozycji.',
    ],
  },
};

// SocialIcons
export const SocialIconsTranslations: SocialIconsTranslation = {
  en: {
    cta: 'Follow us on:',
    fbLabel: 'Go to Facebook Page',
    fbLink: 'https://www.facebook.com/fabledose/',
    instLabel: 'Go to Instagram Page',
    instLink: 'https://instagram.com/fabledose',
    subLabel: 'Go to Substack',
    subLink: 'https://fabledose.substack.com/',
  },
  pl: {
    cta: 'Obserwuj nas na:',
    fbLabel: 'Przejdź na Facebook',
    fbLink: 'https://www.facebook.com/fabledosePolska',
    instLabel: 'Przejdź na Instagram',
    instLink: 'https://instagram.com/fabledose',
    subLabel: 'Przejdź na Substack',
    subLink: 'https://fabledose-polska.substack.com/',
  },
};

// StoryCard - Goldilock
export const StoryCardGoldilock: StoryCardTranslation = {
  en: {
    title: 'Goldilock and Three Bears',
    url: '/goldilock-and-three-bears',
    summary:
      "The golden-haired girl stumbles upon the bears' cabin and starts causing mischief there, learning a lesson about the importance of responsibility.",
    synopsis:
      "The fairy tale tells about three teddy bears who lived in a cozy forest. One day, a golden-haired girl, known for her mischievous nature, broke into their house and caused a ruckus, eating their porridge, breaking their armchair and making a mess in their bedroom. When the bears returned, they realized what had happened and started looking for the intruder. The golden-haired girl, terrified, decided to repair the damage and apologize to the bears. She spent the whole day with them, helping them prepare the porridge, fixing the car seat, and tidying up the bedroom. The fairy tale has a happy ending when the girl learns a lesson about respect for other people's property and enjoys dinner and dessert together with the teddy bears. He emphasizes that although children sometimes do mischief, it is important to apologize and correct mistakes.",
  },
  pl: {
    title: 'Złotowłosa i Trzy Misie',
    url: '/zlotowlosa-i-trzy-misie',
    summary:
      'Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, w konsekwencji czego otrzymuje lekcję na temat znaczenia odpowiedzialności.',
    synopsis:
      'Bajka opowiada o trzech misiach, które mieszkały w przytulnym lesie. Pewnego dnia złotowłosa dziewczynka, znana z psotnego charakteru, wtargnęła do ich domu i narobiła zamieszania, zjadając ich owsiankę, psując fotelik i bałaganiąc w sypialni. Gdy misie wróciły, zorientowały się, co się stało, i zaczęły szukać intruza. Złotowłosa dziewczynka, przerażona, postanowiła naprawić szkody i przeprosić misie. Spędziła z nimi cały dzień, pomagając w przygotowaniu owsianki, naprawiając fotelik i porządkując sypialnię. Bajka kończy się happy endem, gdy dziewczynka uczy się lekcji o szacunku do cudzego mienia i wspólnie z misiami cieszy się kolacją oraz deserem. Podkreśla, że choć dzieci czasem robią psoty, ważne jest przeproszenie i naprawienie błędów.',
  },
};

// StoryCard - Three Little Pigs
export const StoryCardThreeLittlePigs: StoryCardTranslation = {
  en: {
    title: 'Three Little Pigs',
    url: '/three-little-pigs',
    summary:
      'Three little pigs set off into the big world to start an independent life. Their story becomes dramatic when they have to confront the wolf.',
    synopsis: '',
  },
  pl: {
    title: 'Trzy Świnki',
    url: '/trzy-swinki',
    summary:
      'Trzy świnki wyruszają w wielki świat aby rozpocząć samodzielne życie. Ich historia nabiera dramatycznych barw, gdy muszą się skonfrontować z wilkiem.',
    synopsis: '',
  },
};

// Tagbox
export const TagboxTranslations: TagboxTranslation = {
  en: {
    tagboxTitle: 'Themes and recommendation for',
    tagboxSynopsis: 'Synopsis',
  },
  pl: {
    tagboxTitle: 'Motywy i rekomendacje dla utworu',
    tagboxSynopsis: 'Streszczenie',
  },
};

// TagElement
// TagElement is translated directly in component folder.

// TagList
export const TagListTranslations: TagListTranslation = {
  en: {
    general: 'General',
    themes: 'Themes',
    details: 'Details',
  },
  pl: {
    general: 'Utwór',
    themes: 'Motywy',
    details: 'Szczegóły',
  },
};

//TemplateLandingPage
export const TemplateLandingPageTranslations: TemplateLandingPageTranslation = {
  en: {
    storyCardButtonLabel: {
      read: 'Read',
      comingSoon: 'Coming Soon',
    },
    projectSummary: {
      mainText: [
        'We are a group of friends and professionals united by a common passion for fairy tales and stories for children. Among us are educators, kindergarten and nursery teachers, programmers and artists. We all believe that reading fairy tales to a child is an important part of their development. With this in mind, we started working on creating a magical portal filled with animated books for children to read.',
        "We want to offer classic fairy tales that have stood the test of time, told not only in words but also with animated illustrations. Each story has been selected for depth and meaning, with the goal of bringing out the best in children's imaginations. You can safely leave our fairy tales for your child to read on their own or read them with your child at bedtime. These stories are designed to captivate and inspire young and old alike.",
        'We will launch a crowdfunding campaign soon! We encourage you to support this project. Without your involvement, projects like this - focused on an idea other than money - have a limited chance of coming to fruition. With your support, we can create an interactive platform that will immerse children in the magical world of stories. Stay tuned for further updates. We will launch our campaign sooner than you think!',
      ],
      supplementaryText: [
        "We invite you to engage in this journey. Follow us on social media or use the button below to subscribe to our newsletter. Stay in touch and be the first to know about the project's progress. Together we can ignite the spark of imagination in the hearts of children and ensure that animated fairy tales to read will inspire future generations.",
        'Thank you for your interest in our project. We look forward to hearing from you soon!',
      ],
    },
  },
  pl: {
    storyCardButtonLabel: {
      read: 'Czytaj',
      comingSoon: 'Dostępne wkrótce',
    },
    projectSummary: {
      mainText: [
        'Jesteśmy grupą przyjaciół i profesjonalistów, których łączy wspólna pasja do baśni i opowiadań dla dzieci. Są wśród nas pedagodzy, nauczyciele przedszkolni i żłobkowi, programiści i artyści. Wszyscy kierujemy się przekonaniem, że czytanie dziecku bajek jest istotną częścią jego rozwoju. Mając to na uwadze, rozpoczęliśmy pracę nad stworzeniem magicznego portalu wypełnionego animowanymi książkami do czytania dla dzieci.',
        'Chcemy oferować klasyczne baśnie, które przetrwały próbę czasu, opowiedziane nie tylko słowem, ale też animowaną ilustracją. Każda historia została wybrana pod kątem głębi i znaczenia, mając na celu wydobycie tego, co w dziecięcej wyobraźni najlepsze. Możesz bezpiecznie zostawić nasze bajki dziecku do samodzielnego czytania, lub czytać je z własną pociechą na dobranoc. Opowieści te zostały zaprojektowane tak, aby urzekać i inspirować zarówno młodych, jak i starszych.',
        'Już wkrótce uruchomimy kampanię crowdfundingową! Zachęcamy Cię do wsparcia tego projektu. Bez twojego zaangażowania takie projekty jak ten — skupione wokół idei innej niż pieniądze — mają ograniczone szanse na zaistnienie. Dzięki Twojemu wsparciu możemy stworzyć interaktywną platformę, która zanurzy dzieci w magicznym świecie opowieści. Pozostań na bieżąco z dalszymi aktualizacjami. Uruchomimy naszą kampanię wcześniej, niż myślisz!',
      ],
      supplementaryText: [
        'Zapraszamy Cię do zaangażowania w tę podróż. Śledź nas na profilach społecznościowych lub użyj poniższego przycisku aby zapisać się do naszego newslettera. Pozostań w kontakcie i jako pierwszy dowiaduj się o postępie prac nad projektem. Razem możemy rozpalić iskrę wyobraźni w sercach dzieci i sprawić, że animowane baśnie do czytania będą inspirowały przyszłe pokolenia.',
        'Dziękujemy za zainteresowanie naszym projektem. Do usłyszenia wkrótce!',
      ],
    },
  },
};

export const useTranslation = <T>(translations: Translation<T>): T => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<T>(
    translations.en,
  );

  useEffect(() => {
    setActiveTranslations(translations[languageInfo] || translations.en);
  }, [languageInfo, translations]);

  return activeTranslations;
};
