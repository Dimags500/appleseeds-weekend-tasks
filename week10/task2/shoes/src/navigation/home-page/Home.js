import React from "react";
import { Link } from "react-router-dom";
import { hendlerGetProducts } from "../../api/hendlers";
import Spinner from "../../utils/spinner/Sppinner";
import "./Home.css";

class Home extends React.Component {
  constructor() {
    super();

    this.state = { products: [] };
  }

  async componentDidMount() {
    const data = await hendlerGetProducts();
    this.setState(() => {
      return { products: data };
    });
  }

  showItems() {
    return this.state.products.map((item) => {
      return (
        <div key={item.id} className="item">
          <Link to={"/product/" + item.id}>
            <img src={item.image} alt={item.name}></img>
          </Link>

          <Link to={"/product/" + item.id}>
            <h3>{item.name}</h3>
          </Link>
        </div>
      );
    });
  }

  render() {
    if (this.state.products.length < 1) {
      return <Spinner />;
    } else {
      return <div className="main">{this.showItems()}</div>;
    }
  }
}

export default Home;
