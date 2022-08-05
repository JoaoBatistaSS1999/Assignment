/// <reference types="react-scripts" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_TEST_VALUE: string;
      REACT_APP_NUMBER_ID: string;
    }
  }
}

export {};
