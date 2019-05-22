import React from 'react';



function Card({characater}){

    return(
        <div className="col-md-4 my-3">
            <div className="card" >
            <img src={characater.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{charcater.name}</h5>
                <ul>
                    <li>Status:{characater.status}</li>
                    <li>Specie:{character.species}</li>
                    <li>Gender:{character.gender}</li>
                    <li>Origin:{characater.origin.name}</li>
                </ul>
            </div>
            </div>
        </div>

    )

}


export default Card;