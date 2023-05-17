export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Campus Seguro en tu universidad
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              El desarrollo de Campus Seguro y su implementación, ha sido
              pensado para llegar a distintas universidades e instituciones
              educativas. Actualmente estamos abiertos a universidades que
              quieran implementar Campus Seguro en sus campus.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Si estás interesado en implementar Campus Seguro en tu universidad
              o institución educativa, contáctanos. Estaremos encantados de
              ayudarte.
            </p>
            <div className="mt-10 flex">
              <a
                href="https://forms.gle/RFMLZDpRvwKXHJ7V9"
                className="rounded-md bg-purple-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Contáctanos <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="https://res.cloudinary.com/djlx5smmq/image/upload/v1684352132/Screen_Shot_2023-05-17_at_13.31.49_r6p1ol.png"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="https://res.cloudinary.com/djlx5smmq/image/upload/v1684352132/Screen_Shot_2023-05-17_at_13.32.54_zssli9.png"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="https://res.cloudinary.com/djlx5smmq/image/upload/v1684352132/Screen_Shot_2023-05-17_at_13.32.08_iyuxqc.png"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="https://res.cloudinary.com/djlx5smmq/image/upload/v1684352133/Screen_Shot_2023-05-17_at_13.33.45_afni5w.png"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
