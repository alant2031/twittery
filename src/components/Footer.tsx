import { AiOutlineGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="sticky bottom-0 flex items-center justify-between bg-blue-200 px-2">
      <div className="flex cursor-default items-center gap-2">
        <span className="text-xl">&copy;</span>
        <p>{new Date().getFullYear()}</p>
      </div>
      <a
        className="text-blue-800 hover:text-slate-800"
        href="https://github.com/alant2031"
        target="_blank"
      >
        <AiOutlineGithub className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Footer;
