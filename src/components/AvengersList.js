import React from 'react';

function AvengersList(props){
    return (
        <div className="characters-list-wrapper">
            {props.avengers.map( avenger => {
                return (
                    <div className="character-card" key={avenger.id}>
                        <img src={avenger.thumbnail} alt={avenger.name} />
                        <div onClick={() => routeToAvenger(props, avenger)}><h2>{avenger.name}</h2></div>
                        <p>({avenger.nickname})</p>
                    </div>
                )
            })}
        </div>
    )
}

function routeToAvenger(props, avenger){
    props.history.push(`/avengers/${avenger.id}`)
}

export default AvengersList;