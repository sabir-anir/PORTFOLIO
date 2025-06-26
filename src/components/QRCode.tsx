const QRCode = () => {
  // You can change this URL to any link you want (portfolio, contact page, LinkedIn, etc.)
  const portfolioLink = "https://www.behance.net/gallery/228797027/ANIR-SABIR-PORTFOLIO";
  
  // Generate QR code using QR Server API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(portfolioLink)}&bgcolor=ffffff&color=000000&margin=10`;

  const handleQRClick = () => {
    window.open(portfolioLink, '_blank');
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* QR Code Container */}
      <div className="relative group cursor-pointer" onClick={handleQRClick}>
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
        
        {/* QR Code */}
        <div className="relative bg-white p-4 rounded-2xl shadow-2xl shadow-cyan-400/20 group-hover:shadow-cyan-400/40 transition-all duration-500 group-hover:scale-105">
          <img 
            src={qrCodeUrl}
            alt="QR Code - Portfolio Link"
            className="w-24 h-24 md:w-32 md:h-32"
            onError={(e) => {
              // Fallback if QR service is unavailable
              e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSIxMDAiIHk9IjEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzMzIj5RUiBDb2RlPC90ZXh0Pgo8L3N2Zz4=";
            }}
          />
        </div>
      </div>

      {/* QR Code Label */}
      <div className="text-center">
        <p className="text-sm text-gray-400 mb-1">Scannez to visit my portfolio on Behance  </p>
        <p className="text-xs text-cyan-400 font-semibold hover:text-white transition-colors duration-300 cursor-pointer" onClick={handleQRClick}>
          {portfolioLink}
        </p>
      </div>
    </div>
  );
};

export default QRCode;