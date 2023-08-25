(() => {
  // window.addEventListener("scroll", () => {
  //   const e = document.getElementById("navbar");
  //   const maxHeight = this.document.documentElement.clientHeight;

  //   if (this.scrollY > maxHeight - (maxHeight * 0.2)) {
  //     e.classList.add("active");
  //   } else {
  //     e.classList.remove("active");
  //   }
  // });

  window.addEventListener(
    "scroll",
    () => {
      const maxHeight = this.document.documentElement.clientHeight;

      document.body.style.setProperty("--scroll", (this.scrollY / maxHeight));
    },
    false
  );
})();
