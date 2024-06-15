import { useFilterElm, useSetFilterElm } from "./FilterElmProvider";
import TagButton from "./TagButton";

export default function FilterBar() {
    const { role, level, languages } = useFilterElm();
    const setFilterElm = useSetFilterElm();
    if (!role && !level && languages.length === 0) {
        return <div className="h-16 bg-transparent"></div>;
    }

    return (
        <div className="bg-white px-8 lg:py-4 py-5 lg:pl-10 pl-6 rounded-md lg:-translate-y-[50%] -translate-y-8 lg:mb-0 mb-8 flex justify-between drop-shadow-lg">
            <div className="flex-grow min-w-0 flex-wrap flex lg:gap-3 gap-4 items-center h-full">
                {role && (
                    <TagButton
                        showdelete={true}
                        onMouseDown={() =>
                            setFilterElm((prev) => {
                                prev.role = null;
                                return { ...prev };
                            })
                        }
                    >
                        {role}
                    </TagButton>
                )}
                {level && (
                    <TagButton
                        showdelete={true}
                        onMouseDown={() => {
                            setFilterElm((prev) => {
                                prev.level = null;
                                return { ...prev };
                            });
                        }}
                    >
                        {level}
                    </TagButton>
                )}
                {languages.map((item) => (
                    <TagButton
                        showdelete={true}
                        onMouseDown={() =>
                            setFilterElm((prev) => {
                                prev.languages = prev.languages.filter(
                                    (d) => d !== item
                                );
                                return { ...prev };
                            })
                        }
                        key={`tagBar ${item}`}
                    >
                        {item}
                    </TagButton>
                ))}
            </div>
            <button
                onMouseDown={() =>
                    setFilterElm((prev) => {
                        prev.role = null;
                        prev.level = null;
                        prev.languages = [];
                        return { ...prev };
                    })
                }
                className="font-league text-dark_grayish_cyan hover:text-dark_cyan hover:underline lg:font-semibold font-bold transition"
            >
                Clear
            </button>
        </div>
    );
}
