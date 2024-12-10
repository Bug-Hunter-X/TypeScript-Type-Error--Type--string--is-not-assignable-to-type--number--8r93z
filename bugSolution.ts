function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error: throw new Error('Invalid input: Arguments must be numbers or parsable strings.');
  }
  return numA + numB;
}

let result = add(10, 20); // Works fine
console.log(result); // Output: 30

let result2 = addSafe(10, "20"); //Handles string input, parses it to number
console.log(result2); // Output: 30

let result3 = addSafe("hello", 20); //Handles string input, returns 0 if not parsable
console.log(result3); // Output: 0