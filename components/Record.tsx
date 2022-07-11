import { useState } from "react"
import styled from "styled-components"

const Style = {
  Wrapper: styled.div``,
  RecordedTime: styled.div``,
  Btn: styled.button`
    width: 70px;
    height: 30px;
    border: 1px solid white;
    border-radius: 100px;
    background-color: gray;
    color: white;
    cursor: pointer;
  `,
}

export default function Record() {
  const [isRecorded, setIsRecorded] = useState("00:00:00:0")
  const Record = () => {
    console.log("기록되는 중, 기록된 시간들 배열로 모아두기")
  }

  return (
    <>
      <Style.Btn onClick={Record}>기록</Style.Btn>
      <Style.Wrapper>기록된 시간들</Style.Wrapper>
      <Style.RecordedTime>{isRecorded}</Style.RecordedTime>
    </>
  )
}
