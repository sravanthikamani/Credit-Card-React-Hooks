// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CardDisplayContainer = styled.div`
  background-image: linear-gradient(#3b4b69, #344e7a);
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const CreditCardHeading = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'Roboto';
  border-bottom: 3px solid #ffd773;
`
// export const LineBreak = styled.br`
//   color: #ffd773;
//   border: 2px solid #ffd773;
//   font-size: 3px;
// `
export const CreditCardCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 40%;
  width: 95%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
`
export const CardNumber = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #ffffff;
`
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5px;
`
export const CardName = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #ffffff;
`
export const CardNameDes = styled.p`
  font-size: 17px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #ffffff;
  margin-top: 2px;
`
export const CardInputsContainer = styled.div`
  height: 100vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputCreditCard = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input`
  width: 85%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #344e7a;
  margin: 10px;
  padding: 5px;
`
export const CardHeadingIs = styled.h1`
  font-size: 19px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #344e7a;
`