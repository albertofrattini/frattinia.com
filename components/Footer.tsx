import Playing from "./Playing";

const ExternalLink = ({ href, children }) => (
    <a
      className="text-gray-500 hover:text-gray-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
);

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
                <div className="flex flex-col space-y-4">
                    <ExternalLink href="https://twitter.com/albertofrattini">
                        Twitter
                    </ExternalLink>
                    <ExternalLink href="https://github.com/albertofrattini">GitHub</ExternalLink>
                    <ExternalLink href="https://www.linkedin.com/in/alberto-frattini-99758b151/">
                        Linkedin
                    </ExternalLink>
                </div>
                <div className="flex flex-col space-y-4">
                    <Playing />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
