import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const Authontication = createContext();

export default function AuthContext({ children }) {
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  function addCart(product) {
    const inCart = cart.find((item) => item.id === product.id);

    if (inCart) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This product is already in your cart.",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else {
      const dataCart = [...cart, { ...product, Quantity: 1 }];
      setCart(dataCart);
      localStorage.setItem("cart", JSON.stringify(dataCart));

      toast.success("A book has been successfully added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const increaseQuantity = (id) => {
    const qtyCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          Quantity: item.Quantity + 1,
        };
      }
      return item;
    });
    setCart(qtyCart);
    localStorage.setItem("cart", JSON.stringify(qtyCart));
  };

  console.log(cart);

  const decreaseQuantity = (id) => {
    const qtyCartDec = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          Quantity: item.Quantity > 1 ? item.Quantity - 1 : item.Quantity,
        };
      }

      return item;
    });

    setCart(qtyCartDec);
    localStorage.setItem("cart", JSON.stringify(qtyCartDec));
  };

  useEffect(() => {
    const tokenFromToken = Cookies.get("token");
    setToken(tokenFromToken);
  }, []);

  const removeFromCart = (id) => {
    const editingCart = cart.filter((oneCart) => oneCart.id !== id);
    setCart(editingCart);
    localStorage.setItem("cart", JSON.stringify(editingCart));
  };

  const wishListItems = (wishListCart) => {
    const inWishList = wishList.find((items) => items.id === wishListCart.id);
    if (!inWishList) {
      const newWishList = [...wishList, wishListCart];
      setWishList(newWishList);
      localStorage.setItem("wishList", JSON.stringify(newWishList));
      toast.success("A book has been successfully added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      console.log(wishList);
    } else {
      const newwish = wishList.filter(
        (oneProduct) => oneProduct.id !== wishListCart.id,
      );
      setWishList(newwish);
      localStorage.setItem("wishList", JSON.stringify(newwish));
    }
  };

  useEffect(() => {
    const savedWish = JSON.parse(localStorage.getItem("wishList"));
    if (savedWish) {
      setWishList(savedWish);
    }
    console.log(wishList);
  }, []);

  const removeFromWishList = (id) => {
    const newWishis = wishList.filter((oneWish) => oneWish.id !== id);
    setWishList(newWishis);
    localStorage.setItem("wishList", JSON.stringify(newWishis));
  };

  const handelLogOut = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setToken(null);
    toast.error("Logged out successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <div>
      <Authontication.Provider
        value={{
          token,
          setToken,
          cart,
          setCart,
          addCart,
          removeFromCart,
          wishList,
          setWishList,
          wishListItems,
          removeFromWishList,
          increaseQuantity,
          decreaseQuantity,
          handelLogOut,
        }}
      >
        {children}
      </Authontication.Provider>
    </div>
  );
}
