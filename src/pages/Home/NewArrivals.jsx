import React, { useEffect, useState } from "react";
import ProductAPI from "../../API/ProductAPI";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/format";
import ItemProduct from "../Products/components/ItemProduct";
const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await ProductAPI.getNewArrivals();
      setProducts(response);
    };
    fetchData();
  }, []);
  return (
    <section className="list-job mt-10 xl:mt-16 ">
      <div className="container">
        <h2 className="text-center uppercase text-[1.25rem] lg:text-[2rem] font-semibold mb-7">
          Sản phẩm mới
        </h2>
        <div className="flex flex-wrap -mx-2">
          {products &&
            products.map((item) => {
              return (
                <div
                  className="w-1/2 lg:w-1/4 px-2 mb-4 lg:mb-0"
                  key={item._id}
                >
                  <ItemProduct data={item} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
