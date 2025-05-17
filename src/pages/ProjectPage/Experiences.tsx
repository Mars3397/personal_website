import GridCard from "components/GridCard";
import { contentRegistry } from "../../content/registry";
import { ContentMeta } from "../../content/types";

const ExperiencesGrid = () => {
    return (
        <>
            {contentRegistry.experiences.map((experience: ContentMeta, index: number) => (
                <GridCard
                    key={experience.id}
                    title={experience.title}
                    image={experience.coverImage}
                    date={experience.date}
                    content={experience.summary}
                    slug={experience.slug}
                    category={experience.category}
                    technologies={experience.technologies || []}
                    index={index}
                />
            ))}
        </>
    )
}

export default ExperiencesGrid;