function createFrame(names) {
    let maxValue = 0
    let concat = ' '; // whitespace
    let frames = '*'
    let out = '';
    names.forEach(element => {
        if(element.length > maxValue){
            maxValue = element.length
        }        
    });
    let normalizedArray = names.map(element => {
        if(element.length != maxValue){
            return element + concat.repeat(maxValue-element.length)
        }
        return element;
    })
    console.log(frames.repeat(maxValue+4));
    out += `${frames.repeat(maxValue+4)}\n`
    normalizedArray.forEach((element)=>{
        console.log(`* ${element} *`);
        out += `* ${element} *\n`
    })
    out += `${frames.repeat(maxValue+4)}`
    return out;
}

  createFrame(['midu', 'madeval', 'educalvolpz'])
