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

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Naksh+Computers/@23.0280114,72.5673057,17z/data=!4m8!3m7!1s0x395e848a43dedb61:0xf6f23f4d61a9000b!8m2!3d23.0280065!4d72.5698806!9m1!1b1!16s%2Fg%2F1pwfxx1b6?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D";

export function TestimonialsSection() {
  return (
    <Section id="reviews" background="muted">
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
          <div className="relative mx-auto mb-20 max-w-4xl overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
            {/* Gradient background */}
            <div className="relative bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 px-8 py-14 text-white sm:px-14 sm:py-16">
              {/* Glass accents */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

              <div className="relative flex flex-col items-center text-center">
                {/* Google wordmark */}
                <div className="mb-6 flex items-center gap-2 rounded-2xl bg-white/95 px-6 py-3 shadow-lg backdrop-blur">
                  <span className="text-3xl font-black tracking-tight">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </div>

                <div className="flex gap-1.5 text-yellow-300">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-8 w-8 fill-current drop-shadow-sm" />
                  ))}
                </div>

                <h2 className="mt-6 text-7xl font-black tracking-tight sm:text-8xl">
                  5.0
                </h2>

                <p className="mt-3 text-lg font-medium text-white/90">
                  Based on 100+ Verified Google Reviews
                </p>

                <div className="mt-5 flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur">
                  <MapPin className="h-4 w-4" />
                  Ellisbridge, Ahmedabad
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-xl"
                >
                  View All Google Reviews
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Review Cards */}
        <div className="grid grid-cols-2 gap-5 sm:gap-8">
          {TESTIMONIALS.map((review, index) => (
            <AnimateOnScroll key={review.id} delay={index * 0.08}>
              <div className="group flex h-full min-h-[420px] flex-col justify-between rounded-[32px] border border-border bg-card p-6 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-2xl sm:min-h-[460px] sm:p-9">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-1 text-yellow-500">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
                      ))}
                    </div>

                    <span className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      <span className="text-[13px] font-black">
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                      </span>
                    </span>
                  </div>

                  <p className="text-[15px] leading-8 text-muted-foreground sm:text-base sm:leading-9">
                    “{review.quote}”
                  </p>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-sm sm:h-12 sm:w-12">
                      {getInitials(review.author)}
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate font-bold">{review.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {review.company}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-green-700 sm:text-xs">
                        Verified Google Review
                      </span>
                    </div>

                    <a
                      href={GOOGLE_MAPS_URL}
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
          <div className="mt-16 rounded-[32px] border border-border bg-card p-10 text-center shadow-lg sm:p-14">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6 flex justify-center gap-1.5 text-yellow-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>

              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted by Customers Across Ahmedabad
              </h3>

              <p className="mt-5 text-lg leading-8 text-muted-foreground">
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