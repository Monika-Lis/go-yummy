import { MainPageTitle } from './MainPageTitle/MainPageTitle';
import { Background } from './Background/Background';
import { Container } from './Container/Container';
import { Main } from './Main/Main';
import { GoToTop } from '.ScrollUp/ScrollUp';
import { FollowUs } from './FollowUs/FollowUs';
import { PopularRecipe } from './PopularRecipe/PopularRecipe';
import { AddRecipeForm } from './AddRecipeForm/AddRecipeForm';
import { SecondaryWrapper, Section, WrapperStyled } from './AddRecipePage.styled';
import { useMediaQuery } from '@mui/material';

export const AddRecipePage = () => {
  const desktop = useMediaQuery('(min-width: 1280px)');
  
  return (
    <Main>
      <Background />
      <Container>
        <Section>
          <MainPageTitle title="Add recipe" />
          <WrapperStyled>
            <AddRecipeForm />
            <SecondaryWrapper>
              {desktop && <FollowUs />}
              <PopularRecipe />
            </SecondaryWrapper>
          </WrapperStyled>
        </Section>
      </Container>
      <GoToTop/>
    </Main>
  );
};

