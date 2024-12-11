function prepareGifts(gifts) {
    const set = new Set()
    gifts.forEach(gift => {
      set.add(gift)
    })
    return Array.from(set).sort((a, b) => a - b)
  }


const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]


