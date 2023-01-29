import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increase" | "decrease";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increase":
      return { count: state.count + action.payload };
    case "decrease":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      count: {state.count}
      <button onClick={() => dispatch({ type: "increase", payload: 10 })}>
        increase 10 points
      </button>
      <button onClick={() => dispatch({ type: "decrease", payload: 10 })}>
        decrease 10 points
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
};
