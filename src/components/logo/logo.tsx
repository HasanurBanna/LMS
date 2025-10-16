import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <div className="relative w-10 h-10 rotate-45 border-2 border-bglogo rounded-md my-3 cursor-pointer">
          <h1 className="absolute left-1 bottom-[15px] -rotate-45 font-bold text-txcolor text-xl">
            TOTC
          </h1>
        </div>
      </Link>
    </>
  );
};

export default Logo;
