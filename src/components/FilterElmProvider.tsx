import { createContext, useContext, useState } from "react";
import type { FilterElmType } from "./../utils";
import { unknown } from "zod";

const filterElmContext = createContext({
    filterElm: {
        role: null,
        level: null,
        languages: [],
    } as FilterElmType,
    setFilterElm: unknown as React.Dispatch<
        React.SetStateAction<FilterElmType>
    >,
});

export function FilterElmProvider({ children }: { children: React.ReactNode }) {
    const [filterElm, setFilterElm] = useState<FilterElmType>({
        role: null,
        level: null,
        languages: [],
    });
    return (
        <filterElmContext.Provider value={{ filterElm, setFilterElm }}>
            {children}
        </filterElmContext.Provider>
    );
}

export const useFilterElm = () => useContext(filterElmContext).filterElm;
export const useSetFilterElm = () => useContext(filterElmContext).setFilterElm;
