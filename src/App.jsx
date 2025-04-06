import { Route, Routes } from "react-router-dom";
import "./globals.css";
import { WaitList } from "./_root/pages/index";
import RootLayout from "./_root/RootLayout";
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
