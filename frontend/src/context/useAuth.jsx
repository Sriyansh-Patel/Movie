import { useContext } from "react";
import authContext from "./AuthProvider.jsx";

export default function useAuth() {
  return useContext(authContext);
}
