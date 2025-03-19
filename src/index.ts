// Example TypeScript code
interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old.`;
}

// Example usage
const user: User = {
  name: "John",
  age: 30,
};

console.log(greet(user));

// DOM manipulation example
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = greet(user);
  }
});
