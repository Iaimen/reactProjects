import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import './TourList.css'
import { tourData } from '../TourData';

export default class index extends Component {
    state = {
        tours: tourData
    };
    removeTour = id => {
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    }
    render() {
        const { tours } = this.state;
        return (
            <section className='tourlist' >
                {tours.map(tour => {
                    return (
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                    )
                })

                }
            </section >
        )
    }
}
