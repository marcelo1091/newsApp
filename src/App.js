import { BrowserRouter } from "react-router-dom";
import Navbar from './Layouts/Navbar/Navbar';
import Router from './Router/Router';
import './App.css';

function App() {
  return (
    <div className="flex justify-center flex-col h-full font-sans">
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
