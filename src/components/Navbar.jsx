import { Link, Route, Routes } from "react-router-dom";
import Exams from "../pages/Exams";
import Program from "../pages/Program";
import Scholarships from "../pages/Scholarships";
import Test from "../pages/Test";
import Study from "../pages/Study";
import Button from "./Button";
import { FiPhoneCall } from "react-icons/fi";
import Home from "../pages/Home";

const Navbar = () => {
  const router = [
    {
      path: "/exam",
      element: <Exams />,
      label: "Exams",
    },
    {
      path: "/program",
      element: <Program />,
      label: "Program",
    },
    {
      path: "/scholarships",
      element: <Scholarships />,
      label: "Scholarships",
    },
    {
      path: "/test-series",
      element: <Test />,
      label: "Test Series",
    },
    {
      path: "/study-material",
      element: <Study />,
      label: "Study material",
    },
  ];

  return (
    <>
      <nav className="max-w-screen-xl mx-auto  py-5 flex gap-20 items-center pl-12 text-white ">
        <ul className="lg:flex gap-10 hidden">
          <h2 className="font-bold uppercase">
          <Link to="/" element={<Home />} >
          Allen
          </Link>
          </h2>
          {router.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <div className="bg-white rounded-full">
            <Button>
              <div className="flex items-center gap-2 w-full text-black ">
                <FiPhoneCall /> <p className="tracking-tighter">Talk to Us</p>
              </div>
            </Button>
          </div>
          <Button>Login</Button>
        </div>
      </nav>

      <Routes>
        {router.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};

export default Navbar;
