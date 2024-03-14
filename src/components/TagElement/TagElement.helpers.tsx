import type { TagDataSelector as TagDataSelectorType } from '@/components/TagElement/TagElement.types';
import { TAG_NAMES } from '@/fablesLibrary/library.types';

export const tagDataSelector: TagDataSelectorType = tagName => {
  switch (tagName) {
    case TAG_NAMES.AGE_3:
      return {
        title: 'Od 3 lat',
        description: 'Utwór przeznaczony jest dla dzieci od lat trzech.',
        icon: '/images/tags/Wiek_3.svg',
      };
    case TAG_NAMES.AGE_5:
      return {
        title: 'Od 5 lat',
        description: 'Utwór przeznaczony jest dla dzieci od lat pięciu.',
        icon: '/images/tags/Wiek_5.svg',
      };
    case TAG_NAMES.CLASSIC_FABLE:
      return {
        title: 'Baśń Klasyczna',
        description:
          'Fantastyczna opowieść wywodząca się z tradycji folklorystycznych.',
        icon: '/images/tags/Basn_Klasyczna.svg',
      };
    case TAG_NAMES.CONTEMPORARY_FABLE:
      return {
        title: 'Baśń Współczesna',
        description:
          'Fantastyczne opowiadanie napisane nie dawniej niż 70 lat temu lub współczesna adaptacja baśni klasycznej.',
        icon: '/images/tags/Basn_Wspolczesna.svg',
      };
    case TAG_NAMES.RESPONSIBILITY:
      return {
        title: 'Odpowiedzialność',
        description:
          'Utwór porusza kwestię odpowiedzialności za innych lub za swoje czyny.',
        icon: '/images/tags/Odpowiedzialnosc_1.svg',
      };
    case TAG_NAMES.CAREFULNESS:
      return {
        title: 'Ostrożność',
        description: 'Utwór poucza o zachowaniu ostrożności.',
        icon: '/images/tags/Ostroznosc.svg',
      };
    case TAG_NAMES.HELPFULNESS:
      return {
        title: 'Pomocniczość',
        description: 'Utwór opowiada o istotności niesienia pomocy innym.',
        icon: '/images/tags/Pomocniczosc.svg',
      };
    case TAG_NAMES.DILIGENCE:
      return {
        title: 'Pracowitość',
        description:
          'Utwór porusza temat pracowitości i wartości z niej płynących.',
        icon: '/images/tags/Pracowitosc.svg',
      };
    case TAG_NAMES.PRIVACY:
      return {
        title: 'Prywatność',
        description:
          'Utwór odnosi się do kwestii poszanowania prywatności lub własności prywatnej.',
        icon: '/images/tags/Prywatnosc.svg',
      };
    case TAG_NAMES.FAMILY:
      return {
        title: 'Rodzina',
        description:
          'Utwór zawiera komentarze na temat wartości płynących z więzi rodzinnych ',
        icon: '/images/tags/Rodzina.svg',
      };
    case TAG_NAMES.DEATH:
      return {
        title: 'Śmierć',
        description:
          'Utwór porusza temat śmierci lub opowiada o lasach osób, które ze śmiercią się stykają.',
        icon: '/images/tags/Wykrzyknik.svg',
      };
    case TAG_NAMES.TOXIC_RELATIONS:
      return {
        title: 'Toksyczna relacja',
        description:
          'Utwór zawiera przestrogi odnoście toksycznych osób lub relacji.',
        icon: '/images/tags/Toksyczna_Relacja.svg',
      };
    case TAG_NAMES.MODERATION:
      return {
        title: 'Umiar',
        description: 'Utwór porusza motywy umiarkowania i poucza o umiarze.',
        icon: '/images/tags/Umiar.svg',
      };
    case TAG_NAMES.COOPERATION:
      return {
        title: 'Współpraca',
        description:
          'Utwór porusza kwestię współpracy i korzyści z niej płynących.',
        icon: '/images/tags/Wspolpraca.svg',
      };
    case TAG_NAMES.REPARATION:
      return {
        title: 'Zadośćuczynienie',
        description:
          'Utwór porusza motyw zadośćuczynienia za wyrzadzone krzywdy.',
        icon: '/images/tags/Zadoscuczynienie.svg',
      };
    default:
      return {
        title: 'Błąd',
        description: 'Któryś z motywów nam umknął. Powiadom nas o błędzie!',
        icon: '/images/tags/Wykrzyknik.svg',
      };
  }
};
