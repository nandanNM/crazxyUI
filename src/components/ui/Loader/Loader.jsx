import { LuLoaderCircle } from "react-icons/lu";

const Loader = ({ label }) => {
  return (
    <div className="flex items-center gap-1">
      <LuLoaderCircle className="animate-spin text-blue-500 h-8 w-8 drop-shadow-md" />
      <span className="text-sm text-gray-600">{label || "Loading..."}</span>
    </div>
  );
};

export default Loader;
