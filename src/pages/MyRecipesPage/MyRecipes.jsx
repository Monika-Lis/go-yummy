import { MyRecipesList } from '../../components/MyRecipesPage/MyRecipesList/MyRecipesList';
import { GoToTop } from '../../components/MyRecipesPage/ScrollUp/ScrollUp';
import { Main } from '../../components/AddRecipePage/Main/Main';

export const MyRecipesPage = () => {
  return (
    <Main>
      <MyRecipesList />
      <GoToTop />
    </Main>
  );
};

