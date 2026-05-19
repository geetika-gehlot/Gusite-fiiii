import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  ArrowUpRight, Atom, Cpu, Music2, Mic2, Code2, PenTool, Languages, Trophy,
  Camera, Wand2, Brain, Palette,
} from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { Bento, type BentoItem } from "@/components/Bento";
import { HeroSlideshow, type Slide } from "@/components/HeroSlideshow";
import { CLUSTERS } from "@/data/clusters";
import { useReveal } from "@/hooks/useReveal";
import textureCosmos from "@/assets/texture-cosmos.jpg";
import texturePaper from "@/assets/texture-paper.jpg";
import atmosTelescope from "@/assets/atmos-telescope.jpg";
import atmosNotebook from "@/assets/atmos-notebook.jpg";
import atmosMusic from "@/assets/atmos-music.jpg";

/* -------------------- HERO SLIDESHOW -------------------- */
const HERO_SLIDES: Slide[] = [
  {
    src: "/photo-singing.jpg",
    alt: "Geetika performing Hindustani classical vocal on stage",
    tone: "light",
    eyebrow: "Singing Artist: Hindustani Classical",
    title: "",
    body: "Stage performances & training with the guru-shishya tradition of Indian classical music.",
    objectPosition: "center 20%",
  },
  {
    src: "/photo-starparivar-set.jpg",
    alt: "Geetika on the Star Parivaar set with National Stars: Barun Sobti and Ridhi Dogra",
    tone: "light",
    eyebrow: "Child Artist · Star Plus · National Television",
    title: "",
    body: "On set with Barun Sobti and Ridhi Dogra, Iss Pyar Ko Kya Naam Doon.",
    objectPosition: "top center",
  },
  {
    src: "/photo-lab-team.jpg",
    alt: "Geetika with the McGill cancer cell research lab team",
    tone: "light",
    eyebrow: "Scientist · McGill Cancer Cell Lab · March 2025",
    title: "",
    body: "Gel electrophoresis, Zeiss microscopy, pipetting",
    objectPosition: "top center",
  },
  {
    src: "/photo-moon-stargazing.jpg",
    alt: "Rooftop night sky observation, stargazing and meteor tracking",
    tone: "light",
    eyebrow: "Self-Taught Junior Astronomer",
    title: "",
    body: "Constellations, Black Voids & Shooting Stars",
    objectPosition: "center center",
  },
  {
    src: "/photo-jun-ye-selfie.jpg",
    alt: "Geetika with quantum physicist Dr. Jun Ye at McGill",
    tone: "light",
    eyebrow: "Physicist · Jun Ye's Anna McPherson Seminar · McGill 2025",
    title: "",
    body: "Youngest attendee at a Nobel-adjacent physics lecturar's seminar.",
    objectPosition: "top center",
  },
  {
    src: "/photo-robotics-pit.jpg",
    alt: "FRC Team 7700, competition robotics pit work",
    tone: "light",
    eyebrow: "Engineer · FRC Team 7700",
    title: "",
    body: "Builds, mechanicals, and teamwork in competition robotics.",
    objectPosition: "top center",
  },
];

/* -------------------- SKILLS TOOLKIT -------------------- */
const SKILLS: { icon: React.ComponentType<{ className?: string }>; label: string; level: string }[] = [
  { icon: Atom,      label: "Physics",         level: "Self-taught + Contact with highly deemed Professors" },
  { icon: Brain,     label: "Olympiads",     level: "& AP exams" },

  { icon: Cpu,       label: "Robotics",        level: "FRC Team 7700" },
  { icon: Code2,     label: "Web + Code",      level: "React · TS · Python" },
  { icon: PenTool,   label: "Authoring",         level: "Ongoing fiction novel series" },
  { icon: Music2,    label: "Hindustani Vocal", level: "Stage performer" },
  { icon: Mic2,      label: "Voice Acting",    level: "Child-artist credits" },
  { icon: Camera,    label: "Multimedia",      level: "Edit · shoot · score" },
  { icon: Palette,   label: "Visual Art",      level: "Canvas, Henna, Rangoli, Embroidery" },
  { icon: Trophy,    label: "Strategy Games",  level: "Chess · badminton · TT" },
  { icon: Languages, label: "Languages",       level: "EN · HI · FR · MW" },
  { icon: Wand2,     label: "Screenwriting",     level: "Cinematic Screenwriting" },
];

