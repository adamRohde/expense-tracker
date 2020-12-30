import React from "react";

const LocalStorage = (props) => {
    console.log(" update " + props.updateStorage);
    console.log(props.expenses);
    localStorage.setItem("expenses", JSON.stringify(props.expenses));

    // useEffect(() => {
    //     localStorage.setItem("expenses", JSON.stringify(props.expenses));
    // });

    return null;
};

export default LocalStorage;
