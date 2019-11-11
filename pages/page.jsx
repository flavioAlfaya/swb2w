import React, { Component, Fragment } from 'react'
import PlanetCard from '../component/card'
import Home from './home'
import axios from 'axios'

import '../css/bg.css';

export default class Page extends Component{
    constructor(props){
        super(props)
        this.state = {
            local:'home',
            planet:{},
            loading:false,
            firstTime:true
        }
    }

    getPlanet = ()=>{
        let randomNumber = Math.floor(Math.random() * ((60-1)+1) + 1);
        this.setState({
            loading:true
        },()=>{
            axios.get('https://swapi.co/api/planets/'+randomNumber)
            .then(
                resp => {
                    console.log(resp.data)
                    this.setState(
                        {planet:resp.data}
                    ,()=>{
                        if(this.state.firstTime){
                            setTimeout(()=>{ 
                                this.setState({
                                    loading:false,
                                    firstTime:false
                                })
                            }, 2000);
                        }else{
                            this.setState({
                                loading:false
                            })
                        }
                    })
                }
            )
        })
    }
    firstTimeRoutine=()=>{
        setTimeout(()=>{ 
            this.setState({
                firstTime:false
            })
        }, 2000);
    }
    toGame = ()=>{
        this.getPlanet()
        this.setState({
            local:'interna'
        })
    }
    render(){
        return(
            <Fragment>
                <div id='bgAjust'>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
                </div>
                <div className="App">
                    {this.state.local === 'home'?
                        <Home next={this.toGame}/>
                    :''}
                    {this.state.local === 'interna'?
                        <PlanetCard 
                            planet={this.state.planet} 
                            loading={this.state.loading} 
                            getPlanet={this.getPlanet}
                        />
                    :''}   
                </div>
            </Fragment>
        )
    }
}