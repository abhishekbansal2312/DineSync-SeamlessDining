import React from "react";
import { VscSignOut } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
import { setCartDishes, setTotalCartItems } from "../../slices/cartSlice";

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(logoutUser());
    dispatch(setCartDishes([]));
    dispatch(setTotalCartItems(0));
    navigate("/");
  };
  return (
    <div onClick={logout} className=" w-10">
      <VscSignOut className="h-8 w-6" />
    </div>
  );
}
