import { MainPage } from "./content/import_ts";

export let data = {
    layout: {
        header: {
            links: ["Мастер-классы", "Контакты", "Мебель на заказ", "О нас"],
            logo: {
                img: "./img/Layout/logo.webp",
                alt: "Логотип"
            }
        },
        footer: {
            ip: "ИП Колодезников-Матчитов Н.И.",
            inn: "ИНН 143515646663",
            links: [
                ["Мастер-классы", "Мебель на заказ"],
                ["Контакты", "О нас"],
                ["Политика кофиденциальности", "Договор оферты"]
            ],
            socials: [
                {
                    img: "./img/Layout/social-icon-3.svg",
                    alt: "Социальная сеть"
                },
                {
                    img: "./img/Layout/social-icon-2.svg",
                    alt: "Социальная сеть"
                }, {
                    img: "./img/Layout/social-icon-1.svg",
                    alt: "Социальная сеть"
                }
            ]
        },
    },
    mainPage: {
        intro: {
            label: "Столярная мастерская NIKASON BRAND",
            title: "Изготовление и реставрация мебели",
            subtitle: "Авторская мебель ручной работы, сделанная с душой и трепетом.",
            button: "Смотреть услуги",
            icons: [
                {
                    img: "./img/MainPage/icon-tg.svg",
                    alt: "Социальная сеть"
                },
                {
                    img: "./img/MainPage/icon-inst.svg",
                    alt: "Социальная сеть"
                }, {
                    img: "./img/MainPage/icon-wa.svg",
                    alt: "Социальная сеть"
                }
            ],
            mainImg: {
                img: "./img/MainPage/main.jpeg",
                alt: "Оформление"
            }
        },
        firm: {
            title1: "NIKASON BRAND это",
            text: [
                "Производство авторской мебели из массива",
                "Реставрация, редизайн, ремонт деревянной мебели",
                "Производство мебели по индивидуальным размерам"
            ],
            title2: "Более 10 лет мы производим",
            items: [
                {
                    name: "Двери",
                    img: {
                        src: "./img/MainPage/item-1.svg",
                        alt: "Двери"
                    }
                },
                {
                    name: "Шкафы",
                    img: {
                        src: "./img/MainPage/item-2.svg",
                        alt: "Шкафы"
                    }
                },
                {
                    name: "Столы и стулья",
                    img: {
                        src: "./img/MainPage/item-3.svg",
                        alt: "Столы и стулья"
                    }
                },
                {
                    name: "Комоды",
                    img: {
                        src: "./img/MainPage/item-4.svg",
                        alt: "Комоды"
                    }
                },
                {
                    name: "Тумбы",
                    img: {
                        src: "./img/MainPage/item-5.svg",
                        alt: "Тумбы"
                    }
                },
                {
                    name: "Арки",
                    img: {
                        src: "./img/MainPage/item-6.svg",
                        alt: "Арки"
                    }
                },
                {
                    name: "Перегородки",
                    img: {
                        src: "./img/MainPage/item-7.svg",
                        alt: "Перегородки"
                    }
                },
                {
                    name: "Кровати",
                    img: {
                        src: "./img/MainPage/item-8.svg",
                        alt: "Кровати"
                    }
                }              
            ]
        }
    },
}