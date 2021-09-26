import React from 'react';

const Info = (props) => {
    console.log(props)
    let total = 0;
    for(const value of props.info)
    {
        total += value.networth;
    }
    return (
        <div>
            <h2>Singers added : {props.info.length}</h2>

            <br></br>
            <h2>Total Cost: ${total} M</h2>
            {
                props.info.map(name=><h1>{name.name}</h1>)
            }
            
        </div>
    );
};

export default Info;