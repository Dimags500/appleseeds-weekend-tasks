import React from "react";
import { hendlerCreateProduct, hendlerUpdateProduct } from "../../api/hendlers";
import "./Form.css";

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
    this.checkStatus();
  }

  checkStatus() {
    if (this.props.match.path === "/edit") {
      let product = this.props.history.location.state;
      this.setState(() => {
        return { product: product, status: "edit" };
      });
    }
    if (this.props.match.path === "/create") {
      let product = { name: "", image: "", id: "" };
      this.setState(() => {
        return { product, status: "create" };
      });
    }
  }

  shouldComponentUpdate() {
    if (`/${this.state.status}` !== this.props.match.path) {
      this.checkStatus();
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.nameRef.current.value = this.state.product.name;
    this.imageRef.current.value = this.state.product.image;
  }

  formValidation(data) {
    return data.some((item) => item === "" || item === " ");
  }

  onSubmitHendler = async (e) => {
    e.preventDefault();

    let data = {
      name: this.nameRef.current.value,
      image: this.imageRef.current.value,
    };

    let valid = !this.formValidation([data.name, data.image]);

    if (valid) {
      if (this.state.status === "create") {
        await hendlerCreateProduct(data);
      }
      if (this.state.status === "edit") {
        await hendlerUpdateProduct(this.state.product.id, data);
      }

      this.props.history.push("/");
    } else {
      alert("data not valid");
    }
  };

  render() {
    return (
      <div>
        <h3> this is {this.state.status} mode</h3>
        <form className="form">
          <label>Name</label>
          <input type="text" ref={this.nameRef} />
          <label>Image url</label>
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
