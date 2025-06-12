import React, {useEffect, useState, useCallback, useContext} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {Link} from "react-router";
import {GrPrevious} from "react-icons/gr";
import {GrNext} from "react-icons/gr";
import {FiPlay} from "react-icons/fi";
import {IoPause} from "react-icons/io5";
import {AuthContext} from "../../../ContextFiles/AuthContext";

export const Slider = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  const {user} = useContext(AuthContext);

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [
    Autoplay({delay: 3000, playOnInit: false}),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAutoplay = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
      setIsPlaying(false);
    } else {
      autoplay.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());

    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false));
  }, [emblaApi]);

  const slides = [
    {
      image: "https://i.ibb.co/GQmFHHjr/books.jpg",
      text: "Read all kinds of books instantly online.",
    },
    {
      image: "https://i.ibb.co/sJsm361G/Book-sale-169-Fill-Wzg1-NSw0-ODFd.jpg",
      text: "Bookmark all your favorite books in one click.",
    },
    {
      image:
        "https://i.ibb.co/MkWrsnhp/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-h.webp",
      text: "Explore all Kind of books in one scroll.",
    },
  ];

  return (
    <div className="w-full mx-auto relative mb-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-none w-full">
              <div
                className="h-56 sm:h-64 md:h-80  lg:h-96 bg-cover bg-center rounded-lg flex items-center mx-5 justify-center relative shadow-xl border-2"
                style={{backgroundImage: `url(${slide.image})`}}
              >
                <div className="bg-black/45 shadow-2xl p-2 sm:p-6 rounded-lg text-center w-3/4 space-y-2 py-10 lg:py-20 sm:space-y-4">
                  <h1 className="text-white sm:text-xl md:text-2xl font-semibold sm:font-bold">
                    {slide.text}
                  </h1>
                  {user ? (
                    <Link
                      to={"/bookshelf"}
                      className="btnnn w-[150px]  font-semibold"
                    >
                      Read Now
                    </Link>
                  ) : (
                    <Link
                      to={"/login"}
                      className="btnnn w-[150px]  font-semibold"
                    >
                      Login Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-5/10 mt-7 mx-auto  bg-blue-600/30 flex space-x-4 border-2 border-blue-600 rounded-full py-2 px-4 justify-between">
        <button
          onClick={scrollPrev}
          disabled={isPlaying}
          className={`group relative ${
            isPlaying
              ? "text-white cursor-not-allowed"
              : "text-black cursor-pointer"
          } flex flex-col items-center`}
        >
          <GrPrevious size={24} />
          {!isPlaying && (
            <span className="absolute bottom-full mb-3 text-xs bg-black text-white px-2 py-1  rounded opacity-0 group-hover:opacity-100 transition">
              Previous
            </span>
          )}
        </button>

        <button
          onClick={toggleAutoplay}
          className={`group relative ${
            isPlaying ? "text-black" : "text-white"
          } cursor-pointer flex flex-col items-center ml-1`}
        >
          {isPlaying ? <IoPause size={24} /> : <FiPlay size={24} />}
          <span className="absolute bottom-full mb-3 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            {isPlaying ? "Pause" : "AutoPlay"}
          </span>
        </button>

        <button
          onClick={scrollNext}
          disabled={isPlaying}
          className={`group relative ${
            isPlaying
              ? "text-white cursor-not-allowed"
              : "text-black cursor-pointer"
          } flex flex-col items-center`}
        >
          <GrNext size={24} />
          {!isPlaying && (
            <span className="absolute bottom-full mb-3 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Next
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
