import React, { useState, useEffect } from 'react';
import '../TotalCss/total.css';
import { FaCartArrowDown, FaRegTrashAlt } from "react-icons/fa";
import image3 from '../img/img3.png';
import { FaInstagram, FaFacebook, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { IoLogoWhatsapp, IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import image1 from '../img/img1.png';

const Midle = ({ searchBrand = '', cartItems = [], setCartItems = () => {}, handleCheckout = () => {}, products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.product.name === product.name);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems(prevItems => [...prevItems, { product: product, quantity: 1 }]);
    }
  };

  const removeFromList = (productName) => {
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(item => item.product.name === productName);
    if (itemIndex !== -1) {
      if (updatedCartItems[itemIndex].quantity > 1) {
        updatedCartItems[itemIndex].quantity -= 1;
      } else {
        updatedCartItems.splice(itemIndex, 1);
      }
      setCartItems(updatedCartItems);
    }
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    return totalPrice.toFixed(2);
  };

  useEffect(() => {
    if (searchBrand.trim() === '') {
      setFilteredProducts(products);
    } else {
      const searched = products.filter(product => product.brand.toLowerCase().includes(searchBrand.toLowerCase()));
      setFilteredProducts(searched);
    }
  }, [searchBrand, products]);

  return (
    <div>
      <div className='divv'>Məhsullar</div>
      <div className='pcontainer'>
        <div className="container page-wrapper">
          <div className="page-inner">
            <div className="row">
              {filteredProducts.map(product => (
                <div key={product.id} className="el-wrapper">
                  <div className="box-up">
                    <img className="img" src={product.image} alt={product.name} />
                    <div className="img-info">
                      <div className="info-inner">
                        <span className="p-name">{product.name}</span>
                        <span className="p-company">{product.brand}</span>
                      </div>
                      <div className="a-size">Details: <span className="size">{product.details}</span></div>
                    </div>
                  </div>

                  <div className="box-down">
                    <div className="h-bg">
                      <div className="h-bg-inner"></div>
                    </div>
                    <button className='addbtn' type='button' onClick={() => addToCart({ name: product.name, price: product.price })}>
                      <div className="cart">
                        <div className="price">${product.price}</div>
                        <div className="add-to-cart">
                          <div className="txt">Add to Cart <FaCartArrowDown className='iconfa' /></div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="about1">
            <img className='foot-img1' src={image3} alt="img1" />
            <img className='foot-img2' src={image1} alt="img2" />
            <div className="call">
              <div className='us'>
                <p><u>Contact Us</u></p>
              </div>
              <div className="telephone">
                <p className="footer-paragraph"><BsFillTelephoneFill /> +994 099-999-99-99</p>
              </div>
              <div className="email">
                <p className="footer-paragraph"><IoMail />toyshopbynezerov@gmail.com</p>
              </div>
              <div className='us3'>
                <p className='us2'><FaCcVisa /></p>
                <p className='us2'><FaCcMastercard /></p>
              </div>
            </div>
          </div>
          <div className="social-account">
            <a href="instragram"><i><FaInstagram /></i></a>
            <a href="facebook"><i><FaFacebook /></i></a>
            <a href="vk"><i><SlSocialVkontakte /></i></a>
            <a href="whatsapp"><i><IoLogoWhatsapp /></i></a>
          </div>
          <div className="sign">
            <p className="foot-paragraph">© ToyShop by Nəzərov, 2024</p>
          </div>
        </div>
      </div>
      <div className="content">
        <div id="cart-button" onClick={toggleCart}>
          <FaCartArrowDown className='facart' />
        </div>
        <div id="cart-content" style={{ opacity: isCartOpen ? 1 : 0 }}>
          <p className='porders'>Sifarişlər</p>
          <hr />
          <p className='pprice'>Yekun Qiymət: ${getTotalPrice()}</p>
          <ol>
            {cartItems.map((item, index) => (
              <li className='ordersincart' key={index}>{item.product.name} - ${item.product.price} x {item.quantity} ədəd
                <button className="deletebutton" type="button" onClick={() => removeFromList(item.product.name)}>
                  <FaRegTrashAlt />
                </button>
              </li>
            ))}
          </ol>
          <button className='button-30' type='button' onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Midle;
