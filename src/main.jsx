import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// /* ... your existing code ... */

// #root {
//   max-width: 1280px;
//   margin: 0 auto;
//   padding: 2rem;
//   text-align: center;
// }

// .mainCont {
//   display: flex;
//   flex-direction: column; /* Change flex direction to column */
//   max-width: 850px; /* Adjust max width */
//   margin: 0 auto;
//   border-radius: 20px;
//   background-color: whitesmoke;
//   box-shadow: 5px 5px 25px rgb(161, 161, 161);
//   padding: 2rem; /* Adjust padding */
// }

// .left {
//   grid-template-columns: 1fr; /* Change grid-template-columns */
//   width: 100%; /* Adjust width */
//   padding-right: 0; /* Remove right padding */
// }

// .right {
//   width: 100%; /* Adjust width */
// }

// .tipCont {
//   grid-template-columns: repeat(2, 1fr); /* Change grid-template-columns */
//   gap: 10px;
//   height: auto; /* Set height to auto */
// }

// .tipCont__btn {
//   width: 100%; /* Adjust width */
// }

// /* Add media queries for responsiveness */
// @media (min-width: 768px) {
//   .mainCont {
//     flex-direction: row; /* Change back to row layout on larger screens */
//   }

//   .left, .right {
//     width: 50%; /* Reset width for columns */
//   }

//   .left {
//     padding-right: 50px;
//   }
// }

//////////////////////////////////////////////////////////////

// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// #root {
//   max-width: 1280px;
//   margin: 0 auto;
//   padding: 2rem;
//   text-align: center;
// }

// label {
//   padding: 0;
//   margin: 0;
// }

// .mainCont {
//   display: flex;
//   min-width: 850px;
//   min-height: 450px;
//   margin: 0 auto;
//   border-radius: 20px;
//   background-color: whitesmoke;
//   box-shadow: 5px 5px 25px rgb(161, 161, 161);
//   padding: 2rem;
// }

// .left {
//   display: grid;
//   grid-template-rows: repeat(3, 1fr);
//   grid-template-columns: 1fr;
//   gap: 50px;
//   height: 100px;
//   width: 100%;
//   padding-right: 50px;
//   text-align: left;
// }

// .left-group {
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// }

// .right {
//   display: grid;
//   width: 100%;
//   background-color: rgb(54, 51, 55);
//   color: white;
//   padding: 40px;
//   border-radius: 15px;
//   text-align: left;
// }

// thead {
//   gap: 50px;
// }

// .header {
//   display: flex;
//   flex-direction: column;
// }

// .subText {
//   font-size: 12px;
//   color: grey;
// }

// .rightBtn {
//   background-color: rgb(91, 88, 96);
//   height: 50px;
//   border-radius: 5px;
//   text-transform: uppercase;
// }

// .btn--noBG {
//   border: none;
//   outline: none;
//   font-size: 30px;
//   color: inherit;
//   width: auto;
//   background: none;
//   display: inline;
// }

// .tipCont {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: repeat(2, 1fr);
//   gap: 10px;
//   height: auto;
// }

// .tipCont__btn {
//   width: 100%;
//   height: 50px;
//   padding: 10px;
//   background-color: rgb(45, 45, 45);
//   color: white;
//   border-radius: 5px;
// }

// .tipCont__item:last-child .tipCont__btn {
//   background-color: rgb(234, 213, 234);
//   color: rgb(87, 86, 86);
// }

// input {
//   background-color: rgb(219, 227, 234);
// }

// /* Add media queries for responsiveness */
// @media (min-width: 768px) {
//   .mainCont {
//     flex-direction: row; /* Change back to row layout on larger screens */
//   }

//   .left,
//   .right {
//     width: 50%; /* Reset width for columns */
//   }

//   .left {
//     padding-right: 50px;
//   }
// }
