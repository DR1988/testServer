import express from "express";
import fs from 'fs'
import faker from 'faker'

import {makeFakeProduct, makeFakeBanners} from './fakeProducts.mjs'
import {entitiesData} from './../someEntity.mjs'

const app = express();

const bannersInResponse = 2

let entityIter = entitiesData[Symbol.iterator]()
app.get("/entities", function(request, response){

    let products_offset = +request.query.products_offset;
    let limit = +request.query.limit;


    const rnadom1 = faker.datatype.number({min: products_offset, max: products_offset + 10 })
    const rnadom2 = faker.datatype.number({min: products_offset + 11, max: products_offset + limit - bannersInResponse })

    const responseData = []
    for (let index = products_offset; index <= products_offset + limit - bannersInResponse; index++) {

        if (rnadom1 === index) {
            responseData[index - products_offset] = makeFakeBanners()
        } else if (rnadom2 === index) {
            responseData[index - products_offset] = makeFakeBanners()
        } else {
            const result = entityIter.next()
            if (!result.done) {
                responseData.push(result.value)
            }
        }
    }

    response.end(JSON.stringify({
        entities: responseData,
        meta: {
            products_offset: products_offset + limit - bannersInResponse,
            limit: limit,
            products_total_count: entitiesData.length,
        },
        "facets": [
            {
              "key": "discounted",
              "name": "Товары со скидкой",
              "type": "toggle",
              "options": [
                {
                  "value": 1,
                  "count": 31,
                  "active": false
                }
              ]
            },
            {
              "key": "brand",
              "name": "Бренд",
              "type": "multi_select",
              "options": [
                {
                  "name": "Red",
                  "value": 7245,
                  "count": 10,
                  "permalink": "red",
                  "active": false
                },
                {
                  "name": "Orbit",
                  "value": 1442,
                  "count": 9,
                  "permalink": "orbit",
                  "active": false
                },
                {
                  "name": "Mentos",
                  "value": 1450,
                  "count": 9,
                  "permalink": "mentos",
                  "active": false
                },
                {
                  "name": "ФрутоНяня",
                  "value": 22453,
                  "count": 9,
                  "permalink": "frutonyanya",
                  "active": false
                },
                {
                  "name": "ARO",
                  "value": 74039,
                  "count": 9,
                  "permalink": "aro-ff9e502",
                  "active": false
                },
                {
                  "name": "METRO Chef",
                  "value": 77970,
                  "count": 8,
                  "permalink": "metro-chef-0e2f046",
                  "active": false
                },
                {
                  "name": "Rioba",
                  "value": 38,
                  "count": 7,
                  "permalink": "rioba",
                  "active": false
                },
                {
                  "name": "4Life",
                  "value": 2633,
                  "count": 7,
                  "permalink": "4life",
                  "active": false
                },
                {
                  "name": "Gerber",
                  "value": 1858,
                  "count": 6,
                  "permalink": "gerber",
                  "active": false
                },
                {
                  "name": "Fleur Alpine",
                  "value": 10149,
                  "count": 6,
                  "permalink": "fleur-alpine",
                  "active": false
                },
                {
                  "name": "Агуша",
                  "value": 18843,
                  "count": 6,
                  "permalink": "agusha",
                  "active": false
                },
                {
                  "name": "Егорьевские традиции",
                  "value": 24979,
                  "count": 5,
                  "permalink": "egorievskie-traditsii",
                  "active": false
                },
                {
                  "name": "Dr. Oetker",
                  "value": 50511,
                  "count": 5,
                  "permalink": "dr-oetker",
                  "active": false
                },
                {
                  "name": "Kotanyi",
                  "value": 229,
                  "count": 4,
                  "permalink": "kotanyi",
                  "active": false
                },
                {
                  "name": "Домашняя Кухня",
                  "value": 2642,
                  "count": 4,
                  "permalink": "domashnyaya-kuhnya",
                  "active": false
                },
                {
                  "name": "Fit Parad",
                  "value": 52931,
                  "count": 4,
                  "permalink": "fit-parad",
                  "active": false
                },
                {
                  "name": "Aro",
                  "value": 37,
                  "count": 3,
                  "permalink": "aro",
                  "active": false
                },
                {
                  "name": "Alpro",
                  "value": 1530,
                  "count": 3,
                  "permalink": "alpro",
                  "active": false
                },
                {
                  "name": "Щедрые",
                  "value": 2878,
                  "count": 3,
                  "permalink": "schedrye",
                  "active": false
                },
                {
                  "name": "Metro Chef",
                  "value": 6285,
                  "count": 3,
                  "permalink": "metro-chef",
                  "active": false
                },
                {
                  "name": "Nattys",
                  "value": 8448,
                  "count": 3,
                  "permalink": "nattys",
                  "active": false
                },
                {
                  "name": "Heinz",
                  "value": 176,
                  "count": 2,
                  "permalink": "heinz",
                  "active": false
                },
                {
                  "name": "Распак",
                  "value": 224,
                  "count": 2,
                  "permalink": "raspak",
                  "active": false
                },
                {
                  "name": "Lorenz",
                  "value": 308,
                  "count": 2,
                  "permalink": "lorenz",
                  "active": false
                },
                {
                  "name": "Zuegg",
                  "value": 389,
                  "count": 2,
                  "permalink": "zuegg",
                  "active": false
                },
                {
                  "name": "Red Bull",
                  "value": 426,
                  "count": 2,
                  "permalink": "red-bull",
                  "active": false
                },
                {
                  "name": "Dirol",
                  "value": 1447,
                  "count": 2,
                  "permalink": "dirol",
                  "active": false
                },
                {
                  "name": "Растишка",
                  "value": 2344,
                  "count": 2,
                  "permalink": "rastishka",
                  "active": false
                },
                {
                  "name": "Активиа",
                  "value": 2475,
                  "count": 2,
                  "permalink": "aktivia--2",
                  "active": false
                },
                {
                  "name": "St. Dalfour",
                  "value": 2666,
                  "count": 2,
                  "permalink": "st-dalfour",
                  "active": false
                },
                {
                  "name": "The Belgian",
                  "value": 4703,
                  "count": 2,
                  "permalink": "the-belgian",
                  "active": false
                },
                {
                  "name": "Коралл",
                  "value": 6106,
                  "count": 2,
                  "permalink": "korall",
                  "active": false
                },
                {
                  "name": "Metro Professional",
                  "value": 7259,
                  "count": 2,
                  "permalink": "metro-professional",
                  "active": false
                },
                {
                  "name": "Fitstart",
                  "value": 8080,
                  "count": 2,
                  "permalink": "fitstart",
                  "active": false
                },
                {
                  "name": "Novasweet",
                  "value": 10741,
                  "count": 2,
                  "permalink": "novasweet",
                  "active": false
                },
                {
                  "name": "Nina Farina",
                  "value": 12363,
                  "count": 2,
                  "permalink": "nina-farina",
                  "active": false
                },
                {
                  "name": "Алексеевское",
                  "value": 18845,
                  "count": 2,
                  "permalink": "alekseevskoe",
                  "active": false
                },
                {
                  "name": "Любятово",
                  "value": 20463,
                  "count": 2,
                  "permalink": "lyubyatovo",
                  "active": false
                },
                {
                  "name": "Рогачевъ",
                  "value": 21645,
                  "count": 2,
                  "permalink": "rogachev",
                  "active": false
                },
                {
                  "name": "Laurieri",
                  "value": 24246,
                  "count": 2,
                  "permalink": "laurieri",
                  "active": false
                },
                {
                  "name": "Milford",
                  "value": 24803,
                  "count": 2,
                  "permalink": "milford-33d03aaf-052e-4692-be8c-3b370a434b4b",
                  "active": false
                },
                {
                  "name": "Salina",
                  "value": 27177,
                  "count": 2,
                  "permalink": "salina-4b9c58d1-01a3-4dbd-82ca-ea5b4a6f0221",
                  "active": false
                },
                {
                  "name": "Dr.Korner",
                  "value": 54634,
                  "count": 2,
                  "permalink": "dr-korner",
                  "active": false
                },
                {
                  "name": "Услад",
                  "value": 279,
                  "count": 1,
                  "permalink": "uslad",
                  "active": false
                },
                {
                  "name": "Главпродукт",
                  "value": 355,
                  "count": 1,
                  "permalink": "glavprodukt",
                  "active": false
                },
                {
                  "name": "Five",
                  "value": 1455,
                  "count": 1,
                  "permalink": "five",
                  "active": false
                },
                {
                  "name": "Ударница",
                  "value": 1506,
                  "count": 1,
                  "permalink": "udarnitsa",
                  "active": false
                },
                {
                  "name": "Luminarc",
                  "value": 1998,
                  "count": 1,
                  "permalink": "luminarc",
                  "active": false
                },
                {
                  "name": "Фэг",
                  "value": 2611,
                  "count": 1,
                  "permalink": "feg",
                  "active": false
                },
                {
                  "name": "Яшкино",
                  "value": 2743,
                  "count": 1,
                  "permalink": "yashkino",
                  "active": false
                },
                {
                  "name": "MacChocolate",
                  "value": 2828,
                  "count": 1,
                  "permalink": "macchocolate",
                  "active": false
                },
                {
                  "name": "Haas",
                  "value": 4807,
                  "count": 1,
                  "permalink": "haas",
                  "active": false
                },
                {
                  "name": "Geomar",
                  "value": 4913,
                  "count": 1,
                  "permalink": "geomar",
                  "active": false
                },
                {
                  "name": "Леовит",
                  "value": 5163,
                  "count": 1,
                  "permalink": "leovit",
                  "active": false
                },
                {
                  "name": "Круанте",
                  "value": 5349,
                  "count": 1,
                  "permalink": "kruante",
                  "active": false
                },
                {
                  "name": "Bionova",
                  "value": 5351,
                  "count": 1,
                  "permalink": "bionova",
                  "active": false
                },
                {
                  "name": "Адыгейская",
                  "value": 6484,
                  "count": 1,
                  "permalink": "adygeyskaya",
                  "active": false
                },
                {
                  "name": "St Michel",
                  "value": 7248,
                  "count": 1,
                  "permalink": "st-michel",
                  "active": false
                },
                {
                  "name": "0 калорий",
                  "value": 7311,
                  "count": 1,
                  "permalink": "0-kaloriy",
                  "active": false
                },
                {
                  "name": "Wilmax",
                  "value": 8777,
                  "count": 1,
                  "permalink": "wilmax",
                  "active": false
                },
                {
                  "name": "Ravifruit",
                  "value": 8785,
                  "count": 1,
                  "permalink": "ravifruit",
                  "active": false
                },
                {
                  "name": "Правильное Питание",
                  "value": 11408,
                  "count": 1,
                  "permalink": "pravilnoe-pitanie",
                  "active": false
                },
                {
                  "name": "Еврозлак",
                  "value": 20040,
                  "count": 1,
                  "permalink": "evrozlak",
                  "active": false
                },
                {
                  "name": "Тема",
                  "value": 22061,
                  "count": 1,
                  "permalink": "tema",
                  "active": false
                },
                {
                  "name": "Чайкофский",
                  "value": 22465,
                  "count": 1,
                  "permalink": "chaykofskiy",
                  "active": false
                },
                {
                  "name": "Svanuri Marili",
                  "value": 24251,
                  "count": 1,
                  "permalink": "svanuri-marili",
                  "active": false
                },
                {
                  "name": "Fitelle",
                  "value": 24460,
                  "count": 1,
                  "permalink": "fitelle",
                  "active": false
                },
                {
                  "name": "Мистраль",
                  "value": 24468,
                  "count": 1,
                  "permalink": "mistral-5899e6eb-d815-40da-ace9-608dcccbe5bc",
                  "active": false
                },
                {
                  "name": "Wasa",
                  "value": 25567,
                  "count": 1,
                  "permalink": "wasa",
                  "active": false
                },
                {
                  "name": "Фасоль",
                  "value": 36232,
                  "count": 1,
                  "permalink": "fasol",
                  "active": false
                },
                {
                  "name": "Славянка БМП",
                  "value": 51322,
                  "count": 1,
                  "permalink": "slavyanka-bmp",
                  "active": false
                },
                {
                  "name": "Take a Bite",
                  "value": 54682,
                  "count": 1,
                  "permalink": "take-a-bite",
                  "active": false
                },
                {
                  "name": "Сладколюбоф",
                  "value": 64297,
                  "count": 1,
                  "permalink": "sladkolyubof",
                  "active": false
                },
                {
                  "name": "Живые конфеты",
                  "value": 69239,
                  "count": 1,
                  "permalink": "zhivye-konfety",
                  "active": false
                },
                {
                  "name": "Победа Вкуса",
                  "value": 79332,
                  "count": 1,
                  "permalink": "pobeda-vkusa-8197e69",
                  "active": false
                }
              ]
            },
            {
              "key": "country",
              "name": "Страна изготовления",
              "type": "multi_select",
              "options": [
                {
                  "name": "Россия",
                  "permalink": "rossiya",
                  "value": 526,
                  "count": 130,
                  "active": false
                },
                {
                  "name": "Россия ",
                  "permalink": "rosiiya",
                  "value": 97,
                  "count": 23,
                  "active": false
                },
                {
                  "name": "Латвия",
                  "permalink": "latviya",
                  "value": 1499,
                  "count": 9,
                  "active": false
                },
                {
                  "name": "Германия",
                  "permalink": "germaniya",
                  "value": 525,
                  "count": 6,
                  "active": false
                },
                {
                  "name": "Франция",
                  "permalink": "frantsiia",
                  "value": 20,
                  "count": 4,
                  "active": false
                },
                {
                  "name": "Италия",
                  "permalink": "italiya",
                  "value": 527,
                  "count": 3,
                  "active": false
                },
                {
                  "name": "Нидерланды",
                  "permalink": "niderlandy",
                  "value": 542,
                  "count": 3,
                  "active": false
                },
                {
                  "name": "Бельгия",
                  "permalink": "bel-giya",
                  "value": 583,
                  "count": 3,
                  "active": false
                },
                {
                  "name": "Бельгия",
                  "permalink": "bielghiia",
                  "value": 29,
                  "count": 2,
                  "active": false
                },
                {
                  "name": "США",
                  "permalink": "ssha",
                  "value": 31,
                  "count": 2,
                  "active": false
                },
                {
                  "name": "Австрия",
                  "permalink": "avstriya",
                  "value": 532,
                  "count": 2,
                  "active": false
                },
                {
                  "name": "Беларусь",
                  "permalink": "belarus",
                  "value": 546,
                  "count": 2,
                  "active": false
                },
                {
                  "name": "Польша",
                  "permalink": "pol-sha",
                  "value": 548,
                  "count": 2,
                  "active": false
                },
                {
                  "name": "Финляндия",
                  "permalink": "finliandiia",
                  "value": 3,
                  "count": 1,
                  "active": false
                },
                {
                  "name": "Израиль",
                  "permalink": "izrail",
                  "value": 6,
                  "count": 1,
                  "active": false
                },
                {
                  "name": "Нидерланды",
                  "permalink": "nidierlandy",
                  "value": 8,
                  "count": 1,
                  "active": false
                },
                {
                  "name": "Италия",
                  "permalink": "italiia",
                  "value": 11,
                  "count": 1,
                  "active": false
                },
                {
                  "name": "Латвия",
                  "permalink": "latviia",
                  "value": 26,
                  "count": 1,
                  "active": false
                },
                {
                  "name": "Великобритания",
                  "permalink": "vielikobritaniia",
                  "value": 38,
                  "count": 1,
                  "active": false
                },
                {
                  "name": "Франция",
                  "permalink": "frantsiya",
                  "value": 528,
                  "count": 1,
                  "active": false
                },
                {
                  "name": "Австралия",
                  "permalink": "avstraliya",
                  "value": 535,
                  "count": 1,
                  "active": false
                }
              ]
            }
          ],
        "sort": [
        {
            "key": "popularity",
            "name": "По популярности",
            "order": "desc",
            "active": true
        },
        {
            "key": "price_asc",
            "name": "Сначала дешевые",
            "order": "asc",
            "active": false
        },
        {
            "key": "price_desc",
            "name": "Сначала дорогие",
            "order": "desc",
            "active": false
        },
        {
            "key": "unit_price_asc",
            "name": "Выгоднее по весу",
            "order": "asc",
            "active": false
        }
        ],
        "root_categories": {
        "key": "root_category",
        "name": "Категория",
        "type": "select",
        "options": [
            {
            "name": "Макароны, крупы, мука",
            "permalink": "bakaleya",
            "value": 43480,
            "count": 43,
            "active": false
            },
            {
            "name": "Сладости",
            "permalink": "sladosti",
            "value": 43489,
            "count": 41,
            "active": false
            },
            {
            "name": "Замороженные продукты",
            "permalink": "zamorozhennie-produkti",
            "value": 56259,
            "count": 32,
            "active": false
            },
            {
            "name": "Овощи, фрукты, орехи",
            "permalink": "ovoshchi-frukti-orekhi",
            "value": 41328,
            "count": 28,
            "active": false
            },
            {
            "name": "Детские товары",
            "permalink": "detskie-tovari_osnovnaya",
            "value": 66510,
            "count": 19,
            "active": false
            },
            {
            "name": "Молоко, сыр, яйца, растительные продукты",
            "permalink": "moloko-yajtsa",
            "value": 43466,
            "count": 18,
            "active": false
            },
            {
            "name": "Кухня",
            "permalink": "kukhnya_giperi",
            "value": 67172,
            "count": 7,
            "active": false
            },
            {
            "name": "Хлеб, хлебцы, выпечка",
            "permalink": "khleb-khlebtsi-vipechka",
            "value": 43508,
            "count": 3,
            "active": false
            },
            {
            "name": "Здоровый выбор",
            "permalink": "zdorovoe-pitanie",
            "value": 59335,
            "count": 3,
            "active": false
            },
            {
            "name": "Вода, соки, напитки",
            "permalink": "voda-soki-napitki-copy",
            "value": 68254,
            "count": 3,
            "active": false
            },
            {
            "name": "Косметика, гигиена",
            "permalink": "kosmetika-gigiena",
            "value": 60910,
            "count": 1,
            "active": false
            },
            {
            "name": "Чай, кофе",
            "permalink": "chaj-kofe_new",
            "value": 64981,
            "count": 1,
            "active": false
            }
        ]
        },
        "private_filters": {
        "in_stock": true,
        "with_similar": true
        },
        "promo_badges": []
    }))  
    
    //обновляем итератор для следующего раза
    setTimeout(() => {
        entityIter = entitiesData[Symbol.iterator]()
    }, 2000);
});

app.listen(3000);
