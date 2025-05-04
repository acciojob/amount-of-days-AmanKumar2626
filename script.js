//your JS code here. If required.
function daysOfAYear(value){
   if((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0) {
       return 366; 
   } 
	else return 365;
}
 function checkDays() {
      const yearInput = document.getElementById('year').value;
      const year = parseInt(yearInput);

      if (isNaN(year) || year < 1 || year > 9999) {
        document.getElementById('result').innerText = "Please enter a valid year between 1 and 9999.";
        return;
      }

      const days = daysOfAYear(year);
      document.getElementById('result').innerText = `${year} has ${days} days.`;
    }