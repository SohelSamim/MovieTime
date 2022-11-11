import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/">
          <a className="text-base md:text-2xl">Movie
            <span className="text-yellow-600">Time</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
