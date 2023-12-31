import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Sidebar, Navbar ,Footer,ThemeSettings, Stacked} from "./Components";
// import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, Ecommerce, Editor, Employees, Kanban, Line, Orders, Pie, Pyramid,  } from './pages'
// import {Line} from "./pages/Charts"
function App() {

  const activeMenu = false;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="Top">
              <button
                className="3-xl p-3  hover:drop-shadow-xl  hover:bg-light-gray text-white "
                style={{
                  background: "blue",
                  borderRadius: "50%",
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0  dark:bg-secondary-dark-bg">
              <Sidebar  />
            </div>
          )}
          <div
            className={`dark-bg-main-bg  bg-main-bg min-h-screen w-full 
             ${activeMenu ? "md:ml-72" : "flex-2"} `}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Ecommerce/>} />
              <Route path="/ecommerce" element={<Ecommerce/>} />
              {/* Pages */}
              <Route path="/orders" element={<Orders/>} />
              <Route path="/customers" element={<Customers/>} />
              <Route path="/employees" element={<Employees/>} />
              {/* Apps */}
              <Route path="/kanban" element={<Kanban/>} />
              <Route path="/editor" element={<Editor/>} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/color-picker" element={<ColorPicker/>} />
              {/* Charts */}
              <Route path="/line" element={<Line/>} />
              <Route path="/area" element={<Area/>} />
              <Route path="/bar" element={<Bar/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/color-mapping" element={<ColorMapping/>} />
              <Route path="/pyramid" element={<Pyramid/>} />
              <Route path="/stacked" element={<Stacked/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
