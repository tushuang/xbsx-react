import styled from 'styled-components'

export const TransitionWrap = styled.div`
    .fade-enter {
        transform: translateX(-100%);
        z-index: 1;
    }
    
    .fade-enter.fade-enter-active {
        transform: translateX(0);
        transition: all 1s ease;
    }
    
    .fade-exit{
        transform: translateX(0);
    }
    .fade-exit.fade-exit-active{
        transform: translateX(100%);
        transition: all 1s ease;
    }

`

