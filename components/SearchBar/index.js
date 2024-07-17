import styled from "styled-components";

export default function SearchBar({onChange}){
    

    return (
        <>
        <label htmlFor="search"></label>
        <StyledInput type="text" id="search" placeholder="search for activities" onChange={onChange}/>
        

        </>
    )
}

const StyledInput = styled.input`
height: 40px;
width: 200px;
border: 2px solid lightgrey;
border-radius: 30px;`;