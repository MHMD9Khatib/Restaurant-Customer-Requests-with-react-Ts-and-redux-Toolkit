import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ReservationCard from "./Components/ReservationCard";
import { RootState } from "./app/store";
import { useState } from "react";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./Components/CustomerCard";

function App() {
  const [reservationName, setReservationName] = useState("");

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customer.value);

  const dispatch = useDispatch();
  const handleAddReservations = () => {
    dispatch(addReservation(reservationName));
    setReservationName("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
