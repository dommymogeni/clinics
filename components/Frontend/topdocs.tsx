"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

// import Swiper core and required modules
import { MdLocationPin } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

export default function Topdocs() {
  return (
    <div className="lg:pt-15 pb-10">
      <section className="container grid grid-cols-12 lg:pb-5 lg:pt-5">
        <div className="col-span-12 2xl:col-span-10 2xl:col-start-2">
          <h2 className="pb-6 text-center text-2xl font-medium lg:text-3xl">
            Find a primary care doctor near you
          </h2>

          <p className="pb-8 text-center text-base font-medium">
            Choose the provider who&#39;s right for you and schedule your first
            appointment.
          </p>

          <div>
            {/* for atleast four doctors: should come */}
            <Swiper
              observer={true}
              observeParents={true}
              freeMode={true}
              centerInsufficientSlides={true}
              slidesPerView={1}
              breakpoints={{
                "@0.75": {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  centeredSlides: true,
                  centerInsufficientSlides: true,
                  freeMode: true,
                },
                "@1.00": {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  centeredSlides: true,
                  centerInsufficientSlides: true,
                  freeMode: true,
                },
                "@1.50": {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  centeredSlides: true,
                  centerInsufficientSlides: true,
                  freeMode: true,
                },
              }}
            >
              <SwiperSlide className="h-auto max-w-[271px] px-2 pb-2 pt-14">
                <Link href="/" className="block h-full">
                  <div className="hover:bg-gray-75 group flex h-full flex-col items-center gap-y-6 rounded bg-gray-50 px-4 pb-8 drop-shadow-md duration-200 hover:drop-shadow-lg">
                    <div className="flex flex-col gap-y-1">
                      <div className="group-hover:border-gray-75 mx-auto -mt-[50px] h-[100px] w-[100px] overflow-hidden rounded-full border-[6px] border-gray-50 object-cover duration-200">
                        <picture>
                          <img
                            data-component="ReactContentfulImage"
                            src="https://images.ctfassets.net/pxcfulgsd9e2/4Jv9CGupxNQaM6nRQESBi2/ade3d7cda0fc1c5de1207e3f4870c5f7/gurtch_tim_66789_2009.jpg?f=face&amp;fit=fill&amp;fl=progressive&amp;fm=jpg&amp;h=1396&amp;q=85&amp;w=1396"
                            className="duration-300 ease-in-out group-hover:scale-[1.03]"
                            alt="Provider_Image"
                          />
                        </picture>
                      </div>

                      <div className="flex text-center">
                        {/* doctor name, speciality */}
                        <h5 className="text-base font-semibold text-primary">
                          dominic mogeni, OBGYN
                        </h5>
                      </div>

                      <div className="flex justify-center">
                        {/* holds the rating stars of doctor */}
                        <div className="text-sm font-semibold">{""}</div>
                      </div>

                      <div className="flex justify-center text-sm">
                        <MdLocationPin className="h-5 w-5" />
                        Nairobi town
                      </div>
                    </div>

                    <div className="flex flex-col justify-start gap-1">
                      <h6 className="text-center text-sm font-semibold">
                        Appointments available:
                      </h6>
                      <div className="text-center text-sm">
                        in-person visits or virtual visits
                      </div>
                    </div>

                    <div className="inline-block">
                      <Button className="rounded-3xl bg-blue-600">
                        Book appointment
                      </Button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide className="h-auto max-w-[271px] px-2 pb-2 pt-14">
                <Link href="/BookApointment" className="block h-full">
                  <div className="hover:bg-gray-75 group flex h-full flex-col items-center gap-y-6 rounded bg-gray-50 px-4 pb-8 drop-shadow-md duration-200 hover:drop-shadow-lg">
                    <div className="flex flex-col gap-y-1">
                      <div className="group-hover:border-gray-75 mx-auto -mt-[50px] h-[100px] w-[100px] overflow-hidden rounded-full border-[6px] border-gray-50 object-cover duration-200">
                        <picture>
                          <img
                            data-component="ReactContentfulImage"
                            src="https://images.ctfassets.net/pxcfulgsd9e2/4Jv9CGupxNQaM6nRQESBi2/ade3d7cda0fc1c5de1207e3f4870c5f7/gurtch_tim_66789_2009.jpg?f=face&amp;fit=fill&amp;fl=progressive&amp;fm=jpg&amp;h=1396&amp;q=85&amp;w=1396"
                            className="duration-300 ease-in-out group-hover:scale-[1.03]"
                            alt="Provider_Image"
                          />
                        </picture>
                      </div>

                      <div className="flex text-center">
                        {/* doctor name, speciality */}
                        <h5 className="text-base font-semibold text-primary">
                          dominic mogeni, OBGYN
                        </h5>
                      </div>

                      <div className="flex justify-center">
                        {/* holds the rating stars of doctor */}
                        <div className="text-sm font-semibold">{""}</div>
                      </div>

                      <div className="flex justify-center text-sm">
                        <MdLocationPin className="h-5 w-5" />
                        Mombasa road
                      </div>
                    </div>

                    <div className="flex flex-col justify-start gap-1">
                      <h6 className="text-center text-sm font-semibold">
                        Appointments available:
                      </h6>

                      <div className="text-center text-sm">
                        in-person visits or virtual visits
                      </div>
                    </div>

                    <div className="inline-block">
                      <Button className="rounded-3xl bg-blue-600">
                        Book appointment
                      </Button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide className="h-auto max-w-[271px] px-2 pb-2 pt-14">
                <Link href="/" className="block h-full">
                  <div className="hover:bg-gray-75 group flex h-full flex-col items-center gap-y-6 rounded bg-gray-50 px-4 pb-8 drop-shadow-md duration-200 hover:drop-shadow-lg">
                    <div className="flex flex-col gap-y-1">
                      <div className="group-hover:border-gray-75 mx-auto -mt-[50px] h-[100px] w-[100px] overflow-hidden rounded-full border-[6px] border-gray-50 object-cover duration-200">
                        <picture>
                          <img
                            data-component="ReactContentfulImage"
                            src="https://images.ctfassets.net/pxcfulgsd9e2/4Jv9CGupxNQaM6nRQESBi2/ade3d7cda0fc1c5de1207e3f4870c5f7/gurtch_tim_66789_2009.jpg?f=face&amp;fit=fill&amp;fl=progressive&amp;fm=jpg&amp;h=1396&amp;q=85&amp;w=1396"
                            className="duration-300 ease-in-out group-hover:scale-[1.03]"
                            alt="Provider_image"
                          />
                        </picture>
                      </div>

                      <div className="flex text-center">
                        {/* doctor name, speciality */}
                        <h5 className="text-base font-semibold text-primary">
                          dominic mogeni, OBGYN
                        </h5>
                      </div>

                      <div className="flex justify-center">
                        {/* holds the rating stars of doctor */}
                        <div className="text-sm font-semibold">{""}</div>
                      </div>

                      <div className="flex justify-center text-sm">
                        <MdLocationPin className="h-5 w-5" />
                        Don hi
                      </div>
                    </div>

                    <div className="flex flex-col justify-start gap-1">
                      <h6 className="text-center text-sm font-semibold">
                        Appointments available:
                      </h6>
                      <div className="text-center text-sm">
                        in-person visits or virtual visits
                      </div>
                    </div>

                    <div className="inline-block">
                      <Button className="rounded-3xl bg-blue-600">
                        Book appointment
                      </Button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide className="h-auto max-w-[271px] px-2 pb-2 pt-14">
                <Link href="/" className="block h-full">
                  <div className="hover:bg-gray-75 group flex h-full flex-col items-center gap-y-6 rounded bg-gray-50 px-4 pb-8 drop-shadow-md duration-200 hover:drop-shadow-lg">
                    <div className="flex flex-col gap-y-1">
                      <div className="group-hover:border-gray-75 mx-auto -mt-[50px] h-[100px] w-[100px] overflow-hidden rounded-full border-[6px] border-gray-50 object-cover duration-200">
                        <picture>
                          <img
                            data-component="ReactContentfulImage"
                            src="https://images.ctfassets.net/pxcfulgsd9e2/4Jv9CGupxNQaM6nRQESBi2/ade3d7cda0fc1c5de1207e3f4870c5f7/gurtch_tim_66789_2009.jpg?f=face&amp;fit=fill&amp;fl=progressive&amp;fm=jpg&amp;h=1396&amp;q=85&amp;w=1396"
                            className="duration-300 ease-in-out group-hover:scale-[1.03]"
                            alt="Provider_Image"
                          />
                        </picture>
                      </div>

                      <div className="flex text-center">
                        {/* doctor name, speciality */}
                        <h5 className="text-base font-semibold text-primary">
                          dominic mogeni, OBGYN
                        </h5>
                      </div>

                      <div className="flex justify-center">
                        {/* holds the rating stars of doctor */}
                        <div className="flex flex-row items-center gap-x-1.5">
                          <div className="text-sm font-semibold" />
                        </div>
                      </div>

                      <div className="flex justify-center text-sm">
                        <MdLocationPin className="h-5 w-5" />
                        Don hi
                      </div>
                    </div>

                    <div className="flex flex-col justify-start gap-1">
                      <h6 className="text-center text-sm font-semibold">
                        Appointments available:
                      </h6>
                      <div className="text-center text-sm">
                        in-person visits or virtual visits
                      </div>
                    </div>

                    <div className="inline-block">
                      <Button className="rounded-3xl bg-blue-600">
                        Book appointment
                      </Button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex items-center justify-center pt-8">
            <Button variant="ghost">
              <Link
                href={"/doctors"}
                className="relative z-[1] box-border flex h-[3.75rem] w-full min-w-[3.75rem] cursor-pointer select-none appearance-none items-center justify-center gap-2 px-6 font-sans font-semibold text-white outline-none transition-colors before:absolute before:inset-0 before:z-[-1] before:rounded-full before:bg-blue-950 before:outline-2 before:outline-offset-2 before:outline-primary before:transition before:duration-200 before:ease-in-out before:hover:scale-x-[1.015] before:hover:scale-y-[1.035] before:hover:bg-blue-950 before:hover:drop-shadow before:focus-visible:outline md:w-[310px]"
              >
                Load more doctors
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
