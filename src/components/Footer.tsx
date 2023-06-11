import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="sticky bottom-0 flex items-center justify-between bg-blue-200 px-2">
      <div className="flex cursor-default items-center gap-2">
        <span className="text-xl">&copy;</span>
        <p>
          {new Date().getFullYear()} by{" "}
          <span className="rounded-full px-1 font-semibold text-blue-800 transition duration-300 hover:text-black">
            Alan Tanaka
          </span>
        </p>
      </div>
      <div className="flex gap-2">
        <a
          className="text-blue-800 hover:text-slate-800"
          href="https://github.com/alant2031"
          target="_blank"
        >
          <AiOutlineGithub className="h-6 w-6" />
        </a>
        <a
          className="text-blue-800 hover:text-slate-800"
          href="https://www.linkedin.com/in/alantanakaa/"
          target="_blank"
        >
          <AiOutlineLinkedin className="h-6 w-6" />
        </a>
        <a
          className="text-blue-800 hover:text-slate-800"
          href="https://www.instagram.com/alan.tnk14/"
          target="_blank"
        >
          <AiOutlineInstagram className="h-6 w-6" />
        </a>
        <a
          className="text-blue-800 hover:text-slate-800"
          href="https://www.facebook.com/alan.tanaka88"
          target="_blank"
        >
          <AiOutlineFacebook className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
