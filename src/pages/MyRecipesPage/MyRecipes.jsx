import { MyRecipesList } from './MyRecipesList/MyRecipesList';
import { GoToTop } from 'r./ScrollUp/ScrollUp';
import { Main } from './Main/Main';

const MyRecipesPage = () => {
  return (
    <Main>
      <MyRecipesList />
      <GoToTop />
    </Main>
  );
};

export default MyRecipesPage;