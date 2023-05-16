export default function Desktop() {
  return (
    <div className="bg-purple-900">
      <div className="max-w-7xl mx-auto py-16 px-4 h-screen sm:px-6 lg:px-8">
        <div className="bg-zinc-100 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-10 lg:p-12 xl:p-16">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block text-purple-900">
                  La app Campus Seguro
                </span>
                <span className="block text-purple-900">
                  Funciona solo en dispositivos móviles.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-purple-500">
                Accede desde tu dispositivo móvil para descargar la app.
              </p>
              <a href="/">
                <button
                  className="bg-purple-900 rounded-md w-auto px-3 py-1 mt-4 text-base text-white font-semibold"
                  href="/"
                >
                  Regresar
                </button>
              </a>
            </div>
          </div>
          <div className="-mt-6 ">
            <img
              className="mt-10"
              src="https://res.cloudinary.com/djlx5smmq/image/upload/v1683660688/logo-CampusSeguro-nuevo_kfj2bk.png"
              alt="Campus Seguro"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
