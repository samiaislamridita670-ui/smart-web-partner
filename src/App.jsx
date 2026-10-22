import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Globe,
  Heart,
  Laptop,
  Mail,
  Menu,
  MonitorSmartphone,
  Palette,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import { FaFacebookF, FaGithub, FaWhatsapp } from "react-icons/fa";

const PHONE = "8801879337331";

const whatsappLink = (message = "Hello! I want to build a website.") =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "EduSpark",
    category: "Online Learning Platform",
    description:
      "An upcoming educational platform designed to make online learning simple, engaging and accessible.",
    tags: ["Education", "React", "Coming Soon"],
    icon: Laptop,
    gradient: "from-blue-500/30 via-purple-500/10 to-cyan-500/20",
    live: null,
  },
  {
    title: "Bazar Dor",
    category: "Market Price Platform",
    description:
      "A web platform for exploring everyday market prices and essential products.",
    tags: ["Web App", "Market Prices"],
    icon: Globe,
    gradient: "from-emerald-500/30 via-teal-500/10 to-green-500/20",
    live: "https://bazar-dorridita.netlify.app",
  },
  {
    title: "FitLog",
    category: "Fitness Web Application",
    description:
      "A fitness web application for discovering exercises and organizing workout plans.",
    tags: ["React", "Fitness", "Web App"],
    icon: Zap,
    gradient: "from-orange-500/30 via-rose-500/10 to-red-500/20",
    live: "https://fitlog-samia.netlify.app",
  },
  {
    title: "RokthoBindu",
    category: "Blood Donation Platform",
    description:
      "A blood donation platform designed to connect donors with people who need blood.",
    tags: ["React", "Social Impact"],
    icon: Heart,
    gradient: "from-red-500/30 via-pink-500/10 to-rose-500/20",
    live: "https://rokthobindo.netlify.app",
  },
  {
    title: "Bangla News 24",
    category: "News Website",
    description:
      "A modern news website concept with a clean and readable interface.",
    tags: ["News", "Responsive UI"],
    icon: Globe,
    gradient: "from-purple-500/30 via-violet-500/10 to-indigo-500/20",
    live: null,
  },
  {
    title: "DevStack",
    category: "Developer Tools Platform",
    description:
      "A developer-focused web project with a modern and user-friendly interface.",
    tags: ["Development", "Web App"],
    icon: Code2,
    gradient: "from-sky-500/30 via-blue-500/10 to-purple-500/20",
    live: "https://dev-stack-builder-final.netlify.app",
  },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="mb-4 inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
        {label}
      </span>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

