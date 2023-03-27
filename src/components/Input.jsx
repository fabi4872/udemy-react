import { useState, useEffect } from 'react';

export const Input = ({ type, name, value, onChangeForm, placeholder, autoComplete }) => {
  const [ inputValue, setInputValue ] = useState('');

  const onChange = ({ target }) => {
    setInputValue( target.value );
    onChangeForm( target );
  }

  useEffect(() => {  
    return () => {
      
    }
  }, [ inputValue ]);
  
  return (
    <input 
      type={ type }
      name={ name }
      value={ value }
      onChange={ onChange }
      placeholder={ placeholder }
      autoComplete={ autoComplete }
    />
  )
}
