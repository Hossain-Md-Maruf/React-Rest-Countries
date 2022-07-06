import './App.css';
import Countries from './components/Countries/Countries';




function App() {
  return (
    <div className="App">
  <Countries></Countries>
      
    </div>
  );
}

// function Countries()
// {
//   const [countries, setCountries] = useState([]);
//   useEffect(()=>
//   {
//     fetch('https://restcountries.com/v2/all')
//     .then(res=> res.json())
//     .then(data=> setCountries(data));
//   },[]);

//   return(
//     <div>
//       <h2>Travelling around the world!!</h2>
//       <h3>Countries: {countries.length}</h3>
//       {
//         countries.map(country=> <Country name={country.name} capital={country.capital} ></Country>)
//       }
//     </div>
//   );
// }
// function Country(props)
// {
//   return(
//     <div>
//       <h2>Country Name: {props.name}</h2>
//       <h3>Capital: {props.capital}</h3>
//     </div>
//   );
// }

export default App;
