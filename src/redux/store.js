import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { contactReducer } from "./tellContactsReducer";

const store = configureStore({
  reducer: contactReducer,
  middleware: [...getDefaultMiddleware()]
});

export default store;
