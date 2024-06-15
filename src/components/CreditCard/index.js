// Write your code here
import {useState} from 'react'
import {
  AppContainer,
  CardDisplayContainer,
  CreditCardHeading,
  CreditCardCard,
  CardNumber,
  CardDetails,
  CardName,
  CardNameDes,
  CardInputsContainer,
  InputCreditCard,
  Input,
  CardHeadingIs,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')
  const changeCardNumber = event => {
    setCardNumber(event.target.value)
  }
  const changeCardName = event => {
    setName(event.target.value)
  }
  return (
    <AppContainer>
      <CardDisplayContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <CreditCardCard data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardDetails>
            <CardName>CARDHOLDER NAME</CardName>
            <CardNameDes>{name.toUpperCase()}</CardNameDes>
          </CardDetails>
        </CreditCardCard>
      </CardDisplayContainer>
      <CardInputsContainer>
        <InputCreditCard>
          <CardHeadingIs>Payment Method</CardHeadingIs>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={changeCardNumber}
            value={cardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={changeCardName}
            value={name}
          />
        </InputCreditCard>
      </CardInputsContainer>
    </AppContainer>
  )
}

export default CreditCard