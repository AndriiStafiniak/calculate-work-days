{
  const secondtDate = document.querySelector(".js-secondDate");
  const firstDate = document.querySelector(".js-firstDate");

  const calculateDaysAtWork = (fromDate, toDate) => {
    let daysAtWork = 0;
    let firstDate = new Date(fromDate);
    while (firstDate <= new Date(toDate)) {
      const day = firstDate.getDay();
      if (day !== 0 && day !== 6) {
        //0 - sobota, 6 - niedziela
        daysAtWork++;
      }
      firstDate.setDate(firstDate.getDate() + 1);
    }
    return daysAtWork;
  };

  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", (event) => {
      let fromDate = firstDate.value;
      let toDate = secondtDate.value;
      event.preventDefault();
      const result = calculateDaysAtWork(fromDate, toDate);
      const resultText = document.querySelector(".js-result");
      resultText.innerHTML = `<p> Ilośc roboczych dni:<strong> ${result}<strong></p>`;
    });
  };
  init();
}
