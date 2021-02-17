import React from 'react';
const initialState = {
  Abroad: [],
  Beach: [],
  'Camping Trip': [],
  'Road Trip': [],
  Cruise: [],
  'Group Tour': [],
  'Girls Trip': [],
  'solo Trip': [],
  Staycation: [],
  Caravan: [],
  Other: [],
};

export const TravelContext = React.createContext(null);
export  function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <TravelContext.Provider value={{state, setState}}>
      {props.children}
    </TravelContext.Provider>
  );
}
