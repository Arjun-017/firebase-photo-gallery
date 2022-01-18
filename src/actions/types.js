export const LOAD_PICTURES = () => {
  return {
    type: "LOAD_PICTURES",
  };
};

export const ADDD_PICTURE = (data) => {
  return {
    type: "ADD_PICTURE",
    payload: {
      url: data,
    },
  };
};
