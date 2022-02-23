import sum, {checkNumberInput, arrOfOdjets, findBy} from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

// проверка преобразования функцией checkNumberInput валидных значений 
test('shoud indicate number', () => {
  const result = typeof checkNumberInput(' 334 ');
  expect(result).toBe('number');
});

// проверка преобразования функцией checkNumberInput невалидных значений 
test('shoud indicate NaN', () => {
  const result = checkNumberInput(' 3j34 ');
  expect(result).toBe(NaN);
});

// проверка поиска функцией findBy объекта по известному свойству и его значению в исходном массиве объектов arrOfOdjets
test('shoud indicate: MATCH! ', () => {
  const result = undefined;
  if (findBy('name', 'урон', arrOfOdjets) === {
    name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'
    } ) 
    result = 'MATCH!';
  expect(result).toBe('MATCH!');
});