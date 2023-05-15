import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "¿Funciona en cualquier dispositivo?",
    description:
      "Funciona en la mayoría de dispositivos Android y iOS. Si tu dispositivo no cuenta con sistema operativo actualizado o no tiene las características necesarias, es posible que no funcione correctamente.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "¿Cuánto tiempo tarda en llegar la ayuda?",
    description:
      "La alerta llega a nuestros guardias de seguridad de manera inmediata. El tiempo de respuesta depende de la ubicación de la persona que envía la alerta.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const faqs = [
  [
    {
      question: "¿Funciona en cualquier dispositivo?",
      answer:
        "Funciona en la mayoría de dispositivos Android y iOS. Si tu dispositivo no cuenta con sistema operativo actualizado o no tiene las características necesarias, es posible que no funcione correctamente.",
    },
    {
      question: "¿Cuánto tiempo tarda en llegar la ayuda?",
      answer:
        "La alerta llega a nuestros guardias de seguridad de manera inmediata. El tiempo de respuesta depende de la ubicación de la persona que envía la alerta.",
    },
    {
      question: "¿Qué pasa si no me encuentro dentro del campus?",
      answer:
        "Si no te encuentras dentro del campus, la alerta no llegará a nuestros guardias de seguridad, ya que esa app está diseñada para uso dentro del campus.",
    },
  ],
  [
    {
      question: "¿Qué pasa si necesito asistencia médica?",
      answer:
        "Si necesitas asistencia médica, nuestros guardias de seguridad te ayudarán contactando a los servicios de emergencia, si es necesario una ambulancia acudirá en tu auxilio.",
    },
    {
      question:
        "¿Qué tipo de asistencia mecánica pueden brindar los guardias de seguridad?",
      answer:
        "Si bien, su trabajo es ayudarte, la asistencia mecánica que se brinda es limitada y básica. Como alguna llanta ponchada, falta de batería o falta de gasolina.",
    },
    {
      question: "¿Necesito proporcionar algún tipo de información?",
      answer:
        "De momento todas las alertas y quejas funcionan de manera anónima, para mantener la privacidad  y seguridad de los usuarios. ",
    },
  ],
  [
    {
      question: "¿Necesito ser estudiante de la UACH para usar la app?",
      answer:
        "Cualquier persona que se encuentre dentro del campus puede usar la app, ya sea estudiante, profesor, personal administrativo o visitante.",
    },
    {
      question: "¿La atención del botón naranja es inmediata?",
      answer:
        "No, la atención del botón naranja no es inmediata, ya que la queja llega a la defensoría de los derechos universitarios, para que ellos puedan darle seguimiento a tu caso. Si te encuentras en una situación de peligro o emergencia, de violencia de género. Te recomendamos usar el botón de alerta.",
    },
    {
      question: "¿Qué pasa si no tengo internet?",
      answer:
        "Si no tienes internet, la app no funcionará correctamente, ya que necesita de internet para enviar la alerta. Afortunadamente contamos con WiFi gratuito en el campus.",
    },
  ],
];

export default function Faqs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {" "}
      <img
        src="https://res.cloudinary.com/djlx5smmq/image/upload/v1683838211/background-features-campus-seguro_fkfpkm.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Preguntas recuentes
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
