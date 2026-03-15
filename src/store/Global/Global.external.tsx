type ErrorContent = {
  title?: string;
  message?: string;
};

type ErrorFn = (errorContent: ErrorContent) => void;

let externalSetErrorContent: ErrorFn | null = null;

export const setGlobalErrorHandler = (fn: ErrorFn) => {
  externalSetErrorContent = fn;
};

export const triggerGlobalError = (errorContent: ErrorContent) => {
  if (externalSetErrorContent) {
    externalSetErrorContent(errorContent);
  } else {
    // eslint-disable-next-line no-console
    console.warn('No global error handler set');
  }
};
