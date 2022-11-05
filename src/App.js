import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import Error from "./components/Errorpage";
import TestBoundary from "./components/TestBoundary";




function App() {
  
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/testboundary" element= {<TestBoundary />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
