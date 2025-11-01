/* eslint-disable @next/next/no-img-element */
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:py-24 bg-[url('https://other-planet.com/wp-content/uploads/2022/11/circle-bg-pink-purple-2024.svg')] bg-cover bg-bottom bg-no-repeat -mt-20">
        <div className="container mx-auto text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-wide mb-6 font-display max-w-3xl">
            About Us And How We Are Different From the Competition
          </h1>
          <p className="text-xl text-white max-w-2xl mt-4! font-semibold">
            Hi there! Great to meet you. Let’s get acquainted. We’re not all
            sunshine and rainbows – we’ve got some strong principles. Here’s
            what we’re about:
          </p>
        </div>
      </section>

      {/* Why Other Planet Section */}
      <section className="bg-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-6xl font-semibold text-[#afa0ff] mb-12!">
            Why &quot;Other Planet,&quot; anyway?
          </h2>
          <div className="space-y-6 text-black leading-relaxed font-semibold text-[22px] max-w-[980px]">
            <p className="mb-4!">
              We aspire to be different from other designers and photographers
              who work with small to medium-size brands. We’re on a mission
              against bad design. Many creators churn out poor work due to lack
              of knowledge, client pressure, or prioritizing speed over quality.
              The result? A world saturated with subpar design, and we’re
              committed to changing that.
            </p>
            <p>
              We envision another world where brands have enough self-respect to
              invest in good design. Don’t mistake us for dreamers, though.
              We’re firmly grounded in reality. The statistics speak for
              themselves: investing in good design pays off. Your products WILL
              sell better with quality visual representation. We invite you to
              invest in good design. If not (why not?) for better sales, then do
              it out of respect for your brand and your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 text-gray-900 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold mb-12! text-left">
            Other Planet in Numbers:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-left">
              <div className="text-5xl sm:text-6xl font-bold text-purple-600 mb-2">
                16
              </div>
              <p className="text-sm text-gray-600">Years in Business</p>
            </div>
            <div className="text-left">
              <div className="text-5xl sm:text-6xl font-bold text-purple-600 mb-2">
                12
              </div>
              <p className="text-sm text-gray-600">Team Members</p>
            </div>
            <div className="text-left">
              <div className="text-5xl sm:text-6xl font-bold text-purple-600 mb-2">
                29%
              </div>
              <p className="text-sm text-gray-600">Average Cost Reduction</p>
            </div>
            <div className="text-left">
              <div className="text-5xl sm:text-6xl font-bold text-purple-600 mb-2">
                22%
              </div>
              <p className="text-sm text-gray-600">Average QA Overhead</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-left">
              <div className="text-5xl sm:text-6xl font-bold text-purple-600 mb-2">
                1200+
              </div>
              <p className="text-sm text-gray-600">Total Projects</p>
            </div>
            <div className="text-left">
              <div className="text-5xl sm:text-6xl font-bold text-purple-600 mb-2">
                600+
              </div>
              <p className="text-sm text-gray-600">Clients in Countries</p>
            </div>
            <div className="text-left">
              <div className="text-5xl sm:text-6xl font-bold text-purple-600 mb-2">
                99.4%
              </div>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
            <div className="text-left">
              <div className="text-5xl sm:text-6xl font-bold text-purple-600 mb-2">
                65
              </div>
              <p className="text-sm text-gray-600">
                Avg. Employee Satisfaction Score
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 text-left mt-8!">
            *Based on client surveys, internal findings, interviews recorded and
            company publications with contact from other suppliers and other end
            users.
          </p>
        </div>
      </section>

      {/* Our Principles Section */}
      <section className="bg-black text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-16">
              {/* Principle 1 */}
              <div>
                <h3 className="text-4xl font-bold text-purple-400 mb-4">1</h3>
                <h4 className="text-2xl font-bold mb-4">
                  Taking full care of projects
                </h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We provide proper care to the entire project and develop best
                  possible results that increase conversions and deliver the
                  same to deliver on the promise for long. Agencies can set up
                  and provide a dedicated care facility design. Beyond the scope
                  and specifications we are keen on success and will help to
                  achieve your business.
                </p>
              </div>

              {/* Principle 2 */}
              <div>
                <h3 className="text-4xl font-bold text-purple-400 mb-4">2</h3>
                <h4 className="text-2xl font-bold mb-4">Defending our work</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  For any project, we provide a warranty period with we ensure
                  proper backing and will check if there are any possible
                  conflicts. We take it seriously and most often care, every
                  feedback needs to be met without.
                </p>
              </div>

              {/* Principle 3 */}
              <div>
                <h3 className="text-4xl font-bold text-purple-400 mb-4">3</h3>
                <h4 className="text-2xl font-bold mb-4">
                  Applying technologies and methodologies to organize the chaos
                </h4>
                <p className="text-gray-400 leading-relaxed mb-6!">
                  Chaos in projects is created by the disorganized teams and
                  therefore. Things like a huge portion of tasks could be
                  challenging. Therefore we break them down and plan each
                  project in step and work in a way that is simple and
                  understandable. Let&apos;s list the methodologies and
                  practices that are used in our day-to-day operations.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-bold mb-2">Agile</h5>
                    <p className="text-sm text-gray-500">
                      Using Agile and Agile-related methodologies for long term
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Lean</h5>
                    <p className="text-sm text-gray-500">
                      Focusing on different delivery modes and the clarity
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold mb-2">Six Sigma</h5>
                    <p className="text-sm text-gray-500">
                      Using Six Sigma techniques to improve the overall quality
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 4 */}
              <div>
                <h3 className="text-4xl font-bold text-purple-400 mb-4">4</h3>
                <h4 className="text-2xl font-bold mb-4">Evolving (Kaizen)</h4>
                <p className="text-gray-400 leading-relaxed">
                  A way of life that we celebrate every day. Based on Kaizen, it
                  means always looking for. A continuous improvement mindset.
                  Each and every day, we look at ourselves. Together we make
                  sure everyone on the team feels the same way. Our work evolves
                  every day. Getting better and learning something new every day
                  is the core focus of our company and its people. Each project
                  brings new challenges and opportunities for us to evolve.
                </p>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-full min-h-96">
                <img
                  src="https://other-planet.com/wp-content/uploads/Marcus_Aurelius_Principles.jpg"
                  alt="Greek statue"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Book a Free Consultation
            </h2>
            <p className="text-gray-400 mb-8">
              What you should do: if you are currently working on a new website
              or. Project that are very concerned with your design and the
              performance. Our consultant will help you think about your
              portfolio, start a new business or a website project and help you
              grow your current team building your business strategy like never
              before.
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-gray-900 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-900 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>
              <div>
                <textarea
                  placeholder="Please share anything else?"
                  rows={4}
                  className="w-full bg-gray-900 border border-white/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
                ></textarea>
              </div>
              <button className="bg-linear-to-r from-purple-500 to-purple-600 px-6 py-3 rounded font-medium hover:shadow-lg hover:shadow-purple-500/50 transition w-full sm:w-auto">
                Send
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Get in touch:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:hello@otherplanet.com"
                      className="text-white hover:text-purple-400 transition"
                    >
                      hello@otherplanet.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-white hover:text-purple-400 transition"
                    >
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">
                      123 Design Street, Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                What is U.S. beautiful assets made
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                available in the wonderful place with ease of use and support
                available 24/7, with round of our partners.
              </p>
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition text-sm font-medium"
              >
                Why subscribe to v0?
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
