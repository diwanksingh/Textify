const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
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
        <p className="hidden lg:block text-base-content/60">
          Textify is a real-time communication app developed by Diwank Singh for the community to connect, share thoughts, and exchange images effortlessly. Designed with simplicity and ease of use in mind, the app allows users to chat instantly, share media, and foster meaningful conversations in a secure environment. With a focus on privacy and seamless communication, Textify is built to help people stay connected in today’s fast-paced digital world, making it the perfect platform for sharing ideas, thoughts, and images with friends, colleagues, and the community at large.
        </p>

        {/* Description Text for smaller screens */}
        <p className="lg:hidden text-base-content/60 ">
         A webApp <br/>
         Note - to use features like 
          video-call-room or image sharing prefer a big screen.
        </p>
       
      </div>
    </div>
  );
};

export default NoChatSelected;
