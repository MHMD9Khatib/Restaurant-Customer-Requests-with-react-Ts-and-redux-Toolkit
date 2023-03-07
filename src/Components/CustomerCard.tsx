import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/cusstomerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}
export default function CustomerCard({ id, name, food }: CustomerCardType) {
  const dispatch = useDispatch();
  const [customerFood, setCustomerFood] = useState("");
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFood}
            onChange={(e) => {
              setCustomerFood(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (!customerFood) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFood,
                })
              );
              setCustomerFood("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
