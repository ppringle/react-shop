import React, {useState, createContext, ReactNode} from "react";
import "./Tabs.css";

interface ITabProps {
    name: string;
    initialActive?: boolean;
    children?: ReactNode
}

interface ITabsContext {
    activeTabName: string;
    handleTabClick: (name: string) => void;
}

const TabsContext = createContext<ITabsContext | null>(null);

export const Tab: React.FC<ITabProps> = (props) => {
    return (
        <TabsContext.Consumer>
            {(context) => {

                const activeTabName = context?.activeTabName ? context.activeTabName : props.initialActive ? props.name : "";

                const handleTabClick = () => {
                    if (context?.handleTabClick) {
                        context.handleTabClick(props.name);
                    }
                }

                return (
                    <li onClick={handleTabClick} className={props.name === activeTabName ? 'active' : ""}>
                        {props.children}
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

    const handleTabClick = (name: string) => {
        setActiveTabName(name);
    }

    return (
        <TabsContext.Provider value={{activeTabName: activeTabName ? activeTabName : "", handleTabClick}}>
            <ul className="tabs">
                {props.children}
            </ul>
        </TabsContext.Provider>
    )
};

export default Tabs;