/* -------------------- FEATURED HIGHLIGHTS BENTO -------------------- */
const FEATURED: BentoItem[] = [
  {
    id: "f-frc", size: "xl", eyebrow: "Robotics",
    title: "FRC Team 7700",
    blurb: "Build seasons, mechanical instinct, and the controlled chaos of competition robotics.",
    image: "/photo-robotics-pit.jpg", imagePosition: "top center", meta: "Cluster 04 · Robotics",
    detail: (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
          <img src="/photo-robotics-pit.jpg" alt="FRC 7700 Pit Work" style={{ width: "100%", borderRadius: "4px", objectFit: "cover", aspectRatio: "4/3" }} />
          <img src="/photo-robotics-hub.jpg" alt="FRC 7700 Workshop" style={{ width: "100%", borderRadius: "4px", objectFit: "cover", aspectRatio: "4/3" }} />
          <img src="/photo-wie-build.jpg" alt="WIE Build Challenge" style={{ width: "100%", borderRadius: "4px", objectFit: "cover", aspectRatio: "4/3" }} />
          <img src="/photo-singappenny.jpg" alt="Singappenny's 2025" style={{ width: "100%", borderRadius: "4px", objectFit: "cover", aspectRatio: "4/3" }} />
        </div>
        <p>From CAD reviews at midnight to driver-station nerves on game day, Team 7700 is where I learned to design under deadline, debug under pressure, and trust a team. Six weeks every season to design, fabricate, wire, and programme a full competition robot from a kit of parts. The build log runs deep.</p>
      </div>
    ),
  },
  {
    id: "f-novel", size: "lg", eyebrow: "Writing",
    title: "The Novel Cycle",
    blurb: "A multi-book story world I've been building for years.",
    image: "/photo-screenplay-board.jpg", imagePosition: "center", meta: "Cluster 05 · Writing",
    detail: (
      <div>
        <img src="/photo-screenplay-board.jpg" alt="Story structure board" style={{ width: "100%", borderRadius: "4px", marginBottom: "1rem", objectFit: "cover", aspectRatio: "16/9" }} />
        <p>Long-form fictional writing project: multiple interconnected narratives, structured worldbuilding, and a sustained multi-year writing output. Story structure boards map the full arc, three-act structure, character flaws, midpoint reversals, and thematic through-lines. Building since age twelve.</p>
      </div>
    ),
  },
  {
    id: "f-vocal", size: "md", eyebrow: "Performance",
    title: "Hindustani Vocal",
    blurb: "Stage repertoire, raagas, and live performance reels.",
    image: "/photo-singing.jpg", imagePosition: "center 20%", meta: "Cluster 06 · Music",
    detail: (
      <div>
        <img src="/photo-singing.jpg" alt="Stage performance" style={{ width: "100%", borderRadius: "4px", marginBottom: "1rem", objectFit: "cover", aspectRatio: "16/9" }} />
        <div style={{ display: "grid", gap: "0.75rem", marginBottom: "1rem" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe src="https://www.youtube.com/embed/DiAoqNQJzRU" title="Bharatnatyam Performance" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "4px", border: "none" }} allowFullScreen />
          </div>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe src="https://www.youtube.com/embed/5QBuTpvBKiw" title="Rajasthani Dance Performance" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "4px", border: "none" }} allowFullScreen />
          </div>
        </div>
        <p>Training and performance in Hindustani classical music under the guru-shishya tradition. Raga-based singing, rhythmic practice, and stage participation. Years of daily riyaaz. Also trained in Bharatnatyam and Rajasthani folk dance.</p>
      </div>
    ),
  },
  {
    id: "f-ap", size: "md", eyebrow: "Academics",
    title: "AP Track + Olympiads",
    blurb: "The transcript backing the curiosity.",
    image: "/photo-jun-ye-selfie.jpg", imagePosition: "top center", meta: "Cluster 02 · Academics",
    detail: (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
          <img src="/photo-jun-ye-selfie.jpg" alt="With Dr. Jun Ye at McGill" style={{ width: "100%", borderRadius: "4px", objectFit: "cover", aspectRatio: "4/3" }} />
          <img src="/photo-narayana-principal.jpg" alt="Narayana School highest batch" style={{ width: "100%", borderRadius: "4px", objectFit: "cover", aspectRatio: "4/3" }} />
          <img src="/photo-allen-physics.jpg" alt="Allen Institute physics notes" style={{ width: "100%", borderRadius: "4px", objectFit: "cover", aspectRatio: "4/3" }} />
          <img src="/photo-lab-microscope.jpg" alt="Cancer cell lab session" style={{ width: "100%", borderRadius: "4px", objectFit: "cover", aspectRatio: "4/3" }} />
        </div>
        <p>AP Biology, AP Environmental Science, AP Physics C: E&amp;M and Mechanics, AP Calculus AB, AP Chemistry, AP English Literature, AP Microeconomics, AP Macroeconomics, AP Psychology — all taken within two years. Zero fails. Plus competitive olympiad training and attendance at Nobel-adjacent physics lectures.</p>
      </div>
    ),
  },
  {
    id: "f-acting", size: "md", eyebrow: "Screen",
    title: "Child Artist Reel",
    blurb: "Years on screen, in front of a camera and a microphone.",
    image: "/tv-altbalaji.png", imagePosition: "top center", meta: "Cluster 07 · Acting",
    detail: (
      <div>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, marginBottom: "1rem" }}>
          <iframe src="https://www.youtube.com/embed/videoseries?list=PLa3Wj4jzB_6FG8GcJA41Lx2JGtABeQN5f" title="Child Artist Full Reel" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "4px", border: "none" }} allowFullScreen />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
          <img src="/tv-ddkisan.png" alt="DD Kisan Salaam India" style={{ width: "100%", borderRadius: "4px", objectFit: "cover" }} />
          <img src="/tv-zeeholi.png" alt="Zee TV Woh Apna Sa" style={{ width: "100%", borderRadius: "4px", objectFit: "cover" }} />
          <img src="/tv-altbalaji.png" alt="Alt Balaji Rhymes Series" style={{ width: "100%", borderRadius: "4px", objectFit: "cover" }} />
          <img src="/tv-asianpaints.png" alt="Asian Paints Eco Xpress" style={{ width: "100%", borderRadius: "4px", objectFit: "cover" }} />
        </div>
        <p>Zee TV · Star Parivaar · DD Kisan · Alt Balaji · 9XM · Asian Paints · Gladrags Little Miss India Top 7. Dubbing for Veere Di Wedding & Hindi Medium. Lead roles, supporting credits, voice work, and modelling across Indian national media.</p>
      </div>
    ),
  },
  {
    id: "f-zion", size: "md", eyebrow: "Tech",
    title: "Zionaxelle",
    blurb: "A multimedia universe I built from scratch.",
    image: "/photo-studio.jpg", imagePosition: "top center", meta: "Cluster 08 · Tech",
    detail: (
      <div>
        <img src="/photo-studio.jpg" alt="Studio and production setup" style={{ width: "100%", borderRadius: "4px", marginBottom: "1rem", objectFit: "cover", aspectRatio: "16/9" }} />
        <img src="/photo-dj-software.jpg" alt="DaVinci Resolve and production work" style={{ width: "100%", borderRadius: "4px", marginBottom: "1rem", objectFit: "cover", aspectRatio: "16/9" }} />
        <p>Multimedia creative brand project involving design, web presence, visual identity, content strategy, and production pipeline. Self-designed from the ground up as a coherent creative universe. FL Studio since 2020, DaVinci Resolve since 2020, full-stack web development. Visit: zionaxelle.com</p>
      </div>
    ),
  },
];

