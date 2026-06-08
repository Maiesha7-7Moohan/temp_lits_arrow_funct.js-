// Point 1: Multiline String using Template Literals
const stufftoKnow = `Multiline String of Things
Things to know:
- Purple is amazing
- Coding is fun
- Pinterest is a great source of inspiration`;

console.log("--- Multiline String Output ---");
console.log(stufftoKnow);
console.log("\n");

// Point 2: HTML Generation using Template Literals and Arrow Functions
const generateUserCard = (name, role, status) =>
  `
<div class="user-card">
    <h2>${name}</h2>
    <p>Role: ${role}</p>
    <span class="badge ${status === "active" ? "bg-success" : "bg-danger"}">${status}</span>
</div>`.trim();
// Ternary Operator: A quick, one-line if/else shortcut that picks "bg-success" (green) if the status is active, or "bg-danger" (red) if it is anything else.
// Template Literals: A JavaScript feature that lets you inject the dynamic value of the status variable directly into your HTML text.
// The .trim() method is used to remove any extra whitespace from the beginning and end of the HTML string, ensuring it looks clean.

// Point 3: Arrow Function Conversion
console.log("--- HTML Generation Output ---");
const htmlOutput = generateUserCard(
  "Alexis Meade",
  "Magazine Publisher",
  "active",
);
console.log(htmlOutput);
console.log("\n");

// Point 4: Array Methods with Arrow Functions
const calculateArea = (width, height) => width * height;

console.log("--- Arrow Function Conversion ---");
console.log(`Area of 10x5 rectangle: ${calculateArea(10, 5)}`);
console.log("\n");

const sourceNumbers = [1, 2, 3, 4, 5, 6];

// Using arrow functions inside map and filter methods
const squaredEvenNumbers = sourceNumbers
  .filter((num) => num % 2 === 0)
  // It looks at every number in your original list and keeps only the ones that are perfectly divisible by 2
  .map((num) => num ** 2);
// It takes those remaining even numbers and multiplies each one by itself to calculate its square.

console.log("--- 4. Array Methods with Arrow Functions ---");
console.log("Original Array:", sourceNumbers);
console.log("Squared Even Numbers:", squaredEvenNumbers);
