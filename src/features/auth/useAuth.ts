import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "../../app/store";
import { login, logout } from "./authSlice";

export function useAuth() {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, role } = useSelector((state: RootState) => state.auth);

  return {
    isAuthenticated,
    role,
    login: (role: "user" | "admin") => dispatch(login(role)),
    logout: () => dispatch(logout()),
  };
}