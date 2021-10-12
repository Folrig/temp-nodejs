let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  Liquid: ["water", "ice"],
  Holder: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is CLOSED!"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruit[2]} was chosen!`);
  } catch(error) {
    console.log("Customer has left!", error);
  } finally {
    console.log("Day has ended, shop is now closed!");
  }
}

kitchen();



// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Which toppings do you want?"));
//     }, 3000)
//   });
// };

// async function kitchen() {
//   console.log("A");
//   console.log("  B");
//   console.log("    C");
  
//   await toppings_choice();
  
//   console.log("      D");
//   console.log("        E");
// }

// kitchen();

// console.log("Cleaning dishes...");
// console.log("Taking more orders....");
// console.log("Taking the money....");

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Sorry, we are closed"));
//     }
//   });
// };

// order(2000, () => {
//   console.log(`${stocks.Fruits[0]} has been selected`);
//   })
//   .then( () => {
//     return order(0000, () => console.log('Production has started'));
//   })
//   .then( () => {
//     return order(2000, () => console.log('The fruit was chopped'))
//   })
//   .then( () => {
//     return order(1000, () => console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was selected`))
//   })
//   .then( () => {
//     return order(1000, () => console.log("start the machine"))
//   })
//   .then( () => {
//     return order(2000, () => console.log(`Ice cream was placed on ${stocks.Holder[0]}`))
//   })
//   .then( () => {
//     return order(3000, () => console.log(`${stocks.Toppings[0]} was put on the ice cream`))
//   })
//   .then( () => {
//     return order(2000, () => console.log('Ice cream was served!'));
//   })
//   .catch ( () => {
//     console.log("Customer left...");
//   })
//   .finally( () => {
//   console.log("Day has ended. Shop is closed!");
// });