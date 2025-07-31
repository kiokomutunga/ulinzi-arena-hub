import { useState, useRef } from "react";
import { Play, Pause, X } from "lucide-react";

const VideoTourSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <section className="video-tour-section py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Experience Ulinzi Sports Complex
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a virtual tour of Kenya's premier military sports facility and witness world-class infrastructure designed with precision and excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-96 object-cover"
                  poster="/images/mainpitch.png"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/images/tour.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button
                    onClick={togglePlay}
                    className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  World-Class Facilities Await
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Discover the state-of-the-art infrastructure that makes Ulinzi Sports Complex Kenya's premier destination for sports excellence. From our 7,500-seater stadium to Olympic-standard facilities, every detail reflects military precision and sporting ambition.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Home to championship teams and international competitions, our complex stands as a testament to the Kenya Defence Forces' commitment to excellence both on and off the field.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openModal}
                  className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Full Tour
                </button>
                <button 
                  onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap !rounded-button"
                >
                  Explore Facilities
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              className="w-full h-auto rounded-lg shadow-2xl"
              controls
              autoPlay
              poster="/images/mainpitch.png"
            >
              <source src="/images/tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoTourSection;
