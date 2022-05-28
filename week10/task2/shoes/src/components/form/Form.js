import React from "react";
import { hendlerCreateProduct, hendlerUpdateProduct } from "../../api/hendlers";

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

  onSubmitHendler = async (e) => {
    e.preventDefault();

    let data = {
      name: this.nameRef.current.value,
      image: this.imageRef.current.value,
    };

    if (this.state.status === "create") {
      await hendlerCreateProduct(data);
    }
    if (this.state.status === "edit") {
      await hendlerUpdateProduct(this.state.product.id, data);
    }

    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3> this is {this.state.status} mode</h3>
        <form>
          <label>Name</label>
          <input type="text" ref={this.nameRef} />
          <label>Image</label>
          <input type="text" ref={this.imageRef} />
          <button type="submit" onClick={this.onSubmitHendler}>
            Submit{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
