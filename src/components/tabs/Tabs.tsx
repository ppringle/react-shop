import React, {useState, createContext, ReactNode} from "react";
import "./Tabs.css";

interface ITabProps {
    name: string;
    initialActive?: boolean;
    heading: () => string | React.ReactElement;
    children?: React.ReactNode;
}

interface ITabsContext {
    activeTabName: string;
    handleTabClick: (name: string, content: React.ReactNode) => void;
}

const TabsContext = createContext<ITabsContext | null>(null);

export const Tab: React.FC<ITabProps> = (props) => {
    return (
        <TabsContext.Consumer>
            {(context) => {

                const activeTabName = context?.activeTabName ? context.activeTabName : props.initialActive ? props.name : "";

                const handleTabClick = () => {
                    if (context?.handleTabClick) {
                        context.handleTabClick(props.name, props.children);
                    }
                }

                return (
                    <li onClick={handleTabClick} className={props.name === activeTabName ? 'active' : ""}>
                        {props.heading()}
                    </li>
                )
            }}
        </TabsContext.Consumer>
    );
}

type TabsProps = {
    children?: ReactNode
}

const Tabs: React.FC<TabsProps> = (props) => {

    const [activeTabName, setActiveTabName] = useState<string>("");
    const [activeContent, setActiveContent] = useState<React.ReactNode | null>(null);

    const handleTabClick = (name: string, content: React.ReactNode) => {
        setActiveTabName(name);
        setActiveContent(content);
    }

    return (
        <TabsContext.Provider value={{activeTabName: activeTabName ? activeTabName : "", handleTabClick}}>
            <ul className="tabs">
                {props.children}
            </ul>
            <div>{activeContent}</div>
        </TabsContext.Provider>
    )
};

export default Tabs;