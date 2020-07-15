import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img className='header__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
               

            {/*  procuts */}
            <div className="home__row">
                
                <Product
                id='23233'
                image='https://images.unsplash.com/photo-1594591008705-f93db2e658df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80'
                rating={5}
                title='mobile phone'
                price={11.23}
                />


                <Product
                id='223233'
                image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
                rating={1}
                title='HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape'
                price={23.96}
                />
            </div>

            <div className="home__row">
            <Product
                id='2343433'
                image='https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg'
                rating={2}
                title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U,'
                price={1196}
                />

                <Product
                id='212133'
                image='https://images-na.ssl-images-amazon.com/images/I/415vAIn9uEL._AC_US160_.jpg'
                rating={4}
                title='TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless '
                price={11,96}
                />


                <Product
                id='245533'
                image='https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg'
                rating={3}
                title='TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless '
                price={11,96}
                />
            </div>

            <div className="home__row">
                <Product
                    id='25656233'
                    image='https://images.unsplash.com/photo-1594591008705-f93db2e658df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80'
                    rating={5}
                    title='HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, '
                    price={11,96}
                    />
            </div>
            
        </div>
    )
}

export default Home
