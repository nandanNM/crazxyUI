import { Route, Routes } from "react-router-dom";
import "./globals.css";
import { WaitList } from "./_root/pages/index";
import RootLayout from "./_root/RootLayout";
// import FAQ from "./components/FAQ";
import Accordian from "./components/Accordion/Accordian";
// import FAQ from "./components/FAQ";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <main className="">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<WaitList />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
