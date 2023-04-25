import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState("");
  const [cart, setCart] = useCart();



  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  //setrating
  const updateRating = async () => {
    try {
      const res = await axios.get(
        `/api/v1/product/${product._id}/rating/${rating}`
      );
      if (res) {
        toast.success("Thank You for Providing Rating");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <h6>Rating : {product?.rating?.toFixed(2)}</h6>

          {/* <button type="button" class="btn btn-success ms-1">ADD TO CART</button><br /> */}

          <button
            className="btn btn-success ms-1"
            onClick={() => {
              setCart([...cart, product]);
              localStorage.setItem(
                "cart",
                JSON.stringify([...cart, product])
              );
              toast.success("Item Added to cart");
            }}
          >
            ADD TO CART
          </button>

          {/* <div>
            <input
              type="number"
              onChange={(e) => setRating(e.target.value)}
              placeholder="Enter Your Rating"
            />
            <button type="button" class="btn btn-success ms-1" onClick={updateRating}>SUBMIT RATING</button>
          </div> */}

          <div class="col-auto my-1">
            <h6 class="mr-sm-2" for="inlineFormCustomSelect">Provide Rating :
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e) => setRating(e.target.value)}>
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
              </select>
              <button type="button" class="btn btn-success ms-1" onClick={updateRating}>SUBMIT RATING</button>
            </h6>
          </div>

        </div>
      </div>
    </Layout >
  );
};

export default ProductDetails;
