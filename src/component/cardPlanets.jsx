import React, { Component,Fragment } from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';


export default class PlanetCard extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }


    render(){
        const {planet} = this.props 
        return(
            <Fragment>
            <Card className='swCard'>
                <CardHeader>{planet.name}</CardHeader>
                <CardBody>
                    <CardText>
                        <div><b>Population: </b><span>{planet.population}</span></div>
                        <div><b>Climate: </b><span>{planet.climate}</span></div>
                        <div><b>Terrain: </b><span>{planet.terrain}</span></div>
                        <div>Featured in <b>{planet.films.length}</b> Films</div>
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Button onClick={this.getPlanet}>next</Button>
                </CardFooter>
            </Card>
            </Fragment>
        )
    }
}