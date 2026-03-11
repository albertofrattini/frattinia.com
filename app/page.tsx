import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
            <div className="flex flex-col-reverse sm:flex-row items-start">
                <div className="flex flex-col pr-8">
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
                        Alberto Frattini
                    </h1>
                    <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                        Lead Engineer @{" "}
                        <span className="font-semibold">STRV</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-16">
                        Hey 👋 Welcome to my portfolio!
                    </p>
                </div>
                <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
                    <Image
                        alt="Alberto Frattini"
                        height={176}
                        width={176}
                        src="/static/images/avatar.jpg"
                        sizes="30vw"
                        priority
                        className="rounded-full filter"
                    />
                </div>
            </div>
            <div>
                <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
                    Work Experience
                </h1>
                {/* STRV */}
                <div className="mb-8">
                    <p className="text-gray-600 text-sm">11/22 - now</p>
                    <h2 className="text-gray-700 dark:text-gray-200 mb-2">
                        Lead Engineer @{" "}
                        <span className="font-semibold">STRV</span>
                    </h2>
                    <p className="ml-4 text-gray-600 dark:text-gray-400 mb-2">
                        A Prague-based digital product development studio
                        building web and mobile apps for startups and enterprises
                        worldwide. Remote.
                    </p>

                    <p className="italic text-gray-600 dark:text-gray-400 mt-4">
                        Lead Engineer{" "}
                        <span className="not-italic text-sm">
                            (since August 2025)
                        </span>
                    </p>
                    <p className="ml-4 text-gray-600 dark:text-gray-400 text-sm mb-1">
                        Client work: insurance app
                    </p>
                    <ul className="list-disc ml-8 text-gray-600 dark:text-gray-400">
                        <li>
                            Leading the technical development of the project,
                            following client&apos;s inputs and requirements
                        </li>
                        <li>
                            Designing features developed by a BE team of 5 and
                            contributing to product vision that shaped decisions
                            on both design and FE implementation
                        </li>
                        <li>
                            Contributing directly to the development of the
                            application using Nest.js and Terraform to define the
                            Azure infrastructure
                        </li>
                    </ul>

                    <p className="italic text-gray-600 dark:text-gray-400 mt-4">
                        Senior Backend Engineer{" "}
                        <span className="not-italic text-sm">
                            (since November 2023)
                        </span>
                    </p>
                    <p className="ml-4 text-gray-600 dark:text-gray-400 text-sm mb-1">
                        Client work: social network and digital marketplace
                    </p>
                    <ul className="list-disc ml-8 text-gray-600 dark:text-gray-400">
                        <li>
                            Lead the BE team in the development of a
                            video-centred social network
                        </li>
                        <li>
                            Worked closely with clients to define roadmaps, new
                            features and next steps for their application
                        </li>
                    </ul>

                    <p className="italic text-gray-600 dark:text-gray-400 mt-4">
                        Backend Engineer
                    </p>
                    <p className="ml-4 text-gray-600 dark:text-gray-400 text-sm mb-1">
                        Client work: banking app and social network
                    </p>
                    <ul className="list-disc ml-8 text-gray-600 dark:text-gray-400">
                        <li>
                            Built backend APIs in Node.js using Typescript. Main
                            technologies used were: PostgreSQL, Firebase, AWS,
                            NestJs, GraphQL, Prisma
                        </li>
                        <li>
                            Attended meetings with clients to define goals and
                            requirements, designing the infrastructure, and
                            developing the application - most of the time
                            following Scrum principles
                        </li>
                    </ul>
                </div>

                {/* Freelance */}
                <div className="mb-8">
                    <p className="text-gray-600 text-sm">01/23 - now</p>
                    <h2 className="text-gray-700 dark:text-gray-200 mb-2">
                        Web Developer @{" "}
                        <span className="font-semibold">Freelance</span>
                    </h2>
                    <p className="ml-4 text-gray-600 dark:text-gray-400 text-sm mb-1">
                        Client work: landing pages, blogs, booking systems,
                        newsletter for local businesses (Borgomanero, Italy)
                    </p>
                    <ul className="list-disc ml-8 text-gray-600 dark:text-gray-400">
                        <li>
                            Using Next.js web applications and Wordpress to
                            create websites based on client needs and
                            requirements
                        </li>
                        <li>Leveraging AI to support with writing code</li>
                    </ul>
                </div>

                {/* Oracle */}
                <div className="mb-8">
                    <p className="text-gray-600 text-sm">09/21 - 10/22</p>
                    <h2 className="text-gray-700 dark:text-gray-200 mb-2">
                        Software Developer @{" "}
                        <span className="font-semibold">Oracle</span>
                    </h2>
                    <p className="italic text-gray-600 dark:text-gray-400">
                        Visual Builder Studio
                    </p>
                    <ul className="list-disc ml-4 text-gray-600 dark:text-gray-400">
                        <li>
                            Using Oracle JET and Knockout.js, adapted and
                            enhanced the FE of the application - a required amend
                            after migrating to a newer internal BE solution
                        </li>
                        <li>
                            Writing Unit Tests using Jasmine and Karma, and
                            Jenkins for Test Automation
                        </li>
                    </ul>
                </div>

                {/* Socialbakers / Emplifi */}
                <div className="mb-8">
                    <p className="text-gray-600 text-sm">06/20 - 07/21</p>
                    <h2 className="text-gray-700 dark:text-gray-200 mb-2">
                        Javascript Developer @{" "}
                        <span className="font-semibold">Emplifi</span>{" "}
                        (previously known as Socialbakers)
                    </h2>
                    <p className="italic text-gray-600 dark:text-gray-400">
                        Socialbakers Suite
                    </p>
                    <ul className="list-disc ml-4 text-gray-600 dark:text-gray-400">
                        <li>
                            Maintained and improved the FE of various projects
                            using React.js with Redux and Redux-saga. Every
                            project used a BFF (Back-End for Front-End) written
                            in Node.js
                        </li>
                        <li>
                            Improved Public API, an Express server that uses
                            ElasticSearch, PostgreSQL and other Back-End services
                            to retrieve clients&apos; data
                        </li>
                    </ul>
                </div>

                {/* Education */}
                <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                    Education
                </h1>
                <div className="mb-8 space-y-2">
                    <div>
                        <p className="text-gray-700 dark:text-gray-200">
                            <span className="font-semibold">
                                Master&apos;s Degree in Computer Science and
                                Engineering
                            </span>
                            , Politecnico di Milano
                        </p>
                        <p className="text-gray-600 text-sm">2020</p>
                    </div>
                    <div>
                        <p className="text-gray-700 dark:text-gray-200">
                            <span className="font-semibold">
                                Lean Startup Program
                            </span>
                            , Peekaboo
                        </p>
                        <p className="text-gray-600 text-sm">2018</p>
                    </div>
                    <div>
                        <p className="text-gray-700 dark:text-gray-200">
                            <span className="font-semibold">
                                Erasmus exchange semester
                            </span>
                            , Universidade da Coru&ntilde;a, Spain
                        </p>
                        <p className="text-gray-600 text-sm">2018</p>
                    </div>
                    <div>
                        <p className="text-gray-700 dark:text-gray-200">
                            <span className="font-semibold">
                                Bachelor&apos;s Degree in Computer Science and
                                Engineering
                            </span>
                            , Politecnico di Milano
                        </p>
                        <p className="text-gray-600 text-sm">2017</p>
                    </div>
                </div>

                {/* Skills */}
                <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
                    Skills and Interests
                </h1>
                <div className="mb-8 space-y-3">
                    <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">
                            Technologies:
                        </span>{" "}
                        TypeScript, Next.js, Node.js, Nest.js, SQL, Prisma,
                        GraphQL, Docker, Terraform, AWS, Azure, Python, Java, C,
                        HTML, CSS, Tailwind.css, Sass, Redux, Git, PostgreSQL,
                        Knockout.js
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">
                            Languages:
                        </span>{" "}
                        Italian (Native), English (Full professional
                        proficiency), Spanish (Intermediate), Czech (Beginner),
                        Latvian (Beginner)
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">
                            Soft skills:
                        </span>{" "}
                        Stakeholder management, drive, leadership, team work,
                        presenting and public speaking, technical research,
                        reasoning ability, strategic long-term thinking
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">
                            Interests:
                        </span>{" "}
                        Running (did my first marathon in 2025), reading (18
                        books in 2025), yoga (weekly practicing since 2023),
                        Pok&egrave;mon (training to compete in VGC in April
                        2026), coffee (brewed 30+ different varieties at home)
                    </p>
                </div>
            </div>
        </div>
    );
}
