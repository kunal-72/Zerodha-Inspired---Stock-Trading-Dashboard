import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({

  openOrderWindow: (uid, mode) => {},

  closeOrderWindow: () => {},

});


export const GeneralContextProvider = (props) => {

  const [isOrderWindowOpen, setIsOrderWindowOpen] = useState(false);

  const [selectedStockUID, setSelectedStockUID] = useState("");

  const [orderMode, setOrderMode] = useState("BUY");


  // Order window open
  const handleOpenOrderWindow = (uid, mode) => {

    setIsOrderWindowOpen(true);

    setSelectedStockUID(uid);

    setOrderMode(mode);

  };


  // Order window close
  const handleCloseOrderWindow = () => {

    setIsOrderWindowOpen(false);

    setSelectedStockUID("");

    setOrderMode("BUY");

  };


  return (

    <GeneralContext.Provider
      value={{

        openOrderWindow: handleOpenOrderWindow,

        closeOrderWindow: handleCloseOrderWindow,

      }}
    >

      {props.children}


      {isOrderWindowOpen && (

        <BuyActionWindow
          uid={selectedStockUID}
          mode={orderMode}
        />

      )}

    </GeneralContext.Provider>

  );

};


export default GeneralContext;