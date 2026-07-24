import { RouterProvider } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./routes";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();
export default function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </QueryClientProvider>
    </div>
  );
}
