import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DataProduct } from "./DataProduct";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const OurProduct = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initialize current page state
  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = DataProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <div className="bg-slate-50 rounded-md">
        <div className=" w-full px-1 py-1 sm:px-1 sm:py-1 lg:max-w-8xl lg:px-8 ">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2> */}

          <div className=" grid grid-cols-1 gap-x-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-4 ">
            {currentProducts.map((product, index) => (
              <div
                key={index}
                className="group relative border-2 rounded-xl p-2 hover:bg-gray-100"
              >
                <div className=" w-full overflow-hidden rounded-md   group-hover:opacity-50 group-hover:border-3 group-hover:h-60 ">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-60 rounded-2xl  shadow-md "
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">{product.name}</a>
                    </h3>
                  </div>
                  <p className="text-md font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <div className="mt-2">
                  <Button
                    variant="contained"
                    color="success"
                    className="w-full"
                  >
                    View Detail
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-400"
            >
              <ArrowBackIcon />
            </button>
            <button
              onClick={nextPage}
              disabled={currentProducts.length < productsPerPage}
              className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-400"
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurProduct;
