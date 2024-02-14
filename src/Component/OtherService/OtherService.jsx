import { useState } from "react";
import { DataOtherService } from "./DataOtherService";
import ReactPaginate from "react-paginate";

const OtherService = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 8; // Number of products per page
  const pageCount = Math.ceil(DataOtherService.length / productsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * productsPerPage;
  const currentPageData = DataOtherService.slice(
    offset,
    offset + productsPerPage
  );

  return (
    <div className="bg-white">
      <div className="lg:px-16">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-2">
          {currentPageData.map((e, index) => (
            <a href="#" className="group" key={index}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={e.imageUrl}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{e.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </a>
          ))}
        </div>

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination flex justify-center mt-4"}
          pageClassName={"m-1 border-2 rounded-full pr-5 pl-5"}
          activeClassName={"bg-blue-500 text-white  rounded-full"}
          previousClassName={"border px-3 py-1 rounded-full"}
          nextClassName={"border px-3 py-1 rounded-full"}
          disabledClassName={"text-gray-400"}
        />
      </div>
    </div>
  );
};
export default OtherService;
