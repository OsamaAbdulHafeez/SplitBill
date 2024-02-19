import React from 'react'
import styled from 'styled-components'
import SingleList from './SingleList'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`
const Freinds = styled.div`
    display: flex;
    flex-direction: column;
    height: 255px;
    overflow-y: scroll;
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
const FreindList = ({split,setSplit,freindArr,setFreindArr,showform,setShowForm,freindObj,setFreindObj,yourExpense,setYourExpense,freindExpense,setFreindExpense}) => {
  const show = () =>{
    setShowForm(!showform)
  }
  return (
    <Container>
      <Freinds>
        {freindArr?.map((singlefreind,index)=>(<SingleList 
        singlefreind={singlefreind} index={index} split={split} setSplit={setSplit} 
        freindArr={freindArr} setFreindArr={setFreindArr} 
        freindObj={freindObj} setFreindObj={setFreindObj} 
        yourExpense={yourExpense} setYourExpense={setYourExpense} 
        freindExpense={freindExpense} setFreindExpense={setFreindExpense}
        />))}
      </Freinds>
      {showform && <Button onClick={show}>Add Freind</Button>}
    </Container>
  )
}

export default FreindList
