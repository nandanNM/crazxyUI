import { Route, Routes } from "react-router-dom";
import "./globals.css";
import { WaitList } from "./_root/pages/index";
import RootLayout from "./_root/RootLayout";
import ComponentLayout from "./_root/ComponentLayout";
import Loader from "./components/ui/Loader/Loader";
import Carousel from "./components/ui/Carousel/Carousel";

function App() {
  return (
    <main className="">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<WaitList />} />
          <Route path="/components/" element={<ComponentLayout />}></Route>
          <Route path="/loader" element={<Loader />} />
          <Route path="/carousel" element={<Carousel />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
