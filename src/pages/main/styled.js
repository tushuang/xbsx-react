import styled from 'styled-components'

export const TapWrap = styled.div`
  position: fixed;
  height: ${props => props.fullScreen?'100%':'6.666rem'};
  width: 100%;
  bottom: 0;
`

export const TabBarIcon = styled.div`
    width: 22px;
    height: 22px;
    background: ${props => `url(${props.url}) center center /  21px 21px no-repeat`};
    font-size:6px;
`

export const JobList = styled.div`
  
`