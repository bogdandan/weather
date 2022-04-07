import { setupWorker } from "msw";
import { handlers } from "./handlers";

// NOTE: This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
