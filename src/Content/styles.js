import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Form = styled.form`
	max-width: 400px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;	
	padding: 2em;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

export const Select = styled.select`
	margin: 1em;
	width: 40%;
  border-radius: 5px;
  border: 0;
  box-sizing: border-box;
  color: #303245;
  height: 100%;
  outline: 0;
	&:focus{
		border-bottom: 1px solid rgba(100, 100, 100);
	}
`;
