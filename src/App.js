import React, {useState, useEffect} from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Loading from "./components/Loading";


function App() {

     const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Show loading screen for 2 seconds

        // Cleanup timer
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>     
    </div>
  );
}

export default App;
