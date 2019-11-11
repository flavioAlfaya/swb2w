import React, { Component,Fragment } from 'react'
import '../css/card.css'
import Loading from './loading'
import {BtnSW} from './btnSW'


export default class card extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }


    render(){
        const {planet,loading,firstTime} = this.props
        return(
            <Fragment>
                <div className='swCard'>
                    <div className='cardBg'>
                        <svg>
                            <rect/>
                            <line x1="0" y1="70" x2="100%" y2="70"/>
                        </svg>
                    </div>
                    {console.log(firstTime)}
                    {loading ?
                        <div className='contentAjust'>
                            <Loading/>
                        </div>
                        :
                        <div className='content'>
                            <div className='cardTitle'>
                                <h4>Planet - {planet.name}</h4>
                            </div>
                            <div className='cardContent'>
                                <div className='cardLine'>
                                    <b>Population : </b>
                                    <span>{planet.population}</span>
                                </div>
                                <div className='cardLine'>
                                    <b>Climate : </b>
                                    <span>{planet.climate}</span>
                                </div>
                                <div className='cardLine'>
                                    <b>Terrain : </b>
                                    <span>{planet.terrain}</span>
                                </div>
                                <div className={planet.films.length === 0?'cardLine centerLine':'cardLine'} >
                                     {planet.films.length === 0?
                                    <b className='unicInLine'>This film was not showed in the films</b>
                                    :
                                    <Fragment>
                                        <b>Featured in  : </b>
                                        <span>{planet.films.length} movies</span> 
                                    </Fragment> 
                                    } 
                                </div>
                            </div>
                            <div className='cardFooter'>
                                    <BtnSW title='Próximo' next={this.props.getPlanet}/>
                            </div>
                        </div>
                    }
                </div>
            </Fragment>
        )
    }
}