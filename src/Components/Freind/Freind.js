import React from 'react'
import styled from 'styled-components'
import FreindList from './FreindList'
import AddFreind from './AddFreind'
import { mobile, mobile460 } from '../../responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 45%;
  height: 100%;
  padding: 0px 10px;
  ${mobile460({ width: '100%' })}
`
const Freind = ({split,setSplit,freindArr,setFreindArr,showform,setShowForm,freindObj,setFreindObj,yourExpense,setYourExpense,freindExpense,setFreindExpense}) => {
  return (
    <Container>
      <FreindList 
      freindArr={freindArr} setFreindArr={setFreindArr} 
      showform={showform} setShowForm={setShowForm} 
      split={split} setSplit={setSplit} 
      freindObj={freindObj} setFreindObj={setFreindObj}
      yourExpense={yourExpense} setYourExpense={setYourExpense}
      freindExpense={freindExpense} setFreindExpense={setFreindExpense}
      />
      

      {!showform && <AddFreind showform={showform} setShowForm={setShowForm} freindArr={freindArr}
      setFreindArr={setFreindArr}/>}
    </Container>
  )
}

export default Freind
