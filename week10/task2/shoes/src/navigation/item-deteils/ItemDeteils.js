import React from "react";
import { hendlerGetProduct, hendlerDeleteProduct } from "./../../api/hendlers";
import Item from "../home-page/item-page/Item";
import Spinner from "../../utils/spinner/Sppinner";

class ItemDeteils extends React.Component {
  constructor() {
    super();

    this.state = { product: null };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    let product = await hendlerGetProduct(id);

    this.setState(() => {
      return { product };
    });
  }

  deleteOnClickHendler = async () => {
    if (window.confirm("You shure ??")) {
      await hendlerDeleteProduct(this.state.product.id);
      this.props.history.push("/");
    }
  };

  editOnClickHendler = () => {
    this.props.history.push("/edit", this.state.product);
  };

  render() {
    if (!this.state.product) {
      return <Spinner />;
    } else {
      return (
        <div>
          <Item product={this.state.product} />
          <div>
            <button onClick={this.editOnClickHendler}>Edit</button>
            <button onClick={this.deleteOnClickHendler}>Delete</button>
          </div>
        </div>
      );
    }
  }
}

export default ItemDeteils;
