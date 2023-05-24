import { UserIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Botones de alerta:",
    description:
      "Te permiten enviar una alerta con tu ubicación a los guardias de seguridad dentro del campus, ellos irán a ayudarte. Gracias a los tipos de alerta, acudirán con el equipo necesario para una atención más eficaz.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Botón naranja:",
    description:
      "El botón naranja, nos sirve para dejar una queja, que llega directo a la defensoría de los derechos universitarios, para que ellos puedan darle seguimiento a tu caso.",
    icon: UserIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-purple-900">
                Descarga nuestra app
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Siéntete seguro dentro de nuestros campus
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Tu seguridad es lo más importante, por eso ofrecemos
                herramientas fáciles de usar para que puedas pedir ayuda en caso
                de que lo necesites.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-purple-900"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="https://res.cloudinary.com/djlx5smmq/image/upload/v1683923653/mockopcito_arck6r.png"
              alt="Product screenshot"
              className=""
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
