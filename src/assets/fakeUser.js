import avatar from './avatar.png'

const jobs = [
    {
        companyName: "ООО «Эс как доллар»",
        jobTitle: "Оператор технической поддержки",
        hired: "11/2019",
        left: "н.в.",
        duties: ['Консультация клиентов по продуктам компании в сфере IT']
    },
    {
        companyName: "ЗАО «Бещёки»",
        jobTitle: "Официант",
        hired: "08/2019",
        left: "10/2019",
        duties: [
            'Обслуживание клиентов заведения',
            '"Накрутка" шаурмы',
        ]
    },
    {
        companyName: "ООО «Паньки»",
        jobTitle: "Страховой агент",
        hired: "05/2019",
        left: "08/2019",
        duties: ['Активные продажи услуг компании в сфере страхования']
    }
]

const personalData = {
    avatar,
    firstName: "Василий",
    lastName: "Пупкин",
    nickName: "reactUser",
    age: "18",
    email: "vpupkin@shmyandex.ru"
}

const hobbies = 'Авто, мото, вело, фото, гребля, флейта и охота'

export default {
    ...personalData,
    jobs,
    hobbies
}