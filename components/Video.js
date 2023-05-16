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
      </div>
    </div>
  );
}
