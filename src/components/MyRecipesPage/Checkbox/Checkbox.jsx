import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeProductFromShoppingList, addProductToShoppingList } from "../../../redux/shoplist/shoplistOperation";
import { SvgCheck, Box } from "./Checkbox.styled";
import PropTypes from 'prop-types';

export const CustomCheckbox = ({ ingredientId: productId, isChecked, measure }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(null);
  const [motivation, setMotivation] = useState(null);
  
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked])
  
  const handleChange = () => {
    if (!checked) {
      dispatch(addProductToShoppingList({ productId, measure }))
        .then((e) => {
          if (e.payload.length === 1) {
            setMotivation(1);
          }
        });
      setChecked(true);
    } else {
      dispatch(removeProductFromShoppingList({ productId, measure }));
      setChecked(false);
    }
  };

 
};