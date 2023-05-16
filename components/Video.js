import YouTube from "react-youtube";

export default function Video({ id }) {
  return (
    <div className="flex justify-center items-center h-30">
      <div className="max-w-7xl">
        <div className="aspect-w-16 aspect-h-9 hidden sm:block">
          <YouTube
            videoId={id}
            opts={{
              width: "1000",
              height: "500",
            }}
          />
        </div>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="https://www.youtube.com/watch?v=HwDCBP9Id40"
            className="rounded-md bg-purple-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Ver video
          </a>
        </div>
      </div>
    </div>
  );
}
