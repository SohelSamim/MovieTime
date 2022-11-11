import Image from "next/image";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image src={"/home_cinema.png"} width={400} height={200} layout="responsive" alt="home cinema" />
      </div>
      <h1 className="text-2xl text-black uppercase font-bold">Welcome to Movie Time</h1>
      <p className="text-yellow-600 ">Watch your favorite movies now.</p>
    </div>
  );
};

export default Hero;
