import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import {
  getAllCity,
  getCityImage,
  getCityLatLongImage,
  getCitySearch,
  getCityLatLongImageUrban,
  getWeekForcast,
} from "./helper/api";

function App() {
  useEffect(() => {
    WeatherFromSearch("Belgrade");
    WeatherFromDropDown(22);
  }, []);

  const WeatherFromSearch = async (city) => {
    const res = await getCitySearch(city);
    //Need to choose city from results of search
    const geoname_api = res.cities[0]["_links"]["city:item"]["href"];
    const { lat, long, image } = await getCityLatLongImage(geoname_api);
    const data = await getWeekForcast(lat, long);
    console.log(`Base on Search : `, data);
  };

  const WeatherFromDropDown = async (index) => {
    const res = await getAllCity();
    const urban_api = res[index].href;
    const { lat, lon, image } = await getCityLatLongImageUrban(urban_api);
    const data = await getWeekForcast(lat, lon);
    console.log(`Base on Dropdown : `, data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
