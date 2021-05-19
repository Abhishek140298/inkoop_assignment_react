import React from 'react';
import './NavBar.css';
const navBarData = [
  'About',
  'Service',
  'Cuisine',
  'Gallery',
  'Contact',
  'Book',
];
const NavBar = () => {
  return (
    <div className='main_div_nav'>
      <div className='desktop_view'>
        <span className='nav_head'>Lorem Ipsum</span>
        <div className='nav_content'>
          {navBarData.map((cval) => {
            return <span className='nav_content_item'>{cval}</span>;
          })}
        </div>
        <div className='nav_button_div'>
          <span className='nav_button_cart'>Cart</span>
        </div>
      </div>
      <div className='mobile_view'>
      <div className='mobile_view_nav_content'>
        <img className='icon_option' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwLoBsSIzkLhV18q6KNE68i_pAWV9K8xgutFbHiHBDP2s5KOnmEr0vxOY7Zl40Z_kN_E&usqp=CAU' />
        <span className='nav_head_mobile'>Lorem</span>
        <img className='icon_cart' src='https://spng.subpng.com/20181107/qch/kisspng-computer-icons-shopping-cart-e-commerce-online-sho-5be2f28aad4bc0.1705959615415998827098.jpg' />
      </div>
      </div>
    </div>
  );
};
export default NavBar;
