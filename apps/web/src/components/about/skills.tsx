import AboutHeader from '@/components/about/about-header';

interface Skill {
  name: string;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
}

function Skills({ skills }: SkillsProps) {
  if (!skills || skills.length === 0) {
    return null;
  }

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills">
      <AboutHeader text="$ ls -al Skills" />
      <div className="mt-[30px] grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:gap-y-[20px] lg:gap-x-[25px]">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div
            key={category}
            className="relative rounded-2xl shadow-shadow-2 bg-gradient-onyx before:absolute before:content-[''] before:rounded-2xl p-4"
          >
            <h3 className="text-orange-yellow-crayola font-bold text-base mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1 bg-border-gradient-onyx rounded-full text-white-2 text-sm hover:bg-orange-yellow-crayola hover:text-black transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
