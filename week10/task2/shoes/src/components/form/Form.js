import React from "react";
import { hendlerCreateProduct } from "../../api/hendlers";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "create",
      product: { name: "", image: "", id: "" },
    };
    this.nameRef = React.createRef();
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.match.path === "/edit") {
      let product = this.props.history.location.state;
      this.setState(() => {
        return { product: product, status: "edit" };
      });
    }
  }

  componentDidUpdate() {
    this.nameRef.current.value = this.state.product.name;
    this.imageRef.current.value = this.state.product.image;
  }

  onSubmitHendler = (e) => {
    e.preventDefault();

    let data = {
      name: this.nameRef.current.value,
      image: this.imageRef.current.value,
    };

    if (this.state.status === "create") {
      hendlerCreateProduct(data);
    }
    if (this.state.status === "edit") {
    }
  };

  render() {
    return (
      <div>
        <form>
          <labal>Name</labal>
          <input type="text" ref={this.nameRef} />
          <labal>Image</labal>
          <input type="text" ref={this.imageRef} />
          <button type="submit" onClick={this.onSubmitHendler}>
            Submit{" "}
          </button>
        </form>
        {this.state.status}
      </div>
    );
  }
}

export default Form;
