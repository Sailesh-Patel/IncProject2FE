import React from "react";
import CreateBasket from "./CreateBasket";
import BasketDisplay from "./BasketDisplay";

function BasketPage() {
  return (
    <div>
      <h1 class="d-flex justify-content-center">Your Basket</h1>
        {/* <CreateBasket/> */}
        <BasketDisplay />
    </div>
  );
}

export default BasketPage;
