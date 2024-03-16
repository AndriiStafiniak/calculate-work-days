{
  const firstDate = document.querySelector(".js-firstDate");
  const secondtDate = document.querySelector(".js-secondDate");

  //   const oneDay = 1000 * 60 * 60 * 24;
  //   console.log(oneDay);

  const calculateDaysAtWork = (fromDate, toDate) => {
    console.log("wywolana");
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
      event.preventDefault();
      let fromDate = firstDate.value;
      let toDate = secondtDate.value;
      const result = calculateDaysAtWork(fromDate, toDate);

      console.log(result);
    });
  };
  init();
}
