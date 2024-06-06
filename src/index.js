import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
    //const style = {color: "red", fontSize: "42px", textTransform: "uppercase"};
    const style={}

    return (
        <header  className="header">
            <h1 style={style}>Fast Pizza Co.</h1>
        </header>
        
    );
}

function Menu() {

  const pizzas = pizzaData;
  const numPizzas = pizzas.length


  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas >0 ? (
        <>
          <p>
          Authentic Italian cuisine. Multiple dishes to choose from. All
          from our store oven, organic and delicious. Sure for you to come again!
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name}/>
            ))}
          </ul>
        </>
      ) : <p>The Menu will be up soon! Thanks for visiting us.</p>} 
      


      {/* <Pizza 
        name='Pizza Spinaci' 
        ingredients='Tomato, mozarella, spinach, 
        and ricotta cheese' 
        photoName='pizzas/spinaci.jpg' 
        price={10} 
      />

      <Pizza 
        name="Pizza Funghi" 
        ingredients='Tomato,mushrooms' 
        price={12}
        photoName='pizzas/funghi.jpg'
      /> */}

    </main>
  );
}

function Pizza({pizzaObj}) {
  console.log(pizzaObj);

  //if(pizzaObj.soldOut) return null;

  return (
    <li className= {`pizza ${pizzaObj.soldOut ? "sold-out" : ""}` }>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        

        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}


function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if(hour >= openHour && hour <= closeHour) alert("We're currently open!");
  //else alert("Sorry we're closed");

  // if(!isOpen)
  //   return(
  //     <p>
  //       You are welcomed here between {openHour}:00 and {closeHour}:00.
  //     </p>
  //   ); 

  return (
   
    <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour}/>
        ) : <p> You are welcomed here between {openHour}:00 and {closeHour}:00.</p>}   
    </footer>
  );
  //return React.createElement('Footer', null, "We're currently open!");
}

function Order({closeHour}) {
  return (
    <div className="order">
          <p>
            The deliciousness is open unitl {closeHour}:00! Visit us 
            or order online!
          </p>
          <button className="btn"> Order </button>
    </div>
  )
}


// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
