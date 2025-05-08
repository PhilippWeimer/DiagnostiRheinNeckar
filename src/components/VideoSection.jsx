import React from 'react'

const VideoSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
       
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube-nocookie.com/embed/IfjHZqbdnmI"
    title="YouTube Video zur Wasserglasmethode"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      </div>
    </section>
  );
};

export default VideoSection;
