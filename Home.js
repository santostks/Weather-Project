import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'

function Home(){
    const [data, setData]= useState({
        celcius: 10,
        name: 'Itu',
        humidity: 10,
        speed: 2
    })
    useEffect(()=>{
        const apiUrl = 'http://https://api.hgbrasil.com/weather?key=902879c9&city_name=Campinas,SP';
        axios.get(apiUrl)
        .then(res => {
            setData({...data})
        })
        .catch(err => console.error(err));
    }, [])
    return (
        <div className='container'>
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder=' Insira o Nome da Cidade' />
                    <button><img src="/assets/icons8-pesquisar-50.png" alt="" /></button>
                    </div>
                    <div className="winfo">
                        <img src="/assets/icons8-nuvens-50.png" alt="" />
                        <h1> 22ºc </h1>
                        <h2> London </h2>
                        <div className="details">
                            <div className="col">
                                <img src="/assets/icons8-humidade-50.png" alt="" />
                                <div>
                                    <p>20%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="wind">
                            <img src="/assets/icons8-vento-50.png" alt="" />
                                <div>
                                    <p>2 km/h</p>
                                    <p>Wind</p>
                                </div>d
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
    }

    export default Home