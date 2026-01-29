import AboutHeader from '@/components/about/about-header';
import { FeaturedProject } from '@/types/config';
import { LuExternalLink } from 'react-icons/lu';
import Image from 'next/image';

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="featured-projects">
      <AboutHeader text="$ ls -al Featured Projects" />
      <div className="mt-[30px] grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3 lg:gap-y-[20px] lg:gap-x-[25px]">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl shadow-shadow-2 bg-gradient-onyx overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="relative h-[200px] w-full overflow-hidden bg-black/30">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-orange-yellow-crayola font-bold text-base group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <LuExternalLink className="text-white-2 group-hover:text-orange-yellow-crayola transition-colors flex-shrink-0" />
              </div>
              <p className="text-light-gray text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
