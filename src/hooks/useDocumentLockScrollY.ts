export const useDocumentLockScrollY = () => {
  const lockScrollY = () => {
    document.body.style.overflowY = "hidden";
  };

  const unlockScrollY = () => {
    document.body.style.overflowY = "auto";
  };

  return {
    lockScrollY,
    unlockScrollY,
  };
};
