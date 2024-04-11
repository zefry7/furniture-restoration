import { MainPage, MasterClassPage } from "./content/import_ts";

export let data = {
    layout: {
        header: {
            links: [
                {
                    text: "Мастер-классы",
                    href: "/master-class"
                },
                {
                    text: "Контакты",
                },
                {
                    text: "Мебель на заказ",
                    href: "/order-furniture"
                },
                {
                    text: "О нас",
                    href: "/about-us"
                }],
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
        },
        family: {
            title: ["NIKASON BRAND это семейная мастеркая", "Посмотрите видео о нас"],
            img: {
                src: "./img/MainPage/family.jpeg",
                alt: "Фото"
            },
            author: "Саргылана и Никита Колодезниковы-Матчитовы",
            text: [
                "Саргылана - рестовратор-декоратор, преображает и дарит вторую жизнь старой мебели.",
                "Никита - мастер по дереву, вся мебель делается его умелыми руками."
            ],
            buttonText: "Подробнее о нас",
            title2: "Посмотрите видео о нас"
        },
        services: {
            title: "Наши услуги",
            items: [{
                title: "Мебель на заказ",
                text: "Мебель под заказ по индивидуальным размерам это гарантия отличного качества, долговечность, экологичность и эксклюзивность наших изделий. Возможность создания своего неповторимого стиля, уникальность и неповторимость каждого изделия.",
                button: "Заказать мебель",
                img: {
                    src: "./img/MainPage/service-1.jpeg",
                    alt: "Фото услуги"
                }
            }, {
                title: "Мастер-классы",
                text: "Что делать, если память о предках хочется сохранить, но к вашему интерьеру старая и испорченная мебель не подходит? Правильно, отреставрировать его и наслаждаться не только обновлённым видом мебели, но и с теплотой помнить, что эта мебель была сделана талантливыми предками.",
                button: "Купить мастер-класс",
                img: {
                    src: "./img/MainPage/service-2.jpeg",
                    alt: "Фото услуги"
                }
            }]
        },
        assurance: {
            title: "Гарантия качества мебели от NIKASON BRAND",
            text: "На каждое изделие ставим авторский логотип (клеймо) как знак качества и узнаваемости мастера. Таким образом мастер несёт ответственность за каждое изделие помеченное печатью. Есть гарантия на 12 месяцев.",
            img: {
                src: "./img/MainPage/logo.webp",
                alt: "Логотип"
            }
        }
    },
    masterClassPage: {
        work: {
            info: {
                text: "Нам доверяют мебель с историей в 120 лет",
                button: {
                    text: "Смотреть мастер-классы",
                    href: ""
                },
                img: {
                    src: "./img/MasterClassPage/bg-1.jpeg",
                    alt: "Фон"
                }
            },
            title: "Наши работы",
            text: ["До", "После"],
            workImg: [{
                src: "./img/MasterClassPage/work-before-1.jpeg",
                alt: "Фото мебели до"
            },
            {
                src: "./img/MasterClassPage/work-after-1.jpeg",
                alt: "Фото мебели после"
            },
            {
                src: "./img/MasterClassPage/work-before-2.jpeg",
                alt: "Фото мебели до"
            },
            {
                src: "./img/MasterClassPage/work-after-2.jpeg",
                alt: "Фото мебели после"
            }, 
            {
                src: "./img/MasterClassPage/work-before-3.jpeg",
                alt: "Фото мебели до"
            }, 
            {
                src: "./img/MasterClassPage/work-after-3.jpeg",
                alt: "Фото мебели после"
            }, 
            {
                src: "./img/MasterClassPage/work-before-4.jpeg",
                alt: "Фото мебели до"
            }, 
            {
                src: "./img/MasterClassPage/work-after-4.jpeg",
                alt: "Фото мебели после"
            }],
            button: {
                text: "Смотреть больше примеров",
                href: ""
            }
        }
    }
}