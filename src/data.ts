
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
                    dataSection: "section-footer"
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
                [{
                    text: "Мастер-классы",
                    href: "/master-class"
                }, {
                    text: "Мебель на заказ",
                    href: "/order-furniture"
                }],
                [{
                    text: "Контакты",
                    href: "/"
                }, {
                    text: "О нас",
                    href: "/about-us"
                }],
                [{
                    text: "Политика кофиденциальности",
                }, {
                    text: "Договор оферты",
                }]
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
        },
        techniques: {
            title: "Какие техники изучите на МК",
            ul: ["Снятие старой краски", "Устранение царапин и мелких дефектов", "Ремонт маленьких и  больших сколов",
                "Ремонт поломанной и расклеившейся мебели", "Замена старых поврежденных деталей", "Приемы и идеи декора. Улучшение дизайна старой мебели",
                "Покраска изделия"
            ],
            text: "Подари вторую жизнь старой мебели и сохрани историю вашей семьи",
            img: {
                src: "./img/MasterClassPage/bg-2.jpeg",
                alt: "Фон"
            }
        },
        types: {
            title: ["Мастер-классы по реставрации мебели", "Мастер-классы по столярному делу"],
            items: [
                {
                    text: "Буфет",
                    img: {
                        src: "./img/MasterClassPage/item-1.webp",
                        alt: "Буфет"
                    }
                },
                {
                    text: "Сундук",
                    img: {
                        src: "./img/MasterClassPage/item-2.webp",
                        alt: "Сундук"
                    }
                },
                {
                    text: "Комод",
                    img: {
                        src: "./img/MasterClassPage/item-3.webp",
                        alt: "Комод"
                    }
                },
                {
                    text: "Советское кресло",
                    img: {
                        src: "./img/MasterClassPage/item-4.webp",
                        alt: "Советское кресло"
                    }
                },
                {
                    text: "Стол",
                    img: {
                        src: "./img/MasterClassPage/item-5.webp",
                        alt: "Стол"
                    }
                },
                {
                    text: "Стул",
                    img: {
                        src: "./img/MasterClassPage/item-6.webp",
                        alt: "Стул"
                    }
                },
                {
                    text: "Обивка стула",
                    img: {
                        src: "./img/MasterClassPage/item-7.webp",
                        alt: "Обивка стула"
                    }
                },
                {
                    text: "Ремонт стула",
                    img: {
                        src: "./img/MasterClassPage/item-8.webp",
                        alt: "Ремонт стула"
                    }
                },
            ],
            example: [{
                text: "Консольный столик",
                img: {
                    src: "./img/MasterClassPage/master-class-1.jpeg",
                    alt: "Консольный столик"
                }
            },
            {
                text: "Столярное дело для начинающих",
                img: {
                    src: "./img/MasterClassPage/master-class-2.jpeg",
                    alt: "Столярное дело для начинающих"
                }
            }]
        }
    },
    aboutUs: {
        titles: [{p1: "История создания мастерской", p2: "NIKASON BRAND"}, "Философия мастерской NIKASON", "СМИ о нас", "Оставьте заявку и мы с вами свяжемся"],
        mainImg: {
            src: "./img/AboutUs/main.jpeg",
            alt: "Элемент оформления"
        },
        facts: [
            ["+10 лет", "На рынке по производству мебели"]
            ,
            ["+1500", "Изготовлено мебели"]
            ,
            ["120 лет", "Самой старинной мебели для реставрации"]
        ],
        info: {
            img: {
                src: "./img/AboutUs/author.jpeg",
                alt: "Фотография основателя мастерской"
            },
            name: ["Никита", "Колодезников-Матчитов"],
            role: "Основатель мастерской",
            text: [
                "С детства я был окружен творческими людьми, мой дедушка был строителем и мастером по дереву. Спустя много лет и мне передалась его любовь к дереву - в свободное время мастерил для себя небольшие изделия из древесины.",
                "Более десяти лет назад построил двухэтажный гараж, на втором этаже расположилась наша мастерская. Начинал производство практически “с нуля”, с каждой зарплаты понемногу откладывал на покупку инстурментов и станков.",
                "Постепенно начали появляться первые заказы. Несколько лет назад мы с супругой решили еще заняться ремонтом и реставрацией мебели. Эту идею предложили сами клиенты, поскольку периодически приходили с таким запросом. В основном, реставрацией занимается супруга Саргылана. Мы с ней одна сплоченная, дружная и отличная команда."
            ]
        },
        ideaText: ["Создавать что-то по-настоящему ценное и уникальное.", "Дарить радость и уют в каждый дом."],
        mediaText: "О нашей мастерской пишут многие издания Якутии",
        mediaItems: [
            {
                src: "./img/AboutUs/media-item-1.jpeg",
                alt: "Пример поста из СМИ"
            },
            {
                src: "./img/AboutUs/media-item-2.jpeg",
                alt: "Пример поста из СМИ"
            },
            {
                src: "./img/AboutUs/media-item-3.jpeg",
                alt: "Пример поста из СМИ"
            },
            {
                src: "./img/AboutUs/media-item-4.jpeg",
                alt: "Пример поста из СМИ"
            }
        ],
        feedback: "Оставьте заявку и мы с вами свяжемся",
        button: "Оставить заявку"
    }

}