import { useEffect, useState } from "react";
import { Card } from "./Card";
import "./App.css";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [searchLabel, setSearchLabel] = useState({ searchVal: "" });

  useEffect(() => {
    getApi();
  }, []);

  // const searchLabel =()=>{

  // }
  const getApi = async () => {
    const url =
      "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5d699c58b7msh13c1b876a6789bcp1213cejsne1a177984176",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setApiData(result.hints);
      // console.log(result.hints);
      // console.log(apiData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <input
        className="search"
        type="search"
        placeholder="search"
        onChange={(e) =>
          setSearchLabel((search) => {
            search.searchVal = e.target.value;
            return { ...search };
          })
        }
      />
      <div className="main">
        {apiData.map((food) => {
          if (food.food.label.toLowerCase().includes(searchLabel.searchVal)) {
            return <Card key={food.image} food={food} />;
          }
        })}
      </div>
    </>
  );
};

// const Card = (props) => {
  
// };
export default App;
