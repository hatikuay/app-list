import React, { FC } from "react";

export interface IImg {
    src:string,
    alt:string
}

export interface IMovie {
    id:number,
    img: IImg,
    ranking :number,
    title: string,
    year: number,
    distributer: string,
    amount: string
}

interface cardProps {
    movie :IMovie
}

const Card:FC<cardProps> = (e:cardProps) => {
    return (
        <div className="card">
            <img src={e.movie.img.src} alt={e.movie.img.alt} className="card-img-top"></img>
            <div className="card-body">
                <h2 className="card-title">{`#${e.movie.ranking} - ${e.movie.ranking} - ${e.movie.year}`}</h2>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Distributor: ${e.movie.distributer}`}</li>
                <li className="list-group-item">{`Amaount: ${e.movie.amount}`}</li>
            </ul>
        </div>
    )
}

export default Card;

