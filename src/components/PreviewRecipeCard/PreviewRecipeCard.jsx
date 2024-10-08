import css from './PreviewRecipeCard.module.css';

export const PreviewRecipeCard = ({ recipe }) => {
  return (
    <li className={css.popularRecipeLi}>
      <img
        className={css.popularRecipeImg}
        alt={recipe.title}
        src={recipe.preview}
        width="100%"
        height="100%"
      />
      <div className={css.popularRecipeName}>{recipe.title}</div>
    </li>
  );
};
