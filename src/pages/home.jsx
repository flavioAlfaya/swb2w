import React, { Component, Fragment } from 'react'

import {BtnSW} from '../component/btnSW'

import '../css/home.css'
import '../css/glitch.css'


export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        let starWars = <svg id='logo' x="0px" y="0px" viewBox="0 0 406.08 205.2">
        <g>
            <path className="st" d="M106.26,74.05c0.24-10.81-6.17-21.95-19.24-33.4c-7.3-6.05-5.77-8.92,4.6-8.59h17.05h10.43h17.28v61.35h28.44
                V32.06h27.71V6.04h-73.44h-10.43H65.24c-11.13,0-17.75,5.4-19.84,16.21c-2.1,10.81,3.87,22.67,17.91,35.58
                c8.51,6.7,7.06,9.88-4.36,9.56H10.79v26.02h76.24C99.61,91.31,106.02,84.86,106.26,74.05z"/>
            <path className="ar" d="M354.82,67.39l-6.53-8.35c6.77-1.61,11.98-3.83,15.61-6.65c3.63-2.82,6.17-6.33,7.63-10.53
                c1.46-4.19,1.37-10.17-0.24-17.91c-2.1-5.16-5.41-9.28-9.93-12.34c-4.51-3.07-10.28-4.92-17.3-5.57h-56.88v83.5l-27.94-83.5h-43.38
                l-28.74,87.37h31.34l5.51-15.73h25.96l5.5,15.73h31.75h1.29h30.29V64.55l27.71,28.86h51.04V67.39H354.82z M225.11,60.01
                l12.53-34.61l11.56,34.61H225.11z M344.59,42.61c-1.37,0.87-2.64,1.3-3.81,1.3h-22.03V27.82h21.96c0.96,0,2.17,0.54,3.6,1.6
                c1.43,1.07,2.25,3.28,2.45,6.62C346.69,39.56,345.96,41.75,344.59,42.61z"/>
            <polygon className="w" points="108.02,103.91 99.91,141.67 87.74,103.91 61.61,103.91 51.2,141.67 39.22,103.91 10.79,103.91 
                37.41,191.28 65.85,191.28 75.04,154.25 86.11,191.28 114.55,191.28 136.45,103.91 	"/>
            <path className="ars" d="M318.45,120.12c-2.1,10.81,3.88,22.67,17.91,35.58c8.51,6.7,7.05,9.88-4.36,9.57h-40.9l-6.54-8.35
                c6.78-1.61,11.99-3.83,15.62-6.65c3.63-2.83,6.17-6.33,7.62-10.53c1.45-4.2,1.38-10.17-0.24-17.91c-2.1-5.16-5.4-9.28-9.92-12.34
                c-4.51-3.07-10.28-4.92-17.31-5.57h-56.88v83.51l-27.93-83.51h-43.38l-28.74,87.38h31.35l5.5-15.73h25.96l5.5,15.73h31.74h1.29
                h30.29v-28.86l27.72,28.86h1.09h53.97h22.27c12.59-2.1,19-8.55,19.24-19.37c0.25-10.81-6.17-21.94-19.24-33.4
                c-7.29-6.05-5.76-8.92,4.6-8.59l32.63-0.14v-26.02l-59.01,0.13C327.17,103.91,320.55,109.31,318.45,120.12z M161.4,157.88
                l12.53-34.61l11.55,34.61H161.4z M280.88,140.49c-1.37,0.87-2.64,1.3-3.81,1.3h-22.03v-16.09h21.96c0.97,0,2.17,0.53,3.6,1.61
                c1.44,1.07,2.26,3.28,2.46,6.62C282.98,137.43,282.26,139.62,280.88,140.49z"/>
        </g>
        </svg>
        
        return(
            <div id='warpHome'>
                <div id='warpLogo'>
                    {starWars}
                </div>
                <div id='infoBox'>
                    <div className='infoContent'>
                        <div className="glitch ml20" data-text="Desafio B2W">Desafio B2W</div>
                        <p>A B2W gostaria de fazer uma brincadeira com seus associados, que são aficionados por Star Wars. O jogo consiste em, dado um planeta aleatório da franquia, exibir como seria o clima, o terreno e em quantos filmes da franquia ele apareceu.</p>
                        <p>Para auxiliar quem for apresentar a brincadeira, queremos desenvolver uma aplicação que pegue aleatoriamente um planeta da franquia e exiba seus dados para servir como cola. </p>
                        <div className='warpBtn'>
                            <BtnSW title='Avançar' next={this.props.next}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}