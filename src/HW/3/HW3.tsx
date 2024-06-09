import { useState,ChangeEvent } from 'react';

export const HW3 = () => {
  

  const [currentText, setCurrentText] = useState('');//хранит  знач текста в поле ввода
  const [texts, setTexts] = useState<string[]>([ //массив строк список задач
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value); // Обновление текущего текста в состоянии
  };
  

  const handleSave = () => {//вызываться при клике на кнопку "Сохранить
    if (currentText.trim() !== '') {
      setTexts([...texts, currentText]);
      setCurrentText('');
    }
  };

  return (
    <div id={'hw03'}>
     {currentText ? (
        <h1 id={'hw03-text'}>{currentText}</h1>
      ) : (// если поле ввода не пустое
        <h1 id={'hw03-default-text'}>Здесь появится новое дело</h1>
      )}

      <input id={'hw03-input'} type="text" value={currentText} onChange={handleChange} />

      <button id={'hw03-button'} onClick={handleSave}>
        Сохранить
      </button>

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      <ol id={'hw03-tasks'}>
        {texts.map((el, index) => (
          <li key={index} id={`hw03-task-${index}`}>
            {el}
          </li>
        ))}
      </ol>
    </div>
  );
};
