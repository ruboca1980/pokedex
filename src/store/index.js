import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/trainerName.slices";

const store = configureStore ({
  reducer: {
    nameTrainer
  }
})

export default store