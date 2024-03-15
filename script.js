{
  const firstDate = document.querySelector(".js-firstDate");
  const secondtDate = document.querySelector(".js-secondDate");

  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(firstDate.value);
      console.log(secondtDate.value);
    });
  };
  init();
}
