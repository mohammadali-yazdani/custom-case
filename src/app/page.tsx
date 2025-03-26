import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { Icons } from "@/components/Icons";
import { Check, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pt-24 lg:pb-52 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-start">
              <div className="absolute start-0 -top-20 hidden w-28 lg:block">
                <img src="/snake-1.png" className="w-full" />
              </div>
              <h1 className="relative mt-16 w-fit text-5xl leading-tight font-bold tracking-tight text-balance text-gray-900 md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-lime-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 max-w-prose text-center text-lg text-balance md:text-wrap lg:pe-10 lg:text-start">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CustomCase allows you to protext your memories, not just your
                phone case.
              </p>

              <ul className="mt-8 flex flex-col items-center space-y-2 text-start font-medium sm:items-start">
                <li className="flex items-center gap-1.5 text-start">
                  <Check className="size-5 shrink-0 text-lime-600" />
                  High-quality, durable material
                </li>
                <li className="flex items-center gap-1.5 text-start">
                  <Check className="size-5 shrink-0 text-lime-600" />5 years
                  print guarantee
                </li>
                <li className="flex items-center gap-1.5 text-start">
                  <Check className="size-5 shrink-0 text-lime-600" />
                  Modern iPhone models supported
                </li>
              </ul>

              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    className="objcov inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="objcov inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="objcov inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <img
                    className="objcov inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="objcov inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>

                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="size-4 fill-lime-600 text-lime-600" />
                    <Star className="size-4 fill-lime-600 text-lime-600" />
                    <Star className="size-4 fill-lime-600 text-lime-600" />
                    <Star className="size-4 fill-lime-600 text-lime-600" />
                    <Star className="size-4 fill-lime-600 text-lime-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img
                className="absolute start-56 -top-20 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
                src="/your-image.png"
                alt=""
              />
              <img
                className="absolute -start-6 -bottom-6 w-20 select-none"
                src="/line.png"
                alt=""
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-5xl font-bold tracking-tight text-gray-950 md:text-6xl">
              What our{" "}
              <span className="relative px-2">
                customers
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-lime-500 sm:block" />
              </span>{" "}
              say
            </h2>

            <img
              src="/snake-2.png"
              className="order-0 w-24 lg:order-2"
              alt=""
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* user review */}
            <div className="flex flex-auto flex-col gap-4 lg:ps-8 xl:ps-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="size-5 fill-lime-600 text-lime-600" />
                <Star className="size-5 fill-lime-600 text-lime-600" />
                <Star className="size-5 fill-lime-600 text-lime-600" />
                <Star className="size-5 fill-lime-600 text-lime-600" />
                <Star className="size-5 fill-lime-600 text-lime-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it."
                </p>
              </div>

              <div className="mt-2 flex gap-4">
                <img
                  className="size-12 rounded-full object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="size-4 stroke-3 text-lime-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* user review */}
            <div className="flex flex-auto flex-col gap-4 lg:ps-8 xl:ps-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="size-5 fill-lime-600 text-lime-600" />
                <Star className="size-5 fill-lime-600 text-lime-600" />
                <Star className="size-5 fill-lime-600 text-lime-600" />
                <Star className="size-5 fill-lime-600 text-lime-600" />
                <Star className="size-5 fill-lime-600 text-lime-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "Not gonna lie, this case feels super sturdy, and I’ve already
                  gotten a few compliments on the design. It’s been almost three
                  months now, and{" "}
                  <span className="bg-slate-800 p-0.5 text-white">
                    the print quality is still flawless
                  </span>
                  . My last case? The image started peeling and turned yellow
                  after just a few weeks. This one’s a total game-changer.
                  Absolutely love it!"
                </p>
              </div>

              <div className="mt-2 flex gap-4">
                <img
                  className="size-12 rounded-full object-cover"
                  src="/users/user-4.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Morad</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="size-4 stroke-3 text-lime-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>
    </div>
  );
}
