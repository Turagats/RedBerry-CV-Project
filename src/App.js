import "./App.css";
import LandingPage from "./Components/Landing-Page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GeneralInformation from "./Components/General-Information";
import ExperincePage from "./Components/Experience-Page";
import EducationPage from "./Components/Education-page";
// import Resume from "./Components/Resume";
// import Sacdeli from "./Components/sacdeli";
import Resume from "./Components/Resume";


const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/general-information", element: <GeneralInformation /> },
  { path: "/experience", element: <ExperincePage /> },
  { path: "/education", element: <EducationPage /> },
  { path: "/resumes", element: <Resume /> },
  
  // { path: "/sacdeli", element: <Sacdeli /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
