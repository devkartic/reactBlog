import React, { Component } from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nemo saepe voluptate nihil quisquam atque aliquam reiciendis ad esse assumenda! Maiores neque ratione sed quos et natus voluptate officia quasi.</p>
        </div>
    )
}

export default Rainbow(About);