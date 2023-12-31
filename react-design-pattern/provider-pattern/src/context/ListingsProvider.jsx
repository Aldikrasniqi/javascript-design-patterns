import React from "react";
import useListings from "../components/hooks/useListings";

const ListingsContext = React.createContext();

export function useListingsContext(){
    return React.useContext(ListingsContext);
};

export function ListingsProvider(props){
    const listings = useListings();
    if(!listings) return null;
    return (
        <ListingsContext.Provider value={listings}>
            {props.children}
        </ListingsContext.Provider>
    )
}