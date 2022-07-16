import Image from "next/image"

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
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
        </div>
    );
};

export default Home;
