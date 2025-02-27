import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-bl from-[#000000] to-[#000000] text-transparent bg-clip-text hover:cursor-pointer"
    >
      FormBuild
    </Link>
  );
};

export default Logo;
