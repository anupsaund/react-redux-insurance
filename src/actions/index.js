export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const SET_EXCESS = "SET_EXCESS";

export function increment() {
    return {
         type: INCREMENT 
        };
}
  
export const decrement = () => (
    { 
        type: DECREMENT 
    }
);

export const reset = () => (
    { 
        type: RESET
    }
);

export const set_excess = excess => (
    { 
        type: SET_EXCESS,
        payload: { excess }
    }
);