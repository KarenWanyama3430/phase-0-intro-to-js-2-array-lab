const cats= ['Milo' ,'Otis', 'Garfield']

function destructivelyAppendCat (name) {
    cats.push (name);
}

function destructivelyPrependCat (name){
    cats.unshift (name);
}

function  destructivelyRemoveLastCat(){
    cats.pop ();
}

function destructivelyRemoveFirstCat(){
    cats.shift ();
}

function appendCat (name){
    return cats.concat (name);
}

function prependCat (name){
    const newCats = [name ,...cats]
}

function removeLastCat(){
    return cats.slice (0,cats,length)
}
