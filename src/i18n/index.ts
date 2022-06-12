import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          counter: {
            add: 'Add Amount',
            addAsync: 'Add Async',
            addIfOdd: 'Add If Odd',
            counter_other: 'Changed language already {{count}} times',
          },
          description: {
            part1: 'Edit <1>src/App.js</1> and save to reload.',
            part2: 'Learn React',
          },
        },
      },
      zh: {
        translation: {
          counter: {
            add: '加 2',
            addAsync: '异步➕ 2',
            addIfOdd: ' 奇数时➕ 2',
            counter_other: '已经改变{{count}}次',
          },
          description: {
            part1: '编辑 <1>src/App.js</1>，报错后热更新',
            part2: '学习React',
          },
        },
      },
    },
  })

export default i18n

export const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: 'Chinese' },
}
