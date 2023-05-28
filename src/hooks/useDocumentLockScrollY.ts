export const useDocumentLockScrollY = () => {
  const lockScrollY = () => {
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";
  };

  const unlockScrollY = () => {
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
  };

  return {
    lockScrollY,
    unlockScrollY,
  };
};
