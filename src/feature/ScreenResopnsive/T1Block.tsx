import styled from 'styled-components'
import Responsive from './Responsive'
const T1BlockWrap = styled.div`
  font-size: 16px;
  width: 350px;
  height: 268px;
  padding: 12px 16px;
  display: grid;
  grid-gap: 18px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  // 子容器居中摆放
  align-items: center;
  justify-content: center;
`

const T1BlockItemWrap = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgba(12, 46, 93, 0.5);
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function T1BlockItem(props: { title: string; value: string }) {
  const { title, value } = props
  return (
    <T1BlockItemWrap>
      <div>{title}</div>
      <div>{value}</div>
    </T1BlockItemWrap>
  )
}

export default function T1Block() {
  return (
    <Responsive
      width={350}
      height={268}>
      <T1BlockWrap>
        {[
          {
            title: '1',
            value: '123',
          },
          {
            title: '2',
            value: '998',
          },
          {
            title: '3',
            value: '123',
          },
          {
            title: '4',
            value: '998',
          },
        ].map((item, index) => {
          return (
            <T1BlockItem
              key={index}
              {...item}></T1BlockItem>
          )
        })}
      </T1BlockWrap>
    </Responsive>
  )
}
