import img_01_backup from '@/fablesLibrary/240100_GOLDILOCK/images/backups/img_1.jpg';
import img_02_backup from '@/fablesLibrary/240100_GOLDILOCK/images/backups/img_2.jpg';
import img_03_backup from '@/fablesLibrary/240100_GOLDILOCK/images/backups/img_3.jpg';
import img_04_backup from '@/fablesLibrary/240100_GOLDILOCK/images/backups/img_4.jpg';
import img_05_backup from '@/fablesLibrary/240100_GOLDILOCK/images/backups/img_5.jpg';
import img_06_backup from '@/fablesLibrary/240100_GOLDILOCK/images/backups/img_6.jpg';
import img_07_backup from '@/fablesLibrary/240100_GOLDILOCK/images/backups/img_7.jpg';
import img_08_backup from '@/fablesLibrary/240100_GOLDILOCK/images/backups/img_8.jpg';
import img_09_backup from '@/fablesLibrary/240100_GOLDILOCK/images/backups/img_9.jpg';
import img_10_backup from '@/fablesLibrary/240100_GOLDILOCK/images/backups/img_10.jpg';
import cover_sd from '@/fablesLibrary/240100_GOLDILOCK/images/cover_1280x720.webm';
import cover_hd from '@/fablesLibrary/240100_GOLDILOCK/images/cover_1920x1080.webm';
import img_01_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_1_1280x720.webm';
import img_01_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_1_1920x1080.webm';
import img_02_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_2_1280x720.webm';
import img_02_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_2_1920x1080.webm';
import img_03_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_3_1280x720.webm';
import img_03_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_3_1920x1080.webm';
import img_04_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_4_1280x720.webm';
import img_04_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_4_1920x1080.webm';
import img_05_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_5_1280x720.webm';
import img_05_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_5_1920x1080.webm';
import img_06_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_6_1280x720.webm';
import img_06_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_6_1920x1080.webm';
import img_07_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_7_1280x720.webm';
import img_07_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_7_1920x1080.webm';
import img_08_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_8_1280x720.webm';
import img_08_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_8_1920x1080.webm';
import img_09_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_9_1280x720.webm';
import img_09_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_9_1920x1080.webm';
import img_10_sd from '@/fablesLibrary/240100_GOLDILOCK/images/img_10_1280x720.webm';
import img_10_hd from '@/fablesLibrary/240100_GOLDILOCK/images/img_10_1920x1080.webm';
import decorator from '@/fablesLibrary240100_GOLDILOCK/images/decorator.png';
import thumb from '@/fablesLibrary240100_GOLDILOCK/images/thumb.png';

import type { Story } from '../library.types';
import { LAYOUT_VARIANTS, TAG_NAMES } from '../library.types';

