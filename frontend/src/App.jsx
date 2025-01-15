import Navbar from "./components/Navbar"
import { Navigate, Route, Routes,useLocation  } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ProfilePage from "./pages/ProfilePage"
import SettingPage from "./pages/SettingPage"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect} from "react"
import {Loader} from "lucide-react"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"
import { useThemeStore } from "./store/useThemeStore"
import Videocall from "./pages/videocallPage"
import MeetingRoom from "./pages/videocall"
const App =()=> {
   const {authUser,checkAuth} = useAuthStore();
   const{theme}= useThemeStore();
  const location = useLocation();
 
   useEffect(() => {
    checkAuth();
  }, [checkAuth]);

 
  const isCheckingAuth = useAuthStore((state) => state.isCheckingAuth);
  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  
  return (
    <div data-theme={theme}>
   
    
    <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="/videocall"  element={authUser ? <Videocall /> : <Navigate to="/login" />}/>
        <Route path="/meeting-room" element={authUser? <MeetingRoom />:<Navigate to="/login"/>} />
      </Routes>
      {(location.pathname === "/login" || location.pathname === "/signup"||location.pathname==="/"
        ||location.pathname==="/profile"||location.pathname==="/settings"||
        location.pathname==="/videocall")&&<Navbar/> }
      {(location.pathname === "/login" || location.pathname === "/signup") && <Footer />}
     
      

    
    

<Toaster/>

   </div>
  )
}

export default App;