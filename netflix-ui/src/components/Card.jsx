import React from 'react';

function Card() {
    return (
        <div>
            {
                data.map((movie, index) => {
                    return <Card movieData={movie} index={index} key={movie.id}/>
                })
            }
        </div>
    );
}

export default Card;