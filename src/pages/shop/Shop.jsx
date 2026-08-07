import { useQuery } from "@tanstack/react-query";
import AccordionFilter from "../../components/accordion/AccordionFilter";
import Books from "../../components/books/Books";
import { getAllCategories } from "../../apis/getAllCategories";
import { getAllBooks } from "../../apis/getAllBooks";
import { useCategories } from "../../hooks/useCateroies";
import { useBooks } from "../../hooks/useBooks";
import { useMemo, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useOutletContext } from "react-router";

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageOne = 30;
  const lastBook = currentPage * pageOne; // 3 * 30 = 90
  const firstBook = lastBook - pageOne; // 90 - 30 = 60

  const { allCategories, loading, error } = useCategories();
  const allCatregoriesAPIs = allCategories;

  allCatregoriesAPIs?.map((item) => console.log(item.books));
  console.log(allCatregoriesAPIs);

  const { data, isError, isLoading } = useBooks();
  const allBooks = data;
  console.log(allBooks);

  const allBooksTwo = allCatregoriesAPIs?.flatMap((item) => {
    return item.books;
  });

  const [categoriesFilter, setCatergoriesFilter] = useState(null);

  const { search } = useOutletContext();

  const handelFiltration = (categoryById) => {
    if (categoriesFilter?.categoryId !== categoryById.categoryId) {
      setCatergoriesFilter(categoryById);
    } else {
      setCatergoriesFilter(null);
    }
    console.log(categoryById);
  };

  const showToBooks = categoriesFilter ? categoriesFilter.books : allBooksTwo;

  const filterSearch = useMemo(() => {
    return showToBooks?.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [showToBooks, search]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="#D9176C" size={18} />
      </div>
    );
  }

  const currentLoop = categoriesFilter
    ? filterSearch
    : filterSearch?.slice(firstBook, lastBook);

  return (
    <>
      <div className="grid grid-cols-12 my-3 px-5 gap-3">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <AccordionFilter
            allCatregoriesAPIs={allCatregoriesAPIs}
            handelFiltration={handelFiltration}
            categoriesFilter={categoriesFilter}
          />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-9 min-h-screen">
          <Books books={currentLoop} />
        </div>
      </div>

      {!categoriesFilter && (
        <div className="md:flex gap-4 my-5 justify-center hidden">
          <button
            disabled={currentPage === 1}
            className="py-2 px-4 bg-[#D9176C] text-white rounded"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          {Array.from({ length: 10 }, (value, index) => (
            <button
              className={`py-2 px-3 rounded ${currentPage === index + 1 ? "bg-[#D9176C] text-white" : "bg-gray-300"}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === 10}
            className="py-2 px-4 bg-[#D9176C] text-white rounded"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}

      {!categoriesFilter && (
        <div className="flex items-center justify-center gap-2 my-4 md:hidden">
          <button
            disabled={currentPage === 1}
            className="py-2 px-4 bg-[#D9176C] text-white rounded"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          <span className="text-2xl text-[#D9176C]">...{currentPage}...</span>

          <button
            disabled={currentPage === 10}
            className="py-2 px-4 bg-[#D9176C] text-white rounded"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
