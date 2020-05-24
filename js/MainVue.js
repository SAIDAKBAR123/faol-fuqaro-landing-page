const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'ru',
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
        message: 'Hello Vue!',
        news: [
            {
                title: '«Ўрикзор» бозори карантинга ёпилди. Сотувчилардан бирида вирус аниқланган',
                body: 'Тошкентдаги «Ўрикзор» савдо мажмуасида коронавирус инфекцияси аниқланди, бозор вақтинчалик ёпилди. Соғлиқни сақлаш вазирлиги ҳушёрликка чақирмоқда.',
                image: 'https://storage.kun.uz/source/6/3PA1oJO0ndYxXA4f867Qu_hIIossEiQV.jpg',
                path: ''
            },
            {
                title: 'Ўзбекистон ва Туркия президентлари икки томонлама муносабатларни муҳокама қилди',
                body: 'Бугун, 23 май куни  Ўзбекистон президенти Шавкат Мирзиёев Туркия президенти Ражаб Тоййиб Эрдўған билан телефон орқали мулоқот қилди.  Бу ҳақда Ўзбекистон президенти матбуот хизмати хабар берди.',
                image: 'https://storage.kun.uz/source/6/NVIF5Z3vIAAojfGQjsGvOJTOahab8qta.jpg',
                path: ''
            },
            {
                title: 'Тожикистонга ўтган тўрт ойда берилган гуманитар ёрдам миқдори маълум қилинди. Энг кўп ёрдам Ўзбекистондан',
                body: 'Тожикистонга январь-апрель ойларида 4 минг тонна ёрдам юки, жумладан, тиббиёт воситалари, дори-дармонлар ва озиқ-овқат маҳсулотлари етказиб берилган.',
                image: 'https://storage.kun.uz/source/6/NN2PyIyv9hnMvT3TW6fbQYIMTkVHIQp6.jpg',
                path: ''
            },
            {
                title: 'Тожикистонга ўтган тўрт ойда берилган гуманитар ёрдам миқдори маълум қилинди. Энг кўп ёрдам Ўзбекистондан',
                body: 'Тожикистонга январь-апрель ойларида 4 минг тонна ёрдам юки, жумладан, тиббиёт воситалари, дори-дармонлар ва озиқ-овқат маҳсулотлари етказиб берилган.',
                image: 'https://storage.kun.uz/source/6/NN2PyIyv9hnMvT3TW6fbQYIMTkVHIQp6.jpg',
                path: ''
            }
        ]
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
    }
})
