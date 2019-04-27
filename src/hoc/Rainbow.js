import React from 'react';

const Rainbow = (WrappedComponent) => {

    const colors = [ 'red', 'blue', 'black', 'pink', 'orange' ];
    const RandomColors = colors[Math.floor(Math.random()*4)];

    const className = RandomColors+'-text';

    return (props) => {
        return(
            <div className={ className }>
                <WrappedComponent { ...props } />
            </div>
        )
    }
}

export default Rainbow;