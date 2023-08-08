import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spotter from "./pages/spotter";
import { ApiProvider } from "./contexts/ApiContext";
import NavBar from "./components/NavBar";

const defaultURL = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
    return "http://192.168.1.67";
  return "";
};

const App = () => {
  // eslint-disable-next-line
  const basename = location.pathname.split("/").slice(0, -1).join("/");

  return (
    <>
      <ApiProvider value={defaultURL()}>
        <div>
          <div className="flex flex-col">
            <NavBar />
            <main className="flex-1 bg-gray-100">
              <div className="py-6">
                <div className="mx-auto px-4 sm:px-6 md:px-8">
                  <Router basename={basename}>
                    <Routes>
                      <Route path="/" element={<Spotter />} />
                    </Routes>
                  </Router>
                </div>
              </div>
            </main>
          </div>
        </div>
      </ApiProvider>
    </>
  );
};
export default App;
