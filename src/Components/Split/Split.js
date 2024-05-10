import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile, mobile460 } from '../../responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcf2e0;
  width: 55%;
  height: 100%;
  border-radius: 10px;
  padding: 40px;
  ${mobile460({ width: '100%',height:'fit-content' })}
`
const Title = styled.h2`
    font-size: 24px;
    text-transform: uppercase;
    color: #484b4b;
    margin-bottom: 2rem;
`
const Field = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    color: #484b4b;
`
const FieldText = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const FieldImg = styled.img`
    width: 15px;
    height: 15px;
`
const FieldTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
`
const FieldInput = styled.input`
    height: 30px;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    width: 120px;
    outline: none;
    padding-left: 10px;
`
const FieldSelect = styled.select`
    height: 30px;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    width: 120px;
`
const Button = styled.button`
    background-color: #fd9e40;
    width: fit-content;
    border: none;
    padding: 8px 15px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
    color: #2c2c2c;
    margin-left: auto;
    margin-top: 20px;
`
const Split = ({freindArr, setFreindArr,freindObj,split,setSplit}) => {
  const bill = () =>{
    if(!billValue || !yourExpense || !freindExpense || !payingBill) return alert("Please Fill All Information")
    const checkpayment = (yourExpense*1) + (freindExpense*1)
    if(!(checkpayment == billValue)){
      return alert("InValid Amount")
    }
    const findFreind = freindArr.find((e)=>{
      return e.freindName === freindObj.freindName
    })
    if(payingBill == 1){
      if(!findFreind.rupee){
        findFreind.rupee = freindExpense*1
      }else{
        findFreind.rupee = findFreind.rupee > 0 ? findFreind.rupee + (freindExpense*1) : findFreind.rupee + (freindExpense*1)
        
      }
  
    }


    else{
      if(!findFreind.rupee){
        findFreind.rupee = -yourExpense*1
      }else{
        findFreind.rupee = findFreind.rupee < 0 ? findFreind.rupee - (yourExpense*1) : findFreind.rupee - (yourExpense*1)
      }
      // findFreind.rupee = findFreind.rupee ? (findFreind.rupee > 0 ? findFreind.rupee - yourExpense : findFreind.rupee + yourExpense) : -yourExpense
    }
    const freindArrr = [...freindArr]
    freindArrr[freindObj.id]=findFreind
    freindArrr[freindObj.id].status = false
    setFreindArr(freindArrr)
    setSplit(!split)
    console.log(freindArrr)
  }
  const [billValue,setBillValue] = useState(0)
  const [yourExpense,setYourExpense] = useState(0)
  const [freindExpense,setFreindExpense] = useState(0)
  const [payingBill,setPayingBill] = useState(1)
  return (
    <Container>
      <Title>split a bill with {freindObj.freindName}</Title>
      <Field>
        <FieldText>
          <FieldImg />
          <FieldTitle>Bill Value</FieldTitle>
        </FieldText>
        <FieldInput  onChange={(e)=>setBillValue(e.target.value)}/>
      </Field>
      <Field>
        <FieldText>
          <FieldImg />
          <FieldTitle>Your expense</FieldTitle>
        </FieldText>
        <FieldInput onChange={(e)=>setYourExpense(e.target.value)}/>
      </Field>
      <Field>
        <FieldText>
          <FieldImg />
          <FieldTitle>{freindObj.freindName}'s Expense</FieldTitle>
        </FieldText>
        <FieldInput onChange={(e)=>setFreindExpense(e.target.value)}/>
      </Field>
      <Field>
        <FieldText>
          <FieldImg />
          <FieldTitle>who is paying the bill?</FieldTitle>
        </FieldText>
        <FieldSelect onChange={(e)=>setPayingBill(e.target.value)}>
          <option value={1}>You</option>
          <option value={2}>{freindObj.freindName}</option>
        </FieldSelect>
      </Field>
      <Button onClick={bill}>Split bill</Button>
    </Container>
  )
}

export default Split
