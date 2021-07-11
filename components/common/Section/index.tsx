import {BaseSection} from "./styles";

interface ISection {
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<ISection> = ({className, children}) => {
    return (
        <BaseSection className={className}>
            {children}
        </BaseSection>
    )
}
export default Section;
