import { Route, Routes } from "react-router-dom";
import "./globals.css";
import { WaitList } from "./_root/pages/index";
import RootLayout from "./_root/RootLayout";
import ComponentLayout from "./_root/ComponentLayout";
import Navbar1 from "./components/ui/Navbar/Navbar1";
import Navbar2 from "./components/ui/Navbar/Navbar2";
import Navbar3 from "./components/ui/Navbar/Navbar3";

function App() {
  return (
    <main className="">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<WaitList />} />
          <Route path="/components/" element={<ComponentLayout />}></Route>
          <Route path="/navbar1" element={<Navbar1 />} />
          <Route path="/navbar2" element={<Navbar2 />} />
          <Route path="/navbar3" element={<Navbar3 />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
