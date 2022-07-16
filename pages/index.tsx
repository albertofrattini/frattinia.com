import Image from "next/image"

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
                Alberto Frattini
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Full Stack Software Developer @{" "}
                <span className="font-semibold">Oracle</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Passionate about running, reading and cooking - mostly eating. Currently looking for ways to improve.
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
			<div className="mb-8">
				<p className="text-gray-600 text-sm">09/21 - now</p>
				<h2 className="text-gray-700 dark:text-gray-200 mb-2">
					Software Developer @{" "}
					<span className="font-semibold">Oracle</span>
				</h2>
				<p className="italic text-gray-600 dark:text-gray-400">
					Visual Builder Studio
				</p>
				<ul className="list-disc ml-4 text-gray-600 dark:text-gray-400">
					<li>Using Oracle JET and Knockout.js, I have been adapting and enhancing the Front-End side of the 
						product as a result of the migration to a newer Back-End internal solution</li>
					<li>Writing Unit Tests using Jasmine and Karma, and Jenkins for Test Automation</li>
					<li>Using Docker containers and SQLDeveloper to provide a database in development environment</li>
				</ul>
			</div>
			<div className="mb-8">
				<p className="text-gray-600 text-sm">06/20 - 07/21</p>
				<h2 className="text-gray-700 dark:text-gray-200 mb-2">
					Javascript Developer @{" "}
					<span className="font-semibold">Emplifi</span>
				</h2>
				<p className="italic text-gray-600 dark:text-gray-400">
					Socialbakers Suite
				</p>
				<ul className="list-disc ml-4 text-gray-600 dark:text-gray-400">
					<li>Maintaining and improving the Front-End of various projects using React.js with Redux and
						Redux-saga. Every project uses a BFF (Back-End for Front-End) written in Node.js</li>
					<li>Improving Public API, an Express server that makes use of Elastic Search, PostgreSQL and
						other Back-End services to retrieve clients data. I have been on duty calls for Public API</li>
					<li>Writing tests using Jest, participating in Scrum ceremonies (leading Daily), versioning releases
						with Git and GitLab, and presenting new features to the rest of the company</li>
				</ul>
			</div>
		  </div>
        </div>
    );
};
