import React, { useEffect } from "react";

const LocalStorage = (props) => {
    useEffect(() => {
        const savedStorageItems = JSON.parse(localStorage.getItem("expenses")) || [];

        if (savedStorageItems.length > 0) {
            console.log("we have storage items");
        } else {
            console.log("no storage items found");
        }
    }, []);

    useEffect(() => {
        //console.log("use effect rendered");
        localStorage.setItem("expenses", JSON.stringify(props.expenses));
    }, [props.updateStorage]);

    return null;
};

export default LocalStorage;
