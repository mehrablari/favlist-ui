import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="bg-neutral flex flex-col justify-center align-middle text-center h-[200px] gap-[20px] pt-[250px] text-gray-dark px-[10px]">
      <h1 className="text-[30px]">404 - Page Not Found</h1>
      <p className="text-[20px]">The page you are looking for does not exist.</p>
      <Link to="/">
      <button className="bg-primary text-neutral rounded-[24px] p-[10px]">Go to home</button>
      </Link>
      
    </div>
  );
};

export default NoMatch;
