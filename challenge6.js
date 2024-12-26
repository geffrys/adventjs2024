function inBox(box) {

    // primero evaluaremos el escenario donde verifiquemos que esta presente el elemento.
    const hasItemRegex = /.?\*.*|.*\*\s*.*|.*\*.*/
    // como segundo factor buscaremos si esta adrento 
    const betweenItems = /[^\w]\*\s*[^\w]/
    let out = false;
    box.forEach((element, index) => {
        console.log(index)
        // verificamos los primeros y ultimo inddice;
        if(index == 0 || index == (box.length-1)){
            if(hasItemRegex.test(element)){
                out = false;
            }
        }
        if(hasItemRegex.test(element) && !(index == 0 || index == (box.length-1))){
            out = betweenItems.test(element);
        }        
    });
    return out;
}


const box1 = [
    "###",
    "#*#",
    "###"
  ];
const box2 =[
    "###",
    "###",
    "#*#"
  ];
const box3 = [
    "#*#",
    "###",
    "###"
  ];

console.log(inBox(box2))
console.log(inBox(box3))

inBox(box1);