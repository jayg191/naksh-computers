import {
  ExternalLink,
  MapPin,
  Star,
} from "lucide-react";

import {
  AnimateOnScroll,
  Container,
  Section,
  SectionHeader,
} from "@/components/common";

import { TESTIMONIALS } from "@/data";
import { getInitials } from "@/utils";

export function TestimonialsSection() {
  return (
    <Section
      id="reviews"
      background="muted"
    >
      <Container>

        <AnimateOnScroll>

          <SectionHeader
            label="Google Reviews"
            title="Rated Highly by Our Customers"
            description="Real customer experiences from our Google Business Profile in Ahmedabad."
          />

        </AnimateOnScroll>

        {/* Rating Card */}

        <AnimateOnScroll>

          <div className="mx-auto mb-16 max-w-4xl overflow-hidden rounded-[32px] border border-border bg-card shadow-xl">

            <div className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 px-10 py-12 text-white">

              <div className="flex flex-col items-center">

                {/* Google */}

                <div className="mb-5 flex items-center gap-2">

                  <span className="text-4xl font-black">

                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>

                  </span>

                </div>

                <div className="flex gap-1 text-yellow-300">

                  {[1,2,3,4,5].map((i)=>(

                    <Star
                      key={i}
                      className="h-8 w-8 fill-current"
                    />

                  ))}

                </div>

                <h2 className="mt-5 text-6xl font-black">

                  4.9

                </h2>

                <p className="mt-2 text-lg text-blue-100">

                  Based on 100+ Verified Reviews

                </p>

                <div className="mt-5 flex items-center gap-2 text-sm">

                  <MapPin className="h-4 w-4"/>

                  Ellisbridge, Ahmedabad

                </div>

                
                  href="https://www.google.com/maps/place/Naksh+Computers/@23.0280114,72.5673057,17z/data=!4m8!3m7!1s0x395e848a43dedb61:0xf6f23f4d61a9000b!8m2!3d23.0280065!4d72.5698806!9m1!1b1!16s%2Fg%2F1pwfxx1b6?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
                >

                  View All Google Reviews

                  <ExternalLink className="h-5 w-5"/>

                </a>

              </div>

            </div>

          </div>

        </AnimateOnScroll>

        {/* Review Cards */}

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:snap-none sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">

          {TESTIMONIALS.map((review,index)=>(

            <AnimateOnScroll
              key={review.id}
              delay={index*0.1}
              className="w-[85vw] min-w-[300px] max-w-[340px] shrink-0 snap-center sm:w-auto sm:min-w-0 sm:max-w-none sm:shrink"
            >

              <div className="group flex h-full flex-col rounded-[28px] border border-border bg-card p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                <div className="mb-5 flex justify-between">

                  <div className="flex gap-1 text-yellow-500">

                    {[1,2,3,4,5].map((i)=>(

                      <Star
                        key={i}
                        className="h-5 w-5 fill-current"
                      />

                    ))}

                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

                    Google

                  </span>

                </div>

                <p className="flex-1 text-[15px] leading-8 text-muted-foreground">

                  "{review.quote}"

                </p>

                <div className="mt-8 border-t border-border pt-6">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 font-bold text-white">

                      {getInitials(review.author)}

                    </div>

                    <div>

                      <h4 className="font-bold">

                        {review.author}

                      </h4>

                      <p className="text-sm text-muted-foreground">

                        {review.company}

                      </p>

                    </div>

                  </div>
		                  <div className="mt-6 flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

                      <span className="text-xs font-semibold uppercase tracking-wide text-green-700">
                        Verified Google Review
                      </span>

                    </div>

                    
                      href="https://www.google.com/maps/place/Naksh+Computers/@23.0280065,72.5698806,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition hover:text-blue-700 hover:underline"
                    >
                      View on Google

                      <ExternalLink className="h-4 w-4" />
                    </a>

                  </div>

                </div>

              </div>

            </AnimateOnScroll>

          ))}

        </div>

        {/* Bottom CTA */}

        <AnimateOnScroll delay={0.3}>

          <div className="mt-16 rounded-[32px] border border-border bg-card p-10 text-center shadow-lg">

            <div className="mx-auto max-w-2xl">

              <div className="mb-5 flex justify-center gap-1 text-yellow-500">

                {[1,2,3,4,5].map((i)=>(
                  <Star
                    key={i}
                    className="h-6 w-6 fill-current"
                  />
                ))}

              </div>

              <h3 className="text-3xl font-bold">

                Trusted by Customers Across Ahmedabad

              </h3>

              <p className="mt-4 text-lg leading-8 text-muted-foreground">

                We are grateful for the trust our customers place in us for
                laptop sales, desktop computers, printer services, CCTV
                installation, networking solutions and computer repairs.

              </p>

              

            </div>

          </div>

        </AnimateOnScroll>

      </Container>

    </Section>
  );
}