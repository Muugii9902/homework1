// Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]
let arr = [1, 2, 4];
let = arr.push(8);
console.log(arr);

function addArr(arr, too) {
  arr.push(too);
  return arr;
}
let newArr = addArr([], 10);
console.log("NewArr:", newArr);
newArr = addArr([1, 2, 3, 4], 10);
console.log("NewArr:", newArr);

//2. Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]

function createNewArr(len, min, max) {
  let arr = [];
  for (let i = 1; i < len; i++) {
    let rndToo = 0;
    while (rndToo < min) {
      rndToo = Math.floor(Math.random() * max);
    }
    arr.push(rndToo);
  }
  return arr;
}
let a = createNewArr(5, 100, 300);
console.log("Min Max:", 5, 100, 300);
console.log("Arr:", a);

// 3 Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.
// function avg_max(too) {
//   let array = too.split(",");
//   let sum = 0;
//   let avg = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + Number(array[i]);
//     avg = sum / Number(array.length);
//   }
//   let obj = { sum: sum, avg: avg };
//   return obj;
// }
// let niilber1 = prompt("Too oruulah");
// console.log(avg_max(niilber1));

// bodlogo 4 Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox
// console.log(arr3);
let text = "the quick brown fox";
function large_text(abc) {
  let arr3 = text.split(" ");
  for (let i = 0; i < arr3.length; i++) {
    arr3[i] = arr3[i].charAt(0).toUpperCase() + arr3[i].slice(1);
  }
  return arr3.join(" ");
}

console.log(text, "=>", large_text(text));

// function large_text(arr3){
//   for (let i=0;i<arr3.length;i++)

// }

// const textArr = ["hello", "world", "pinecone"];
// let arr1 = [
//   ["t", "h", "e"],
//   ["q", "u", "i", "c", "k"],
//   ["b", "r", "o", "w", "n"],
//   ["f", "o", "x"],
// ];
// for (let i = 0; i < arr1.length; i++) {
// for (let j = 0; j < arr1[i].length; j++) {
// Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']
// }
// bodlogo 5
function reverseText(text) {
  // "hello world" => split(" ") => ["hello","world"]
  return text.split("").reverse().join("");
  // ["h","e","l","l","o"] =>["o","l","l","e","h"]
}

const textArr = ["Hello", "World", "Pinecone"];
// ["olleH", "dlroW", "enoceniP"];
function reverseArray(inputArr) {
  let r = [];
  for (let i = 0; i < inputArr.length; i++) {
    r.push(reverseText(inputArr[i]));
  }
  return r;
}

let ra = reverseArray(textArr);
console.log(textArr);
console.log(ra);

// bodlogo 6 Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false
// let text1 = "aminal world";
// function search_text(str findletters) {
//   let array4 = text2.split(" ");

//   for (let i = 0; i < array4.length; i++) {
//     if (array4[i] === text2) {
//     }
//     return true;
//   }
//   else{return false;}
// }
// bodolgo 7

const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 100,
    totalPrice: 50.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Cake",
    unitPrice: 8000,
    amount: 10,
    totalPrice: 80.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Candy",
    unitPrice: 2000,
    amount: 16,
    totalPrice: 32.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Icecream",
    unitPrice: 6000,
    amount: 12,
    totalPrice: 72.0,
    casherId: 1,
    date: "2022-11-01",
  },
];
// Дараах даалгаварыг хийж гүйцэтгэнэ үү.

// 1. Нийт борлуулалтын дүнг тооцоолох.

// 2. Нийт борлуулагдсан барааны тоог тооцоолох.
function calculateTotalPrice(data) {
  let sum = 0;
  let too10 = 0;

  for (let i = 0; i < data.length; i++) {
    sum = sum + data[i].totalPrice;
    too10 = too10 + data[i].amount;
  }
  let obj2 = { une: sum, too: too10 };
  return obj2;
}

let total = calculateTotalPrice(data);
console.log("niit borluulaltiin dun", total);

// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.
function bubbleSort(data) {
  let n = data.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (data[j].totalPrice < data[j + 1].totalPrice) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data.slice(0, 3);
}

console.log("=======>", bubbleSort(data));

// 4. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
function bubbleSort1(data) {
  let n = data.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (data[j].totalPrice > data[j + 1].totalPrice) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data.slice(0, 3);
}
//   let top3 = data.slice(0,3)
console.log("===>", bubbleSort1(data));
