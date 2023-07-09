
import React from 'react';
import Image1 from "../header_card1.png"
import Image2 from "../header_card2.png"
import Image3 from "../header_card3.png"

const HeaderCard = () => {
    return (
        <div className='header-card-container'>
            <div className='header-card'>
                <div className= 'header-card-image'>
                    <img src = {Image1} width={150} height={120}/>
                </div>
                <div style={{marginRight: '10px'}}>Suprises</div>
            </div>
            <div className='header-card'>
                <div className= 'header-card-image'>
                    <img src = {Image2} width={150} height={120}/>
                </div>
                <div style={{marginRight: '10px'}}>Birthdays</div>
            </div>
            <div className='header-card' style={{border: 'none'}}>
                <div className= 'header-card-image'>
                    <img src = {Image3} width={150} height={120}/>
                </div>
                <div >Celebrations</div>
            </div>
        </div>
    );
}

export default HeaderCard