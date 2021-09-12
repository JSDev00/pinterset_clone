import React from 'react'
import styled from 'styled-components'

function Pin(props) {
    let {urls} = props
    return (
        <Wrapper>
            <Container>
                <img src={urls?.regular} alt="pin"/> 
            {/* <img src="https://images.unsplash.com/photo-1613856449546-9f2d0df441d5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/> */}
            </Container>
        </Wrapper>
    )
}

export default Pin
const Wrapper = styled.div`

display:inline-flex;
padding:8px;

`;
const Container = styled.div`
    display:flex;
    align-items:center;
    box-sizing:border-box;
    cursor:pointer;
    width:236px;
    img{
        display:flex;
        width:100%;
        cursor:zoom-in;
        border-radius:16px;
        object-fit:cover;
    }
    :hover{
        transform:scale(0.9);
        transition:all .1s ease;

    }

`;