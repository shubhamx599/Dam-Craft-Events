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
      <div className="overflow-hidden p-5  flex flex-col gap-5   ">
        <Nav />
        <Routing />
        <Contact/>
        <Footer/>
      </div>

    </ReactLenis>
  );
};

export default App;
