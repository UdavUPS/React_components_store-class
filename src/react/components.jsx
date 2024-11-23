/* export const ShopItemClass = ({brand, title, description, descriptionFull, currency, price, ...props }) => {
    return (
      <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description"> {descriptionFull} </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{currency}{price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    );
  } */



  /* export class ShopItemClass {
  constructor(brand, title, description, descriptionFull, currency, price) {
    this.brand = brand, 
    this.title = title, 
    this.description = description, 
    this.descriptionFull = descriptionFull, 
    this.currency = currency, 
    this.price = price
  }

  render({brand, title, description, descriptionFull, currency, price}) {
    return (
      <div className="main-content">
      <h2>{this.brand}</h2>
      <h1>{this.title}</h1>
      <h3>{this.description}</h3>
      <div className="description"> {this.descriptionFull} </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{this.currency}{this.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    );
  }
} */

  import React from 'react';

  export class ShopItemClass extends React.Component {

    constructor(props) {
      super(props),
      this.props.brand,
      this.props.title, 
      this.props.description, 
      this.props.descriptionFull, 
      this.props.currency, 
      this.props.price
    }

  render() {
    return (
      <div className="main-content">
      <h2>{this.props.brand}</h2>
      <h1>{this.props.title}</h1>
      <h3>{this.props.description}</h3>
      <div className="description"> {this.props.descriptionFull} </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{this.props.currency}{this.props.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    )
  }

}