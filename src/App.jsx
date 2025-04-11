import { Route, Routes } from "react-router-dom";
import "./globals.css";
import { WaitList } from "./_root/pages/index";
import RootLayout from "./_root/RootLayout";
import ComponentLayout from "./_root/ComponentLayout";
import CustomDatePicker from "./components/ui/DatePicker/DatePicker";

function App() {
  return (
    <main className="">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<WaitList />} />
          <Route path="/components/" element={<ComponentLayout />}></Route>
          <Route path="/datepicker" element={<CustomDatePicker />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
