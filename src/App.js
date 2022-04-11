import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Container } from './components/Container';
import { Dropdown } from './components/UI/Dropdown';
import { fetchCities } from './store/slices/weatherSlice';

function App() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  return (
    <ContainerMain>
      <Dropdown />
      <Title>
        <h4>{t('title')}</h4>
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
  min-height: 100vh;
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
