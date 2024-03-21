import React from 'react';
import CardSlider from './CardSlider';

function Slider({movies}) {

    const getMoviesFromRange = (from, to) => {
        return movies.slice(from, to)
    }

    return (
        <div>
            <CardSlider title='Trendind Now' data={getMoviesFromRange(0, 10)}/>
            <CardSlider title='New Release' data={getMoviesFromRange(10, 20)}/>
            <CardSlider title='Action' data={getMoviesFromRange(20, 30)}/>
            <CardSlider title='Popular' data={getMoviesFromRange(30, 40)}/>
            <CardSlider title='Epic' data={getMoviesFromRange(40, 50)}/>
            <CardSlider title='Block Buster' data={getMoviesFromRange(50, 60)}/>
        </div>
    );
}

export default Slider;