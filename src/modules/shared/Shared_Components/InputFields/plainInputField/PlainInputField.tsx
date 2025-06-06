import React from 'react';
import { InputType } from '../inputTypes';
import classNames from 'classnames';
import { DarkModeContext } from '../../../../../Store/StoreThemeMode';

interface Props {
  title: string;
  initialValue: string;
  inputType: InputType;
  onChangeHandler: (data: string) => void;
}

export const PlainInputField: React.FC<Props> = ({
  title,
  inputType,
  initialValue,
  onChangeHandler,
}) => {
  const { isDark } = React.useContext(DarkModeContext);
  const normalizedTitle = title.replaceAll(' ', '');

  return (
    <div className="plain-input">
      <label className="body-text" htmlFor={`input-${normalizedTitle}`}>
        {title}
      </label>

      <input
        className={classNames('plain-input__field', {
          'plain-input__field--dark': isDark,
        })}
        id={`input-${normalizedTitle}`}
        value={initialValue}
        onChange={event => {
          const value =
            inputType === InputType.Number
              ? `${event.target.value}`
              : event.target.value;

          onChangeHandler(value);
        }}
        type={inputType}
        required
      />
    </div>
  );
};
