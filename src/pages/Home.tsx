import cvData from "../data/cv";
import "../styles/home.css";
import LetterGlitch from "../components/LetterGlitch";

type AnyItem = typeof cvData[number];
function byType<T extends AnyItem["type"]>(t: T) {
    return (item: AnyItem) => item.type === t;
}

export default function Home() {
    const personal = cvData.find(byType("personal")) as any;
    const profile = cvData.find(byType("profile")) as any;

    const skills = cvData.filter(byType("skills")) as any[];
    const education = cvData.filter(byType("education")) as any[];
    const experience = cvData.filter(byType("experience")) as any[];
    const projects = cvData.filter(byType("project")) as any[];
    const interests = cvData.find(byType("interests")) as any;

    return (
    <div className="homePage">

        {/* HERO: aquí va el glitch */}
        <section className="heroSection" id="top">
        <div className="heroBg" aria-hidden="true">
            <LetterGlitch centerVignette outerVignette />
        </div>

        <div className="container heroContent">
            <header className="hero">
            <h1 className="heroTitle">{personal?.name}</h1>
            <p className="heroSubtitle">{personal?.title}</p>

            <div className="heroMeta">
                <span>{personal?.location}</span>
                <span>·</span>
                <a href={`mailto:${personal?.email}`}>{personal?.email}</a>
                <span>·</span>
                <a href={`tel:${personal?.phone}`}>{personal?.phone}</a>
            </div>

            {profile?.summary && <p className="heroSummary">{profile.summary}</p>}

            <a className="scrollCta" href="#cv">Explorar</a>
            </header>
        </div>
        </section>

        {/* CV debajo (sin glitch) */}
        <section id="cv" className="belowFold">
        <div className="container">
            <div className="section" id="experiencia">
                <h2 className="sectionTitle">Experiencia</h2>
                <div className="cardGrid">
                    {experience.map((e: any) => (
                    <article className="card" key={e.id}>
                        <div className="cardTop">
                        <h3 className="cardTitle">{e.role}</h3>
                        <span className="chip">{e.period}</span>
                        </div>

                        <p className="cardMeta">
                        {e.organization}
                        {e.location ? ` · ${e.location}` : ""}
                        </p>

                        <p className="cardText">{e.summary}</p>

                        <button className="cardLink" disabled>
                        Leer más (próximamente)
                        </button>
                    </article>
                    ))}
                </div>
                </div>

                <div className="section" id="proyectos">
                <h2 className="sectionTitle">Proyectos</h2>
                <div className="cardGrid">
                    {projects.map((p: any) => {
                    const tech: string[] = p?.content?.technologies ?? [];
                    return (
                        <article className="card" key={p.id}>
                        <div className="cardTop">
                            <h3 className="cardTitle">{p.title}</h3>
                            <span className="chip">Proyecto</span>
                        </div>

                        <p className="cardText">{p.summary}</p>

                        {tech.length > 0 && (
                            <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {tech.slice(0, 6).map((t) => (
                                <span key={t} className="chip">
                                {t}
                                </span>
                            ))}
                            </div>
                        )}

                        <button className="cardLink" disabled>
                            Leer más (próximamente)
                        </button>
                        </article>
                    );
                    })}
                </div>
                </div>

                <div className="section" id="educacion">
                <h2 className="sectionTitle">Educación</h2>
                <div className="cardGrid">
                    {education.map((ed: any) => (
                    <article className="card" key={ed.id}>
                        <div className="cardTop">
                        <h3 className="cardTitle">{ed.institution}</h3>
                        <span className="chip">{ed.period}</span>
                        </div>

                        <p className="cardMeta">{ed.degree}</p>
                        <p className="cardText">{ed.summary}</p>

                        <button className="cardLink" disabled>
                        Leer más (próximamente)
                        </button>
                    </article>
                    ))}
                </div>
                </div>

                <div className="section" id="intereses">
                <h2 className="sectionTitle">Intereses</h2>
                <div className="cardGrid">
                    {(interests?.items ?? []).map((it: any) => (
                    <article className="card" key={it.name}>
                        <div className="cardTop">
                        <h3 className="cardTitle">{it.name}</h3>
                        <span className="chip">{it.summary}</span>
                        </div>

                        <p className="cardText">{it.details}</p>

                        <button className="cardLink" disabled>
                        Leer más (próximamente)
                        </button>
                    </article>
                    ))}
                </div>
                </div>

                <footer style={{ marginTop: 56, textAlign: "center", color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                Esta es la vista general. En el siguiente paso añadimos Router para las páginas de detalle.
                </footer>

        </div>
        </section>

    </div>
    );

}
