import { AppRoute, RoutePath } from "@/app/routes/routeConfig";
import { NavLink } from "react-router-dom";

const navOrder = [
  {
    label: AppRoute.HOME,
    path: RoutePath[AppRoute.HOME],
  },
  {
    label: AppRoute.CHARACTERS,
    path: RoutePath[AppRoute.CHARACTERS],
  },
];

export const Header = () => {
  return (
    <header className="pt-4 pb-2 text-white">
      <nav>
        <ul className="flex gap-4 text-3xl justify-evenly">
          {navOrder.map((route) => {
            return (
              <li key={route.label}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? "text-gray-500" : ""
                  }
                >
                  <h1 className="font-harrypotter text-5xl">{route.label}</h1>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
