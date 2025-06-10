import React from "react";
import {Fade} from "react-awesome-reveal";

const NewsSection = () => {
  return (
    <div>
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Fade direction="up" cascade duration={800} triggerOnce={false}>
              <div className="">
                <h1 className="text-3xl sm:text-5xl font-bold  mb-10">
                  Laatest Book News
                </h1>
              </div>
            </Fade>
            <p className="text-gray-600 mt-2">
              Updates from the literary world, right here.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 block group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src="https://i.ibb.co/qLjBR3CP/Getty-Images-1004412096-1024x693.jpg"
                  alt="Dhaka Lit Fest promotional banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute "></div>
                <div className="absolute bottom-0 left-0 p-6 bg-black/70">
                  <span className="text-xs font-semibold bg-blue-400 text-white py-1 px-3 rounded-full">
                    Local Events
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-4">
                    Dhaka Lit Fest 2025 Dates Announced, Promises a Grand Return
                  </h3>
                  <p className="text-indigo-100 mt-2">
                    Organizers have confirmed the festival will take place this
                    November, with a star-studded lineup of international and
                    local authors...
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="block group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h4 className="font-bold text-lg text-gray-800 group-hover:text-blue-400 transition-colors">
                  Unpublished Works of Humayun Ahmed to be Released in New
                  Collection
                </h4>
                <p className="text-sm text-gray-500 mt-2">June 9, 2025</p>
                <p className="text-gray-600 text-sm mt-3">
                  A new collection titled 'Oprokashito' will feature short
                  stories and poems discovered recently...
                </p>
              </div>

              <div className="block group bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h4 className="font-bold text-lg text-gray-800 group-hover:text-blue-400 transition-colors">
                  2025 Booker Prize Longlist Unveiled, Featuring Diverse New
                  Voices
                </h4>
                <p className="text-sm text-gray-500 mt-2">June 5, 2025</p>
                <p className="text-gray-600 text-sm mt-3">
                  The much-anticipated list for one of literature's most
                  prestigious awards is finally here...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsSection;
