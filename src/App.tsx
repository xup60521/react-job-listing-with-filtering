import Card from "./components/Card";
import FilterBar from "./components/FilterBar";
import { useFilterElm } from "./components/FilterElmProvider";
import { data } from "./utils";
import DesktopHeaderImage from "/images/bg-header-desktop.svg";
import MobileHeaderImage from "/images/bg-header-mobile.svg";

export default function App() {
    const { role, level, languages } = useFilterElm();
    return (
        <div className="w-full min-h-screen h-fit bg-bg_cyan flex flex-col items-center">
            <header className="w-full h-fit bg-dark_cyan">
                <img
                    src={DesktopHeaderImage}
                    alt="desktop header image"
                    className="w-full lg:block hidden"
                />
                <img
                    src={MobileHeaderImage}
                    alt="mobile header image"
                    className="w-full lg:hidden block"
                />
            </header>
            <main className="w-full flex flex-col lg:px-[10vw] px-6 pb-16 relative">
                <FilterBar />
                {data
                    .filter((d) => {
                        if (!role) {
                            return true;
                        }
                        return d.role === role;
                    })
                    .filter((d) => {
                        if (!level) {
                            return true;
                        }
                        return d.level === level;
                    })
                    .filter((d) => {
                        if (languages.length === 0) {
                            return true;
                        }
                        let isIncluded = true;
                        languages.forEach((filterElm) => {
                            if (!d.languages.includes(filterElm)) {
                                isIncluded = false;
                            }
                        });
                        return isIncluded;
                    })
                    .map((item) => {
                        return <Card {...item} key={item.id} />;
                    })}
            </main>
        </div>
    );
}
