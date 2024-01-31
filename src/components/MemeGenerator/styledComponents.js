// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.div`
  background-color: #ffffff;
  width: 90%;
  flex-flow: 1;
  display: flex;
  align-items: flex-start;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FormElement = styled.form`
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const MainHeading = styled.h1`
  width: 90%;
  font-family: 'Roboto';
  color: #35469c;
  font-weight: 700;
  font-size: 30px;
  @media (max-width: 767px) {
    font-size: 28px;
    text-align: center;
  }
`

export const LabelElement = styled.label`
  width: 90%;
  font-family: 'Roboto';
  color: #7e858e;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`

export const InputElement = styled.input`
  width: 90%;
  height: 30px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  font-family: 'Roboto';
  background-color: transparent;
  color: #5a7184;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 10px;
  padding-left: 10px;
  outline: none;
  @media (max-width: 767px) {
    font-size: 12px;
    width: 100%;
  }
`

export const SelectElement = styled.select`
  width: 90%;
  height: 30px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 500;
  margin-bottom: 10px;
  padding-left: 10px;
  font-size: 14px;
  outline: none;
  @media (max-width: 767px) {
    font-size: 14px;
    width: 100%;
  }
`

export const OptionElement = styled.option``

export const GeneratorButton = styled.button`
  width: 30%;
  height: 35px;
  background-color: #0b69ff;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 50%;
    font-size: 12px;
  }
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.generateInputUrl});
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
    order: -1;
    margin-bottom: 20px;
  }
`
export const Heading = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: ${props => props.fontSize}px;
`