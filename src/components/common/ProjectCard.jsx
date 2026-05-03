import { FaExternalLinkAlt, FaGithub  } from "react-icons/fa";
import Image from "./Image";

const ProjectCard = ({ src, alt, ttl, live, git }) => {
    return (
        <div className="border-3 border-gray-700 w-32/100 rounded-2xl bg-gray-900">
            <Image className={'rounded-t-[14px] w-full border-b-3 border-gray-800'} src={src} alt={alt} />
            <div className="p-5">
                <h3 className="text-gray-400 text-2xl text-center font-bold pb-5">{ttl}</h3>
                <div className="flex items-center justify-center gap-x-5">
                    <a className='text-gray-400 font-bold border-2 border-gray-700 rounded-full py-2 px-5 flex items-center gap-x-2 w-fit' href={live} target="_blank">Live <FaExternalLinkAlt /></a>
                    <a className='text-gray-400 font-bold border-2 border-gray-700 rounded-full py-2 px-5 flex items-center gap-x-2 w-fit' href={git} target="_blank">Code <FaGithub  /></a>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard