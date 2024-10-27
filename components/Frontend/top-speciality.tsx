import Image from "next/image";

const imageIcons = [
  { id: "1", icon: "/primary-care.png", alt: "primary care", title: "primary care" },
  { id: "2", icon: "/dentist.png", alt: "dentist", title: "dentist" },
  { id: "3", icon: "/maternity.png", alt: "maternity", title: "ob-gyn" },
  { id: "4", icon: "/dermathology.png", alt: "dermathology", title: "dermathology" },
  { id: "5", icon: "/psychiatrist.png", alt: "psychiatrist", title: "psychiatrist" },
  { id: "6", icon: "/optometrist.png", alt: "optometrist", title: "eye doctor" },
];

const TopSpeciality = () => {
  return (
    <div className="container my-8">
      <div className="relative w-full max-w-full text-center">
        <div className="relative mx-auto flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 px-4 py-4 shadow-xl">
          <h1 className="relative z-50 mb-4 text-center text-4xl">
            Popular specialties
          </h1>

          <p className="relative z-50 mb-6 text-base font-normal text-slate-500">
            Simply browse through our extensive list of trusted doctors, schedule
            your appointment hassle-free.
          </p>

          <div className="flex w-full flex-wrap items-center justify-between text-center">
            {imageIcons.map((items) => {
              return (
                <div key={items.id} className="hover:cursor-pointer">
                  <div className="relative h-28 w-28 rounded-full bg-primary">
                    <Image src={items.icon} alt={items.alt} fill />
                  </div>

                  <div className="mb-8 mt-3 font-bold uppercase">{items.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSpeciality;
