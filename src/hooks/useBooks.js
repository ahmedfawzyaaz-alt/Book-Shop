import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../apis/getAllBooks";

export const useBooks = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  });

  return { data, isLoading, isError };
};
