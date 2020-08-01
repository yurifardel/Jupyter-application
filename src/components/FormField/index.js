import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea{
    min-heigth: 150px;
    overflow: hidden;
    padding: 20px 10px 100px 10px
    
  }
  input[type="color"]{
    padding-left: 50px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight 300;
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  margin-bottom: border-color .3s;

  &:focus{
    border-bottom-color: var(--primary);
  
  }&:focus:not([type='color']) + ${Label.Text}{
    transform: scale(.6) translateY(-10px);

  }
  ${({value}) =>{
    const hasValue = value.length > 0;
    return hasValue && css`
      &:not([type='color']) + ${Label.Text}{
        transform: scale(.6) translateY(-10px);
      }
    `;
  }}
`;


function FormField({label, type, name, value, onChange}){

  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  return(
    <FormFieldWrapper>
      <label>
        <Input
          as={tag}
          id={fieldId} 
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          />
          <Label.Text>
            {label}:
          </Label.Text>
      </label>
    </FormFieldWrapper>
  )
  
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;