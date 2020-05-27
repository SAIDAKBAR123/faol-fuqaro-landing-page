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
            middle: 'SHIKOYAT, MUAMMO, ARIZA',
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
                subtitle: 'Nega aynan Faol fuqaro ilovasi ? Uning boshqa ilovalardan ustunlik taraflari',
                subheader: 'OSON KIRISH'
            },
            solutions: {
                sn_1: 'Muammoning tezkor yechimi',
                sn_2: "Mutasaddi tashkilotlar bilan to'g'ridan to'g'ri muloqot",
                sn_3: "Muammolar yechilishi ustidan online nazorat",
                sn_4: "Yon atrofga befarq bo'lmaslik",
                sn_5: "Murojaatlarni yetqazish uchun qulay tizim",
                sn_6: "Umumiy statistika grafigi",

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
            address: "9, Ziyolilar ko'chasi, M.Ulug'bek Tumani, Tashkent shahri, 100107",
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
      'ru': {
        h_main: 'ГЛАВНЫЙ',
        h_statistics: 'СТАТИСТИКА',
        h_instruction: 'ИНСТРУКЦИЯ',
        h_usage: 'О ПРИМЕНЕНИИ',
        h_contacts: 'СВЯЗАТЬСЯ С НАМИ',
        section_1: {
            start: 'FAOL FUQARO',
            middle: 'ЖАЛОБА, ПРОБЛЕМА, ЗАЯВКА',
            end: 'РЕШЕНИЯ',
            subtitle: "Присоединяйтесь к нашему приложению и внесите свой вклад в развитие нашей страны!"
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

        fetch('https://server.sunbet.uz/api/counts')
        .then(response => response.json())
         .then(data => {
             this.report = data
         }).catch( err => {
            console.log(err)
        })

         fetch(`http://api.sunbet.uz/api/posts/public?lang=${this.lang }`)
        .then(response => response.json())
         .then(data => {
             console.log(data)
             this.news = data
         }).catch( err => {
             console.log(err)
         })
    }
})
