import React from "react";
import Aux from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((key) => {
    return (
      <li key={key}>
        <spam style={{ textTransform: "capitalize" }}>{key}: </spam>
        {props.ingredients[key]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {props.price}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
