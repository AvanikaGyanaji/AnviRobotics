/**
 * Custom function to scroll to a target element over a specified duration.
 * @param {HTMLElement} targetElement - The element to scroll to.
 * @param {number} duration - The total duration of the scroll animation in milliseconds (e.g., 500).
 */
export const scrollToTarget = (targetElement, duration = 500) => {
  // if (!targetElement) return;

  // const startPosition = window.scrollY;
  // const targetPosition =
  //   targetElement.getBoundingClientRect().top + startPosition;
  // const distance = targetPosition - startPosition;
  // let startTime = null;

  // const animation = (currentTime) => {
  //   if (startTime === null) startTime = currentTime;
  //   const timeElapsed = currentTime - startTime;

  //   // Easing function: easeInOutQuad (for a smoother start and end)
  //   const t = timeElapsed / duration;
  //   const progress = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  //   // Calculate the new scroll position
  //   const newScrollPosition = startPosition + distance * progress;

  //   window.scrollTo(0, newScrollPosition);

  //   if (timeElapsed < duration) {
  //     // Continue the animation loop
  //     window.requestAnimationFrame(animation);
  //   } else {
  //     // Ensure the scroll lands exactly on the target
  //     window.scrollTo(0, targetPosition);
  //   }
  // };

  // window.requestAnimationFrame(animation);
};
