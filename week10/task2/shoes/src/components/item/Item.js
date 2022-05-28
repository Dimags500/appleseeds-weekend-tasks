import React from "react";
import { Link } from "react-router-dom";

import "./Item.css";

class Item extends React.Component {
  constructor() {
    super();

    this.state = { product: [] };
  }

  componentDidMount() {
    this.setState(() => {
      return { product: this.props.product };
    });
  }

  showItem() {
    const item = this.state.product;
    return (
      <div className="item">
        <Link to={"/product/" + item.id}>
          <img src={item.image} alt={item.name}></img>
        </Link>

        <Link to={"/product/" + item.id}>
          <h3>{item.name}</h3>
        </Link>
      </div>
    );
  }

  render() {
    return <>{this.showItem()}</>;
  }
}

export default Item;
