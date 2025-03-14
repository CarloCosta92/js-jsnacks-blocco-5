const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const newNumbers = numbers.map((element) => element + 1);
console.log(newNumbers);

let result= [];
for(let i=0;i<numbers.length;i++) {
    const currentNumber=numbers[i] + 1;
    result.push(currentNumber);
}

console.log(result)