/* -------------------- RANDOM WINS / CURIOSITIES TEASER -------------------- */
const CURIOSITIES: BentoItem[] = [
  { id: "c-karate", size: "md", eyebrow: "Belt", title: "Karate", blurb: "Years on the mat, discipline that bleeds into everything else.", meta: "TODO · belt level + dojo" },
  { id: "c-abacus", size: "md", eyebrow: "Mental Math", title: "Abacus medals", blurb: "Lightning arithmetic from the elementary years.", meta: "TODO · grades + competitions" },
  { id: "c-chess", size: "sm", eyebrow: "Strategy", title: "Chess", blurb: "Tournament play and pattern obsession.", meta: "TODO · rating" },
  { id: "c-bad", size: "sm", eyebrow: "Court", title: "Badminton", blurb: "Smash, drop, repeat.", meta: "TODO" },
  { id: "c-tt", size: "sm", eyebrow: "Court", title: "Table Tennis", blurb: "Reflex over reach.", meta: "TODO" },
  { id: "c-misc", size: "wide", eyebrow: "Side quests", title: "And a few oddities I'm proud of", blurb: "Random certificates, half-wins, things that don't fit a category but absolutely shaped me.", meta: "Cluster 15 · Curiosities, full archive" },
];

const Index = () => {
  useReveal();

  return (
    <PageShell>
      {/* HERO, fullscreen navigable slideshow */}
      <HeroSlideshow slides={HERO_SLIDES} />

      {/* MANIFESTO, layered: paper bg + drifting notebook + telescope corner + crumpled-paper veil */}
      <section
        id="after-hero"
        className="relative py-16 md:py-24 scroll-mt-16 overflow-hidden crumpled-paper crinkle film-grain leak parchment fibers"
      >
        <img
          src={texturePaper}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply pointer-events-none animate-ken"
        />
        <img
          src={atmosNotebook}
          alt=""
          aria-hidden
          className="absolute -right-16 top-6 w-[44%] max-w-2xl h-[80%] object-cover opacity-20 grayscale pointer-events-none hidden md:block animate-float"
        />
        <img
          src={atmosTelescope}
          alt=""
          aria-hidden
          className="absolute -left-24 -bottom-10 w-[28%] max-w-md h-[55%] object-cover opacity-10 grayscale rotate-[-4deg] pointer-events-none hidden md:block animate-drift"
        />

        <div className="container relative">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-3" data-reveal>
              <p className="label-gold">00 · Hello</p>
              <p className="eyebrow mt-3">Scroll down</p>
              <div className="rule-gold mt-5 max-w-[60%]" />
            </div>
            <div className="md:col-span-9 max-w-3xl">
              <p
                className="font-display text-3xl md:text-5xl text-ink leading-[1.05] text-balance drop-cap"
                data-reveal
              >
              Born in India, raised through 
              several cities & countries, 
              Geetika has spent the last 17 years collecting 
              & attempting to answer questions, </p>
              <div className="rule-double my-8 max-w-xs" data-reveal data-reveal-delay="120" />
              <p
                className="font-accent text-xl md:text-2xl text-ink-soft leading-relaxed"
                data-reveal
                data-reveal-delay="200"
              >
              and in the process, lies a unique journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRAND GROUPS, index, layered music plate */}
      <section className="relative py-16 md:py-24 overflow-hidden film-grain dust crumpled-paper marble fibers">
        <img
          src={atmosMusic}
          alt=""
          aria-hidden
          className="absolute right-0 top-0 w-[40%] max-w-2xl h-[55%] object-cover opacity-20 grayscale pointer-events-none hidden md:block animate-float"
        />
        <img
          src={texturePaper}
          alt=""
          aria-hidden
          className="absolute -left-10 bottom-0 w-[30%] max-w-md h-[50%] object-cover opacity-15 mix-blend-multiply pointer-events-none hidden md:block"
        />
        <div className="container relative">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap" data-reveal>
            <div>
              <p className="label-gold mb-3">§ 04 · The Archive</p>
              <h2 className="display-xl text-3xl md:text-5xl text-ink">
                Five pages, <span className="font-accent text-gold">one dossier.</span>
              </h2>
              <p className="mt-4 max-w-xl text-ink-soft text-sm leading-relaxed font-accent italic">
                The five main pages: about, academics & research,
                the works, the documents, and contact.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              ["I", "About", "Me"],
              ["II", "Academics", "& Excellences"],
              ["III", "Works", "Projects & Extracurriculars"],
              ["IV", "CV", "Resume & Documents"],
              ["V", "Contact", "Get in Touch"],
            ].map(([n, t, d], idx) => (
              <div
                key={t}
                className="border-t border-gold/40 pt-4"
                data-reveal
                data-reveal-delay={String(idx * 100)}
              >
                <p className="font-mono text-xs text-gold tracking-widest">{n}</p>
                <h3 className="font-display text-2xl mt-2">{t}</h3>
                <p className="text-paper/70 text-base mt-3 leading-relaxed font-accent">{d}</p>
              </div>
            ))}
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border" data-reveal>
            {CLUSTERS.map((c) => {
              const CI = c.icon;
              return (
                <li key={c.slug} className="bg-paper">
                  <Link
                    to={`/${c.slug}`}
                    className="fancy-tile group/tile block p-6 h-full hover:bg-navy-deep hover:text-paper-contrast transition-all duration-500 relative overflow-hidden fibers stipple hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <CI className="w-5 h-5 text-gold" />
                      <span className="font-mono text-[0.65rem] tracking-widest text-gold">{c.num}</span>
                    </div>
                    <h4 className="font-display text-xl md:text-2xl leading-snug mb-2">{c.label}</h4>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-soft group-hover/tile:text-paper-contrast-soft mt-2">
                      {c.tagline}
                    </p>
                    <ArrowUpRight className="absolute right-4 bottom-4 w-4 h-4 text-ink-soft group-hover/tile:text-gold group-hover/tile:translate-x-1 group-hover/tile:-translate-y-1 transition-all duration-500" />
                    <span className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-700 group-hover/tile:w-full" />
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* SKILLS TOOLKIT, layered telescope + cosmos veil + scanlines */}
      <section className="relative py-14 md:py-20 overflow-hidden scanlines film-grain dust weave-soft stipple">
        <img
          src={atmosTelescope}
          alt=""
          aria-hidden
          className="absolute -left-24 top-10 w-[40%] max-w-xl h-[80%] object-cover opacity-25 grayscale pointer-events-none hidden md:block animate-float"
        />
        <img
          src={textureCosmos}
          alt=""
          aria-hidden
          className="absolute right-0 -bottom-10 w-[55%] h-[60%] object-cover opacity-10 pointer-events-none animate-drift"
        />
        <div className="container relative">
          <div className="flex items-end justify-between mb-8 gap-6 flex-wrap" data-reveal>
            <div>
              <p className="label-gold mb-3">§ 01 · Toolkit</p>
              <h2 className="display-xl text-3xl md:text-5xl text-ink">
                Few of the skills I bring <span className="font-accent text-gold">to the table.</span>
              </h2>
            </div>
            <p className="max-w-md text-ink-soft text-sm leading-relaxed">
                Not exhaustive; go to Pages: Works, Academics & CV for full list of Skills & Achievements
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
            {SKILLS.map(({ icon: I, label, level }, idx) => (
              <li
                key={label}
                data-reveal
                data-reveal-delay={String(idx * 40)}
                className="fancy-tile bg-paper p-5 group hover:bg-navy-deep hover:text-paper-contrast transition-all duration-500 relative overflow-hidden fibers stipple hover:-translate-y-1"
              >
                <I className="w-5 h-5 text-gold mb-4 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110" />
                <p className="font-display text-xl leading-tight">{label}</p>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-soft group-hover:text-paper-contrast-soft mt-2">
                  {level}
                </p>
                <span className="absolute right-3 top-3 font-mono text-[0.55rem] tracking-[0.25em] text-ink-soft/40 group-hover:text-gold transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED HIGHLIGHTS BENTO, cosmos bg + crumpled-paper field + drifting notebook */}
      <section className="relative py-14 md:py-20 overflow-hidden crumpled-paper film-grain leak marble fibers">
        <img
          src={textureCosmos}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none animate-ken"
        />
        <img
          src={atmosNotebook}
          alt=""
          aria-hidden
          className="absolute -left-10 bottom-0 w-[26%] max-w-sm h-[55%] object-cover opacity-10 grayscale rotate-[3deg] pointer-events-none hidden md:block animate-float"
        />
        <div className="container relative">
          <div className="flex items-end justify-between mb-8 gap-6 flex-wrap" data-reveal>
            <div>
              <p className="label-gold mb-3">§ 02 · Showcase</p>
              <h2 className="display-xl text-3xl md:text-5xl text-ink">
                Featured <span className="font-accent text-gold">work.</span>
              </h2>
            </div>
            <p className="max-w-md text-ink-soft text-sm leading-relaxed">
              Hover & Click for more!
            </p>
          </div>
          <div data-reveal>
            <Bento items={FEATURED} />
          </div>
        </div>
      </section>

      {/* TRIPTYCH, three layered plates */}
      <section className="container py-8 md:py-10">
        <div className="grid md:grid-cols-3 gap-2">
          {[
            { src: "/photo-gladrags-solo.jpg", label: "Observation", num: "I" },
            { src: "/photo-ymca-event.jpg", label: "Notation", num: "II" },
            { src: "/photo-karate.jpg", label: "Resonance", num: "III" },
          ].map((x, idx) => (
            <TriptychPlate key={x.label} {...x} idx={idx} />
          ))}
        </div>
      </section>

    </PageShell>
  );
};

function TriptychPlate({ src, label, num, idx }: { src: string; label: string; num: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <figure
        data-reveal
        data-reveal-delay={String(idx * 120)}
        onClick={() => setOpen(true)}
        className="relative aspect-[3/4] overflow-hidden group crumpled-paper film-grain stipple cursor-pointer"
      >
        <img
          src={src}
          alt={label}
          width={1600}
          height={1000}
          loading="lazy"
          style={{ objectPosition: "top center" }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent" />
        <div className="absolute inset-3 border border-paper/15 pointer-events-none" />
        <figcaption className="absolute bottom-6 left-6 right-6 text-paper">
          <span className="font-mono text-xs text-gold tracking-widest">PLATE {num}</span>
          <p className="font-display text-3xl md:text-4xl mt-1 leading-tight">{label}</p>
          <span className="block w-10 h-px bg-gold mt-3 transition-all duration-500 group-hover:w-20" />
        </figcaption>
      </figure>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden bg-navy-deep">
          <DialogTitle className="sr-only">PLATE {num} · {label}</DialogTitle>
          <img
            src={src}
            alt={label}
            style={{ objectPosition: "top center" }}
            className="w-full object-cover max-h-[75vh]"
          />
          <div className="p-5 border-t border-gold/20">
            <p className="font-mono text-xs text-gold tracking-widest mb-1">PLATE {num}</p>
            <p className="font-display text-xl text-paper-contrast">{label}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Index;
