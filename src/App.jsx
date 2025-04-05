import { Route, Routes } from "react-router-dom";
import "./globals.css";
import { WaitList } from "./_root/pages/index";
import RootLayout from "./_root/RootLayout";
import Card from "./components/card/Card";
import FlipCard from "./components/card/FlipCard";
import Modal from "./components/modal/Modal";
function App() {
  return (
    <main className="">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<WaitList />} />
          <Route path="/card" element={
            <Card 
            title="Capturing the world" 
            subtitle="sony zv e-10" 
            description="travelpeoplebeautymapphotographerhappinessbagtourismbackpackcity streettouristreligionbackpackerfamous placethai culturewathipster culturePublic domain images"
            imageUrl="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"/>}
            />

          <Route path="/flipcard" element={<FlipCard
            title="Services"
            name="click"
            imageUrl="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            description="An image description is a written caption that describes the essential information in an image. Image descriptions can define photos, graphics, gifs, and video — basically anything containing visual information."

          />} />
          <Route path="/modal" element={
              <Modal 
              tittle="Welcome" 
              description="This is a simple animated dialog component. You can customize its content and style."
              />}/>
        </Route>
      </Routes>
      
    </main>
  );
}

export default App;
