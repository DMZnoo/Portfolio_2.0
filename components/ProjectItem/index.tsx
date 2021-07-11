import {AiFillGithub} from 'react-icons/ai';
import {RiExternalLinkLine} from 'react-icons/ri';
import {
    ProjectContent,
    ProjectDescription,
    ProjectImage,
    ProjectTechList,
    ProjectTitle
} from "./styles";

interface IProjectItem {
    image: string;
    title: string;
    description: string;
    github: string;
    link?: string;
    techList: string[];
}

const ProjectItem:React.FC<IProjectItem> = ({image, title, github, description, techList, link}) => {
    return (
        <div>
            <ProjectImage>
                <img src={image} alt={image}/>
            </ProjectImage>
            <ProjectContent>
                <div>
                    <div>
                        <ProjectTitle>
                            {title}
                        </ProjectTitle>
                        <ProjectDescription>
                            {description}
                        </ProjectDescription>
                        <ProjectTechList>
                            {techList.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))
                            }
                        </ProjectTechList>
                            <div className={'flex space-x-3'}>
                                <a className={'block w-max'} href={github} target="_blank" rel="noopener noreferrer">
                                    <AiFillGithub size={25}/>
                                </a>
                                {link && (
                                    <a className={'block w-max'} href={link} target="_blank" rel="noopener noreferrer">
                                        <RiExternalLinkLine size={25}/>
                                    </a>
                                )}
                            </div>
                    </div>
                </div>
            </ProjectContent>
        </div>
    )
};

export default ProjectItem;
