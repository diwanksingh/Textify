const AuthImagePattern = ({ title, subtitle }) => {
  const imageUrls = [
    "/image.png",
    "/image2.png",
    "/imag3.png",
    "/image4.png",
    "/image5.png",
    "/image6.png",
    "/image7.png",
    "/image8.png",
    "/image9.png",
    
    
  ];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {imageUrls.map((url, i) => (
            <div
              key={i}
               className="aspect-square w-[120px] h-[120px] rounded-full overflow-hidden"
            >
              <img
                src={url}
                alt={`image-${i + 1}`}
                className={`object-cover ${
                  i !==false ? "animate-pulse" : ""
                }`}
              />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
