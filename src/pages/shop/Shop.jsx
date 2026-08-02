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
  return (
    <div className="grid grid-cols-12 my-3 px-5 gap-3">
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <AccordionFilter
          allCatregoriesAPIs={allCatregoriesAPIs}
          handelFiltration={handelFiltration}
          categoriesFilter={categoriesFilter}
        />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-9 min-h-screen">
        <Books books={filterSearch} />
      </div>
    </div>
  );
}
