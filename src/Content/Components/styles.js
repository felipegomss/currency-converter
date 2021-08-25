import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 2em;
	display: flex;
	flex-direction: column;
`;
export const Input = styled.input`
	width: 40%;
	margin: 0 1em;
  border-radius: 5px;
	border: 0;
	border-bottom: 1px solid rgba(100, 100, 100, .3);
  box-sizing: border-box;
  color: #303245;
  height: 100%;
  outline: 0;
	text-align: right;
	&:focus{
		border-bottom: 1px solid rgba(100, 100, 100);
	}
`;
export const Button = styled.button`
	margin-top: 2em;
	background-color: rgba(100, 100, 100. 9);
  border-radius: 5px;
  border: 0;
  box-sizing: border-box;
  color: #303245;
  cursor: pointer;
  font-size: 15px;
  height: 50px;
  text-align: center;
	&:hover{
		background-color: rgba(100, 100, 100);
		color: #eee;
	}
`;
