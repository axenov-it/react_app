const initialState = {
  images: ["slide-1.jpg", "slide-2.jpg", "slide-3.jpg"],
};

const homeReducer = () => {
  console.log("RUN HOME REDUCER");
  return initialState;
};

export default homeReducer;
