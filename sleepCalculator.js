function getSleepHours (day) {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 5;
    } else if (day === 'friday') {
      return 4;
    } 
  };
  
  console.log(getSleepHours ('tuesday'));
  
  function getActualSleepHours () {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday');
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 5;
  }
  
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect amount of sleep achived!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + 'More sleep than needed!');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest!');
    }
  };
  
  calculateSleepDebt();
