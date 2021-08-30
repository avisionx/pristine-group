import React from 'react';

const Placeholder = ({isSmall, match}) => {

    console.log(match.params.type);

    return (<div style={{background: "black", height: "200px"}}>Placeholder</div>);

}

export default Placeholder;