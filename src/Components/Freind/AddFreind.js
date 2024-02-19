import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const FreindAdd = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcf2e0;
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 5px;
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
const Button = styled.button`
    background-color: #fd9e40;
    width: fit-content;
    border: none;
    padding: 8px 15px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
    color: #2c2c2c;
    margin: 10px 0px;
    margin-left: auto;
`
const Close = styled.button`
    background-color: #fd9e40;
    width: fit-content;
    border: none;
    padding: 8px 15px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px;
    color: #2c2c2c;
    margin: 10px 0px;
    margin-left: auto;
`
const AddFreind = ({showform,setShowForm,freindArr,setFreindArr}) => {
  const closebtn = () =>{
    setShowForm(!showform)
  }
  const [freindName ,setFreindName] = useState("")
  const [freindImg,setFreindImg] = useState("")
  const addfreind = () =>{
    if(!freindName || !freindImg) return alert("Please Fill all values")
    const freinds = [...freindArr]
    freinds.push({
      freindName,
      freindImg
    })
    setFreindArr(freinds)
    setFreindName('')
    setFreindImg('')
    setShowForm(!showform)
  }
  return (
    <Container>
      <FreindAdd>
      <Field>
        <FieldText>
            <FieldImg/>
            <FieldTitle>Freind Name</FieldTitle>
        </FieldText>
        <FieldInput onChange={(e)=>setFreindName(e.target.value)} value={freindName}/>
      </Field>
      <Field>
        <FieldText>
            <FieldImg/>
            <FieldTitle>Image URL</FieldTitle>
        </FieldText>
        <FieldInput onChange={(e)=>setFreindImg(e.target.value)} value={freindImg}/>
      </Field>
      <Button onClick={addfreind}>Add Freind</Button>
      </FreindAdd>
     <Close onClick={closebtn}>Close</Close>
    </Container>
  )
}

export default AddFreind
