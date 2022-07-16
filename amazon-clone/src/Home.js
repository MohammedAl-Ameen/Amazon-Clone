import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img 
                className='home_image'
                src='https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg' alt='' />

                <div className='home_row'>
                    <Product 
                    id={1}
                    title="ZOTAC Gaming GeForce RTX 3060 Twin Edge OC 12GB GDDR6 192-bit 15 Gbps"
                    price={445.14}
                    image = "https://m.media-amazon.com/images/I/7156DLyUsYL._AC_UL320_.jpg"
                    rating={5}
                    />
                    <Product 
                    id={2}
                    title="Logitech C922x Pro Stream Webcam"
                    price={94}
                    image = "https://m.media-amazon.com/images/I/712xpaJPT6L._AC_SX425_.jpg"
                    rating={4}
                    />

                </div>

                <div className='home_row'>
                <Product 
                    id={3}
                    title="Surge Protector Power Strip"
                    price={19}
                    image = "https://m.media-amazon.com/images/I/61ZbXVoHlDL._AC_UL320_.jpg"
                    rating={5}
                    />
                <Product 
                    id={4}
                    title="AMD Ryzen 9"
                    price={389}
                    image = "https://m.media-amazon.com/images/I/616VM20+AzL._AC_UL320_.jpg"
                    rating={5}
                    />
                <Product 
                    id={5}
                    title="Roku Express | HD Streaming Media Player with High Speed HDMI Cable and Simple Remote"
                    price={17.99}
                    image = "https://m.media-amazon.com/images/I/717dWfmxXVL._AC_UL320_.jpg"
                    rating={4}
                    />
                </div>

                <div className='home_row'>
                <Product
                    id={6}
                    title='Sceptre 24" Professional Thin 75Hz 1080p LED'
                    price={90}
                    image = "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home