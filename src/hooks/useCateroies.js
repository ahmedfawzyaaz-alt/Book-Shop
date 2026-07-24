import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../apis/getAllCategories";

export const useCategories = () => {
  const {
    data: allCategories,
    isLoading: loading,
    isError: error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return { allCategories, loading, error };
};
