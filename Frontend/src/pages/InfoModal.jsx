import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const InfoModal = ({ isOpen, handleOpen, data }) => {
  const {
    overview,
    original_title,
    release_date,
    poster_path,
    vote_average,
    vote_count,
  } = data;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[70vw] 2xl:w-[40vw] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="flex relative">
                    <div className="w-1/2">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        className="rounded-2xl"
                      />
                    </div>

                    <div className="p-5 w-full">
                      <h1 className="font-bold text-3xl">{original_title}</h1>
                      <p className="text-xl mt-2 text-yellow-500 font-semibold">
                        {release_date?.split("-")[0]}
                      </p>
                      <p
                        className="mt-2 2xl:text-lg"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 5,
                          overflow: "hidden",
                        }}
                      >
                        {overview}
                      </p>

                      <div className="absolute bottom-5 right-5 flex items-center gap-2">
                        ({vote_count})
                        <div className="text-yellow-400">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p className="text-yellow-400">{vote_average}</p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default InfoModal;
