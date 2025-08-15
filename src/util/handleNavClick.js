export const handleNavClick = (e, href) => {
  e.preventDefault();

  const targetId = href.substring(1); // Remove the # from href
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const navbarHeight = 120; // Match the scroll-padding-top value
    const targetPosition = targetElement.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};
