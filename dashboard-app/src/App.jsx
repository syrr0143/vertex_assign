
import './App.css'
import Dashboard from './component/Dashboard'
// import Profile from './component/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './component/NotFound';
import Layout from './component/Layout';
import ProfilePage from './component/ProfilePage';
function App() {


  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          {/* All pages under this layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<ProfilePage />} />
            {/* <Route path="analytics" element={<Analytics />} />
            <Route path="connect" element={<Connect />} />
            <Route path="dealroom" element={<Dealroom />} />
            <Route path="settings" element={<Settings />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
