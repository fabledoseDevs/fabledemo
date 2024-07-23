import { useEffect, useState } from 'react';

import { useLanguageContext } from '@/context/LanguageContext/LanguageContext.provider';

import type {
  CookieBannerTranslation,
  ExitboxTranslation,
  FooterTranslation,
  JumbotronTranslation,
  LoadingScreenTranslation,
  ModalWindowTranslation,
  RotationGuardTranslation,
  SocialIconsTranslation,
  StoryCardTranslation,
  StoryPageTranslation,
  StorySummaryTranslation,
  SubstackButtonTranslation,
  TagboxTranslation,
  TagListTranslation,
  TemplateLandingPageTranslation,
  ToolboxTranslation,
  Translation,
  TutorialTranslation,
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
    headline: 'Would you like to cease reading and return to the homepage?',
    acceptButton: 'Yes, take me to the homepage',
    declineButton: 'No, I wish to continue reading',
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

// ModalWindow
export const ModalWindowTranslations: ModalWindowTranslation = {
  en: { exit: 'Close' },
  pl: { exit: 'Zamknij' },
};

// RotationGuard
export const RotationGuardTranslations: RotationGuardTranslation = {
  en: {
    mainMessage:
      'Please rotate your device to experience our fable as intended.',
    detailedMessage: [
      'Our stories have been optimized for devices in a horizontal layout.',
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

// StoryCard - Goldilocks
export const StoryCardGoldilocks: StoryCardTranslation = {
  en: {
    title: 'Goldilocks and Three Bears',
    url: '/goldilocks-and-three-bears',
    summary:
      "The golden-haired girl accidentally discovers the bears' cabin and begins to create mischief, ultimately learning a lesson about the importance of responsibility.",
    synopsis:
      "The fairy tale recounts the story of three bears who resided in a cozy forest. One day, a golden-haired girl, known for her mischievous nature, entered their home without permission and caused considerable disruption—eating their porridge, damaging their armchair, and creating a mess in their bedroom. Upon returning, the bears discovered the chaos and began searching for the intruder. Initially overwhelmed by her conscience, the golden-haired girl fled from the bears' cabin. However, after overcoming her fears, she returned to make amends by repairing the damage and apologizing to the bears. She spent the entire day assisting them in preparing porridge, mending the armchair, and tidying up the bedroom. The tale concludes on a positive note, as the girl learns a valuable lesson about respecting others' property and shares a meal and dessert with the bears. It underscores that, although children may occasionally act mischievously, it is crucial to apologize and make amends.",
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
      'Three little pigs embark on a journey into the wider world to lead independent lives. Their tale takes a dramatic turn when they must confront a wolf.',
    synopsis:
      'Three little pigs leave their home to seek independence and build their own houses. Each pig constructs a dwelling using different materials: straw, sticks, and bricks. Their efforts are soon challenged by a cunning wolf who seeks to devour them. The wolf first attempts to blow down the straw house, then the stick house, but fails to breach the sturdier brick house. In their final refuge, the pigs successfully thwart the wolf’s attempts to enter and remain safe. Ultimately, the story highlights the virtues of diligence and the importance of careful planning, as the pig who built his house with bricks prevails over adversity, demonstrating the benefits of hard work and perseverance.',
  },
  pl: {
    title: 'Trzy Świnki',
    url: '/trzy-swinki',
    summary:
      'Trzy świnki wyruszają w wielki świat aby rozpocząć samodzielne życie. Ich historia nabiera dramatycznych barw, gdy muszą się skonfrontować z wilkiem.',
    synopsis:
      'Trzy małe świnki opuszczają swój dom w poszukiwaniu niezależności. Każda z nich zabiera się do zbudowania własnego domku używając różnych materiałów: słomy, patyków i kamieni. Ich wysiłek wkrótce zostaje wystawiony na próbę przez przebiegłego wilka, który pragnie je pożreć. Wilk skutecznie niszczy dom ze słomy oraz z patyków, ale nie udaje mu się to zburzyć solidniejszego domu z cegły. W swoim ostatnim schronieniu świnki skutecznie udaremniają próby wilka i przepędzają go. Historia ta podkreśla wagę pracowitości, znaczenie staranności oraz wytrwałości.',
  },
};

// StoryPage
export const StoryPageTranslations: StoryPageTranslation = {
  en: {
    theEnd: 'The End',
    restart: 'Read Again',
    goBack: 'Return to Homepage',
  },
  pl: {
    theEnd: 'Koniec',
    restart: 'Od początku',
    goBack: 'Strona główna',
  },
};

// StorySummary
export const StorySummaryTranslations: StorySummaryTranslation = {
  en: {
    author: 'Author:',
    adaptation: 'Adaptation:',
    illustrations: 'Illustrations:',
    readCTA: 'Read Fable',
  },
  pl: {
    author: 'Autor:',
    adaptation: 'Adaptatcja:',
    illustrations: 'Ilustracje:',
    readCTA: 'Czytaj Bajkę',
  },
};

// SubstackButton
export const SubstackButtonTranslations: SubstackButtonTranslation = {
  en: {
    substackLink: 'https://fabledose.substack.com',
    ariaLabel: 'Sign in to our newsletter',
    title: 'Our Newsletter and Blog',
    arrowAlt: 'Visit Substack',
  },
  pl: {
    substackLink: 'https://fabledosepolska.substack.com',
    ariaLabel: 'Zapisz się do Newslettera',
    title: 'Nasz Newsletter i Blog',
    arrowAlt: 'Przejdź do Substack',
  },
};

// Tagbox
export const TagboxTranslations: TagboxTranslation = {
  en: {
    tagboxTitle: 'Themes and recommendation',
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

// TemplateLandingPage
export const TemplateLandingPageTranslations: TemplateLandingPageTranslation = {
  en: {
    storyCardButtonLabel: {
      read: 'Read',
      comingSoon: 'Coming Soon',
    },
    projectSummary: {
      mainText: [
        "We are a collective of friends and professionals bound by a shared passion for fairy tales and children's literature. Our team comprises educators, kindergarten and nursery teachers, programmers, and artists. We all believe that reading fairy tales is a crucial aspect of a child’s development. With this belief, we embarked on creating a magical portal featuring animated books for children.",
        'Our goal is to present timeless classic fairy tales, not only through text but also with captivating animated illustrations. Each story has been carefully selected for its depth and significance, aiming to spark the imagination of young readers. You can confidently leave these fairy tales for your child to enjoy independently or share them together at bedtime. These stories are crafted to engage and inspire both children and adults.',
        'We will soon be launching a crowdfunding campaign and encourage you to support this endeavor. Projects like ours, driven by passion rather than profit, depend on community involvement to succeed. With your support, we can develop an interactive platform that immerses children in the enchanting world of stories. Stay tuned for updates—we will be launching our campaign sooner than you might expect!',
      ],

      supplementaryText: [
        'We invite you to join us on this journey. Follow us on social media or use the button below to subscribe to our newsletter. Stay connected and be the first to learn about the project’s progress. Together, we can ignite the spark of imagination in children and ensure that animated fairy tales inspire future generations.',
        'Thank you for your interest in our project. We eagerly anticipate your support and look forward to connecting with you soon!',
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

// Toolbox
export const ToolboxTranslations: ToolboxTranslation = {
  en: {
    textTheme: 'Font theme',
    default: 'Default',
    whiteText: 'White',
    yellowText: 'Yellow',
    blackText: 'Black',
    whiteTextLightShadow: 'White on Light Shadow',
    whiteTextStrongShadow: 'White on Strong Shadow',
    yellowTextLightShadow: 'Yellow on Light Shadow',
    yellowTextStrongShadow: 'Yellow on Strong Shadow',
    fontSize: 'Font size',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    previewText:
      "Long ago, in a distant land surrounded by dark forests and picturesque mountains, there lived a beautiful princess named Snow White. Her skin was as pale as snow, and her hair was as black as ink. However, Snow White's idyllic life was imperiled by the whims of her malevolent stepmother, who was consumed by a desire to be deemed the fairest of them all.",
  },
  pl: {
    textTheme: 'Wygląd tekstu',
    default: 'Domyślne',
    whiteText: 'Biały Tekst',
    yellowText: 'Żółty Tekst',
    blackText: 'Czarny Tekst',
    whiteTextLightShadow: 'Biały Tekst / Delikatny Cień',
    whiteTextStrongShadow: 'Biały Tekst / Intensywny Cień',
    yellowTextLightShadow: 'Żółty Tekst / Delikatny Cień',
    yellowTextStrongShadow: 'Żółty Tekst / Intensywny Cień',
    fontSize: 'Wielkość czcionki ',
    small: 'Mała',
    medium: 'Średnia',
    large: 'Duża',
    previewText:
      'Dawno temu, w odległej krainie, otoczonej mrocznymi lasami i malowniczymi górami, żyła piękna królewna o imieniu Śnieżka. Jej skóra była biała jak śnieg, a włosy czarne jak atrament. Jednak szczęśliwe życie Śnieżki było zagrożone przez kaprys jej złej macochy, która ponad wszystko, pragnęła być uznawaną za najpięknijeszą...',
  },
};

// Tutorial
export const TutorialTranslations: TutorialTranslation = {
  en: {
    tutorialWelcome:
      'Would you like to use the tutorial that will guide you on how to read our fairy tales?',
    yes: 'Yes',
    no: 'No',
    previewText:
      'As he had said, so he did. He gathered twigs, sticks, and branches to construct a sturdy hut. The door was fashioned from salvaged planks, and he even added a window with shutters. The entire building process took three days. Content with his efforts, he dusted off his hands and settled down to fish.',
    stepSlide:
      'The Fabledose Library displays animated fairy tales for reading. Upon opening a fairy tale, you will be presented with an animated page of our virtual children’s book.',
    stepBoxBasic:
      'The animated background is accompanied by text that complements the imagery, ensuring a cohesive experience.',
    stepBoxAdvanced:
      'If the text appears too small or merges with the animation in the background, you can easily adjust it by increasing the font size, altering its color, or adding a grey background behind the text.',
    stepOptions: [
      'In the bottom left corner, you will find settings icons. The home icon (',
      ') will return you to the main page. The settings list icon (',
      ') will open a settings window where you can adjust the font size and its background. The frame icon (',
      ') will enable full-screen mode for the fairy tale.',
    ],
    stepSlideSwitch:
      'In the bottom right corner, you will find information about the length of the fairy tale and the current page. You can navigate between pages using the arrows on either side of the numbering. Additionally, pages can be turned using a swipe gesture (on tablets and smartphones), arrow keys on the keyboard, or the mouse wheel.',
    stepOutro:
      'That concludes the tutorial! It is quite simple, isn’t it? You are now ready to embark on your adventure with Fabledose fairy tales. Press the right arrow to exit the tutorial.',
    killTutorial: 'Disable Tutorial',
  },
  pl: {
    tutorialWelcome:
      'Czy chcesz skorzystać z samouczka, który podpowie ci jak czytać nasze bajki?',
    yes: 'Tak',
    no: 'Nie',
    previewText:
      'Jak powiedział, tak też i zrobił. Nazbierał gałązek, patyków i konarów, z których zbudował solidny szałas. Drzwi wykonał ze znalezionych desek. Wstawił nawet okno z okiennicami. Budowanie zajęło mu trzy dni. Zadowolony z siebie otrzepał raciczki i zasiadł do łowienia ryb.',
    stepSlide:
      'Biblioteka Fabledose służy wyświetlaniu animowanych bajek do czytania. Po otworzeniu bajki, Twoim oczom ukaże się animowana strona naszej wirtualnej książki dla dzieci.',
    stepBoxBasic:
      'Animowane tło zawsze jest opatrzone tekstem. Jego treść pokrywa się z obrazem, tworząc spójną całość.',
    stepBoxAdvanced:
      'Jeżeli literki są zbyt małe lub zlewają się z animacją w tle, możesz je łatwo dostosować do swoich potrzeb, zwiększając rozmiar czcionki, zmieniając jej kolor lub dodając szare tło pod tekstem.',
    stepOptions: [
      'W lewym dolnym rogu znajdują się ikony ustawień. Ikona domu (',
      ') zabierze Cię z powrotem do strony głównej. Ikona listy ustawień (',
      ') otworzy okno z ustawieniami, gdzie będziesz mógł zdefiniować wielkość czcionki oraz jej tło. Ikona ramki (',
      ') przełączy bajkę w tryb pełnego ekranu.',
    ],
    stepSlideSwitch:
      'W prawym dolnym rogu znajduje się informacja na temat długości bajki oraz bieżącej strony. Strzałkami z lewej i prawej strony numeracji możesz przełączać strony. Ponadto strony możesz przełączać gestem przesunięcia (tablet i smartfon), klawiszami strzałek na klawiaturze oraz kółkiem myszki.',
    stepOutro:
      'To tyle! Prawda, że to banalnie proste? Jesteś gotów, aby rozpocząć przygodę z baśniami Fabledose. Naciskając strzałkę w prawo, opuścisz samouczek.',
    killTutorial: 'Wyłącz Samouczek',
  },
};

export const useTranslation = <TT>(translations: Translation<TT>): TT => {
  const { languageInfo } = useLanguageContext();
  const [activeTranslations, setActiveTranslations] = useState<TT>(
    translations.en,
  );

  useEffect(() => {
    setActiveTranslations(translations[languageInfo] || translations.en);
  }, [languageInfo]);

  return activeTranslations;
};