

const FuzzyScript = () => {
  const q = new Date();
  const hours = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve"
  };
  const minutes = {
    0: "o'clock",
    1: "o'clock",
    2: "o'clock",
    3: "o'clock",
    4: "o'clock",
    5: "Five Past",
    6: "Five Past",
    7: "Five Past",
    8: "Five Past",
    9: "Five Past",
    10: "Ten Past",
    11: "Ten Past",
    12: "Ten Past",
    13: "Ten Past",
    14: "Ten Past",
    15: "a Quarter Past",
    16: "a Quarter Past",
    17: "a Quarter Past",
    18: "a Quarter Past",
    19: "a Quarter Past",
    20: "Twenty Past",
    21: "Twenty Past",
    22: "Twenty Past",
    23: "Twenty Past",
    24: "Twenty Past",
    25: "Twentyfive Past",
    26: "Twentyfive Past",
    27: "Twentyfive Past",
    28: "Twentyfive Past",
    29: "Twentyfive Past",
    30: "Half Past",
    31: "Half Past",
    32: "Half Past",
    33: "Half Past",
    34: "Half Past",
    35: "Twentyfive to",
    36: "Twentyfive to",
    37: "Twentyfive to",
    38: "Twentyfive to",
    39: "Twentyfive to",
    40: "Twenty to",
    41: "Twenty to",
    42: "Twenty to",
    43: "Twenty to",
    44: "Twenty to",
    45: "a Quarter to",
    46: "a Quarter to",
    47: "a Quarter to",
    48: "a Quarter to",
    49: "a Quarter to",
    50: "Ten to",
    51: "Ten to",
    52: "Ten to",
    53: "Ten to",
    54: "Ten to",
    55: "Five to",
    56: "Five to",
    57: "Five to",
    58: "Five to",
    59: "Five to"
  }
  const time = () => {
    if (q.getHours() === 12 && q.getMinutes() <= 5) return "It's High Noon";
    if (q.getMinutes() < 5) return `It is ${hours[q.getHours() % 12]} ${minutes[q.getMinutes()]}`;
    if (q.getMinutes() < 34) return `It is ${minutes[q.getMinutes()]} ${hours[q.getHours() % 12]}`;
    return `It is ${minutes[q.getMinutes()]} ${hours[(q.getHours() + 1) % 12]}`;
  }
  // console.log(time());
  return time();
}

FuzzyScript();
// const interval = setInterval(fuzzyClock, 1000);

// $(document).ready(function() {

//     // all custom jQuery will go here
// });

export default FuzzyScript;