import { ReactLenis, useLenis } from "lenis/react";
import Nav from "./utils/Nav.jsx";
import Routing from "./utils/Routing.jsx";
import Footer from "./partial/Footer.jsx";
import Contact from "./partial/Contact.jsx";

const App = () => {
  const lenis = useLenis(() => {

  });
  return (
    <ReactLenis root> 
      <div className="sticky top-0 left-0 w-full z-50 p-6 flex flex-col gap-5   ">
        <Nav />
      </div>
      <div className=" p-5 flex flex-col gap-5   ">
        <Routing />
        <Contact/>
        <Footer/>
      </div>

    </ReactLenis>
  );
};

export default App;
