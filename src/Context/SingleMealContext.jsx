import { createContext, useState } from "react";

const MealContext = createContext([]);

export const MealProvider = ({ children }) => {
  const [singleMeal, setSingleMeal] = useState([]);
  return (
    <MealContext.Provider value={{ singleMeal, setSingleMeal }}>
      {children}
    </MealContext.Provider>
  );
};
export default MealContext;
