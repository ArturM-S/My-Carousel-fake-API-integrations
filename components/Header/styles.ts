import styled from "@emotion/styled";

interface IMenuProps{
    isOpen:boolean;
}

export const Container = styled.div`
    height: 40px;
    width: 100vw;

    padding: 15px;

    position: fixed;
    top: 0;

    display: flex;
    justify-content:flex-end;
    align-items: center;


    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
    background-color:#222222;

    z-index: 1;
`;

export const Menu = styled.div<IMenuProps>`
position:absolute;
top: 65px;
right: 15px;

visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};

display: flex;
flex-direction:column;
justfy-content:center;
align-item: center;

gap:32px;

padding:7px;

background-color:#222;

border:0.5px solid #ed64644d;
border-radius:5px;
box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2)
`;

export const MenuItem = styled.a`
display:flex;
justify-content:flex-start;
align-items:center;

gap:7px;

border-radius: 5px;

font-size: 0.8rem;
text-decoration: none;

color:#ed6464;
cursor: pointer;
transition: 0.3s;

    :hover{
        background-color: #ed64644d;
        color:#222;
    }
    svg{
        height:30px;
width:30px;
    }
`;

export const MenuButton = styled.div`
margin-right:15px;
display:flex;
margin-right: 50px;
border-radius:5px;
color:#ed6464;
transition: 0.3s;
:hover{
    background-color:#ed64644d;
    color: #222;
}

svg{
    height:25px;
    width:25px;

   

  
}

`;