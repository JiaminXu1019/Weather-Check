import React from 'react';
import Form from './Form';
import TempUnitToggle from './TempUnitToggle';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <a id='github' href="https://github.com/sher-s7/react-weather-app" target='_blank' rel="noopener noreferrer"></a>
                <h1 id='title'>Weather Check</h1>
                <Form hideLoader={this.props.hideLoader} showLoader={this.props.showLoader} cityByCoords={this.props.cityByCoords} handleSubmit={this.props.handleSubmit} />
                <p id='error' className={`${this.props.error ? null : 'hidden'} ${this.props.shake ? 'shake' : ''}`}>
                    Could not find city
                </p>
                <TempUnitToggle clickHandler={this.props.toggleTempUnit}/>
            </header>
        );
    }
}