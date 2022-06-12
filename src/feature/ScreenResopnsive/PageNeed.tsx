import styled from 'styled-components'

export const PageWrap = styled.div`
  width: 100%;
  height: 100%;
`

export const PageHeader = styled.div`
  width: 100%;
  height: 8%;
  @media (max-width: 600px) {
    height: 80px;
  }
`

export const PageMain = styled.div`
  width: 100%;
  height: 92%;
  padding: 0 24px 24px 24px;
`

export const PageArea = styled.div<{ area: string }>`
  grid-area: ${(p) => p.area};
  width: 100%;
  height: 100%;
`

export const Xpanel = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid hotpink;
`
