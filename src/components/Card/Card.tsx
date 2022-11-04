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

const Card:FC<IMovie> = (movie:IMovie) => {
    return (
        <div className="card">
            <img src={movie.img.src} alt={movie.img.alt} className="card-img-top"></img>
            <div className="card-body">
                <h2 className="card-title">{`#${movie.ranking} - ${movie.ranking} - ${movie.year}`}</h2>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Distributor: ${movie.distributer}`}</li>
                <li className="list-group-item">{`Amaount: ${movie.amount}`}</li>
            </ul>
        </div>
    )
}

export default Card;

