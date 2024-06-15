import type { Unpacked, data } from "../utils";

export default function Card(props: Unpacked<typeof data>) {
    const item = props;
    return (
        <div className="flex lg:items-center bg-white p-8 lg:pt-8 pt-9 pl-10 rounded-md drop-shadow-lg gap-6 border-white relative lg:flex-row flex-col">
            {item.featured && (
                <div className="absolute h-full left-0 top-0 w-[10px] rounded-l-md overflow-hidden">
                    <div className="h-full w-[5px] left-0 top-0 bg-dark_cyan"></div>
                </div>
            )}
            <img
                src={item.logo}
                alt={item.company + " logo"}
                className="lg:relative absolute size-12 lg:size-24 -translate-y-[3.8rem] lg:translate-y-0"
            />
            <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                    <span className="font-league font-bold text-dark_cyan pr-5">
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
                <p className="py-2 font-league font-bold lg:text-2xl">
                    {item.position}
                </p>
                <div className="flex">
                    <span className="font-league text-dark_grayish_cyan font-medium">
                        {item.postedAt}
                    </span>
                    <div className="font-league text-lg lg:px-4 px-2 text-dark_grayish_cyan">
                        ‧
                    </div>
                    <span className="font-league text-dark_grayish_cyan font-medium">
                        {item.contract}
                    </span>
                    <div className="font-league text-lg lg:px-4 px-2 text-dark_grayish_cyan">
                        ‧
                    </div>
                    <span className="font-league text-dark_grayish_cyan font-medium">
                        {item.location}
                    </span>
                </div>
                <div className="p-1 w-full lg:hidden border-b-[1px] -mb-1 mt-1 border-dark_grayish_cyan">

                </div>
            </div>
            <div className="flex-grow flex lg:justify-end gap-3 flex-wrap">
                <button className="font-league bg-light_cyan text-dark_cyan font-bold p-2 py-1">
                    {item.role}
                </button>
                <button className="font-league bg-light_cyan text-dark_cyan font-bold p-2 py-1">
                    {item.level}
                </button>
                {item.languages.map((d) => (
                    <button
                        key={d}
                        className="font-league bg-light_cyan text-dark_cyan font-bold p-2 py-1"
                    >
                        {d}
                    </button>
                ))}
            </div>
        </div>
    );
}
