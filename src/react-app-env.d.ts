/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_WEATHER_BASE_API: string;
    readonly REACT_APP_APPID: string;
  }
}
