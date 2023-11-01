import Logo from "../assets/images/logoblack.png";

const Skeleton = () => {
  return (
    <div className="flex justify-center items-center flex-col  mx-auto pt-[100px]  bg-neutral h-screen">
      <div className="animate-bounce animate-infinite">
        <img
          src={Logo}
          alt="loading logo"
          className="h-[70px] w-[280px] pb-[20px]"
        />
        <p className="text-center">Please Wait ...</p>
      </div>
    </div>
  );
};

export default Skeleton;
