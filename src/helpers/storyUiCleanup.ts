type QuitStoryUiCleanupType = () => Promise<void>;

export const quitStoryUiCleanup: QuitStoryUiCleanupType = () =>
  document.exitFullscreen();
