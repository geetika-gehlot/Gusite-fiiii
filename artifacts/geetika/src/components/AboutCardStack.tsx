import { useEffect, useRef, useState } from "react";
import type { TopicData } from "@/data/clusters";
import achCasual from "@assets/unnamed_1779118514805.jpg";
import achAbacus from "@assets/unnamed_1779118522303.jpg";
import achCrown from "@assets/unnamed_1779118490987.jpg";
import achSinging from "@assets/unnamed_1779118497700.jpg";

function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * clamp(t, 0, 1); }
function easeOut(t: number) { return 1 - Math.pow(1 - clamp(t, 0, 1), 3); }

const EXPAND_END = 0.12;
const ESSAY_END = 0.88;

// ---------------------------------------------------------------------------
// Essay helpers (used inside the scroll-driven profile section)
// ---------------------------------------------------------------------------

function EssayPhoto({ src, alt, caption, align = "right" }: { src: string; alt: string; caption: string; align?: "left" | "right" | "full" }) {
  if (align === "full") return (
    <figure className="my-8 w-full clear-both">
      <div className="relative w-full overflow-hidden border border-white/10" style={{ aspectRatio: "21/8" }}>
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>
      <figcaption className="mt-2 text-center font-mono uppercase tracking-[0.2em] text-white/30" style={{ fontSize: "8px" }}>{caption}</figcaption>
    </figure>
  );
  return (
    <figure className={`my-0 mb-4 ${align === "right" ? "float-right ml-6" : "float-left mr-6"} w-28 md:w-40`}>
      <div className="relative overflow-hidden border border-white/10" style={{ aspectRatio: "4/5" }}>
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
      <figcaption className="mt-1.5 font-mono uppercase tracking-[0.2em] text-white/28" style={{ fontSize: "7px" }}>{caption}</figcaption>
    </figure>
  );
}

