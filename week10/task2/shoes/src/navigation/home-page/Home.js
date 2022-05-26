import React from "react";
import { hendlerGetProducts } from "../../api/hendlers";

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

  render() {
    return (
      <>
        {" "}
        {this.state.products.map((item) => {
          return <>{item.name}</>;
        })}
      </>
    );
  }
}

export default Home;
