// CartPage.js
import { useLocation, useNavigate } from "react-router-dom";

function CartPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div>
        <h2>No Item Data Found</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart Page</h1>
      <hr />
      {state.title && <h2>{state.title}</h2>}
      {state.name && <h3>{state.name}</h3>}
      {state.email && <p>{state.email}</p>}
      <p>{state.body}</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default CartPage;