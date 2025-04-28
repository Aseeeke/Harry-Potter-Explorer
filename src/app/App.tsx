import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { Header } from "../widgets/Header/Header";


export function App() {
  return (
    <BrowserRouter>
        <div className="bg-[url('/assets/bg_4.jpg')] bg-cover min-h-screen">
      <Header />
      <AppRoutes />
        </div>
    </BrowserRouter>
  );
}
