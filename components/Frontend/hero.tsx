import Search from "@/components/Frontend/search";
import { DownloadCloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-background pt-8 dark:bg-background">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          {/* intro text */}
          <div className="w-full pl-4 lg:w-5/12">
            <div className="">
              <h1 className="mb-5 text-center text-4xl font-bold !leading-[1.208] text-blue-800 dark:text-white sm:text-[42px] lg:text-left lg:text-[40px] xl:text-5xl">
                Find a doctor
                <br />
                and
                <br />
                book your session now
              </h1>

              <p className="mb-8 max-w-[480px] text-base">
                Streamline your appointments with our intuitive platform for
                booking our most trusted medical professionals.
              </p>

              {/* form for serching to be able to book a doctor for a session with him or her */}
              <Search />

              {/* download button for the application */}
              <div className="mt-8 text-center lg:text-left">
                <Link
                  href={""}
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
          <div className="hidden w-full px-4 lg:block lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <Image
                  src={"/doctor-patient.jpg"}
                  alt={"doctor-patient"}
                  width={900}
                  height={900}
                  className="max-w-full lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
