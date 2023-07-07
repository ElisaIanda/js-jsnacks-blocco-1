const listaNumeri = [];
let somma = 0

for (let i = 0; i < 30; i++) {
    const numero = Math.floor(Math.random() * 100) + 1;

    if (i % 2 !== 0) {
        somma += numero;
    }

    listaNumeri.push(numero);
}

console.log(listaNumeri);
console.log(somma);








// const listNumbers = [1,2,3,4,5,6,7,8,9,10];
// const oddNumbers =[];
// const cardNumber = document.getElementById('card-number');


// for (i = 0; i < listNumbers.length; i++){
//     if( i % 2 == 0){
//         console.log( listNumbers[i]);
//         oddNumbers.push(listNumbers[i]);
//     }
// }

// console.log(`dispari ${oddNumbers}`)
// let somma = 0;
// for ( i = 0; i < oddNumbers.length; i++){
//     somma = oddNumbers[i];
// }
// cardNumber.innerHTML = `<span>Lista dei numeri: ${listNumbers}</span>`;
// cardNumber.innerHTML += `<span>Numeri dispari della lista ${oddNumbers}</span>`;
// cardNumber.innerHTML += `<span> Somma dei numeri dispari ${somma}</span>`;
// console.log(somma);




