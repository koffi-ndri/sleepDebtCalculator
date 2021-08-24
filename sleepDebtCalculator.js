const getSleepHours = (day) =>{
  switch(day){
    case 'monday':
      return 8;

    case 'tuesday':
      return 6;

    case 'wednesday':
      return 7;

    case 'thursday':
      return 8;

    case 'friday':
      return 5;

    case 'saturday':
      return 4;

    case 'sunday':
      return 5;

    default:
      console.log('Invalid day!');
      break;
  }
}
const getActualSleepHours = () => 6+7+9+6+5+8+7;

const getIdealSleepHours = idealHours => idealHours*7;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  
  if(actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!');
  }else if(actualSleepHours > idealSleepHours){
    console.log(`You got more ${actualSleepHours - idealSleepHours} hour/hours sleep than needed!`);
  }else{
    console.log(`You should get some rest for ${idealSleepHours - actualSleepHours} hours!`);
  }
}
calculateSleepDebt();