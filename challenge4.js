function createXmasTree(height, ornament) {
    /* Code here */
    let tree = '';
    let maxWidth = calculateBase(height);
    tree += drawTreeLeafs(height, maxWidth, ornament, "_");
    tree += drawTreeRoot(maxWidth, '#', "_", 2)
    
    // Calculamos la base a partir de la altura
    // con esta tendremos el ancho maximo
    function calculateBase(levels){
        let base = 1;
        for (let index = 1; index < levels; index++) {
            if(levels == 1){
                return base;
            }
            base+=2;
        }
        return base;
    }
    function drawTreeLeafs(levels, maxWidth, ornament, emptyOrnament){
        let cumulate = 1;
        let leafs = '';
        for (let index = 0; index < levels; index++) {
            let emptyOrnamentCount = (maxWidth-cumulate)/2;
            leafs+= emptyOrnament.repeat(emptyOrnamentCount)+ornament.repeat(cumulate)+emptyOrnament.repeat(emptyOrnamentCount);
            leafs+='\n'
            cumulate+=2
        }
        return leafs
    }
    function drawTreeRoot(maxWidth, rootOrnament,emptyOrnament, rootLevelsQuantity){
        let root = ''
        let emptySpaces = (maxWidth-1)/2
        for (let index = 0; index < rootLevelsQuantity; index++) {
            root+=emptyOrnament.repeat(emptySpaces)+rootOrnament+emptyOrnament.repeat(emptySpaces)
            index == rootLevelsQuantity-1?root=root:root+='\n';
        }
        return root;
    }
    
    

    return tree;
  }

console.log(createXmasTree(5, '*'))