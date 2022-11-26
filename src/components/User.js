import React from 'react'
//Purpose of props is to pass information from one parent component that has the "props" object (App.js) to multiple components. This makes it more efficient 
//you have lots of components.

// Ternaries ? Good : Bad
//ternaries are good if you have only one statement 
//age>=18 ? 'is over age' : 'is under age'
//Also, if you have an if statement without else you use: &&.wwwwwww
// function User(props) {

//   const age = 15;
//   const isGreen = true;

//   const users = [
//     {
//       name: "Pedro",
//       age: 21,
//     },
//     {
//       name: "john",
//       age: 29,
//     },
//   ];

//   const Planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true },
//     { name: "Venus", isGasPlanet: false },
//     { name: "Neptune", isGasPlanet: true },
//     { name: "Uranus", isGasPlanet: true },
//   ];

//   return (
//     <div className="App">
//       { age>=18 ?
//       <h1>Yo</h1>
//       : <h1 style = {{color: isGreen ? 'green' : 'red'}}>Hello</h1>
//       }
//       <User name="Pedro" age={21} email="pedro@pedro.com"/>
//       {isGreen && <button>This is a button</button>}

//       {Planets.map(
//         (planet, key) => !planet.isGasPlanet && <h1>{planet.name}</h1>
//       )}
//     </div>
//   );
// }

// export default User