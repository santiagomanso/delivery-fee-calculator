import { Country } from '../interfaces/interfaces'

export type Countries = Country[]

export const countries: Countries = [
  {
    id: 1,
    name: {
      en: 'English',
      es: 'Ingles',
      de: 'Englisch',
      fi: 'Englanti',
    },
    flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png',
    language: 'en',
  },
  {
    id: 2,
    name: {
      en: 'German',
      es: 'Aleman',
      de: 'Deutsch',
      fi: 'Saksa',
    },
    flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-germany2x.png',
    language: 'de',
  },

  {
    id: 3,
    name: {
      en: 'Finnish ',
      es: 'Finés',
      de: 'Finnisch',
      fi: 'Suomi',
    },
    flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-finland2x.png',
    language: 'fi',
  },
  {
    id: 4,
    name: {
      en: 'Spanish',
      es: 'Español',
      de: 'Spanisch',
      fi: 'Espanjan',
    },
    flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-spain2x.png',
    language: 'es',
  },
]
