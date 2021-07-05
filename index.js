// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const copycats=[...cats,"Broom"]
    return copycats
}

function prependCat(name){
    const copycats=["Arnold",...cats]
    return copycats
}

function removeLastCat(){
    return cats.slice(0,cats.length -1);
}

function removeFirstCat(){
    return cats.slice(1);
}
