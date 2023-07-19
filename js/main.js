
// Проверить наличие данных
if (localStorage.getItem('data')) {
  // Использовать кешированные данные
  const data = JSON.parse(localStorage.getItem('data'));

} else {
  // Запросить данные с сервера
  fetch('/data')
    .then(response => response.json())
    .then(data => {
      // Сохранить данные в хранилище
      localStorage.setItem('data', JSON.stringify(data));

      // Использовать данные
    })
}
