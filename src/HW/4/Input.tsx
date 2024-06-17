
import React from 'react';

type InputPropsType = {
  currentText: string; // Протипизировано как string
  setCurrentText: (value: string) => void; // Протипизировано как функция
};

export const Input: React.FC<InputPropsType> = (props) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setCurrentText(event.currentTarget.value); // Обновляем значение currentText
  };

  return (
    <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
  );
};
