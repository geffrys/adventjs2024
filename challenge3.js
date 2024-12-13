const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'doll', quantity: 5, category: 'decorations' },
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
        inv.reduce((previous, current) => {
            const key = `${current.name}-${current.category}`;
            if (!previous.has(key)) {
                previous.set(key, { ...current });
            } else {
                previous.get(key).quantity += current.quantity;
            }
            return previous;
        }, new Map()).values()
    );

    let inventoryOrganized = {}
    let categories = new Map();
    inventoryAux.forEach((item) => {
        if (!categories.has(item.category)) {
            categories.set(item.category, []);
        }
        categories.get(item.category).push(item);
    });

    inventoryAux.forEach((item) => {
        categories.get(item.category).push(item)
    })
    for (const [category, items] of categories.entries()) {
        inventoryOrganized[category] = items.reduce((acc, item) => {
            acc[item.name] = item.quantity;
            return acc;
        }, {});
    }
    console.log(inventoryOrganized);
    return inventoryOrganized
}

organizeInventory(inventory);


