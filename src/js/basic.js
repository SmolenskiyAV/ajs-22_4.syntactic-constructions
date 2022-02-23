export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

export function checkNumberInput(value) { // функция преобразования строки в число

    try {

      if ((value === true) || (value === false) || (value === null)) value = undefined;  // если параметр булевый или null - не преобразовываем в числа (выдаём ошибку)

      return Number(value); // преобразование входного параметра в число

    }
    catch (e) {
      console.log('Ошибка: ', e);
    }
}


export const arrOfOdjets = [ // исходный массив объектов
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
];

export function findBy(qualityName, valueOfQaulityName, sourceArray) { // функция поиска обекта в исходном массиве по свойству объекта и значению этого свойства

  for (let i = 0; i < sourceArray.length; i++) {  // перебор объектов исходного массива
    let tempObject = undefined;
    for (let quality in quality.sourceArray[i]) {  // перебор свойств каждого объекта в исходном массиве
      if ((quality === qualityName) && (quality.sourceArray[i] === valueOfQaulityName)) { // если есть совпадение по свойству и его значению (подразумевается уникальность каж. свойства обекта в массиве)
        tempObject = quality.sourceArray[i]; // передаём найденный объект в возврат функции
      }
    }
  }
  return tempObject;
}