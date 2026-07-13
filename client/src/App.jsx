import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

import "./App.css";
import Dynamic_Navbar from "./common/navbar/Dynamic_Navbar";
import Dynamic_Footer from "./common/footer/Dynamic_Footer";
import Home from "./Pages/home/Home";
import ContactPage from "./Pages/contact-us/Dynamic_Contact";
import GalaxyTechAboutComponents from "./Pages/aboutus/About-Us";
import Dynamic_Events from "./Pages/gallery/Dynamic_Events";
import BackToTopButton from "./components/Backtotop";
import Enquirybutton from "./components/Enquirybutton";

import Dynamic_Product from "./Pages/product_pages/Dynamic_Product";

import Barwirerodmills from "./Pages/product_pages/rollingmillplants/Barwirerodmills";
import SectionRollingMills from "./Pages/product_pages/rollingmillplants/Sectionmills";
import StripRollingMills from "./Pages/product_pages/rollingmillplants/stripmills";
import HelicalGearsSection from "./Pages/product_pages/gearboxes/Helicalgear";
import ReductionGearboxSection from "./Pages/product_pages/gearboxes/Reductiongearbox";
import PinionGearboxSection from "./Pages/product_pages/gearboxes/Piniongearbox";
import IndustrialServices from "./Pages/product_pages/gearboxes/Reductioncumgearbox";
import SpeedIncreaserGearbox from "./Pages/product_pages/gearboxes/Speedincrease";
import CoolingBedSection from "./Pages/product_pages/TMTEQUIPMENT/Coolingbed";
import TwinChannelSection from "./Pages/product_pages/TMTEQUIPMENT/Twinchannel";
import TMTQuenchingBoxSection from "./Pages/product_pages/TMTEQUIPMENT/Quenchingbox";
import TailBreakerSection from "./Pages/product_pages/TMTEQUIPMENT/Tailbreaker";
import FlywheelSection from "./Pages/product_pages/ROLLINGMILLPARTS/Flywheel";
import GearCouplingSection from "./Pages/product_pages/ROLLINGMILLPARTS/Gearcoupling";
import UniversalCouplingSection from "./Pages/product_pages/ROLLINGMILLPARTS/Universalcoupling";
import UniversalSpindlesSection from "./Pages/product_pages/ROLLINGMILLPARTS/Spindles";
import RollerGuideBoxSection from "./Pages/product_pages/ROLLINGMILLPARTS/Rollerbox";
import CardanShaftSection from "./Pages/product_pages/ROLLINGMILLPARTS/Cardenshaft";
import FlyingShearSection from "./Pages/product_pages/Shearing&CuttingMachine/FlyingShearMachine";
import BilletShearSection from "./Pages/product_pages/Shearing&CuttingMachine/BilletShearSection";
import CropShearSection from "./Pages/product_pages/Shearing&CuttingMachine/CropShearSection";
import HotBilletShearSection from "./Pages/product_pages/Shearing&CuttingMachine/HotBilletshearingMachine";
import RotaryShearSection from "./Pages/product_pages/Shearing&CuttingMachine/RotaryshearMachine";
import EndCuttingShearSection from "./Pages/product_pages/Shearing&CuttingMachine/EndCuttingshearMachine";
import ColdShearSection from "./Pages/product_pages/Shearing&CuttingMachine/ColdshearMachine";
import SnapShearSection from "./Pages/product_pages/Shearing&CuttingMachine/SnapshearMachine";
import ScrapShearSection from "./Pages/product_pages/Shearing&CuttingMachine/ScrapPlateMachine";
import HotSawSection from "./Pages/product_pages/Shearing&CuttingMachine/HotSaw";
import RollerConveyorsSection from "./Pages/product_pages/MATERIAL_HANDLING_EQUIPMENT/RollerConveyors";
import YTablesSection from "./Pages/product_pages/MATERIAL_HANDLING_EQUIPMENT/YTables";
import FurnacePusherSection from "./Pages/product_pages/MATERIAL_HANDLING_EQUIPMENT/FurnacePusher";
import CoilerSection from "./Pages/product_pages/MATERIAL_HANDLING_EQUIPMENT/Coilers";
import DecoilerSection from "./Pages/product_pages/MATERIAL_HANDLING_EQUIPMENT/Decoilers";
import VerticalLooperSection from "./Pages/product_pages/MATERIAL_HANDLING_EQUIPMENT/VerticalLoopers";
import VerticalEdgerSection from "./Pages/product_pages/OTHER_ALLIED_MACHINERY/VerticalEdger";
import StraighteningMachineSection from "./Pages/product_pages/OTHER_ALLIED_MACHINERY/StraighteningMachine";
import PinchRollSection from "./Pages/product_pages/OTHER_ALLIED_MACHINERY/PinchRolls";
import RollingMillStandsSection from "./Pages/product_pages/Rolling_Mill_Stands/RollingMillStands";
import HousinglessMillStandsSection from "./Pages/product_pages/Housingless_Mill_Stands/HousinglessMillStands";
import BlogPage from "./Pages/blogs/BlogPage";
import { Navigate } from "react-router-dom";
 
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./admin/pages/Login"));
const Dashboard = lazy(() => import("./admin/pages/Dashboard"));
const AdminLayout = lazy(() => import("./admin/layouts/AdminLayout"));
const ProtectedRoute = lazy(() => import("./admin/components/ProtectedRoute"));
const Events = lazy(() => import("./admin/pages/Events"));
const AdminFooter = lazy(() => import("./admin/pages/AdminFooter"));
const Categories = lazy(() => import("./admin/pages/Categories"));
const Navbar = lazy(() => import("./admin/pages/Navbar")); // admin one, distinct from common/navbar
const Contact = lazy(() => import("./admin/pages/Contact"));
const Enquiries = lazy(() => import("./admin/pages/Enquiries"));
const AdminBlogs = lazy(() => import("./admin/pages/AdminBlogs"));
const AdminProducts = lazy(() => import("./admin/pages/AdminProducts"));

