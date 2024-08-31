/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const price = 800;
const age = 60;

if (age < 10) {
  console.log('Free Ticket');
} else if (age >= 18 && age <= 25) {
  const discount = (price * 50) / 100;
  const discountPrice = price - discount;
  console.log(`Student Discounted Price: ${discountPrice} tk`);
} else if (age >= 60) {
  const discount = (price * 15) / 100;
  const discountPrice = price - discount;
  console.log(`Senior Citizen Discounted Price: ${discountPrice} tk`);
} else {
  console.log(price);
}
