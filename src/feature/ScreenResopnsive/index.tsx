import styled from 'styled-components'
import BarChart1 from './BarChart1'
import {
  PageArea,
  PageHeader,
  PageMain,
  PageWrap,
  Xpanel,
} from './PageNeed'
import Responsive from './Responsive'
import T1Block from './T1Block'
const GridDemoWrap = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-areas:
    't1 t2 t3'
    't4 t4 t4'
    't7 t7 t8';
  // 这里直接写设计稿上的px
  grid-template-rows: 277fr 333fr 320fr;
  grid-template-columns: 529fr 529fr 814fr;
  grid-gap: 24px;
  // 小于600px的时候
  @media (max-width: 600px) {
    grid-template-areas:
      't1'
      't2'
      't3'
      't4'
      't7'
      't8';
    grid-template-rows: 100px 100px 100px 130px 130px 100px;
    grid-template-columns: 1fr;
  }
`

export default function GridDemo() {
  return (
    <PageWrap>
      <PageHeader>头部啊</PageHeader>
      <PageMain>
        <GridDemoWrap>
          <PageArea area="t1">
            <Xpanel>
              <T1Block />
            </Xpanel>
          </PageArea>
          <PageArea area="t2">
            <BarChart1 />
          </PageArea>
          <PageArea area="t3">t3t3t3t3t3</PageArea>
          <PageArea area="t4">t4t4t4t4t4t4</PageArea>
          <PageArea area="t7">t7t7t7t7t7t7</PageArea>
          <PageArea area="t8">t8t8t8t8t8</PageArea>
        </GridDemoWrap>
      </PageMain>
    </PageWrap>
  )
}
