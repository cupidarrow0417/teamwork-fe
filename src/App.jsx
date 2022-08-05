import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/login/Login";
import PagesIndex from "./pages";
import Settings from "./pages/settings/Settings";
import Categories from "./pages/categories/Categories";
import Employees from "./pages/employees/Employees";
import Home from "./pages/home/Home";
import Posts from "./pages/posts/Posts";
import Help from "./pages/help/Help";
import More from "./pages/more/More";
import Reports from "./pages/reports/Reports";
import Register from "./auth/register/Register";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<PagesIndex />}>
            <Route index element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="reports" element={<Reports />} />
            <Route path="more" element={<More />} />
            <Route path="employees" element={<Employees />} />
            <Route path="categories" element={<Categories />} />
            <Route path="help" element={<Help />} />
            <Route path="posts" element={<Posts />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
