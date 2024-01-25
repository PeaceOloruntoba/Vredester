import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./pages/Layouts/Mainlayout";

function App() {
  return (
    <div className="App">
       <Routes>

<Route path="/" element={<MainLayout />}>
  <Route index element={<Homepage />} />

  {/* Training */}
  {/* <Route path="training" element={<Outlet />}>
    <Route path="" index element={<Training />} />
    <Route path="product" element={<ProductsClass />} />
    <Route path="backend" element={<BackendClass />} />
  </Route> */}

  {/* Services */}
  {/* <Route path="services" element={<Outlet />}>
    <Route path="" index element={<Services />} />
    <Route path="freelance" element={<Freelancing />} />
    <Route path="telemedicine" element={<Telemedicine />} />
    <Route path="fitnessh" element={<FitnessH />} />
    <Route path="webdevelopment" element={<WebDev />} />
    <Route path="techacademy" element={<MobileDev />} />
    <Route path="graphicsdesign" element={<Graphics />} />
  </Route> */}

  {/* <Route path="projects" element={<Projects />} /> */}
  {/* <Route path="courses" element={<Courses />} /> */}
  <Route path="/*" element={<NotFound />} />
</Route>
{/* <Route path="/signup" element={<SignupPage />} /> */}
{/* <Route path="/login" element={<LoginPage />} /> */}

</Routes>
    </div>
  );
}

export default App;
