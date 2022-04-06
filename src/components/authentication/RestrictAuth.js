import { useUser } from "context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function RestrictAuth() {
  const { getToken } = useUser();
  const location = useLocation();

  return getToken ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
