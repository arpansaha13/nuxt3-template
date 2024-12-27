export default defineNuxtRouteMiddleware((to, from) => {
  // Add a hook that triggers when the page finishes loading
  useNuxtApp().hook('page:finish', () => {
    // Check if there is a scroll position saved in history.state
    if (history.state.scroll) {
      // Scroll to the saved position
      // Note: If `window` is not the scrollable element, then select and use that element instead
      // Note: If smooth scrolling is needed, wrap this line in a `setTimeout`
      window.scrollTo(history.state.scroll)
    } else {
      // If no scroll position is saved, scroll to the top
      window.scrollTo(0, 0)
    }
  })
})
