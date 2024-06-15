import type { Unpacked, data } from "../utils";

export default function Card(props: Unpacked<typeof data>) {
    const item = props;
    return (
        <div
            className={`flex items-center bg-white p-8 pl-10 rounded-md drop-shadow-lg gap-6 border-white relative overflow-hidden`}
        >
            {item.featured && (
                <div className="absolute h-full w-[5px] left-0 top-0 bg-dark_cyan"></div>
            )}
            <img src={item.logo} alt={item.company + " logo"} />
            <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                    <span className="font-league font-bold text-dark_cyan pr-2">
                        {item.company}
                    </span>
                    {item.new && (
                        <div className="bg-dark_cyan text-white font-league font-bold text-xs px-[6px] py-[2px] rounded-2xl w-fit h-fit">
                            <p className="translate-y-[1px] w=fit">NEW!</p>
                        </div>
                    )}
                    {item.featured && (
                        <div className="bg-black text-white font-league font-bold text-xs px-[6px] py-[2px] rounded-2xl w-fit h-fit">
                            <p className="translate-y-[1px] w=fit">FEATURED</p>
                        </div>
                    )}
                </div>
                <p className="py-2 font-league font-bold text-2xl">
                    {item.position}
                </p>
                <div className="flex">
                    <span className="font-league text-dark_grayish_cyan">
                        {item.postedAt}
                    </span>
                    <div className="font-league text-lg px-4 text-dark_grayish_cyan">
                        ‧
                    </div>
                    <span className="font-league text-dark_grayish_cyan">
                        {item.contract}
                    </span>
                    <div className="font-league text-lg px-4 text-dark_grayish_cyan">
                        ‧
                    </div>
                    <span className="font-league text-dark_grayish_cyan">
                        {item.location}
                    </span>
                </div>
            </div>
            <div className="flex-grow flex justify-end gap-3">
                <button className="font-league bg-light_cyan text-dark_cyan font-bold p-2 py-1">{item.role}</button>
                <button className="font-league bg-light_cyan text-dark_cyan font-bold p-2 py-1">{item.level}</button>
                {item.languages.map((d) => (
                    <button className="font-league bg-light_cyan text-dark_cyan font-bold p-2 py-1">{d}</button>
                ))}
            </div>
        </div>
    );
}
