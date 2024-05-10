import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Freind from './Components/Freind/Freind';
import Split from './Components/Split/Split';
import { useState } from 'react';
import { mobile, mobile460 } from './responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  margin: auto;
  height: 60vh;
  ${mobile460({ flexDirection: "column" })}
`
function App() {
  const [freindArr, setFreindArr] = useState([
    {
      freindName: "Osama",
      freindImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVU3mJpmpP0t_qdhF2CjIdnIWiRHcMcQdKhA&usqp=CAU",
      status:false
    }
  ])
  const [showform, setShowForm] = useState(true)
  const [split, setSplit] = useState(false)
  const [freindObj,setFreindObj] = useState({})
  const [yourExpense,setYourExpense] = useState(0)
  const [freindExpense,setFreindExpense] = useState(0)
  return (
    <Container>
      <Wrapper>
        <Freind
          freindArr={freindArr} setFreindArr={setFreindArr}
          showform={showform} setShowForm={setShowForm}
          split={split} setSplit={setSplit}
          freindObj={freindObj} setFreindObj={setFreindObj}
          yourExpense={yourExpense} setYourExpense={setYourExpense}
          freindExpense={freindExpense} setFreindExpense={setFreindExpense}
          />
        {split && 
        <Split 
        split={split} setSplit={setSplit} 
        freindArr={freindArr} setFreindArr={setFreindArr} 
        freindObj={freindObj}
        yourExpense={yourExpense} setYourExpense={setYourExpense}
        freindExpense={freindExpense} setFreindExpense={setFreindExpense}
        />}
      </Wrapper>
    </Container>
  );
}

export default App;
