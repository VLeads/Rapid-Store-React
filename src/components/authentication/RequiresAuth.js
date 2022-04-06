import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useUser } from "context";

export function RequiresAuth() {
  const location = useLocation();

  const { getToken } = useUser();

  return getToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
