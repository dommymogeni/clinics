import Search from "@/components/Frontend/search";
import { DownloadCloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between bg-primary rounded-md">
          {/* intro text */}
          <div className="w-full pl-8 lg:w-5/12">
            <div className="">
              <h1 className="mb-5 text-center text-3xl font-bold text-white sm:text-4xl lg:text-left">
                Find & book appointment with your favourite doctor
              </h1>

              <p className="mb-8 text-center text-base md:text-left">
                Streamline your appointments with our intuitive platform for booking
                our most trusted medical professionals.
              </p>

              {/* form for serching to be able to book a doctor for a session with him or her */}
              <Search />

              {/* download button for the application */}
              <div className="mt-8 text-center lg:text-left">
                <Link
                  href={"/download"}
                  className="inline-flex justify-center gap-4 rounded-full border border-blue-700 px-4 py-2.5 text-sm font-semibold text-blue-950 hover:bg-blue-700 hover:text-white"
                >
                  <span className="">Download app</span>
                  <span>
                    <DownloadCloud />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* image holder */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block h-64 overflow-hidden rounded-lg pt-11 sm:h-80 lg:order-last lg:h-full lg:py-5 lg:pr-9">
                <Image
                  src={"/doctor-patient.jpg"}
                  alt={"doctor-patient"}
                  width={900}
                  height={900}
                  className="max-w-full lg:ml-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
