import React, { useState, useEffect, useLayoutEffect } from 'react';
import Card, { IMovie, IImg } from '../components/Card/Card';
import movies from "./data.json"

const List = () => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // declare the async data fetching function
        /*const fetchData = async () => {
            const movies = await fetch('https://jsonplaceholder.typicode.com/users');
            //const movies = await fetch("data.json");
            const moviesJSON = await movies.json();
            if (moviesJSON) {
                setData(moviesJSON);
                setLoading(false);
            }
        };

        const result = fetchData()
            // make sure to catch any error
            .catch(console.error);;

        // what will be logged to the console?*/

        if (movies) {
            setData(movies);
            setLoading(false);
        }
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='row'>
            {data.map((movie: IMovie) => (
                <div key={movie.id} className='col-sm-2'>
                    <Card movie={movie} />
                </div>
            ))}
        </div>
    );
}

export default List;




