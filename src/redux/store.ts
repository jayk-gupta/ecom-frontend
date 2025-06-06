import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./product/productsAPI";
import { authAPI } from "./user/authAPI";
import authReducer from "./user/authSlice";
import { cartAPI } from "./cart/cartAPI";
import { userAPI } from "./user/userAPI";
import dialogReducer from "./user/dialogSlice";
import { chatbotAPI } from "./user/chatbotAPI";
export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [cartAPI.reducerPath]: cartAPI.reducer,
    [chatbotAPI.reducerPath]: chatbotAPI.reducer,
    dialog: dialogReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(authAPI.middleware)
      .concat(cartAPI.middleware)
      .concat(userAPI.middleware)
      .concat(chatbotAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
