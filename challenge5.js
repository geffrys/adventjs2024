/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    // Crearemos un map que contenga, cuya llave principal sera la talla.
    let shoesMap = new Map();
    shoes.forEach(e => {
        if(!shoesMap.has(e.size)){
            shoesMap.set(e.size, {
                I: 0, D: 0
            })
        }
        
        // aca obtenemos el objeto especifico del map
        let countShoes = shoesMap.get(e.size);
        e.type == "I"? countShoes.I+=1:countShoes.D+=1;
    })

    let pairsArray = [];
    console.log(shoesMap)
    shoesMap.forEach((value, key) => {
        // en este ciclo lo que debemos hacer es ver como identificamos que una llave del map contiene un par.
        // si alguno de los valores es 0 entonces no hay pares
        if(value.D == 0 || value.I == 0){
            return;
        }
        // si tienen la misma cantidad, entonces la cantidad de pares es esa cantidad.
        if(value.D - value.I == 0 ){
            for (let number = 0; number < value.D; number++) {
                pairsArray.push(key)
            }
            return;
        }
        // si no tienen la misma cantidad entonces lo que debemos hacer calcular el excedente
        // a. hacemos una resta para comprobar la diferencia entre ambas cantidades y este valor se lo restamos a cada valor.
        let diferential = value.I>value.D? value.I-value.D: value.D-value.I;
        console.log(diferential)
        let numberPairs = ((value.D !== 1?value.D-diferential:1) + (value.I !== 1?value.I-diferential:1)) / 2;
        console.log(numberPairs)
        for (let number = 0; number < numberPairs; number++) {
            pairsArray.push(key)
        }
    })
    pairsArray.sort((a,b)=> a - b);
    console.log(pairsArray)
    return pairsArray;
}

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
];
const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
];

const shoes3 = [
    { type: 'I', size: 39 },
    { type: 'R', size: 39 },
    { type: 'R', size: 39 },
]
const shoes6 = [
    { type: 'I', size: 41 },
    { type: 'I', size: 41 },
    { type: 'R', size: 41 },
    { type: 'I', size: 41 }
];
const shoes4 = [
    { type: 'I', size: 40 },
    { type: 'I', size: 40 },
    { type: 'R', size: 40 },
    { type: 'R', size: 40 },
    { type: 'R', size: 40 }
];
const shoes5 = [
    { type: 'I', size: 42 },
    { type: 'I', size: 42 },
    { type: 'I', size: 42 }
];
const shoes7 = [
    { type: 'I', size: 45 },
    { type: 'R', size: 45 },
    { type: 'R', size: 45 },
    { type: 'R', size: 45 },
    { type: 'R', size: 45 },
    { type: 'R', size: 45 },
    { type: 'R', size: 45 },
    { type: 'R', size: 45 }
];
const shoes8 = [
    { type: 'I', size: 38 },
    { type: 'I', size: 39 },
    { type: 'R', size: 38 },
    { type: 'I', size: 40 },
    { type: 'R', size: 41 }
];
const shoes9 = [
    { type: 'I', size: 40 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 },
    { type: 'R', size: 43 },
    { type: 'R', size: 44 }
];
const shoes10 = [
    { type: 'I', size: 39 },
    { type: 'R', size: 39 },
    { type: 'R', size: 39 },
    { type: 'R', size: 39 },
    { type: 'I', size: 39 }
];
const shoes11 = [];
const shoes12 = [
    { type: 'I', size: 38 },
    { type: 'I', size: 39 },
    { type: 'I', size: 40 },
    { type: 'I', size: 41 }
];
const shoes13 = [
    { type: 'I', size: 42 },
    { type: 'I', size: 42 },
    { type: 'I', size: 42 }
];
const shoes14 = [
    { size: 42 }, // Falta el tipo
    { type: 'R' } // Falta el tamaño
];
const shoes15 = [
    { type: 'I', size: 39 },
    { type: 'R', size: 39 },
    { type: 'R', size: 39 },
    { type: 'I', size: 39 },
    { type: 'I', size: 39 }
];
const shoes17 = Array(1000).fill({ type: 'I', size: 40 }).concat(
    Array(1000).fill({ type: 'R', size: 40 })
);
const shoes18 = [
    { type: 'I', size: 40 },
    { type: 'R', size: 39 },
    { type: 'I', size: 40 },
    { type: 'R', size: 40 },
    { type: 'R', size: 39 },
    { type: 'I', size: 40 }
];

organizeShoes(shoes9);
//organizeShoes(shoes2);