const indicator = document.getElementById("indicator");

// page scroll event
window.onscroll = (e) => {
  const pageScroll = window.scrollY;
  const totalPageHight = document.body.scrollHeight;
  const deviceHeight = window.innerHeight;
  // +95,is default value of scrollbar
  const percent = (pageScroll / (totalPageHight - deviceHeight + 95)) * 100;
  indicator.style.width = `${percent}%`;
};
