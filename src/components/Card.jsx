import useMeal from "../hooks/useMeal";
const Card = ({ title }) => {
  const content = useMeal(title);

  return (
    <li className="card">
      <img src={content[1]} className="showImage" alt="food preview" />
      <button className="btn">{content[0]}</button>
    </li>
  );
};
export default Card;
