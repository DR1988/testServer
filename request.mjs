import fetch from 'node-fetch';
import {limit as totalLImit} from './src/constants.mjs'
let products_offsetData = 0
let totalProducts = 0;
const getData = (offset, limit = totalLImit) => {
    return fetch(`http://localhost:3000/entities?products_offset=${offset}&limit=${limit}`)
            .then(r => r.json())
            .then(d => {

                // console.log('dddddd', d);
                return d
            })
}


let notEnd = true;
let next = true;
let sum = 0
const launch = async () => {
    while(notEnd && next) {
        next = false
        const result = await getData(products_offsetData)
        next = true
        const { products_offset, limit, products_total_count, entities } = result

    console.log(entities.map(e => e?.type));
        totalProducts += entities.filter(e => e?.type === 'product').length
        console.log('totalProducts', totalProducts);
        products_offsetData = products_offset
        notEnd = products_offset < products_total_count

    }
}
launch()
