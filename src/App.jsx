import LoginSignup from "./components/LoginSignup";
import Navbar from "./components/Navbar";
import AdminGroups from "./pages/AdminGroups";
import AdminPage from "./pages/AdminPage";
import CreateGroupAdmin from "./pages/CreateGroupAdmin";
import { ToastContainer } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./pages/Toast";

function App() {
  return (
    <div>
      <LoginSignup/>
      {/* <AdminPage /> */}
      {/* <AdminGroups/> */}
      {/* <CreateGroupAdmin/> */}
    </div>
  );
}

export default App;
