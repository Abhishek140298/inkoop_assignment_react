import React from 'react';
import NavBar from '../navBar/NavBar';
import './Home.css';
import Card from '../card/Card';
import CardData from '../../data/CardData';

const Home = () => {
  return (
    <div className='main_div'>
      <div className='side_div'>
        <NavBar />
      </div>
      <div className='home_content_div'>
        <div className='web_details_div'>
          <div className='details_div'>
            <div className='large_head'>What are you having for lunch ?</div>
            <div className='small_head'>
              Lorem Ispum dolor sit amet sit ,consectetur adipiscing elit , sed
              do eiusmod tempor incididunt ut labore et.
              <hr/>
            </div>
          </div>
        </div>
        <div className='mobile_view_content'>
          <div className='mobile_large_head'>
            What are you having for lunch ?
          </div>
        </div><div className='web_card'>
        <div className='cards_div'>
          {CardData.map((cval) => {
            return <Card image={cval.image} dishName={cval.dishName} />;
          })}
        </div>
        </div>
        <div className='mobile_card'>
        <div className='mobile_cards_div'>
          {CardData.map((cval,index) => {
             if(index<=3){return(<Card image={cval.image} dishName={cval.dishName} />)};
          })}
        </div>
        </div>
        
        <div className='mobile_view_content'>
          <div className='mobile_small_head'>
            {' '}
            Lorem Ispum dolor sit amet sit ,consectetur adipiscing elit , sed do
            eiusmod tempor incididunt ut labore et.
            <hr/>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Home;
