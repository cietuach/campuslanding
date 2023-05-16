//a page that shows the logos of the appstore and google play store

import React from "react";

export default function Download() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px- sm:px-0 lg:px-0 lg:py-24 sm:items-center">
        <div className="space-y-12">
          <div className="place-items-center space-y-4 lg:space-y-1 lg:scale-75 lg:grid lg:grid-cols-4"></div>
          <div className="flex justify-center items-center h-30">
            <div className="max-w-7xl">
              <div className="aspect-w-16 aspect-h-9 hidden sm:block">
                <img
                  className="object-contain h-96 w-full"
                  src="/images/Download.png"
                  alt="Download"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
