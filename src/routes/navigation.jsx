import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../screens/Home";

const Navigation = () => {
        return (
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<WithNavbar />}>
                      <Route index element={<Home />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              );
};

export default Navigation;