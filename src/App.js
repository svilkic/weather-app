import styled from "styled-components";
import { Container } from "./components/Container";

function App() {
  /* useEffect(() => {
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
  };*/

  return (
    <ContainerMain>
      <Title>
        <h4>Weathery</h4>
      </Title>
      <Container />
    </ContainerMain>
  );
}

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  width: 70%;
  margin-bottom: 1rem;
  color: var(--color-white);

  //Tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }

  //Mobile
  @media (max-width: 767px) {
    /* CSS */
    width: 95%;
  }
`;

export default App;
