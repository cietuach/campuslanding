export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Desarrollado por:
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://res.cloudinary.com/djlx5smmq/image/upload/v1683660688/ciet_i1h9p6.png"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://res.cloudinary.com/djlx5smmq/image/upload/v1683660688/defensoria_ylwtrg.png"
            alt="Reform"
            width={158}
            height={48}
          />
          {/* <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://res.cloudinary.com/djlx5smmq/image/upload/v1683660688/logo-uach_xce9py.png"
            alt="Tuple"
            width={158}
            height={48}
          /> */}
        </div>
      </div>
    </div>
  );
}
