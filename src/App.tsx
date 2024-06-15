import Card from "./components/Card";
import { data } from "./utils";
import DesktopHeaderImage from "/images/bg-header-desktop.svg";
import MobileHeaderImage from "/images/bg-header-mobile.svg";

export default function App() {
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
            <main className="w-full flex flex-col lg:px-[10vw] lg:py-20 gap-4">
                {data.map((item) => {
                    return <Card {...item} key={item.id} />;
                })}
            </main>
        </div>
    );
}
