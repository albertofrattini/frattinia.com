export default function Header() {
    return (
        <div className="flex flex-col justify-center items-center px-8">
            <nav className="flex justify-end items-center pt-12 pb-16 w-full max-w-2xl mx-auto">
                <a href="mailto:frattini.alberto@gmail.com" className="inline-block py-2.5 px-6 bg-gray-900 dark:bg-gray-100 text-gray-50 dark:text-gray-900 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 hover:bg-primary dark:hover:bg-primary dark:hover:text-white">Contact Me</a>
            </nav>
        </div>
    );
};