export const GOLDILOCKS_AND_THREE_BEARS: Story = {
  info: {
    id: '240100_GOLDILOCK',
    title: 'Złotowłosa i Trzy Misie',
    adaptationAuthor: ['Paweł Modzelewski', 'Katarzyna Kacprzak'],
    pictures: ['Edyta Petrzak'],
    translation: [],
    thumb: thumb.src,
    defaultColor: '#4a3016',
    decorator: decorator.src,
    cover: {
      description: 'Złotowłosa i Trzy Misie',
      picSizes: {
        '1080': cover_hd,
        '720': cover_sd,
      },
      backup: img_02_backup,
    },
    summary:
      'Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, w konsekwencji czego otrzymuje lekcję na temat znaczenia odpowiedzialności.',
    extendedSummary:
      'Przygotowana przez nasz zespół wciągająca wersja klasycznej bajki „Złotowłosa i Trzy Misie”. Gdy Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, otrzymuje lekcję na temat znaczenia odpowiedzialności. Ta czarująca adaptacja przypomina zarówno najmłodszym, jak i starszym dzieciom, że nasze działania mają konsekwencje i nigdy nie jest za późno, aby to naprawić błędy.',
    synopsis:
      'Bajka opowiada o trzech misiach, które mieszkały w przytulnym lesie. Pewnego dnia złotowłosa dziewczynka, znana z psotnego charakteru, wtargnęła do ich domu i narobiła zamieszania, zjadając ich owsiankę, psując fotelik i bałaganiąc w sypialni. Gdy misie wróciły, zorientowały się, co się stało, i zaczęły szukać intruza. Złotowłosa dziewczynka, przerażona, postanowiła naprawić szkody i przeprosić misie. Spędziła z nimi cały dzień, pomagając w przygotowaniu owsianki, naprawiając fotelik i porządkując sypialnię. Bajka kończy się happy endem, gdy dziewczynka uczy się lekcji o szacunku do cudzego mienia i wspólnie z misiami cieszy się kolacją oraz deserem. Podkreśla, że choć dzieci czasem robią psoty, ważne jest przeproszenie i naprawienie błędów.',
    summaryDecor: '/images/decorator.png',
    mainTags: [TAG_NAMES.AGE_3, TAG_NAMES.CONTEMPORARY_FABLE],
    detailedTags: [
      TAG_NAMES.RESPONSIBILITY,
      TAG_NAMES.PRIVACY,
      TAG_NAMES.REPARATION,
    ],
  },
  content: [
    {
      slideId: 1,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_BOTTOM_LEFT,
      paragraphs: [
        'W drewnianym domku, na skraju wielkiego lasu, mieszkała rodzinka trzech Misiów: duży i silny Tata Miś, Mama Miś o łagodnym sercu oraz Mały Miś, co wiecznie burczał i marudził. W domu Misiów było bardzo przytulnie, a wszystkiego mieli dokładnie po trzy: trzy krzesełka przy dużym okrągłym stole, trzy miseczki i trzy łyżeczki, trzy fotele, przy których leżały trzy książeczki oraz trzy łóżeczka przykryte puchowymi kołderkami. ',
      ],
      picture: {
        description: 'Rodzina misiów spacerująca po lesie.',
        picSizes: {
          '1080': img_01_hd,
          '720': img_01_sd,
        },
        backup: img_01_backup,
      },
    },

    {
      slideId: 2,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_TOP_LEFT,
      paragraphs: [
        'Misiowa rodzina codziennie rano jadała owsiankę przygotowaną przez Mamę Miś. To była najlepsza owsianka na świecie — z miodem i jagodami. Przepis na tę owsiankę Mama Miś dostała jeszcze od Babci Miś, a Babcia Miś nauczyła się go od Prababci Miś. Był w ich rodzinie od pokoleń.',
        'Pewnego ranka Misie wstały wyjątkowo wcześnie, a dzień był tak piękny, że zdecydowały się pójść na spacer do lasu. Jak postanowiły, tak zrobiły. Od razu wstały od stołu i nie skończyły nawet owsianki, którą zostawiły na stole!',
      ],
      picture: {
        description: 'Rodzina misiów spacerująca po lesie.',
        picSizes: {
          '1080': img_01_hd,
          '720': img_01_sd,
        },
        backup: img_01_backup,
      },
    },

    {
      slideId: 3,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_BOTTOM_RIGHT,
      paragraphs: [
        'Nie tylko Misie uznały, że dzień ten był wyjątkowo piękny. Podobnego zdania była pewna złotowłosa dziewczynka, która wybrała się na spacer w tym samym momencie.',
        'Niesforne to było dziecko i znane z psotnego zachowania. Na nieszczęście Misiów, nogi ją zaniosły prosto pod ich domek na skraju lasu. ',
        'Gdy Złotowłosa zobaczyła tak przytulną chatkę, ciekawość wygrała nad dobrym wychowaniem. Weszła do środka bez zaproszenia!',
      ],
      picture: {
        description: 'Złotowłosa dziewczynka zakrada się do domu misiów',
        picSizes: {
          '1080': img_02_hd,
          '720': img_02_sd,
        },
        backup: img_02_backup,
      },
    },

    {
      slideId: 4,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_MIDDLE_RIGHT,
      paragraphs: [
        'Ledwo Złotowłosa przekroczyła próg domu Misiów, od razu poczuła zapach owsianki. Jak już było powiedziane, była to najlepsza owsianka na świecie, a Złotowłosa była bardzo ciekawskim dzieckiem. Nie myśląc o konsekwencjach, usiadła przy stole kuchennym i przyciągnęła do siebie pierwszą miseczkę.',
        '"Ta jest zbyt gorąca." Powiedziała, gdy włożyła do ust łyżeczkę owsianki z miseczki Taty Misia.\n',
        '"Ta jest zbyt zimna." Skrzywiła się, po spróbowaniu łyżeczki owsianki z miseczki Mamy Miś.',
        '"Ta jest w sam raz!" Wykrzyknęła gdy zjadła łyżeczkę owsianki z miseczki Małego Misia. Biedny, biedny Mały Miś! Złotowłosa spałaszowała całą jego owsiankę i jeszcze wylizała miseczkę!',
      ],
      picture: {
        description: 'Dziwczynka zajada owsiankę',
        picSizes: {
          '1080': img_03_hd,
          '720': img_03_sd,
        },
        backup: img_03_backup,
      },
    },

    {
      slideId: 5,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_MIDDLE_RIGHT,
      paragraphs: [
        'Gdy skończyła, zeskoczyła z krzesełka i zaczęła się rozglądać po chatce. W salonie znalazła trzy piękne fotele, obite czerwonym pluszem: duży, średni i mały. Wyglądały na bardzo, bardzo wygodne.',
        'Dziewczynka od razu zapragnęła je wypróbować.',
        '"Ten jest za sztywny." Powiedziała, gdy wdrapała się na duży fotel Taty Misia i spróbowała na nim podskoczyć kilka razy.',
        '"Ten jest za sprężysty." Skrzywiła się, gdy wskoczyła na średni fotel Mamy Miś i od razu odbiła się od niego jak piłeczka.',
        '"Ten jest w sam raz!" Wykrzyknęła gdy rozsiadła się wygodnie w najmniejszym fotelu, który należał do Małego Misia. I wtem TRACH! Noga od fotelika złamała się, a Złotowłosa wylądowała na podłodze.',
      ],
      picture: {
        description: 'Dziwczynka ułamała nogę od krzesła',
        picSizes: {
          '1080': img_04_hd,
          '720': img_04_sd,
        },
        backup: img_04_backup,
      },
    },

    {
      slideId: 6,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_BOTTOM_LEFT,
      paragraphs: [
        'Gdy obejrzała już cały dom, poczuła się zmęczona. Poszła zatem na piętro domu, do sypialni Misiów, gdzie już wcześniej zauważyła trzy łóżeczka przykryte puchowymi kołderkami. Jedno wielkie, drugie nieco mniejsze i trzecie całkiem malutkie.',
        '"To jest zbyt twarde." Powiedziała, po ułożeniu się w największym łóżku.',
        '"To jest zbyt miękkie." Skrzywiła się, rozgrzebawszy pościel w nieco mniejszym łóżku.',
        '"To jest w sam raz!" Powiedziała po wejściu pod kołderkę w trzecim, najmniejszym łóżeczku. I tam zasnęła.',
      ],
      picture: {
        description: 'Dziwczynka szuka łóżeczka do spania',
        picSizes: {
          '1080': img_05_hd,
          '720': img_05_sd,
        },
        backup: img_05_backup,
      },
    },

    {
      slideId: 7,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_TOP_RIGHT,
      paragraphs: [
        'Nadszedł czas, gdy misie wróciły ze swojego porannego spaceru. Ach, ale cóż za dziwny widok ukazał się ich oczom! Drzwi domku stały otworem, a przecież dokładnie pamiętały, że je zamknęły po wyjściu na spacer. Coś było nie tak!',
        'Misie podeszły do stołu, na którym stała owsianka i aż przetarły oczy ze zdumienia.',
        '"Ktoś jadł moją owsiankę." Zahuczał tubalnym głosem Tata Miś, gdy zajrzał do swojej miseczki.',
        '"I moją także." Powiedziała zdziwiona Mama Miś.',
        '"Błeee!" Zajęczał Mały Miś-Maruda. "Moją owsiankę ktoś zjadł w całości!"',
      ],
      picture: {
        description: 'Misie szukają intruza w kuchni',
        picSizes: {
          '1080': img_06_hd,
          '720': img_06_sd,
        },
        backup: img_06_backup,
      },
    },

    {
      slideId: 8,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_TOP_RIGHT,
      paragraphs: [
        'Czujne i nieufne misie przeszły do saloniku, aby sprawdzić, czy intruz tutaj też nie nabroił. Z wielkim zdziwieniem zaczęły badać swoje foteliki.',
        '"Ktoś siedział na moim fotelu." Zahuczał tubalnym głosem Tata Miś.',
        '"I na moim także." Powiedziała zatroskana Mama Miś.',
        '"Błeee!" Zajęczał Mały Miś-Maruda. "W moim foteliku ktoś ułamał nogę!"',
      ],
      picture: {
        description:
          'Misie szukają intruza w salonie i oglądają popsute foteliki',
        picSizes: {
          '1080': img_07_hd,
          '720': img_07_sd,
        },
        backup: img_07_backup,
      },
    },

    {
      slideId: 9,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_TOP_RIGHT,
      paragraphs: [
        'Nie znalazłszy niczego więcej na dole, Misie weszły po schodach na piętro, do swojej sypialni. Z wielkim zaskoczeniem zaczęły oglądać swoje rozgrzebane posłania.',
        '"Ktoś spał w moim łóżeczku." Pełen złości wymamrotał Tata Miś.',
        '"I w moim także." Powiedziała Mama Miś.',
        '"Błeee!" Zajęczał  Mały Miś-Maruda. "W moim łóżeczku nadal ktoś śpi!"',
        'Rozmowa Misiów obudziła śpiącą Złotowłosą. Zamrugała trzy razy, a zobaczywszy stojące nad sobą trzy Misie, aż krzyknęła z przerażenia! Zerwała się na równe nogi i jednym susem wyskoczyła przez okno, prosto w zarośla rosnące pod domkiem. Nie oglądając się za siebie, pobiegła najszybciej, jak tylko mogła.',
      ],
      picture: {
        description: 'Misie znajdują Złotowłosą w sypialni',
        picSizes: {
          '1080': img_08_hd,
          '720': img_08_sd,
        },
        backup: img_08_backup,
      },
    },

    {
      slideId: 10,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_TOP_LEFT,
      paragraphs: [
        'Jednak gdy Złotowłosa tak biegła przez las, poczuła wyrzuty sumienia.',
        '"Co ja najlepszego zrobiłam?" Pomyślała. "Zjadłam nie swoją owsiankę. Połamałam nie swój fotelik. I nabałaganiłam w nie swojej sypialni." Zatrzymała się w biegu. "Nie mogę tego tak zostawić. Muszę wszystko naprawić!" ',
        'Powoli, ze zwieszoną głową, wróciła do domku Misiów i nieśmiało zapukała do drzwi. Otworzył Tata Miś i ze srogą miną zapytał:',
      ],
      picture: {
        description: 'Tata miś konfrontuje Złotowłosą',
        picSizes: {
          '1080': img_09_hd,
          '720': img_09_sd,
        },
        backup: img_09_backup,
      },
    },

    {
      slideId: 11,
      layout: LAYOUT_VARIANTS.NARROW_TEXT_TOP_LEFT,
      paragraphs: [
        '"Cóż to za zachowanie, młoda damo? Nie wiesz, że nie wolno wchodzić do cudzego domu bez zaproszenia? Nie wiesz, że nie wolno zjadać czyjejś owsianki? Ani psuć mebli? Lub bałaganić w sypialni?"',
        '"Przepraszam, pana. Zachowałam się bardzo nieładnie. Chcę wszystko naprawić, jeśli tylko mi na to pozwolicie!"',
        'W tym momencie, zza pleców Taty Misia wyjrzała Mama Miś o łagodnym sercu. ',
        '"Myślę, że po takich przeprosinach musimy dać jej szansę." Powiedziała Mama Miś do Taty Misia. Życzliwym gestem zaprosiła Złotowłosą do środka: "Proszę, dziewczynko, wejdź. Witamy w naszym domku".\n',
      ],
      picture: {
        description: 'Tata miś konfrontuje Złotowłosą',
        picSizes: {
          '1080': img_09_hd,
          '720': img_09_sd,
        },
        backup: img_09_backup,
      },
    },

    {
      slideId: 12,
      layout: LAYOUT_VARIANTS.WIDE_TEXT_BOTTOM,
      paragraphs: [
        'Złotowłosa spędziła cały dzień u Misiów. Najpierw pomogła Mamie Miś przygotować nową porcję owsianki. Potem razem z Tatą Misiem naprawiła popsuty fotelik. Na koniec, razem z Małym Misiem pościeliła wszystkie łóżeczka. \n',
        'Po skończonej pracy usiadła z Misiami do kolacji i razem z nimi zjadła najlepszą owsiankę na świecie. A na deser było nawet ciasto!',
      ],
      picture: {
        description: 'Złotowłosa i misie jedzą wspólną kolację',
        picSizes: {
          '1080': img_10_hd,
          '720': img_10_sd,
        },
        backup: img_10_backup,
      },
    },

    {
      slideId: 13,
      layout: LAYOUT_VARIANTS.WIDE_TEXT_BOTTOM,
      paragraphs: [
        'Chociaż wszyscy wiedzą, że rozrabiać nie wypada, to nie ma takiego dziecka, które nie psoci od czasu do czasu. Jednak najważniejsze jest, aby zawsze przeprosić i naprawić to, co się popsuło.',
      ],
      picture: {
        description: 'Złotowłosa i misie jedzą wspólną kolację',
        picSizes: {
          '1080': img_10_hd,
          '720': img_10_sd,
        },
        backup: img_10_backup,
      },
    },
  ],
};
