const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
     todoList.splice(${index}, 1);
     renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");

  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = "";

  renderTodoList();
}

/*
// 11a
const nekiNiz = [10, 20, 30];

nekiNiz[2] = 99;

console.log(nekiNiz);

//11b
function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastValue([1, 20, 22, 24, 5]));

//11c
function arraySwap(array) {
  const lastIndex = array.length - 1;

  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}

console.log(arraySwap([1, 20, 22, 24, 5]));

//11d
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

//11e
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

//11f

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }

// let i = 5;

// while (i >= 0) {
//   console.log(i);
//   i--;
// }

//11g
const array = [1, 2, 3];
const result = [];

for (let i = 0; i < array.length; i++) {
  result.push(array[i] + 1);
}

console.log(result);

//11h
function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  return result;
}

console.log(addOne([1, 2, 3]));

//11i
function addNum(array, num) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * num);
  }

  return result;
}

console.log(addNum([1, 2, 3], 2));

//11j
function addArrays(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(addArrays([1, 1, 2], [1, 1, 3]));

//11k

function countPositive(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result++;
    }
  }

  return result;
}

console.log(countPositive([1, -3, 5]));

//11l

function minMax(nums) {
  const result = {
    min: null,
    max: null,
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (result.min === null || value < result.min) {
      result.min = value;
    }

    if (result.max === null || value > result.max) {
      result.max = value;
    }
  }
  return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([]));
console.log(minMax([3]));

//11n

function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(["apple", "grape", "apple"]));
 */
