import Link from 'next/link';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center px-8'>
            <nav className="flex justify-between items-center pt-12 pb-16 w-full max-w-2xl mx-auto">
                <Link href="/">Home</Link>
                <button>Do something</button>
            </nav>
        </div>
    );
};

export default Header;
