import type { Story } from '../library.types';
import { LAYOUT_VARIANTS } from '../library.types';

export const GOLDILOCKS_AND_THREE_BEARS: Story = {
  info: {
    id: '230100_GOLDILOCK_PL',
    title: 'Złotowłosa i Trzy Misie',
    author: ['Paweł Modzelewski'],
    pictures: ['Edyta Petrzak'],
    translation: ['Franek', 'Józiak'],
    thumb: '/images/fairytale-thumb-placeholder-01.png',
    cover: {
      '1080': 'images/goldilock_cover.webm',
      '720': 'images/goldilock_cover.webm',
      '480': '/',
      '360': '/',
    },
    excerpt:
      'Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, w konsekwencji czego otrzymuje lekcję na temat znaczenia odpowiedzialności.',
    summary:
      'Przygotowana przez nasz zespół wciągająca wersja klasycznej bajki „Złotowłosa i Trzy Misie”. Gdy Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, otrzymuje lekcję na temat znaczenia odpowiedzialności. Ta czarująca adaptacja przypomina zarówno najmłodszym, jak i starszym dzieciom, że nasze działania mają konsekwencje i nigdy nie jest za późno, aby to naprawić błędy.',
    summaryDecor: '/images/decor-01.png',
    mainTags: ['3+', 'Bajka'],
    detailedTags: ['Odpowiedzialność', 'Odwaga', 'Przepraszam', 'Przyroda'],
  },
  content: [
    {
      slideId: 1,
      layout: LAYOUT_VARIANTS.SINGLE_COLUMN_TEXT_BOTTOM,
      paragraphs: [
        'Na skraju przytulnego lasu, w drewnianym domu żyły sobie trzy misie. Tata miś, który był duży i silny, mama miś o łagodnym sercu, oraz mały misio co był marudny. W domu misiów było przytulnie. Były w nim trzy fotele oraz trzy, starannie pościelone łóżeczka. Misiowa rodzina codziennie rano jadała owsiankę przygotowywaną przez mamę. To była najlepsza owsianka na świecie — z miodem i jagodami. Jednak bardziej niż owsiankę misie uwielbiały spacery po lesie. Pewnego ranka postanowiły ruszyć na taki spacer wyjątkowo wcześnie. Wstały od stołu, od śniadania, nie skończywszy owsianki, i wyszły do lasu.',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
    {
      slideId: 2,
      layout: LAYOUT_VARIANTS.TWO_COLUMNS_TEXT_LEFT,
      paragraphs: [
        'Tak się złożyło, że tego dnia nieopodal ich domu przechadzała się złotowłosa dziewczynka. Niesforne to było dziecko, znane z psotnego zachowania i niebaczenia na innych. Złotowłosa zobaczywszy otwarty dom, wślizgnęła się do środka bez zaproszenia. I od razu poczuła w powietrzu zapach owsianki. Usiadła przy stole kuchennym i zaczęła wyjadać owsiankę należącą do misiów.',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
    {
      slideId: 3,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardsData: [
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
      ],
      paragraphs: [
        '"Ta jest zbyt gorąca." Powiedziała, zjadłszy łyżeczkę owsianki z miski taty misia.',
        '"Ta jest zbyt zimna." Powiedziała, po zjedzeniu łyżki owsianki z miseczki mamy misia.',
        '"Ta jest w sam raz!" Powiedziała po spróbowaniu owsianki z miseczki małego misia. A potem zjadła całą jego owsiankę.',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
    {
      slideId: 4,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardsData: [
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
      ],
      paragraphs: [
        'Gdy skończyła, poczuła się zmęczona. Zaczęła więc krzątać się po nieswoim domu w poszukiwaniu miejsca, aby odpocząć. W salonie znalazła trzy fotele: duży fotel, mniejszy fotel i całkiem malutki fotelik.',
        '"Ten jest zbyt twardy." Powiedziała po wdrapaniu się na największy fotel, który należał do taty misia.',
        '"Ten jest zbyt miękki." Powiedziała, usiadłszy na mniejszym fotelu, który należał do mamy misia.',
        '"Ten jest w sam raz!" Powiedziała gdy rozsiadła się wygodnie w najmniejszym fotelu, który należał do małego misia. I wtem TRACH! Noga od fotelika ułamała się, a dziewczynka wylądowała na podłodze.',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
    {
      slideId: 5,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardsData: [
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
      ],
      paragraphs: [
        'Szybko jednak wstała. A ponieważ dalej czuła się zmęczona, weszła po schodach na piętro domu. Tam chciała znaleźć inne, wygodne miejsce do odpoczynku. Tak trafiła do sypialni, w której stały trzy, starannie pościelone łóżeczka. Jedno wielkie, drugie nieco mniejsze i trzecie najmniejsze.',
        '"To jest zbyt twarde." Powiedziała po ułożeniu się w największym łóżku.',
        '"To jest zbyt miękkie." Powiedziała, rozgrzebawszy pościel w mniejszym łóżku.',
        '"To jest w sam raz!" Powiedziała po wejściu pod kołderkę w trzecim, najmniejszym łóżeczku. I tam zasnęła.',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
    {
      slideId: 6,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardsData: [
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
      ],
      paragraphs: [
        'Wtem misie wróciły ze swojego porannego spaceru. I od razu po wejściu do kuchni zorientowały się, że coś jest nie tak. Podeszły do stolika, na którym stała owsianka i zdumione zaczęły ze sobą rozmawiać.',
        '"Ktoś jadł moją owsiankę." Powiedział mocnym głosem tata miś po zerknięciu do swojej miseczki.',
        '"I moją także." Powiedziała zdziwiona mama miś.',
        '"Błeee!" Zajęczał mały miś-maruda. "Moją owsiankę ktoś zjadł w całości!"',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
    {
      slideId: 7,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardsData: [
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
      ],
      paragraphs: [
        'Wciąż czujne i nieufne misie przeszły do saloniku, aby sprawdzić, czy intruz wciąż krząta się po domu. Z wielkim zdziwieniem zaczęły badać swoje foteliki.',
        '"Ktoś siedział na moim fotelu." Mocnym głosem powiedział tata miś.',
        '"I na moim także." Powiedziała zatroskana mama miś.',
        '"Błeee!" Zajęczał mały miś-maruda. "W moim foteliku ktoś ułamał nogę!"',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
    {
      slideId: 8,
      layout: LAYOUT_VARIANTS.WILDCARD,
      wildcardsData: [
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
        { top: 10, left: 10, width: 25 },
      ],
      paragraphs: [
        'Nie znalazłszy intruza na dole, misie weszły po schodach na piętro, do swojej sypialni. Z wielkim zaskoczeniem oglądały swoje rozścielone posłania.',
        '"Ktoś spał w moim łóżeczku." Pełen złości wymamrotał tata miś.',
        '"I w moim także." Powiedziała mama miś.',
        '"Błeee!" Zajęczał mały miś-maruda. "W moim łóżeczku nadal ktoś śpi!"',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
    {
      slideId: 9,
      layout: LAYOUT_VARIANTS.DIAGONAL_TLBR,
      paragraphs: [
        'Wtem śpiąca złotowłosa zamrugała oczami. Przebudziła się i zobaczywszy trzy misie stojące nad sobą, wykrzyknęła z przerażenia. Potem zerwała się z łóżka i jednym susem wyskoczyła z okna prosto w zarośla rosnące pod oknem. Po czym pobiegła w las!',
        'Gdy dziewczynka biegła przez las, serce ją zakuło. "Co ja najlepszego zrobiłam?" Pomyślała. "Zjadła nie swoją owsiankę. Połamałam fotelik. I nabałaganiłam w sypialni." Zatrzymała się w biegu. "Nie mogę tego tak zostawić. Muszę wszystko naprawić!" Ze smutkiem na twarzy wróciła do domu misiów i zapukała do drzwi. Otworzył tata miś i ze srogą miną zapytał.',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
    {
      slideId: 10,
      layout: LAYOUT_VARIANTS.TWO_COLUMNS_TEXT_RIGHT,
      paragraphs: [
        '"Cóż to za zachowanie młoda damo? Nie wiesz, że nie wolno wchodzić do cudzego domu? Nie wiesz, że nie wolno zjadać czyjegoś jedzenia? Ani psuć mebli lub bałaganić w sypialni?"',
        '"Przepraszam tato misiu. Zachowałam się niegrzecznie. Ale chcę to wszystko naprawić jeśli mi dasz szansę."',
        'Zza pleców taty misia wyjrzała mama miś o łagodnym sercu "No myślę, że po takich przeprosinach musimy dać ci szansę dziewczynko." Powiedziała mama miś. "Proszę, wejdź!".',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
    {
      slideId: 11,
      layout: LAYOUT_VARIANTS.SINGLE_COLUMN_TEXT_TOP,
      paragraphs: [
        'Złotowłosa dziewczynka spędziła cały dzień u misiów. Najpierw pomogła mamie przygotować nową porcję owsianki. Potem razem z tatą naprawiła popsuty fotelik. A na koniec razem z małym misiem zaścieliła wszystkie łóżeczka. Po wszystkim usiadła z misiami do kolacji i razem z nimi zjadła najlepszą owsiankę na świecie. A na deser było nawet ciasto.',
        'Chociaż wszyscy wiedzą, że rozrabiać nie wypada, to nie ma takiego dziecka, które nie psoci od czasu do czasu. Jednak ważne jest, aby zawsze przeprosić i naprawić to, co się popsuło.',
      ],
      picture: {
        '1080': '/',
        '720': '/',
        '480': '/',
        '360': '/',
      },
    },
  ],
};
