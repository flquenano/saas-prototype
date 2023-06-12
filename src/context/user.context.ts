import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type User = {
  id: string;
  name: string;
  email: string;
  dob: string;
};

interface userState {
  user: User;
  set: (userData: User) => void;
  update: (userData: { ["key"]: string }) => void;
  reset: () => void;
}

const initState = {
  id: "",
  name: "",
  email: "",
  dob: ""
};

export const userStore = create<userState>()(
  devtools(
    persist(
      immer((set) => ({
        user: initState,
        set: (userData) =>
          set((state) => {
            state.user = userData;
          }),
        update: (userData) =>
          set((state) => {
            state.user = { ...state.user, ...userData };
          }),
        reset: () => {
          set((state) => {
            state.user = initState;
          });
        }
      })),
      {
        name: "saas-user", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage) // (optional) by default, 'localStorage' is used
      }
    )
  )
);
