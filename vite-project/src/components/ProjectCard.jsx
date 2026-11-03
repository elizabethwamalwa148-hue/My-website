import ArrowIcon from './icons/ArrowIcon.jsx'

function ProjectCard({ project }) {
  return (
    <article className="group">
      <a
        className={`relative mb-5 block aspect-[1.15] overflow-hidden rounded-xl ${project.color}`}
        href="#contact"
        aria-label={`Discuss a project like ${project.name}`}
      >
        <img
          alt={project.imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          src={project.image}
        />
        <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-[#faf9f6] text-[#20231e] transition group-hover:-rotate-45">
          <ArrowIcon diagonal />
        </span>
      </a>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium tracking-[-0.04em]">{project.name}</h3>
          <p className="mt-1 text-sm text-[#777a71]">{project.category}</p>
        </div>
        <span className="pt-1 text-xs text-[#777a71]">{project.number}</span>
      </div>
    </article>
  )
}

export default ProjectCard