function BrandLogo({ size = "normal" }) {
  const logoSize = size === "large" ? "h-14 w-14" : "h-12 w-12";

  return (
    <div
      className={`${logoSize} flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-blue-400/20 bg-[#10162c]`}
    >
      <img
        src="/logoA.png"
        alt="Smart Web Partner Logo"
        className="h-full w-full object-contain"
      />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#080b18] text-white">
      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080b18]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <BrandLogo />

            <div>
              <p className="text-lg font-extrabold">
                Smart Web <span className="text-blue-400">Partner</span>
              </p>
              <p className="text-[10px] tracking-widest text-slate-400">
                YOUR DIGITAL PARTNER
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold lg:flex"
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="rounded-lg border border-white/10 p-2 lg:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0d1226] px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-slate-200 hover:text-blue-400"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="mx-auto grid min-h-screen max-w-7xl scroll-mt-24 items-center gap-14 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-2"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
              <Sparkles size={15} />
              Creative Web Design & Development
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Your Vision,
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Our Digital
                <br />
                Creation!
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              We create modern, responsive and professional websites
              that bring your ideas to life and help your business grow online.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsappLink("Hello! I want to order a website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-semibold transition hover:-translate-y-1"
              >
                Start Your Project <ArrowRight size={18} />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                View Our Work <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <Check size={17} className="text-cyan-400" />
                Responsive Design
              </span>

              <span className="flex items-center gap-2">
                <Check size={17} className="text-cyan-400" />
                Modern Technology
              </span>

              <span className="flex items-center gap-2">
                <Check size={17} className="text-cyan-400" />
                Affordable Pricing
              </span>
            </div>
          </div>

          {/* Hero Cover Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#10162c] p-3 shadow-2xl shadow-blue-900/20">
              <img
                src="/cover.png"
                alt="Smart Web Partner - Your Vision, Our Digital Creation!"
                className="h-auto w-full rounded-2xl object-contain"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#141c36] px-5 py-4 shadow-xl sm:flex">
              <ShieldCheck size={24} className="text-green-400" />

              <div>
                <p className="text-sm font-bold">Professional Websites</p>
                <p className="text-xs text-slate-400">
                  Designed for your digital success
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-3 sm:px-8">
            {[
              {
                icon: MonitorSmartphone,
                title: "100% Responsive",
                text: "Optimized for all devices",
              },
              {
                icon: Zap,
                title: "Modern Design",
                text: "Clean and attractive layouts",
              },
              {
                icon: ShieldCheck,
                title: "Personal Support",
                text: "Direct project communication",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/15 via-[#10162c] to-purple-500/15 p-8 sm:p-12">
            <div className="mb-7">
              <BrandLogo size="large" />
            </div>

            <h3 className="text-3xl font-extrabold">Smart Web Partner</h3>

            <p className="mt-3 text-blue-300">
              Your Vision, Our Digital Creation!
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Globe className="mb-4 text-blue-400" size={28} />
                <p className="font-semibold">Creative Solutions</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Code2 className="mb-4 text-purple-400" size={28} />
                <p className="font-semibold">Modern Technology</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              About Us
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Bringing Your Ideas to Life Through{" "}
              <span className="text-blue-400">Creative Websites</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Smart Web Partner is a web design and development brand
              founded by Samia Islam Ridita.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              Our goal is to make professional websites accessible
              to individuals, educators and growing businesses.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-400"
            >
              Work With Us <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-24 bg-[#0c1021] px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Our Services"
              title="Digital Solutions for Your Ideas"
              description="From personal portfolios to business websites, we help you build a professional online presence."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group rounded-2xl border border-white/10 bg-[#11182e] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
                  >
                    <div className="mb-7 inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-300">
                      <Icon size={29} />
                    </div>

                    <h3 className="text-xl font-bold">{service.title}</h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {service.description}
                    </p>

                    <a
                      href={whatsappLink(
                        `Hello! I am interested in ${service.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-400"
                    >
                      Learn More <ArrowUpRight size={16} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8"
        >
          <SectionHeading
            label="Our Portfolio"
            title="Explore Our Creative Work"
            description="A selection of website and web application projects."
          />

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#11172b] transition duration-300 hover:-translate-y-2 hover:border-blue-400/40"
                >
                  <div
                    className={`flex h-56 flex-col items-center justify-center bg-gradient-to-br ${project.gradient}`}
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                      <Icon size={40} className="text-white" />
                    </div>

                    <p className="mt-5 text-lg font-extrabold">
                      {project.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-300">
                      {project.category}
                    </p>
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400"
                        >
                          Live Demo <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-500">
                          Demo coming soon
                        </span>
                      )}

                      <a
                        href="https://github.com/samiaislamridita670-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit GitHub profile"
                        className="rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:text-blue-400"
                      >
                        <FaGithub size={19} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/samiaislamridita670-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10"
            >
              Explore More on GitHub <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="scroll-mt-24 bg-[#0c1021] px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Our Pricing"
              title="Affordable Website Packages"
              description="Choose a starting package that matches your needs."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-3xl border p-7 ${
                    plan.popular
                      ? "border-blue-500/60 bg-gradient-to-b from-blue-500/15 to-[#11182e]"
                      : "border-white/10 bg-[#11182e]"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-xs font-bold">
                      POPULAR CHOICE
                    </span>
                  )}

                  <h3 className="text-xl font-bold">{plan.name}</h3>

                  <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-sm text-slate-400">
                      Starting at
                    </span>
                    <p className="mt-1 text-4xl font-extrabold">
                      ৳{plan.price}
                    </p>
                  </div>

                  <div className="my-7 h-px bg-white/10" />

                  <div className="flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <Check
                          size={17}
                          className="mt-0.5 shrink-0 text-cyan-400"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={whatsappLink(
                      `Hello! I want to order the ${plan.name} package (starting at BDT ${plan.price}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3.5 text-sm font-semibold transition hover:opacity-90"
                  >
                    Order Now <ArrowRight size={17} />
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-slate-500">
              Final pricing depends on project requirements. Domain,
              hosting and additional features may cost extra.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="Built With Care, Designed for You"
            description="We focus on creating websites that are attractive, practical and easy to use."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Palette,
                title: "Beautiful Design",
                description:
                  "Modern layouts, thoughtful colors and clean visual details.",
              },
              {
                icon: MonitorSmartphone,
                title: "Responsive Experience",
                description:
                  "A smooth browsing experience across mobile and desktop.",
              },
              {
                icon: ShieldCheck,
                title: "Direct Communication",
                description:
                  "Discuss your ideas and requirements directly before we begin.",
              },
            ].map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-[#11182e] p-8"
                >
                  <Icon size={30} className="text-blue-400" />

                  <h3 className="mt-6 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 px-5 py-24 sm:px-8"
        >
          <div className="mx-auto max-w-7xl rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-900/35 via-[#151d3b] to-purple-900/30 px-7 py-16 text-center sm:px-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-blue-200">
              <Sparkles size={16} />
              Let's Build Something Great
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold sm:text-5xl">
              Ready to Bring Your
              <span className="block text-cyan-300">
                Website Idea to Life?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
              Tell us about your project. We would love to discuss
              how to turn your idea into a professional website.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink(
                  "Hello Smart Web Partner! I would like to discuss a website project."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-semibold"
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </a>

              <a
                href="mailto:samiaislamridita670@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold"
              >
                <Mail size={19} />
                Send Email
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <a
                href="tel:+8801879337331"
                className="inline-flex items-center gap-2"
              >
                <Phone size={16} /> 01879337331
              </a>

              <a
                href="mailto:samiaislamridita670@gmail.com"
                className="inline-flex items-center gap-2"
              >
                <Mail size={16} />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#070a15] px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo />

              <h3 className="text-xl font-extrabold">
                Smart Web <span className="text-blue-400">Partner</span>
              </h3>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Your Vision, Our Digital Creation!
            </p>
          </div>

          <div>
            <h4 className="font-bold">Quick Links</h4>

            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-400 hover:text-blue-400"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold">Connect With Us</h4>

            <p className="mt-5 text-sm text-slate-400">
              Founder: Samia Islam Ridita
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/samia.islam.866950"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 hover:text-blue-400"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://github.com/samiaislamridita670-ui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 hover:text-blue-400"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 hover:text-green-400"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-7 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Smart Web Partner.
          All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30 transition hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}

export default App;