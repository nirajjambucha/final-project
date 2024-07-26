import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from '../redux/Action';
import { Link } from 'react-router-dom';

function Cart() {

  const cartData = useSelector((state) => state?.cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    const item = cartData.find(item => item.id === productId);
    if (item && item.quantity > 0) {
      dispatch(decrementQuantity(productId));
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeItem(productId));
  };

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace('$', ''));
  };

  const calculateSubtotal = (item) => {
    const price = parsePrice(item.price);
    if (!price || !item.quantity) {
      return 0;
    }
    return price * item.quantity;
  };

  const totalPrice = cartData.reduce((total, item) => total + calculateSubtotal(item), 0);

  return (
    <div>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/product">Product</a></li>
        </ul>
        <div>
          <a href="/home"><svg style={{ width: "118px", height: "40px" }} viewBox="0 0 118 40" fill="none"
            xmlns="http://www.w3.org/2000/svg" className="header_logo__x2KMD">
            <path
              d="M59.5386 33.7514C55.3977 33.7514 51.3269 33.8723 47.3313 34.0974C46.8167 34.1276 45.2386 34.2368 45.2386 34.2368L45.3378 33.3482C45.3378 33.3482 46.8047 33.2357 47.3005 33.2004C51.3046 32.9148 55.3891 32.762 59.5403 32.762C73.8761 32.762 87.4545 34.4972 99.5677 37.5963C87.4545 35.1321 73.8778 33.7514 59.5403 33.7514H59.5386ZM39.094 34.0285C32.4091 34.8482 25.9994 36.0526 19.9573 37.598C25.9994 36.3701 32.4091 35.4126 39.094 34.7592V34.0285ZM62.4382 1.54396C62.4382 1.54396 59.8942 1.48181 57.0834 3.09772C55.2985 4.14756 53.7529 5.8525 52.9631 7.49193C52.8639 7.70526 52.7545 7.93874 52.6861 8.17895C52.604 8.45778 52.6998 8.71814 52.9118 9.00874C53.04 9.21703 53.2092 9.34973 53.2092 9.34973C53.2092 9.34973 53.2674 8.99026 53.5221 8.3822C53.8846 7.53896 54.6881 6.08431 56.3294 4.48855C58.4273 2.47454 60.5302 1.96894 61.6483 1.72201C62.098 1.62291 62.3732 1.58596 62.3732 1.58596L62.4382 1.54228V1.54396ZM70.7097 24.0189C68.8598 23.8493 67.3228 22.1393 67.3228 18.0256C67.3228 14.5065 68.653 12.1818 70.7097 12.1818C72.3596 12.1818 73.2025 13.5743 73.2025 13.5743L73.1973 8.30997C73.1973 8.30997 72.163 7.27692 69.2684 7.40459C65.6747 7.56416 61.9509 10.9925 61.9509 17.7787C61.9509 25.7541 65.567 28.262 69.5813 28.5274C71.9356 28.6819 73.2555 27.8202 73.2555 27.8202V22.9892C73.2555 22.9892 72.322 24.1684 70.7114 24.0206L70.7097 24.0189ZM87.4631 15.1734V23.8778C87.4716 28.8919 84.9601 29.5486 80.5542 29.1069C76.0901 28.6584 73.871 26.7384 73.871 22.3577C73.871 19.067 75.4764 17.4864 77.9229 16.3895C79.4993 15.6824 82.3442 15.0894 82.3442 15.0894C82.3442 15.0894 82.363 14.8391 82.334 14.3974C82.2605 13.2904 81.727 12.5429 80.0498 12.4186C77.0048 12.1919 75.4028 14.1656 75.4028 14.1656V9.39844C75.4028 9.39844 77.3348 7.80604 81.1577 8.11848C85.2781 8.45442 87.4631 10.4432 87.4631 15.1717V15.1734ZM82.3784 18.7647C82.3784 18.7647 81.5407 19.025 80.8072 19.4332C79.7951 20.001 78.8941 20.8308 78.8941 22.5038C78.8941 23.8879 79.4326 24.9613 80.8209 25.0503C82.1921 25.1376 82.3801 24.8269 82.3801 24.1617V18.7647H82.3784ZM117.998 20.4797V29.1858C117.998 34.3258 115.264 34.7693 111.088 33.8605C106.656 32.8964 104.463 30.9495 104.464 26.5705C104.464 23.2798 106.066 21.8302 108.513 20.9265C110.089 20.3436 112.879 19.9875 112.879 19.9875C112.879 19.9875 112.9 19.7389 112.871 19.2955C112.799 18.1835 112.269 17.3671 110.587 17.1337C107.648 16.7238 105.941 18.5077 105.941 18.5077V13.7406C105.941 13.7406 108.022 12.38 111.695 12.9225C115.824 13.5323 118 15.6269 118 20.4797H117.998ZM112.912 23.6628C112.912 23.6628 112.076 23.856 111.342 24.2071C110.329 24.6925 109.486 25.4433 109.486 27.118C109.486 28.5005 109.964 29.5537 111.353 29.8241C112.609 30.066 112.914 29.4714 112.914 28.8062V23.6628H112.912ZM37.8835 18.9259C37.8835 24.9495 35.7259 29.6965 30.6703 30.0996C26.1054 30.4624 23.481 27.2625 23.481 20.6762C23.481 14.819 25.878 9.45387 30.6703 8.96339C35.7481 8.44603 37.8835 11.9752 37.8835 18.9276V18.9259ZM32.6484 19.3828C32.6484 15.9763 32.3749 13.2115 30.6994 13.4819C29.1504 13.7305 28.752 16.8347 28.752 19.9036C28.752 23.2614 29.2923 25.9288 30.79 25.8431C32.4227 25.7507 32.6484 22.9103 32.6484 19.3828V19.3828ZM23.5785 10.2618C23.5785 10.2618 21.9491 10.0082 19.9471 10.3509C16.7055 10.9052 14.4675 12.9192 14.4675 12.9192C14.4675 12.9192 14.4623 14.4847 14.4623 16.1443V29.8661C14.4623 31.4383 15.2967 32.0884 16.6234 31.8247C17.9501 31.5593 20.4976 31.0923 20.4976 31.0923C20.4976 31.0923 19.8069 30.1483 19.8069 27.1214V15.4976C19.8069 15.4976 20.2548 15.0474 21.2875 14.8526C22.5937 14.609 23.5785 15.0306 23.5785 15.0306V10.2618ZM53.3477 17.9215C53.3477 23.6763 50.9046 28.3409 46.5158 28.6164C44.777 28.7239 44.2641 28.225 44.2641 28.225V32.8409C44.2641 33.669 43.9529 34.5341 42.8228 34.8986C41.7201 35.2564 39.0923 36.0778 39.0923 36.0778V10.114C39.0923 10.114 41.1559 7.89003 45.5806 7.62295C50.6413 7.31892 53.346 11.1689 53.346 17.9215H53.3477ZM48.1588 17.9584C48.1588 13.7876 47.4031 12.0373 45.6404 12.0373C45.2489 12.0373 44.8061 12.1415 44.3017 12.4153V24.1012C44.3017 24.1012 44.8488 24.59 45.8063 24.4792C47.0082 24.3381 48.1605 22.6415 48.1605 17.9584H48.1588ZM96.2868 9.85701C92.3682 9.33965 89.2856 11.2982 89.2856 11.2982V29.4747L94.3908 30.2121V14.866C94.3908 14.866 94.8455 14.3016 95.7175 14.4007C96.9981 14.5435 97.5007 15.6303 97.5007 17.6561C97.5264 21.4489 97.5161 30.6774 97.5161 30.6774L102.671 31.5878C102.671 31.5878 102.703 22.1225 102.673 17.9181C102.673 12.128 99.7524 10.3206 96.2851 9.86037L96.2868 9.85701ZM18.6853 7.30716C19.2427 7.03168 19.6923 6.37658 19.6923 5.41745C19.6923 4.29706 19.6838 2.47622 19.6838 2.47622C19.6838 2.47622 14.5136 3.12964 9.74186 4.39281C3.6143 6.01712 0 7.95218 0 7.95218V12.983C0 12.983 1.05146 12.4186 2.97488 11.6157C4.26912 11.0748 6.03011 10.4684 6.03011 10.4684V34.4585C6.03011 35.6713 6.76528 36.3902 8.06123 36.0862C9.21699 35.8158 12.4295 34.9893 12.4295 34.9893V8.75342C12.4295 8.75342 14.1119 8.35196 15.6762 8.03953C17.2389 7.7271 18.1399 7.5776 18.6853 7.30716V7.30716ZM64.1411 1.61115L64.0607 1.50869C64.0607 1.50869 60.9371 -0.302075 57.728 0.0439517C55.3447 0.299273 54.1222 1.61955 53.7649 2.82057C53.4383 3.9208 53.77 4.86985 53.77 4.86985C53.77 4.86985 54.8899 3.12292 57.1809 2.21754C59.9232 1.13578 62.4382 1.54228 62.4382 1.54228L62.3732 1.58596C62.3732 1.58596 59.7574 1.93366 57.981 3.19179C56.4833 4.15428 55.5037 5.29651 54.9138 6.06583C56.1038 6.65374 57.7878 6.72093 59.0598 6.07591C60.1147 5.59214 60.6635 4.85474 61.597 3.63692C62.8827 1.9639 64.1411 1.60947 64.1411 1.60947V1.61115ZM60.1387 7.16774L54.1718 8.75342C54.1718 8.75342 54.8044 9.83181 54.8044 12.4824C54.8044 15.1331 54.8044 24.2994 54.8044 25.5542C54.8044 27.0677 55.5515 27.7631 57.1655 27.7631C58.7794 27.7631 60.6071 27.7547 60.6071 27.7547C60.6071 27.7547 60.1216 26.6242 60.1216 23.987C60.1216 18.4808 60.1404 7.16774 60.1404 7.16774H60.1387ZM104.127 37.1344C103.922 36.8236 103.656 36.5968 103.322 36.4541C103.088 36.3466 102.826 36.2928 102.536 36.2928C102.098 36.2928 101.705 36.4356 101.354 36.7195C101.141 36.8925 100.973 37.1058 100.852 37.3561C100.732 37.5912 100.672 37.8516 100.672 38.1372C100.672 38.6545 100.855 39.0929 101.221 39.4558C101.59 39.8186 102.035 40 102.555 40C103.074 40 103.517 39.8186 103.883 39.4574C104.249 39.0963 104.432 38.6579 104.432 38.1422C104.432 37.7827 104.329 37.4468 104.124 37.1344H104.127ZM103.474 36.8522C103.671 36.9916 103.83 37.178 103.948 37.4132C104.069 37.6635 104.129 37.907 104.129 38.1422C104.129 38.5823 103.975 38.9569 103.669 39.2693C103.362 39.5784 102.989 39.7329 102.556 39.7329C102.124 39.7329 101.746 39.5784 101.438 39.2676C101.13 38.9552 100.977 38.5806 100.977 38.1422C100.977 37.7038 101.13 37.341 101.438 37.0302C101.746 36.7195 102.113 36.5649 102.543 36.5649C102.888 36.5649 103.197 36.6623 103.474 36.8555V36.8522ZM102.767 38.3135C102.895 38.2766 103.001 38.2027 103.085 38.0918C103.167 37.9776 103.209 37.8533 103.209 37.7206C103.209 37.5224 103.131 37.3611 102.977 37.2385C102.838 37.1327 102.616 37.0789 102.312 37.0789H101.878V39.2156H102.293V38.369L102.939 39.2156H103.445L102.739 38.3219L102.767 38.3119V38.3135ZM102.29 37.4434H102.373C102.661 37.4434 102.804 37.5375 102.804 37.7239C102.804 37.9255 102.655 38.0263 102.358 38.0263H102.288V37.4417L102.29 37.4434Z"
              fill="white"></path>
          </svg></a>
        </div>
        <div className="r-heder" style={{ position: "relative" }}>
          <input type="search" name="search" id="search" />
          <Link to='/cart'><i className='fas fas fa-shopping-bag'></i></Link>
          <i className="fa fa-search home-search" ></i>
          <a href=''><i className='fas fa-user-circle'></i></a>
        </div>
      </nav>

      {cartData.length === 0 ? (
        <div className='cart-empty'>
          <p>Your cart is empty.</p>
        </div>
      ) : (
      <div>
        <div className='mt-5' id='cart'>
          <h3 className="Cart text-left">Cart ...</h3>
        </div>
        <div id="cart" >
          <table width={"100%"}>
            <thead>
              <tr>
                <th>Remove</th>
                <th>Product</th>
                <th>Product-Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map(item => (
                <tr key={item.id}>
                  <td>
                    <i onClick={() => handleRemove(item.id)} class="fa fa-times-circle" style={{ fontSize: "20px" }}></i>
                  </td>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td><span><button onClick={() => handleIncrement(item.id)} className='btn-1'>+</button><button className='btn-1'>{item.quantity}</button><button onClick={() => handleDecrement(item.id)} className='btn-1'>-</button></span></td>
                  <td>${calculateSubtotal(item)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ margin: "80px 0" }}></div>

        <div id="cart">
          <div id='card-add' >
            <div id='coupon'>
              <h3>Apply Coupan</h3>
              <div>
                <input type='text' placeholder='Enter You Coupan'></input>
                <a href="#popup2"><button>Apply</button></a>
              </div>
            </div>

            <div id='subtotal'>
              <h3>Cart Totals</h3>
              <table>
                <tr>
                  <td>Cart Subtotal</td>
                  <td>${totalPrice}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>Tex</td>
                  <td>(Incl. of All Taxes)</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td><strong>${totalPrice}</strong></td>
                </tr>
              </table>
              <a href="#popup1" onClick={(removeItem) => handleRemove(removeItem)}><button>Proceed to Checkout</button></a>
              <Link to="/product"><button style={{ marginLeft: "20px" }}>continue shopping</button></Link>
            </div>
          </div>
        </div>
      </div>
      )}

      <div id="popup1" class="overlay">
        <div class="popup">
          <div>
          <img src="/img/image-removebg-preview.png" alt="" style={{width : "150px" , height : "250px" , marginLeft : "130px"}}/>
          </div>
          <h2>success !</h2>
          <a class="close" href="#">&times;</a>
          <div class="content">
            Your Payment Was Successfull. A Receipt For This Purchase Has Been Sent To Your Email.
          </div>
        </div>
      </div>

      <div id="popup2" class="overlay">
        <div class="popup">
          <h2>success !</h2>
          <a class="close" href="#">&times;</a>
          <div class="content">
            Your Code Coupon Is Apply  Successfull          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart