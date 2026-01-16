import Image from "next/image";
import AnimatedLink from "@/components/AnimatedLink";

export default function Home() {
  const recentProjects = [
    {
      title: "",
      description: "continue building and learning through projects"
    },
    {
      title: "",
      description: "Exploring new tools"
    },
    {
      title: "",
      description: "Joining clubs and communities to meet people"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Left Content Column */}
        <div className="flex-1 space-y-4 order-1 md:order-1">
          {/* Introduction */}
          <div>
            <h1 className="text-4xl font-medium mb-1">
              Hi, I&apos;m Liam👋
            </h1>
            <p className="opacity-70">
              Engineering @ Western
            </p>
          </div>

          {/* Recent Work Section */}
          <div>
            <ul className="grid gap-1 text-base mb-4">
              <li className="flex items-center gap-2 pl-6 relative">
                <div className="absolute left-0 top-[12px] w-[8px] h-[2px] bg-current opacity-60" />
                <span className="font-medium">Engineering <AnimatedLink href="https://www.vitalearning.ca/">VITA Learning</AnimatedLink></span>
              </li>
              <li className="flex flex-col gap-2 pl-6 relative">
                <div className="absolute left-0 top-[12px] w-[8px] h-[2px] bg-current opacity-60" />
                <span className="italic font-medium">In the upcoming year, I am looking to</span>
                <ul className="grid gap-1 pl-6">
                  {recentProjects.map((project, index) => (
                    <li key={index} className="relative flex items-start gap-4">
                      <span className="absolute left-[-16px] top-[6px] text-xs opacity-50">~</span>
                      <span>
                        {project.title}  {project.description}
                      </span>
                    </li>
                  ))}
                  <li className="relative flex items-start gap-4">
                    <span className="absolute left-[-16px] top-[6px] text-xs opacity-50">~</span>
                    <span>
                      <AnimatedLink href="/projects">
                        Check out my projects
                      </AnimatedLink>
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Resume Link 
            <div className="flex items-center gap-2 pl-6 relative mb-2">
              <div className="absolute left-0 top-[12px] w-[8px] h-[2px] bg-current opacity-60" />
              <AnimatedLink href="/resume.pdf">
                Download my resume
              </AnimatedLink>
            </div>*/}
            
            {/* Blog link*/}
            <div className="flex items-center gap-2 pl-6 relative">
              <div className="absolute left-0 top-[12px] w-[8px] h-[2px] bg-current opacity-60" />
              <AnimatedLink href="/notes">
                Follow my learning journey 
              </AnimatedLink>
            </div>
          </div>
        </div>
        
        {/* Profile Picture */}
        <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full border-2 border-zinc-200 dark:border-zinc-700 overflow-hidden bg-zinc-50 dark:bg-zinc-800 flex-shrink-0 mx-auto md:mx-0 order-2 md:order-2">
          <div className="w-full h-full flex items-center justify-center text-zinc-500 dark:text-zinc-400 text-xs">
            <Image
              src="/profile.jpg"
              alt="Liam's profile picture"
              width={200}
              height={200}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
