import type { Story } from "../library.types";
import { LAYOUT_VARIANTS } from "../library.types";

export const GOLDILOCKS_AND_THREE_BEARS: Story = {
  info: {
    id: '230100_GOLDILOCK_PL',
    title: 'Złotowłosa i trzy misie',
    author: ['Paweł Modzelewski'],
    translation: ['Jan Kowalski'],
    pictures: ['Edyta Petrzak'],
    thumb: '/',
    cover: '/',
    excerpt: 'Przygotowana przez nasz zespół wciągająca wersja klasycznej bajki „Złotowłosa i Trzy Misie”. Gdy Złotowłosa dziewczynka natrafia na chatkę niedźwiadków i zaczyna tam psocić, otrzymuje lekcję na temat znaczenia odpowiedzialności. Ta czarująca adaptacja przypomina zarówno najmłodszym, jak i starszym dzieciom, że nasze działania mają konsekwencje i nigdy nie jest za późno, aby to naprawić błędy.',
    summary: ''
  },
  content: [
    {
      slideId: 1,
      layout: LAYOUT_VARIANTS.SINGLE_COLUMN_TEXT_BOTTOM,
      paragraphs: [
        'Na skraju przytulnego lasu, w drewnianym domu żyły sobie trzy misie. Tata miś, który był duży i silny, mama miś o łagodnym sercu, oraz mały misio co był marudny. W domu misiów było przytulnie. Były w nim trzy fotele oraz trzy, starannie pościelone łóżeczka. Misiowa rodzina codziennie rano jadała owsiankę przygotowywaną przez mamę. To była najlepsza owsianka na świecie — z miodem i jagodami. Jednak bardziej niż owsiankę misie uwielbiały spacery po lesie. Pewnego ranka postanowiły ruszyć na taki spacer wyjątkowo wcześnie. Wstały od stołu, od śniadania, nie skończywszy owsianki, i wyszły do lasu.'
      ],
      picture: {
        general: '/',
        mobile: '/',
      }
    },
    {
      slideId: 2,
      layout: LAYOUT_VARIANTS.TWO_COLUMNS_TEXT_LEFT,
      paragraphs: [
        'Tak się złożyło, że tego dnia nieopodal ich domu przechadzała się złotowłosa dziewczynka. Niesforne to było dziecko, znane z psotnego zachowania i niebaczenia na innych. Złotowłosa zobaczywszy otwarty dom, wślizgnęła się do środka bez zaproszenia. I od razu poczuła w powietrzu zapach owsianki. Usiadła przy stole kuchennym i zaczęła wyjadać owsiankę należącą do misiów.'
      ],
      picture: {
        general: '/',
        mobile: '/',
      }
    },      
  ],
};