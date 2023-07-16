import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import App from '../assests/app.jpg'
import Cyber from '../assests/cybersecurity.jpeg'
import It from '../assests/It_services.jpg'
function Cards() {
  return (
    <div className='cards'>
      <h1 className="head"><div className="waviy">
   <span style={{'--i':'1'}}>P</span>
   <span style={{'--i':'2'}}>R</span>
   <span style={{'--i':'3'}}>o</span>
   <span style={{'--i':'4'}}>V</span>
   <span style={{'--i':'5'}}>I</span>
   <span style={{'--i':'6'}}>D</span>
   <span style={{'--i':'7'}}>E</span>
   <span style={{'--i':'8'}}>D</span>
   &nbsp; &nbsp;
   <span style={{'--i':'9'}}>S</span>
   <span style={{'--i':'11'}}>E</span>
   <span style={{'--i':'12'}}>R</span>
   <span style={{'--i':'13'}}>V</span>
   <span style={{'--i':'14'}}>I</span>
   <span style={{'--i':'15'}}>C</span>
   <span style={{'--i':'16'}}>E</span>
   <span style={{'--i':'17'}}>S</span>

  </div></h1>
     
      <div className='cards__container'>
        <div className='cards__wrapper'>
        
          <ul className='cards__items'>
            <CardItem
            
              src={App}
              text='There was a two-fold objective behind the founding of Vaaj Labs. We wanted to build a topnotch app development company and secondly, create amazing applications that are game-changing in scope and scale. We are well on our way to achieving both these objectives. Vaaj Labs believes apps are disruptive pieces of technology that have the capacity to make your business more profitable. We see apps as growth accelerators that help leverage hidden business potential to generate more revenue and increase profits.'
              label='Application Development'
              
            />
            
            <CardItem
              src={Cyber}
              text='We Conduct VAPT/Security testing as per the scope of work. Based on our findings, a detailed report will be submitted to you for implementing the measures that we suggested. Once the fixes are implemented by your IT personnel, we will initiate another Audit on the above scope and check if all the vulnerabilities that we reported have been properly implemented and are completely secured. If everything is in place, we will certify the audit work as completed. '
              label='Cyber Security'
              
            />
            <CardItem
              src={It}
              text='In business and engineering, new product development covers the complete process of bringing a new product to market, renewing an existing product or introducing a product in a new market. A central aspect of NPD is product design, along with various business considerations'
              label='IT-Services'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
