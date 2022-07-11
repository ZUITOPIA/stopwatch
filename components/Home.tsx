import styled from "styled-components"
import Record from "./Record"
import { useCallback, useState } from "react"

const Style = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 700px;
  `,
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

export default function Home() {
  const [isStarted, setIsStarted] = useState(false)

  const Toggle = () => {
    if (!isStarted) {
      // 시작버튼 눌렸을 때

      console.log("시작")
      setIsStarted(!isStarted)
    } else {
      // 정지버튼 눌렸을 때 = 다시 한 번 눌렸을 때

      console.log("정지")
      setIsStarted(!isStarted)
    }
  }

  const Reset = () => {
    console.log("기록된 시간들 모아놓은 배열 clear 시킴")
  }
  return (
    <>
      <Style.Wrapper>
        스톱워치
        <Style.Btn onClick={Toggle}>{isStarted ? "정지" : "시작"}</Style.Btn>
        <Style.Btn onClick={Reset}>초기화</Style.Btn>
        <Record />
      </Style.Wrapper>
    </>
  )
}
