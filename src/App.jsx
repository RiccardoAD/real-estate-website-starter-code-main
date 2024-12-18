import Home from "./components/Home";
import Footer from "./components/Footer";
import Featuredroperty from "./components/Featuredroperty";
import PropertyModal from "./components/PropertyModal";
import { useState } from "react";

function App() {
  const[selectedProperty, setSelectedProperty] = useState(null);
  console.log('Selected Property:', selectedProperty);
  return (<div  className="min-h-screen w-full bg-gray-50">
    <Home />
    < Featuredroperty setSelectedProperty={setSelectedProperty} />
    <Footer />

    {selectedProperty && (
      
      <PropertyModal properties={[selectedProperty]}
      onClose={()=> setSelectedProperty(null)}
      />
      
    )}
  </div>
  
);
}

export default App;
