const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'uz',
    falbacklocale: 'uz',
    messages: {
      'uz': {
        h_main: 'ASOSIY',
        h_statistics: 'STATISTIKA',
        h_instruction: 'QO\'LLANMA',
        h_usage: 'ILOVA HAQIDA',
        h_contacts: 'BIZ BILAN ALOQA',
        section_1: {
            start: 'FAOL FUQARO',
            middle: 'TAKLIF, MUAMMO, MUAMMO',
            end: 'UCHUN YECHIM',
            subtitle: "Bizning ilovaga qo'shiling va yurtimiz rivojiga hissa qo'shing!"
        },
        section_2: {
            problem: 'Muammolar',
            reviewed: "Ko'rib chiqilgan",
            solved: "Hal etilgan",
            rejected: "Rad etilgan"
        },
        section_3: {
            header: {
                title: 'AFZALLIKLARI',
                subtitle: 'Nega aynan Faol fuqaro ilovasi ?',
                subheader: 'OSON KIRISH'
            },
            solutions: {
                sn_1: 'Muammoning tezkor yechimi',
                sn_2: "Mutasaddi tashkilotlar bilan to'g'ridan to'g'ri muloqot",
                sn_3: "Muammolar yechilishi ustidan online nazorat",
                sn_4: "Yon atrofga befarq bo'lmaslik",
                sn_5: "Murojaatlarni yetqazish uchun qulay tizim",
                sn_6: "Turli xil statistika",

            }
        },
        section_4: {
           inst_1: {
               header: 'Muammoni suratga oling!',
               subheader: "Tizim orqali sizning sorovingiz qabul qilingani yoki ishlash jarayonida ekanligi togrisida nazorat o'rnating va shu orqali davlatimizdagi nohush xolatlarni oldini oling",
               btn: "Ko'rsatma"
           },
           inst_2: {
            header: 'Rasmga olingan fotoga izoh qoldiring.',
            subheader: "Muammo yoki hodisani rasmga oling va izoh qoldiring.",
            btn: "Ko'rsatma"
           },
           inst_3: {
            header: 'Natijalarni kuzatib boring',
            subheader: "Tizim orqali sizning sorovingiz qabul qilingani yoki ishlash jarayonida ekanligi togrisida nazorat o'rnating va shu orqali davlatimizdagi nohush xolatlarni oldini oling",
            btn: "Ko'rsatma"
            }
        },
        section_5: {
            title: 'BIZ BILAN ALOQA',
            subtitle: "Biz bilan aloqa uchun quyidagi ma'lumotlardan foydalanishingiz mumkin",
            address: "O'zbekiston, 100052, Toshkent, MIRZO-ULUG'BEK TUMANI, xiyobon MUSTAQILLIK, 122",
            mailForm: {
                name: 'ISM',
                email: 'MAIL ADDRESS',
                message: "Habaringiz",
                sendBtn: "Jo'natish"
            }
        },
        section_6: {
            about: "Tashkilot haqida",
            description: "Tashkilot haqida qo'shimcha ma'lumotlarni quydagi raqamlar orqali qo'ng'iroq qilib bilishingiz mumkin",
            copyright: "Barcha huquqlar himoyalangan"
        }
      },
      "ru": {
        "h_main": "Главная",
        "h_statistics": "Статистика",
        "h_instruction": "Как пользоваться",
        "h_usage": "О приложении",
        "h_contacts": "Связаться с нами",
        "section_1": {
          "start": "FAOL FUQARO",
          "middle": "ЖАЛОБА, ПРОБЛЕМА, ОБРАЩЕНИЕ",
          "end": "ПОМОГАЕТ В ИХ РЕШЕНИИ",
          "subtitle": "Скачайте наше приложение и станьте активным гражданином нашего города!"
        },
        "section_2": {
          "problem": "Проблемы",
          "reviewed": "На рассмотрении",
          "solved": "Решенных",
          "rejected": "Не соответствующих действительности"
        },
        "section_3": {
          "header": {
            "title": "ПРЕИМУЩЕСТВА",
            "subtitle": "Почему именно приложение Faol fuqaro?",
            "subheader": "ЛЕГКО ПОЛЬЗОВАТЬСЯ"
          },
          "solutions": {
            "sn_1": "Оперативное решение проблем",
            "sn_2": "прямое обращение к ответственным организациям",
            "sn_3": "Онлайн контроль над решением проблемы",
            "sn_4": "Соучастие с благоустройством города",
            "sn_5": "Удобное решение для передачи обращений",
            "sn_6": "Разнообразная статистика"
          }
        },
        "section_4": {
          "inst_1": {
            "header": "Сфотографируйте проблему!",
            "subheader": "Осуществляйте мониторинг работы ответственных организаций над Вашим обращением",
            "btn": "Руководство"
          },
          "inst_2": {
            "header": "Оставьте комментарий к изображению.",
            "subheader": "Опишите проблему или обращение.",
            "btn": "Руководство"
          },
          "inst_3": {
            "header": "Отслеживайте работу организаций",
            "subheader": "Осуществляйте мониторинг работы ответственных организаций над Вашим обращением",
            "btn": "Руководство"
          }
        },
        "section_5": {
          "title": "СВЯЖИТЕСЬ С НАМИ",
          "subtitle": "По вопросам сотрудничества или пожеланий обращайтесь по нижеуказанному адресу",
          "address": "O'zbekiston, 100052, Toshkent, MIRZO-ULUG'BEK TUMANI, xiyobon MUSTAQILLIK, 122",
          "mailForm": {
            "name": "ФИО",
            "email": "E-MAIL адрес",
            "message": "Ваше сообщение",
            "sendBtn": "Отправить"
          }
        },
        "section_6": {
          "about": "О нас",
          "description": "Информацию по нашей организации Вы можете получить по следующим номерам телефона",
          "copyright": "Все права защищены"
        }
      }
      // ...
    }
  })
const app = new Vue({
    el: '#app',
    i18n,
    data: {
        lang: localStorage.getItem('lang') || 'uz',
        report: {
            all: 0,
            closed: 0,
            rejected: 0,
            reviewed: 0
        },
        message: 'Hello Vue!',
        news: []
    },
    methods: {
        setLocale( lang ) {
            localStorage.setItem('lang', lang)
            location.reload()
            setTimeout(() => {
                this.$i18n.locale= lang
            }, 500);
            // setTimeout(() => {
            // localStorage.setItem('lang', lang)
            // this.$i18n.locale= lang
            // alert('asdads')
            // }, 1000)
        }
    },
    created() {

        fetch('https://server.faolfuqaro.uz/api/stats/requests')
        .then(response => response.json())
         .then(data => {
           console.log(data)
             this.report = data
         }).catch( err => {
            console.log(err)
        })

         fetch(`https://server.faolfuqaro.uz/api/posts/public?lang=${this.lang}&page=1&size=4`)
        .then(response => response.json())
         .then(data => {
             console.log(data)
             this.news = data
         }).catch( err => {
             console.log(err)
         })
    }
})
