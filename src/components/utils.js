const showElementOnScroll = (componentInstance, calibrateHeight = -200) => {
  if (
    componentInstance.getScrollPosition > componentInstance.scrollLimit - componentInstance.elementHeight - calibrateHeight &&
    componentInstance.getMobileView
  ) {
    componentInstance.showElement = true
  }
}

export { showElementOnScroll }
