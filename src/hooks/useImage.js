import { useQuery } from "@tanstack/react-query";
import { getAllImage } from "../apis/getAllImage";

export const useImage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Books"],
    queryFn: getAllImage,
  });

  return { data, isLoading, isError };
};
