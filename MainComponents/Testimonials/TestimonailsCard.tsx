import React, { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function TestimonialsCard({
  name,
  desc,
  video,
}: {
  name: string;
  desc: string;
  video: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className="relative max-w-[620px] sm:h-[600px] h-[450px] rounded-2xl overflow-hidden shadow-lg border">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={video}
        className="w-full h-full object-cover"
        playsInline
      />

      {/* Overlay for Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm opacity-80">{desc}</p>
      </div>

      {/* Play Button */}
      <button
        className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md cursor-pointer"
        onClick={togglePlay}
        style={{
          background:
            "linear-gradient(240deg, #ce3e50 10.77%, #1f298b 70.57%, #356af4 93.33%)",
        }}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </button>
    </div>
  );
}
