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
            <main className="w-full flex flex-col">
                {data.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="flex items-center bg-white p-4 border-2 border-white"
                        >
                            <img src={item.logo} alt={item.company + " logo"} />
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <span>{item.company}</span>
                                    {item.new && <span>NEW</span>}
                                    {item.featured && <span>FEATURED</span>}
                                </div>
                                <p>{item.position}</p>
                                <div className="flex">
                                    <span>{item.postedAt}</span>
                                    <span>{item.contract}</span>
                                    <span>P{item.location}</span>
                                </div>
                            </div>
                            <div className="flex-grow flex justify-end gap-2">
                                <button>{item.role}</button>
                                <button>{item.level}</button>
                                {item.languages.map((d) => (
                                    <button>{d}</button>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}
