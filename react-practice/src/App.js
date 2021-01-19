
import './App.css';
import Tesla from "./Tesla.jfif"

function Header(props){
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>

  );
}

function Main(props){
  return(
    <section>
      <p>We server the most {props.adjective} food</p>
      <img src={Tesla} alt="Tesla car picture" height={200}/>
      <ul style={{textAlign:"left"}}>
        {props.dishes.map((dish)=><li key={dish.id}> {dish.title} </li>)}
      </ul>
    </section>
  );
}


function Footer(props){
  return(
    <footer>
      <p>{props.year}</p>
      </footer>
  );
}
const dishes=[
  "Macroni",
  "Salmom",
  "Tofu with vegetables"
];

const dishesObjects=dishes.map((dish,i)=>({id:i,title:dish}));

function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main adjective="amazing" dishes={dishesObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
