import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../screens/Home";

const Navigation = ({mode,bg_color}) => {
        return (
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<WithNavbar/>}>
                      <Route index element={<Home  mode={mode} bg_color={bg_color}/>} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              );
};

export default Navigation;