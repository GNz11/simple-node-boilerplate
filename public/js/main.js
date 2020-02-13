import axios from 'axios';

// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML);
console.log("hellooooo");

export const getReservations = async () => {
  const { data } = await axios.get('http://localhost:3000/reservations');
};
