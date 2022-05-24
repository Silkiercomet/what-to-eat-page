import useMeal from "../hooks/useMeal";
import { useSingleMeal } from "../hooks/useSingleMeal";
const SingleMeal = () => {
  const { singleMeal } = useSingleMeal();
  const content = useMeal(singleMeal);

  return (
    <article className="single__meal">
      <h1 className="meal__title">{content[0]}</h1>
      <figure className="single__meal_img">
        <img src={content[1]} alt={content[0]} />
      </figure>
      <section className="single__meal_ingredients">
        <h1>Ingredients</h1>
        <ul className="ingredients__list">
          {content[3]?.map((e, i) => (
            <li key={i}>
              <span className="amount">{e.amount}</span> {e.ingredient}
            </li>
          ))}
        </ul>
      </section>
      <section className="single__meal_details">
        <h1>preparation</h1>
        <p>{content[2]}</p>
      </section>
    </article>
  );
};
export default SingleMeal;
