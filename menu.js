alert("First open a console log in your tab.")
console.log("======================MENU=========================");
console.log(" No.          Food           Price");
console.log("1            PIZZA            850");
console.log("2            PASTA            450");
console.log("3           BURGER            150");
console.log("4            MAGGIE            50");
console.log("5            COFFEE           150");
console.log("6         COLD COFFEE         200");

let totalBill = 0;
let option;

do {
  let choice = Number(prompt("Enter your choice: "));
  let quantity, price = 0;

  switch (choice) {
    case 1:
      console.log("PIZZA");
      quantity = Number(prompt("Enter quantity: "));
      price = quantity * 850;
      break;
    case 2:
      console.log("PASTA");
      quantity = Number(prompt("Enter quantity: "));
      price = quantity * 450;
      break;
    case 3:
      console.log("BURGER");
      quantity = Number(prompt("Enter quantity: "));
      price = quantity * 150;
      break;
    case 4:
      console.log("MAGGIE");
      quantity = Number(prompt("Enter quantity: "));
      price = quantity * 50;
      break;
    case 5:
      console.log("COFFEE");
      quantity = Number(prompt("Enter quantity: "));
      price = quantity * 150;
      break;
    case 6:
      console.log("COLD COFFEE");
      quantity = Number(prompt("Enter quantity: "));
      price = quantity * 200;
      break;
    default:
      console.log("Invalid choice!");
      price = 0;
  }

  console.log("Subtotal: ₹" + price);
  totalBill += price;

  option = Number(prompt("Do you want to order something else? Enter 1 for Yes, 0 for No: "));

} while (option === 1);

console.log("============ THANK YOU FOR YOUR ORDER ============");
console.log("================== VISIT AGAIN ====================");
console.log(`YOUR TOTAL BILL : ₹${totalBill}`);

