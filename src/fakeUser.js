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
        companyName: "ЗАО «ФИЛ»",
        jobTitle: "Стажер-кинолог",
        hired: "08/2019",
        left: "10/2019",
        duties: [
            'Выгул собак клиентов',
            'Оказание услуг по передержке домашних животных',
        ]
    },
    {
        companyName: "ООО «ЧКО»",
        jobTitle: "Продавец-консультант",
        hired: "05/2019",
        left: "08/2019",
        duties: ['Продажи чая и кофе (опт)']
    }
]

const personalData = {
    avatar,
    firstName: "Василий",
    lastName: "Пупкин",
    age: "18",
    email: "vpupkin@shmyandex.ru"
}

const hobbies = 'Авто, мото, вело, фото, гребля, флейта и охота'

export default {
    ...personalData,
    jobs,
    hobbies
}