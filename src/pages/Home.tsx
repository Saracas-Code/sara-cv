import cvData from "../data/cv";
import "../styles/home.css";

type AnyItem = typeof cvData[number];

function byType<T extends AnyItem["type"]>(t: T) {
    return (item: AnyItem) => item.type === t;
}

export default function Home() {
    const personal = cvData.find(byType("personal")) as any;
    const profile = cvData.find(byType("profile")) as any;

    const skills = cvData.filter(byType("skills")) as any[];
    const languages = cvData.find(byType("languages")) as any;

    const education = cvData.filter(byType("education")) as any[];
    const experience = cvData.filter(byType("experience")) as any[];
    const projects = cvData.filter(byType("project")) as any[];

    // “Lo esencial” para la Home: highlights rápidos
    const topSkillPills = skills.flatMap(s => (s.summary ?? []).slice(0, 4)).slice(0, 8);

    return (
        <div className="container">
        {/* HERO */}
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

            {profile?.summary && <p className="cardText" style={{ maxWidth: 760, margin: "18px auto 0" }}>{profile.summary}</p>}

            {/* Skills rápidas como pills */}
            <div className="pills" aria-label="Habilidades destacadas">
            {topSkillPills.map((s: string) => (
                <span key={s} className="pill">{s}</span>
            ))}
            </div>
        </header>

        {/* GRID PRINCIPAL */}
        <div className="grid">
            {/* EXPERIENCIA */}
            <div className="span8">
            <h3 className="sectionTitle">Experiencia</h3>

            <div className="grid" style={{ marginTop: 10 }}>
                {experience.map(exp => (
                <article key={exp.id} className="card span12">
                    <div className="cardHeader">
                    <h4 className="cardTitle">{exp.role} — {exp.organization}</h4>
                    <span className="tag">{exp.period}</span>
                    </div>
                    <p className="cardMeta">{exp.location}</p>
                    <p className="cardText">{exp.summary}</p>

                    {/* Listo para Router en el siguiente paso */}
                    <div className="tags">
                    <span className="tag">id: {exp.id}</span>
                    <span className="tag">Leer más → /experience/{exp.id}</span>
                    </div>
                </article>
                ))}
            </div>
            </div>

            {/* LATERAL: IDIOMAS + EDUCACIÓN */}
            <aside className="span4">
            <h3 className="sectionTitle">Idiomas</h3>
            <div className="card">
                <div className="tags">
                {(languages?.items ?? []).map((l: any) => (
                    <span key={l.language} className="tag">
                    {l.language} · {l.level}
                    </span>
                ))}
                </div>
            </div>

            <h3 className="sectionTitle">Educación</h3>
            <div className="grid" style={{ marginTop: 10 }}>
                {education.map(ed => (
                <article key={ed.id} className="card span12">
                    <div className="cardHeader">
                    <h4 className="cardTitle">{ed.institution}</h4>
                    <span className="tag">{ed.period}</span>
                    </div>
                    <p className="cardMeta">{ed.degree}</p>
                    <p className="cardText">{ed.summary}</p>

                    <div className="tags">
                    <span className="tag">Leer más → /education/{ed.id}</span>
                    </div>
                </article>
                ))}
            </div>
            </aside>

            {/* PROYECTOS */}
            <div className="span12">
            <h3 className="sectionTitle">Proyectos</h3>
            <div className="grid">
                {projects.map(p => {
                const tech = p?.content?.technologies ?? [];
                return (
                    <article key={p.id} className="card span6">
                    <div className="cardHeader">
                        <h4 className="cardTitle">{p.title}</h4>
                        <span className="tag">Proyecto</span>
                    </div>
                    <p className="cardText">{p.summary}</p>

                    {tech.length > 0 && (
                        <div className="tags" aria-label={`Tecnologías de ${p.title}`}>
                        {tech.slice(0, 6).map((t: string) => (
                            <span key={t} className="tag">{t}</span>
                        ))}
                        </div>
                    )}

                    <div className="tags">
                        <span className="tag">Leer más → /project/{p.id}</span>
                    </div>
                    </article>
                );
                })}
            </div>
            </div>

            {/* SKILLS COMPLETAS (opcional en Home, pero útil) */}
            <div className="span12">
            <h3 className="sectionTitle">Habilidades</h3>
            <div className="grid">
                {skills.map(sg => (
                <article key={sg.id} className="card span6">
                    <div className="cardHeader">
                    <h4 className="cardTitle">{sg.category}</h4>
                    <span className="tag">Skills</span>
                    </div>
                    <div className="tags">
                    {(sg.items ?? []).map((it: string) => (
                        <span key={it} className="tag">{it}</span>
                    ))}
                    </div>
                </article>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}
