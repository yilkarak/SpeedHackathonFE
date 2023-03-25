import React, { useState } from "react";

const CustomerContext = React.createContext({
    customerId: "",
    setCustomerId: () => {}
});

export const CustomerContextProvider = props => {
    const [customerId, setCustomerId] = useState(null);

    const setCustomerIdHandler = (id) =>{
        setCustomerId(id)
    }

    return  (
        <CustomerContext.Provider
        value={{
            customerId: customerId,
            setCustomerId: setCustomerIdHandler
        }}
        >
            {props.children}
        </CustomerContext.Provider>
    )
};

export default CustomerContext;