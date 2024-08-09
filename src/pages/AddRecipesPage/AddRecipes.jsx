import { MainPageTitle } from '../../components/MyRecipesPage/MainPageTitle/MainPageTitle';
import { Background } from '../../components/MyRecipesPage/Background/Background';
import { Container } from '../../components/MyRecipesPage/Container/Container';
import { Main } from '../../components/AddRecipePage/Main/Main';
import { GoToTop } from '../../components/MyRecipesPage/ScrollUp/ScrollUp';
import { FollowUs } from '../../components/AddRecipePage/FollowUs/FollowUs';
import { PopularRecipe } from '../../components/AddRecipePage/PopularRecipe/PopularRecipe';
import { AddRecipeForm } from '../../components/AddRecipePage/AddRecipeForm/AddRecipeForm';
import { SecondaryWrapper, Section, WrapperStyled } from '../AddRecipesPage/AddRecipes.styled';
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