// Layout component to wrap all pages with Navbar and Footer
const Layout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Dynamic_Navbar />
      <Outlet />
      <Dynamic_Footer />
      <Enquirybutton />
      <BackToTopButton />
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  // Define routes using createBrowserRouter with a layout route
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about-us",
            element: <GalaxyTechAboutComponents />,
          },

          {
    path: "/gallerypage",
    element: <Dynamic_Events />,
},
          {
  path: "/blogs/*",
  element: <BlogPage />,
},

          {
            path: "/Contact-Us",
            element: <ContactPage />,
          },
          // rolling mill plants
          {
            path: "/bar-wire-rod-mills",
            element: <Barwirerodmills />,
          },
          {
            path: "/section-mills",
            element: <SectionRollingMills />,
          },
          {
            path: "/strip-mills",
            element: <StripRollingMills />,
          },
          // gear boxes
          {
            path: "/helical-gear",
            element: <HelicalGearsSection />,
          },
          {
            path: "/reduction-gearbox",
            element: <ReductionGearboxSection />,
          },
          {
            path: "/pinion-gearbox",
            element: <PinionGearboxSection />,
          },
          {
            path: "/reduction-cum-gearbox",
            element: <IndustrialServices />,
          },
          {
            path: "/speed-increase",
            element: <SpeedIncreaserGearbox />,
          },
          // TMT equipment
          {
            path: "/cooling-bed",
            element: <CoolingBedSection />,
          },
          {
            path: "/twin-channel",
            element: <TwinChannelSection />,
          },
          {
            path: "/quenching-box",
            element: <TMTQuenchingBoxSection />,
          },

          {
            path: "/tail-breaker",
            element: <TailBreakerSection />,
          },
          //rolling mill parts
          {
            path: "/flywheel",
            element: <FlywheelSection />,
          },
          {
            path: "/gear-coupling",
            element: <GearCouplingSection />,
          },
          {
            path: "/universal-coupling",
            element: <UniversalCouplingSection />,
          },
          {
            path: "/spindles",
            element: <UniversalSpindlesSection />,
          },
          {
            path: "/roller-box",
            element: <RollerGuideBoxSection />,
          },
          {
            path: "/carden-shaft",
            element: <CardanShaftSection />,
          },
          // Shearing and cutting Machine
          {
            path: "/flying-shears",
            element: <FlyingShearSection />,
          },
          {
            path: "/crop-cobble-machine",
            element: <CropShearSection />,
          },
          {
            path: "/billet-machine",
            element: <BilletShearSection />,
          },
          {
            path: "/hot-billet-machine",
            element: <HotBilletShearSection />,
          },
          {
            path: "/rotary-machine",
            element: <RotaryShearSection />,
          },
          {
            path: "/end-cutting-machine",
            element: <EndCuttingShearSection />,
          },
          {
            path: "/cold-machine",
            element: <ColdShearSection />,
          },
          {
            path: "/snap-machine",
            element: <SnapShearSection />,
          },
          {
            path: "/scrap-plate-machine",
            element: <ScrapShearSection />,
          },
          {
            path: "/hot-saw",
            element: <HotSawSection />,
          },
          // material handling equipments
          {
            path: "/roller-conveyors",
            element: <RollerConveyorsSection />,
          },
          {
            path: "/y-tables",
            element: <YTablesSection />,
          },
          {
            path: "/furnace-pusher",
            element: <FurnacePusherSection />,
          },
          {
            path: "/coilers",
            element: <CoilerSection />,
          },
          {
            path: "/decoilers",
            element: <DecoilerSection />,
          },
          {
            path: "/vertical-looper",
            element: <VerticalLooperSection />,
          },
          // other allied machinery

          {
            path: "/pinch-rolls",
            element: <PinchRollSection />,
          },
          {
            path: "/vertical-edger",
            element: <VerticalEdgerSection />,
          },
          {
            path: "/straightening-machine",
            element: <StraighteningMachineSection />,
          },
          // rolling mill stand
          {
            path: "/rolling-mill-stands",
            element: <RollingMillStandsSection />,
          },
          {
            path: "/housingless-mill-stands",
            element: <HousinglessMillStandsSection />,
          },
          {
  path: "/products/:slug",
  element: <Dynamic_Product />,
},
        ],
      },
      {
  path: "/admin",
  element: <Login />,
},

{
  path: "/admin/login",
  element: <Navigate to="/admin" replace />,
},

{
  path: "/admin",
  element: (
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "events",
      element: <Events />,
    },
    {
  path: "footer",
  element: <AdminFooter />,
},
{
  path: "categories",
  element: <Categories />,
},
{
  path: "navbar",
  element: <Navbar />,
},
{
  path: "contact",
  element: <Contact />,
},
{
  path: "enquiries",
  element: <Enquiries />,
},
{
  path: "blogs",
  element: <AdminBlogs />,
},
{
  path: "products",
  element: <AdminProducts />,
},
  ],
},
    ],
    
    {
      // Enable scroll restoration
      scrollRestoration: "auto",
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
