import React, { useState } from 'react'
import styled from 'styled-components'
import Pic from '../../Images/pic.jpg'
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 8px 0;
`
const FreindDetail = styled.div`
    display: flex;
    gap: 20px;
`
const FreindImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
`
const FreindInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const FreindName = styled.p`
    font-size: 17px;
    font-weight: 500;
`
const FreindMoney = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #484b4b;
    font-family: sans-serif;
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
    margin-right: 10px;
`
const SingleList = ({split,setSplit,singlefreind,index,freindArr,setFreindArr,freindObj,setFreindObj}) => {
    const select = (splitstatus,number) =>{
        freindArr[number].status = !splitstatus
        setFreindArr(freindArr)
        setSplit(true)
        const obj = {
            id:index,
            ...singlefreind
        }
        setFreindObj(obj)
    }
    const close = (splitstatus,number) =>{
        freindArr[number].status = !splitstatus
        setFreindArr(freindArr)
        setSplit(false)
    } 
    return (
        <Container>
            <FreindDetail>
                <FreindImg src={singlefreind.freindImg} />
                <FreindInfo>
                    <FreindName>{singlefreind.freindName}</FreindName>
                    <FreindMoney style={{
                        color: singlefreind.rupee ? singlefreind.rupee > 0 ? 'green' : 'red' : "#000",
                        fontWeight: 600
                    }}>
                        {singlefreind.rupee ? 
                        (singlefreind.rupee > 0 ? `${singlefreind.freindName} owes you Rs:${singlefreind.rupee}`
                         : `You owe ${singlefreind.freindName} Rs:${singlefreind.rupee}`)

                        : `You and ${singlefreind.freindName} are Even`}
                        </FreindMoney>
                </FreindInfo>
            </FreindDetail>
            {singlefreind.status ? 
            <Button onClick={()=>close(singlefreind.status,index)}>Close</Button> : 
            <Button onClick={()=>select(singlefreind.status,index)}>Select</Button>
            }
            
        </Container>
    )
}

export default SingleList