const ESSAY_H3 = { fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(13px,1.1vw,15px)", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "hsl(43 70% 58%)", marginBottom: "1rem", opacity: 0.85 };
const ESSAY_P = { fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(15px,1.25vw,17px)", lineHeight: 1.82, color: "hsl(220 15% 78%)", marginBottom: "1rem" };

function Essay() {
  return (
    <article style={{ maxWidth: "640px", margin: "0 auto" }}>

      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>I. Profile</h3>
        <EssayPhoto src={achCasual} alt="Geetika Gehlot, Montréal 2024" caption="Montréal, 2024" align="right" />
        <p style={ESSAY_P}>
          <span style={{ float: "left", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(3.2rem,5vw,4.2rem)", lineHeight: 0.78, fontWeight: 700, color: "hsl(43 78% 62%)", marginRight: "0.18em", marginTop: "0.08em" }}>M</span>
          ultidisciplinary student with advanced knowledge in physics, mathematics, biology, computer science, engineering, music, media production, and storytelling. Born in Rajasthan, India; relocated to Montréal, Canada in October 2024.
        </p>
        <p style={ESSAY_P}>
          Experience across robotics, competitive academics, scientific research, performing arts, television, music production, leadership, mentoring, and multimedia creation across India and Canada. Known for combining technical depth with large-scale creative execution across scientific, artistic, and entrepreneurial domains.
        </p>
        <p style={ESSAY_P}>
          Languages: English, French, Hindi, and Marwari, the oral dialect of Rajasthan carried in the throat rather than on any page. Each language organises the world differently; living among them made every framework feel like a choice, not a fact.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>II. Education</h3>
        <EssayPhoto src={achAbacus} alt="Academic achievements and medals" caption="Mental math, always" align="left" />
        <p style={ESSAY_P}>
          Westmount High School, Montréal — Secondary V, expected 2026. Strong performance in mathematics, sciences, and humanities. Member of jazz ensemble. YMCA Youth Co-op leadership.
        </p>
        <p style={ESSAY_P}>
          Narayana Co Kaveri School — Advanced secondary program. One of India's most rigorous academic streams. Intensive STEM-focused preparation; university-level coursework in physics, chemistry, mathematics, and biology at age thirteen.
        </p>
        <p style={ESSAY_P}>
          Allen Career Institute, Top-most Batch — elite preparation for competitive STEM examinations. Advanced exposure to Olympiad-level mathematics and engineering problem-solving.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>III. Academic Achievements</h3>
        <EssayPhoto src={achCrown} alt="Recognition and awards portrait" caption="Observing, always" align="right" />
        <p style={ESSAY_P}>
          AP Chemistry, AP Biology, AP Environmental Science, and AP Physics C: Mechanics and E&M during Grade 10, first year in Canada. Preparation for SAT, AP Calculus BC, IIT JEE Mains and Advanced, NEET, Physics and Mathematics Olympiads.
        </p>
        <p style={ESSAY_P}>
          100 in History and Mathematics, 97 in Science on EMSB ministry examinations. Winner of TCS ION IntelliGem national competition twice. Competed in SOF Olympiads, IOQM, JSO, and RMO with high rankings across all.
        </p>
        <p style={ESSAY_P}>
          Youngest attendee at Jun Ye's Anna McPherson physics seminar at McGill, 2025. Participated in hands-on cancer cell lab work including pipetting and gel electrophoresis. Self-study in university-level physics, chemistry, and mathematics from age ten. Advanced independent study in quantum mechanics, relativity, supersymmetry, astrophysics, and particle physics. School President and Female Class Valedictorian in Grades 3 and 5.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>IV. Engineering, Technical &amp; Creative Work</h3>
        <p style={ESSAY_P}>
          FRC Team 7700 — FIRST Robotics Competition, Montréal. Robotics engineering, fabrication, CAD design in Onshape and SolidWorks, systems thinking, and competition preparation across full build and competition seasons.
        </p>
        <p style={ESSAY_P}>
          React, TypeScript, Python, FL Studio since 2020, DaVinci Resolve since 2020. Creator of Endless Portals: a long-form fantasy and science-fiction universe with over forty drafted chapters across interconnected storylines, built since age twelve.
        </p>
        <p style={ESSAY_P}>
          Lead role in Salaam India on DD Kisan; Woh Apna Sa on Zee TV; Star Parivaar productions; lead performer in ALTBalaji rhymes series. Voice work for Veere Di Wedding and Hindi Medium. Freelance design and event hosting since early teens, paid and delivered.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h3 style={ESSAY_H3}>V. Music, Media &amp; Performing Arts</h3>
        <EssayPhoto src={achSinging} alt="Singing performance on stage" caption="Daily riyaaz, discipline as practice" align="left" />
        <p style={ESSAY_P}>
          Hindustani classical singing under the guru-shishya tradition. Stage performance experience and advanced vocal technique development. Electric guitar and piano. Participated in jazz concerts at Westmount High School.
        </p>
        <p style={ESSAY_P}>
          Bharatnatyam, Rajasthani folk dance, freestyle dance, gymnastics, hula hoop, and aerobics. FL Studio composition, sound design, and DJ mixing since 2020. Band-it Festival 2019: Level 2 participant, Furtado's School of Music. Sarees Bazaar UK international modelling. Top finalist in Gladrags Little Miss India.
        </p>
      </section>

      <section style={{ marginBottom: "0" }}>
        <h3 style={ESSAY_H3}>VI. Leadership, Awards &amp; Beyond</h3>
        <p style={ESSAY_P}>
          YMCA Youth Co-op: President, NDG-Westmount, 2025. Led youth cooperative team in Montréal through finance, marketing, human resources, and organizational development. Westmount Library Studio Volunteer, 2025: mentored children in coding and digital creativity.
        </p>
        <p style={ESSAY_P}>
          Hundreds of school-level and academic awards across multiple disciplines. CPR and First Aid Certified. Sports: badminton, table tennis, chess, karate. Research interests: high-energy physics, quantum mechanics, particle physics, astrophysics, supersymmetry, engineering systems.
        </p>
        <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(14px,1.1vw,16px)", lineHeight: 1.82, fontStyle: "italic", color: "hsl(43 60% 55%)", borderLeft: "2px solid hsl(43 60% 55% / 0.35)", paddingLeft: "1.25rem", marginBottom: "3rem" }}>
          A life built on curiosity across every domain: science, engineering, music, story, screen, and beyond. Every discipline is a tool. The work is always, in some sense, not yet finished.
        </p>
      </section>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Main export, scroll-driven profile section only
// ---------------------------------------------------------------------------

export function AboutCardStack({ topics: _topics }: { topics: TopicData[] }) {
  const shellRef = useRef<HTMLDivElement>(null);
  const essayContainerRef = useRef<HTMLDivElement>(null);
  const essayContentRef = useRef<HTMLDivElement>(null);
  const [maxEssayScroll, setMaxEssayScroll] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  const [vh, setVh] = useState(typeof window !== "undefined" ? window.innerHeight : 900);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    const onResize = () => { setVw(window.innerWidth); setVh(window.innerHeight); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const totalScroll = shellRef.current ? Math.max(1, shellRef.current.offsetHeight - vh) : 1;
  const t = clamp(scrollY / totalScroll, 0, 1);

  const expandT = easeOut(clamp(t / EXPAND_END, 0, 1));

  const START_W = Math.min(440, vw * 0.88);
  const START_H = Math.min(300, vh * 0.45);

  const cardW = lerp(START_W, vw, expandT);
  const cardH = lerp(START_H, vh, expandT);
  const cardLeft = lerp((vw - START_W) / 2, 0, expandT);
  const cardTop = lerp((vh - START_H) / 2, 0, expandT);
  const cardRadius = lerp(20, 0, expandT);
  const cardPad = lerp(20, 32, expandT);

  const contentVisible = expandT > 0.7;
  const contentOpacity = easeOut(clamp((expandT - 0.7) / 0.3, 0, 1));

  useEffect(() => {
    const measure = () => {
      if (essayContainerRef.current && essayContentRef.current) {
        const containerH = essayContainerRef.current.offsetHeight;
        const contentH = essayContentRef.current.scrollHeight;
        setMaxEssayScroll(Math.max(0, contentH - containerH));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (essayContainerRef.current) ro.observe(essayContainerRef.current);
    if (essayContentRef.current) ro.observe(essayContentRef.current);
    return () => ro.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentVisible, cardPad]);

  const initialLabelOpacity = easeOut(clamp((expandT < 0.5 ? expandT / 0.35 : 1 - (expandT - 0.35) / 0.3), 0, 1));

  const essayPhaseT = clamp((t - EXPAND_END) / Math.max(0.001, ESSAY_END - EXPAND_END), 0, 1);

  const headerOpacity = clamp(1 - (expandT * 3), 0, 1);

  return (
    <>
      {/* Scroll-driven profile card section */}
      <section ref={shellRef} className="relative w-full" style={{ height: "350vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden" style={{ background: "hsl(220 30% 5%)" }}>

          {expandT < 0.95 && (
            <div
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                padding: "5rem 2rem 0",
                zIndex: 0,
                opacity: headerOpacity,
                pointerEvents: "none",
              }}
            >
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(13px,1vw,15px)", fontStyle: "italic", color: "hsl(220 15% 45%)", textAlign: "center" }}>
                Scroll to read the essay ↓
              </p>
            </div>
          )}

          <div
            style={{
              position: "absolute",
              left: `${cardLeft}px`,
              top: `${cardTop}px`,
              width: `${cardW}px`,
              height: `${cardH}px`,
              borderRadius: `${cardRadius}px`,
              background: "hsl(220 28% 6.5%)",
              border: `1px solid hsl(43 60% 50% / ${lerp(0.18, 0.12, expandT)})`,
              boxShadow: `0 ${Math.round(lerp(8, 40, expandT))}px ${Math.round(lerp(24, 80, expandT))}px -${Math.round(lerp(8, 20, expandT))}px hsl(220 90% 2% / 0.7)`,
              overflow: "hidden",
              transition: "border-color 200ms ease",
              willChange: "left, top, width, height",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 1 - contentOpacity,
                pointerEvents: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <div style={{ opacity: initialLabelOpacity }}>
                <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "8px", letterSpacing: "0.35em", textTransform: "uppercase", color: "hsl(43 70% 55% / 0.6)", textAlign: "center", marginBottom: "0.6rem" }}>§ 01 · Personal Profile</div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 600, color: "hsl(38 35% 90%)", textAlign: "center", lineHeight: 1.1 }}>Geetika Gehlot</h2>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(12px, 1vw, 14px)", fontStyle: "italic", color: "hsl(220 15% 55%)", textAlign: "center", marginTop: "0.4rem" }}>Montréal · India-born · Multidisciplinary</p>
              </div>
            </div>

            {contentVisible && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: contentOpacity,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    padding: `${cardPad}px ${cardPad}px 0`,
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 6, overflow: "hidden", border: "1px solid hsl(43 60% 50% / 0.2)", flexShrink: 0 }}>
                    <img src={achCasual} alt="Profile portrait" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "ui-monospace, monospace", fontSize: "7px", letterSpacing: "0.32em", textTransform: "uppercase", color: "hsl(43 70% 55% / 0.65)", marginBottom: "0.25rem" }}>§ 01 · Personal Profile</div>
                    <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(16px,1.8vw,22px)", fontWeight: 600, color: "hsl(38 35% 92%)", lineHeight: 1 }}>Geetika Gehlot</h2>
                  </div>
                  <div style={{ marginLeft: "auto", fontFamily: "ui-monospace, monospace", fontSize: "7px", letterSpacing: "0.22em", textTransform: "uppercase", color: "hsl(220 15% 40%)" }}>Scroll ↓</div>
                </div>

                <div style={{ height: 1, background: "hsl(43 60% 50% / 0.1)", margin: `${Math.round(cardPad * 0.6)}px ${cardPad}px` }} />

                <div
                  ref={essayContainerRef}
                  style={{
                    flex: 1,
                    overflow: "hidden",
                    padding: `0 ${cardPad}px 0`,
                  }}
                >
                  <div
                    ref={essayContentRef}
                    style={{
                      willChange: "transform",
                      transform: `translateY(-${essayPhaseT * maxEssayScroll}px)`,
                    }}
                  >
                    <Essay />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
