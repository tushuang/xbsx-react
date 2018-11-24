
import React,{Component} from 'react'
import styled from 'styled-components'

const FooterWrap = styled.div`
    width: 100%;
    height: 1.30666rem;
    position:fixed;
    bottom:0;
    left:0;
    display:flex;
    justify-content:space-between;
`

const Classify = styled.span`
    width:2rem;
    height:1.30666rem;
    background:black;
`

class FooterNav extends Component {
    render(){
        return(
            <div>
                <FooterWrap>
                    <Classify></Classify>
                    <Classify></Classify>
                    <Classify></Classify>
                    <Classify></Classify>
                </FooterWrap>
            </div>
        )
    }
}

export default FooterNav