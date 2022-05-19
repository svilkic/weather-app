import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Container } from './components/Container';
import { Dropdown } from './components/UI/Dropdown';
import { LANGUAGES } from './constants/language';
import i18next from 'i18next';
import { fetchCities } from './store/slices/weatherSlice';
import { getLocalLanguage, handleLanguageChange } from './helper/functions';

function App() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const localStoreLanguage = getLocalLanguage();

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  return (
    <ContainerMain>
      <ContentContainer>
        <Title>
          <h4>{t('title')}</h4>
          <DropdownSmall>
            <Dropdown
              onSelect={handleLanguageChange}
              list={LANGUAGES}
              defaultSelected={localStoreLanguage}
            />
          </DropdownSmall>
        </Title>
        <Container />
      </ContentContainer>
    </ContainerMain>
  );
}

const ContainerMain = styled.main`
  width: 100vw;
  min-height: 100vh;
`;
const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  min-width: 70%;
  max-width: 60vw;
  min-height: inherit;
  max-height: 100vh;
  padding: 1rem;

  //Desktop
  @media (min-width: 1025px) {
    aspect-ratio: 16/10;
  }

  //Tablet and below
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100vw;
    max-height: initial;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: var(--color-white);

  h4 {
    text-align: left;
  }

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

const DropdownSmall = styled(Dropdown)`
  position: relative;
  top: 3px;
  display: none;

  @media (max-width: 1024px) {
    display: block;
    z-index: 10;
  }
`;

export default App;
