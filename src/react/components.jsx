export const ShopItemFunc = (ob) => {
    return (
      <div className="main-content">
      <h2>{ob.brand}</h2>
      <h1>{ob.title}</h1>
      <h3>{ob.description}</h3>
      <div className="description"> {ob.descriptionFull} </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{ob.currency}{ob.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    );
  }