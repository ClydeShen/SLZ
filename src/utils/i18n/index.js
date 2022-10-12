import enNZTime from 'date-fns/locale/en-NZ'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enNZ from './en-NZ.json'

export const languageOptions = {
  enNZ: {
    label: 'English',
    local: enNZTime
  }
}
const translateMap = {
  en: enNZ
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: translateMap,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      skipOnVariables: false,
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
