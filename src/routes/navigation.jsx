import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../screens/Home";

const Navigation = ({mode,bg_color,language}) => {
        return (
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<WithNavbar language={language}/>}>
                      <Route index element={<Home  mode={mode} bg_color={bg_color} language={language}/>} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              );
};

export default Navigation;