import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User,House, Video } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 absolute w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 ">
              <div className="size-9   flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="rounded-full"
                />
              </div>
              <h1 className="text-lg font-bold">Textify</h1>
            </Link>
          </div>
         
          <div className="flex items-center gap-2">
          <Link
              to={"/"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <House className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            
            
            
            <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
              <Link to={"/videocall"}className={`hidden lg:btn lg:btn-sm lg:gap-2`}>
              <Video className="size-5"/>
              <span className="hidden sm:inline">VideoCall</span>
              
              </Link>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center " onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
