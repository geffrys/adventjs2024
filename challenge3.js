const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' },
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

function organizeInventory(inv) {

    let inventoryAux = Array.from(
        inv.reduce((previous, current, index) => {
            console.log(previous)
            console.log(current.name)
            console.log(previous.has(current.name))
            return previous.set(current)
        }, new Map())
    ).values()
}

organizeInventory(inventory);


