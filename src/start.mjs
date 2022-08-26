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
        entitiesData: responseData,
        products_offset: products_offset + limit - bannersInResponse,
        limit: limit,
        products_total_count: entitiesData.length,
    }))  
    
    //обновляем итератор для следующего раза
    setTimeout(() => {
        entityIter = entitiesData[Symbol.iterator]()
    }, 2000);
});

app.listen(3000);
