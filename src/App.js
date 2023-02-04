import "./App.css";
import LandingPage from "./Components/Landing-Page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GeneralInformation from "./Components/General-Information";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/general-information", element: <GeneralInformation /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
