import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/reset.css";
import "./assets/style.css";
import Main from "./Main";
import Schedule from "./Schedule"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sessoes/" element={<Schedule />} /> 
        {/* <Route path="/assentos/:"{idSessao} element={< />} />  */}
        {/* <Route path="/sucesso" element={<Sucesso />} />  */}
      </Routes>
    </BrowserRouter>
  );
}
