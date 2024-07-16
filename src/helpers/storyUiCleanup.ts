type QuitStoryUiCleanupType = () => void;

export const quitStoryUiCleanup: QuitStoryUiCleanupType = () => {
  document.fullscreenEnabled && document.exitFullscreen();
};
