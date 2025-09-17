import React from 'react';

class Book extends React.Component {
    render () {
        <>
        <p>img src={this.props.src} alt="something"</p>
        <p>Name: {this.props.name}</p>
        <p>Author: {this.props.author}</p>
        </>
    }
}