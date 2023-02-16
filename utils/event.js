export const dispatchEvent = (evtName, params = {}) =>
  window.dispatchEvent(new CustomEvent(evtName, { detail: params }));

export const subscribe = (evtName, handler) => {
  window.addEventListener(evtName, handler);
  return () => window.removeEventListener(evtName, handler);
};
