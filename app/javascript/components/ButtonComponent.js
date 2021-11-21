import React from 'react'
import DisplayProductPrices from './DisplayProductPricesComponent'

class Button extends React.Component {
    constructor() {
        super();
        
        this.state = {
          clicked: false
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
          clicked: true
        });
    }

    render() {
      return (
        <div>
            <button onClick={this.handleClick} className="btn btn-info mb-3">
                Show Product Prices
            </button>
            {this.state.clicked ? <DisplayProductPrices /> : null}
        </div>
      );
    }  
}

export default Button;