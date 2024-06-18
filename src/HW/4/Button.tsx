type ButtonPropsType = {
  callBack: () => void; // Функция, которая ничего не возвращает
  name: string; // Строка
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    props.callBack(); // Вызываю функции из пропсов
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
