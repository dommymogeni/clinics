import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SiTicktick } from "react-icons/si";

export default function DocHero() {
  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="mx-auto flex w-full flex-wrap pb-6 pt-3">
        <div className="z-0 flex flex-col gap-6 border-card bg-primary/10 px-10 md:w-1/2 md:rounded-md md:py-10 md:pl-8 md:pr-20">
          <div className="text-left font-bold">
            <h1 className="scroll-m-20 text-[32px]/[40px] font-extrabold -tracking-wider">
              Build a thriving direct pay practice with domClinics
            </h1>
          </div>

          <div className="text-lg">
            Welcome to Medical App, where connecting with patients is made easier
            than ever before. Our platform streamlines the process of managing
            appointments, providing care remotely, and keeping track of patient
            records.
          </div>

          <div className="">
            <Link href={"/signup?role=DOCTOR"}>
              <Button size="lg" className="w-full md:w-80">
                List your practice
              </Button>
            </Link>
          </div>

          <div className="pb-10">
            <ul className="flex flex-col gap-2 text-balance text-[15px] font-medium -tracking-tighter">
              <li className="flex items-center gap-2">
                <SiTicktick className="h5 mr-2 w-5 flex-shrink-0 text-emerald-400" />
                Bringing patients to you
              </li>

              <li className="flex items-center gap-2">
                <SiTicktick className="h5 mr-2 w-5 flex-shrink-0 text-emerald-400" />
                Seamless e-prescribing experience
              </li>

              <li className="flex items-center gap-2">
                <SiTicktick className="h5 mr-2 w-5 flex-shrink-0 text-emerald-400" />
                Integrated clinical note-taking
              </li>

              <li className="flex items-center gap-2">
                <SiTicktick className="h5 mr-2 w-5 flex-shrink-0 text-emerald-400" />
                No fees for providers
              </li>
            </ul>
          </div>
        </div>

        <div className="z-10 -ml-10 flex flex-wrap items-center rounded-3xl md:w-1/2">
          <Image
            sizes="(max-width: 1536px) 100vw, 1536px"
            src={"/doc-index-img.webp"}
            alt={"doctor-patient"}
            width={1536}
            height={500}
            className="h-auto w-auto md:rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
