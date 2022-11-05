import React, { useState, useEffect, useLayoutEffect } from 'react';
import Card, { IMovie, IImg } from '../components/Card/Card';
import axios from 'axios';
//import movies from "./data.json"

const List = () => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchGet = async () => {
            const movies = await fetch('./assets/data.json',{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const moviesJSON = await movies.json();
            if (moviesJSON) {
                setData(moviesJSON);
                setLoading(false);
            }
        }
        fetchGet();
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




