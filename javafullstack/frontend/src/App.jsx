import { BrowserRouter,Routes,Route} from "react-router-dom"; 
import './index.css';
import Turn from './Componets/Form';
import { LoginPage } from './Componets/Loginpage';
import Dashboard from "./Componets/Dashboard";
import Dashboard1 from "./Componets/Dashboard1";
import Layout from "./Componets/Layout";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/outlet" element={<Layout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// import './index.css';
// import Turn from './Componets/Form';
// import { LoginPage } from './Componets/Loginpage';
// import Dashboard from "./Componets/Dashboard";
// import Dashboard1 from "./Componets/Dashboard1";
// import Layout from "./Componets/Layout";

// function App() {
//   return (
//     <BrowserRouter> 
//       <Routes>
//         <Route path="/" element={<LoginPage />} />

//         <Route path="/dashboard" element={<Layout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="dashboard1" element={<Dashboard1 />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
