import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading products from the api, please wait...</div>;
    }
    
    return (
      <ul>
       {products.map(product =>
        <li key={product.id}>
         <img alt="" src={product.image} style={{width:"50px"}}/>
         <span style={{color:"red"}}> ${product.price} </span>
         {product.title} 
        </li>
      )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productReducer.items,
  loading: state.productReducer.loading,
  error: state.productReducer.error
});


export default connect(mapStateToProps)(ProductList);