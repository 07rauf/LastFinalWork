import React from 'react';
import '../TotalCss/total.css';

const Orders = ({ orders = [] }) => {
  const getTotalPrice = () => {
    const totalPrice = orders.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div className='orders'>
      <div className='checkoutorders'>Orders</div>
      <hr />
      <div className='gettingproducts'>
        {orders.length === 0 ? (
          <p>Məhsul Yoxdur</p>
        ) : (
          <ul>
            {orders.map((item, index) => (
              <li key={index}>
                {item.product.name} - ${item.product.price} x {item.quantity} ədəd
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className='totalpricee'>Total Price: ${getTotalPrice()}</p>
      <div class="visa-card">
  <div class="logoContainer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="23"
      height="23"
      viewBox="0 0 48 48"
      class="svgLogo"
    >
      <path
        fill="#ff9800"
        d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
      ></path>
      <path
        fill="#d50000"
        d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
      ></path>
      <path
        fill="#ff3d00"
        d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
      ></path>
    </svg>
  </div>
  <div class="number-container">
    <label class="input-label" for="cardNumber">CARD NUMBER</label>
    <input
      class="inputstyle"
      id="cardNumber"
      placeholder="XXXX XXXX XXXX XXXX"
      name="cardNumber"
      type="text"
    />
  </div>

  <div class="name-date-cvv-container">
    <div class="name-wrapper">
      <label class="input-label" for="holderName">CARD HOLDER</label>
      <input
        class="inputstyle"
        id="holderName"
        placeholder="NAME"
        type="text"
      />
    </div>

    <div class="expiry-wrapper">
      <label class="input-label" for="expiry">VALID THRU</label>
      <input class="inputstyle" id="expiry" placeholder="MM/YY" type="text" />
    </div>
    <div class="cvv-wrapper">
      <label class="input-label" for="cvv">CVV</label>
      <input
        class="inputstyle"
        placeholder="***"
        maxLength="3"
        id="cvv"
        type="password"
      />
    </div>
  </div>
</div>
<button class="Btn">
  Pay
  <svg viewBox="0 0 576 512" class="svgIcon"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
</button>
    </div>
  );
};

export default Orders;
