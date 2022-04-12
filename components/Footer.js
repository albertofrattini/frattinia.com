import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import Playing from './Playing';

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center mx-auto mt-12 max-w-md w-full p-6 bg-white">
            <Playing />
            <div id="contacts" className="flex justify-between">
                <a
                    className="p-3 hover:bg-gray-200 rounded"
                    href="https://github.com/albifrattini"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="text-gray-800 w-6 h-6"
                    />
                </a>
                <a
                    className="p-3 hover:bg-gray-200 rounded"
                    href="https://www.facebook.com/frattini.alberto/"
                >
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-gray-800 w-6 h-6"
                    />
                </a>
                <a
                    className="p-3 hover:bg-gray-200 rounded"
                    href="https://www.instagram.com/albi_frattini/"
                >
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-gray-800 w-6 h-6"
                    />
                </a>
                <a
                    className="p-3 hover:bg-gray-200 rounded"
                    href="https://www.linkedin.com/in/alberto-frattini-99758b151/"
                >
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="text-gray-800 w-6 h-6"
                    />
                </a>
                <a
                    className="p-3 hover:bg-gray-200 rounded"
                    href="https://twitter.com/albertofrattini"
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-gray-800 w-6 h-6"
                    />
                </a>
                <a
                    className="p-3 hover:bg-gray-200 rounded"
                    href="mailto:frattini.alberto@gmail.com"
                >
                    <FontAwesomeIcon
                        icon={faEnvelopeOpen}
                        className="text-gray-800 w-6 h-6"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
