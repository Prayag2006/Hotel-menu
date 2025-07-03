//Project of hotel menu
let totalBill = 0;
let option;
//Do while loop started
do {
  //hotel menu
  alert(
    "===========MENU=========\n" +
    " No.          Food           Price\n" +
    "1            PIZZA            850\n" +
    "2            PASTA            450\n" +
    "3           BURGER            150\n" +
    "3           BURGER            150\n"+
    "4            MAGGIE            50\n"+
    "5            COFFEE           150\n"+
    "6         COLD COFFEE         200"
  )
//User choice 
  let choice = Number(prompt("Enter your choice: "));
  let quantity, price = 0;
//switch case started
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
  //switch case started
  alert(("Subtotal: ₹" + price))
  console.log(totalBill += price)
  option = Number(prompt("Do you want to order something else? Enter 1 for Yes, 0 for No: "));

} while (option === 1);
//Do while loop end here
alert("==THANK YOU FOR YOUR ORDER==\n"+"======== VISIT AGAIN ========\n"+`YOUR TOTAL BILL : ₹${totalBill}`)
//Project end here
