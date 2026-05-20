// Находим поле email по его атрибуту name
const emailInput = document.querySelector('input[name="email"]');

emailInput.addEventListener('blur', function() {
    // Проверяем, есть ли в тексте собачка @
    if (!emailInput.value.includes('@') && emailInput.value !== '') {
        emailInput.style.borderColor = 'red'; // Красим рамку в красный, если нет @
    } else {
        emailInput.style.borderColor = ''; // Возвращаем как было, если всё ок
    }
});


// 1. Находим нашу форму на странице
const myForm = document.getElementById('reservationForm');

// 2. Следим за моментом, когда пользователь нажимает кнопку отправки
myForm.addEventListener('submit', function(event) {
    
    // Перехватываем отправку, чтобы страница не перезагружалась
    event.preventDefault(); 
    
    // 3. Выводим простое окошко на экран
    alert('Thank you! Your reservation has been confirmed.');
    
    // 4. Очищаем все поля формы после клика
    myForm.reset();
});