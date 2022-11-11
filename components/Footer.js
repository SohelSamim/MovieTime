import Link from "next/link";
const Footer = () => {
  return (
    <div className="text-center h-32 flex items-center justify-center">
      <p className="text-xl text-gray-800">  <span className="font-bold"> </span></p>
      <Link href="/contact" passHref>
        <button className="bg-yellow-600 text-black py-3 px-6 rounded text-sm mt-4">CONTACT</button>
      </Link>
      
    </div>
  );
};

export default Footer;
