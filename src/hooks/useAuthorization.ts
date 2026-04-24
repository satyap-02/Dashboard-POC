import {useAuth} from "../features/auth/useAuth";

export function useAuthorization(roles: ("user" | "admin")[]) {
  const { role} = useAuth();
  return role!== null && roles.includes(role);
}