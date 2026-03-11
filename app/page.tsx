import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-start sm:items-center w-full mb-16">
                <div className="flex flex-col pr-8">
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 leading-tight text-black dark:text-white">
                        Alberto Frattini
                    </h1>
                    <h2 className="font-sans text-lg font-medium tracking-wide text-gray-700 dark:text-gray-200 mb-4">
                        Lead Engineer @{" "}
                        <span className="font-semibold">STRV</span>
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                        Hey 👋 Welcome to my portfolio!
                    </p>
                </div>
                <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto sm:mr-0">
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
                <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
                    Work Experience
                </h1>
                {/* STRV */}
                <div className="mb-8">
                    <p className="text-gray-500 dark:text-gray-500 text-xs font-medium uppercase tracking-widest">11/22 - now</p>
                    <h2 className="text-lg font-semibold font-sans text-gray-800 dark:text-gray-100 mb-2">
                        Lead Engineer @{" "}
                        <span className="font-bold">STRV</span>
                    </h2>
                    <p className="ml-4 text-gray-600 dark:text-gray-400 mb-2">
                        A Prague-based digital product development studio
                        building web and mobile apps for startups and enterprises
                        worldwide. Remote.
                    </p>

                    <p className="italic font-medium text-gray-700 dark:text-gray-300 mt-5">
                        Lead Engineer{" "}
                        <span className="not-italic text-xs font-normal tracking-wide text-gray-500 dark:text-gray-500">
                            (since August 2025)
                        </span>
                    </p>
                    <p className="ml-4 text-gray-500 dark:text-gray-400 text-sm mb-1 italic">
                        Client work: insurance app
                    </p>
                    <ul className="work-list">
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

                    <p className="italic font-medium text-gray-700 dark:text-gray-300 mt-5">
                        Senior Backend Engineer{" "}
                        <span className="not-italic text-xs font-normal tracking-wide text-gray-500 dark:text-gray-500">
                            (since November 2023)
                        </span>
                    </p>
                    <p className="ml-4 text-gray-500 dark:text-gray-400 text-sm mb-1 italic">
                        Client work: social network and digital marketplace
                    </p>
                    <ul className="work-list">
                        <li>
                            Lead the BE team in the development of a
                            video-centred social network
                        </li>
                        <li>
                            Worked closely with clients to define roadmaps, new
                            features and next steps for their application
                        </li>
                    </ul>

                    <p className="italic font-medium text-gray-700 dark:text-gray-300 mt-5">
                        Backend Engineer
                    </p>
                    <p className="ml-4 text-gray-500 dark:text-gray-400 text-sm mb-1 italic">
                        Client work: banking app and social network
                    </p>
                    <ul className="work-list">
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
                    <p className="text-gray-500 dark:text-gray-500 text-xs font-medium uppercase tracking-widest">01/23 - now</p>
                    <h2 className="text-lg font-semibold font-sans text-gray-800 dark:text-gray-100 mb-2">
                        Web Developer @{" "}
                        <span className="font-bold">Freelance</span>
                    </h2>
                    <p className="ml-4 text-gray-500 dark:text-gray-400 text-sm mb-1 italic">
                        Client work: landing pages, blogs, booking systems,
                        newsletter for local businesses (Borgomanero, Italy)
                    </p>
                    <ul className="work-list">
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
                    <p className="text-gray-500 dark:text-gray-500 text-xs font-medium uppercase tracking-widest">09/21 - 10/22</p>
                    <h2 className="text-lg font-semibold font-sans text-gray-800 dark:text-gray-100 mb-2">
                        Software Developer @{" "}
                        <span className="font-bold">Oracle</span>
                    </h2>
                    <p className="italic font-medium text-gray-700 dark:text-gray-300">
                        Visual Builder Studio
                    </p>
                    <ul className="work-list">
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
                    <p className="text-gray-500 dark:text-gray-500 text-xs font-medium uppercase tracking-widest">06/20 - 07/21</p>
                    <h2 className="text-lg font-semibold font-sans text-gray-800 dark:text-gray-100 mb-2">
                        Javascript Developer @{" "}
                        <span className="font-bold">Emplifi</span>{" "}
                        (previously known as Socialbakers)
                    </h2>
                    <p className="italic font-medium text-gray-700 dark:text-gray-300">
                        Socialbakers Suite
                    </p>
                    <ul className="work-list">
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
                <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-6 mt-8 text-black dark:text-white">
                    Education
                </h1>
                <div className="mb-8 space-y-2">
                    <div>
                        <p className="text-gray-700 dark:text-gray-200">
                            <span className="font-serif">
                                Master&apos;s Degree in Computer Science and
                                Engineering
                            </span>
                            , Politecnico di Milano
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs font-medium uppercase tracking-widest">2020</p>
                    </div>
                    <div>
                        <p className="text-gray-700 dark:text-gray-200">
                            <span className="font-serif">
                                Lean Startup Program
                            </span>
                            , Peekaboo
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs font-medium uppercase tracking-widest">2018</p>
                    </div>
                    <div>
                        <p className="text-gray-700 dark:text-gray-200">
                            <span className="font-serif">
                                Erasmus exchange semester
                            </span>
                            , Universidade da Coru&ntilde;a, Spain
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs font-medium uppercase tracking-widest">2018</p>
                    </div>
                    <div>
                        <p className="text-gray-700 dark:text-gray-200">
                            <span className="font-serif">
                                Bachelor&apos;s Degree in Computer Science and
                                Engineering
                            </span>
                            , Politecnico di Milano
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs font-medium uppercase tracking-widest">2017</p>
                    </div>
                </div>

                {/* Skills */}
                <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-6 mt-8 text-black dark:text-white">
                    Skills and Interests
                </h1>
                <div className="mb-8 space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="font-serif text-gray-800 dark:text-gray-100">
                            Technologies:
                        </span>{" "}
                        TypeScript, Next.js, Node.js, Nest.js, SQL, Prisma,
                        GraphQL, Docker, Terraform, AWS, Azure, Python, Java, C,
                        HTML, CSS, Tailwind.css, Sass, Redux, Git, PostgreSQL,
                        Knockout.js
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="font-serif text-gray-800 dark:text-gray-100">
                            Languages:
                        </span>{" "}
                        Italian (Native), English (Full professional
                        proficiency), Spanish (Intermediate), Czech (Beginner),
                        Latvian (Beginner)
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="font-serif text-gray-800 dark:text-gray-100">
                            Soft skills:
                        </span>{" "}
                        Stakeholder management, drive, leadership, team work,
                        presenting and public speaking, technical research,
                        reasoning ability, strategic long-term thinking
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="font-serif text-gray-800 dark:text-gray-100">
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
