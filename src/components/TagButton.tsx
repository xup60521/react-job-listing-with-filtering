import IconRemove from "/images/icon-remove.svg";

export default function TagButton({
    showdelete,
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { showdelete?: boolean }) {
    if (showdelete) {
        return (
            <button
                {...props}
                className="font-league bg-light_cyan text-dark_cyan font-bold h-8 flex items-center rounded"
            >
                <span className="px-2">{children}</span>
                <div className="h-full px-2 transition bg-dark_cyan flex items-center hover:bg-very_dark_grayish_cyan rounded-r">
                    <img src={IconRemove} alt="remove icon" />
                </div>
            </button>
        );
    }
    return (
        <button
            {...props}
            className="font-league bg-light_cyan text-dark_cyan font-bold h-8 transition hover:bg-dark_cyan hover:text-white rounded"
        >
            <span className="px-2">{children}</span>
        </button>
    );
}
