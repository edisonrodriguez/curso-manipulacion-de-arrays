const letters = ['a','b','c']  

for(let i = 0; i < letters.length; i++){
    const salida = letters[i];
    console.log(`for ${salida}`)
}
console.clear() 

letters.forEach(element => {
    console.log(`forEach ${element}`)
});