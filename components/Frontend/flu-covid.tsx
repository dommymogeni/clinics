import Link from "next/link";

function FluCovid() {
  return (
    <div className="grid grid-cols-12 lg:container lg:pb-5 lg:pt-5 ">
      <div className="col-span-12 col-start-1 grid w-full grid-cols-12 bg-blue-950 bg-cover bg-center lg:rounded">
        <div className="container col-span-12 flex flex-col items-center justify-center gap-6 py-12 lg:col-span-8 lg:col-start-3 lg:py-20">
          <h2 className="text-center text-2xl font-medium text-white lg:text-3xl">
            Flu, covid 19 and RSV
          </h2>

          <div className="text-center text-white">
            <p className="empty:hidden">
              While caused by different viruses, these conditions share common
              symptoms and can be prevented through vaccines.
            </p>
          </div>

          <div className="flex items-center justify-center pt-8">
            <Link
              href={"/"}
              className="relative z-[1] box-border flex h-[3.75rem] w-full min-w-[3.75rem] cursor-pointer select-none appearance-none items-center justify-center gap-2 px-6 font-sans font-semibold text-white outline-none transition-colors before:absolute before:inset-0 before:z-[-1] before:rounded-full before:bg-blue-800 before:outline-2 before:outline-offset-2 before:outline-primary before:transition before:duration-200 before:ease-in-out before:hover:scale-x-[1.015] before:hover:scale-y-[1.035] before:hover:bg-blue-800 before:hover:drop-shadow before:focus-visible:outline md:w-[310px]"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FluCovid;
