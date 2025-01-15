import { Video } from "lucide-react";


const Videocall = () => {
  const handleOpenRoom = () => {
    const baseURL = import.meta.env.VITE_SERVER_STATUS==="devlopment"?"http://localhost:5173":import.meta.env.VITE_FRONTEND_URL;
    window.open(`${baseURL}/meeting-room`, "_blank"); // Open in a new tab
    };
  return (
    <div className="w-full h-screen flex flex-1 flex-row items-center justify-between p-16 bg-base-100/50 mt-16">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div className="animate-bounce flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-20 h-20 rounded-full" // Size adjustment for the image
              />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Textify!</h2>

        {/* Description Text for larger screens */}
        <p className="hidden lg:block text-base-content/60 text-xl">
        Textify is a real-time communication app developed by Diwank Singh, designed to help the community connect, share thoughts, and exchange images effortlessly.
        </p><p className="hidden lg:block text-base-content/60 text-xl">
        Textify also features a Video-Call-Room, where you can initiate a video meeting and share a unique link with your community members to join. Clicking the 'Video-Call-Room' button will redirect you to your personal video-call-room.
        </p>

        {/* Description Text for smaller screens */}
        <p className="lg:hidden text-base-content/60">
          A communication webApp
        </p>
      </div>

      <div className="text-center flex flex-col px-[90px] ml-44 my-auto text-2xl ">
     <img 
     src="https://media.istockphoto.com/id/1216427190/photo/laptop-with-a-videoconference-call-on-the-screen.jpg?s=612x612&w=0&k=20&c=n10knmGXxWe94m6NubJz6ffC3Dle9VzDU5Godl0tToE="
     alt="Video Call"
     className="rounded-2xl w-[410px]"
     
     />
        <p className="mb-5 mt-4 ">OPEN A VIDEO-CALL-ROOM</p>
        <button className="btn btn-lg gap-2 rounded-md shadow-2xl border-black border-2 hover:border-black " onClick={handleOpenRoom}>
          <Video className="size-10" />
          <span>Video-Call-Room</span>
        </button>
      </div>
    </div>
  );
};

export default Videocall;
