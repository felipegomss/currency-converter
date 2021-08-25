import React, { useState } from 'react';

import { Container, Input, Button } from './styles';

import api from '../../api/data';


const Components = ({ to, from }) => {

	const [dataApi, setDataApi] = useState({
		amount: 0,
		from: '',
		to: '',
	});
	const [dataSend, setDataSend] = useState({
		amount: 0,
	});

	const handleSelectChangeAmount = (event) => {
		setDataSend({ amount: event.target.value })
	}
	const handleSubmit = (e) => {
		api.get(`/rates/convert?amount=${dataSend.amount}&from=${from}&to=${to}`)
			.then((response) => {
				console.log(response.data)
				setDataApi({
					amount: response.data.result,
					from: response.data.query.from,
					to: response.data.query.to
				})
			})
		e.preventDefault()
	}
	return (
		<Container>
			<div>
				<Input type="text" onChange={handleSelectChangeAmount} />
				<Input type="text" value={dataApi.amount} readonly />
			</div>
			<Button onClick={handleSubmit}>
				Enviar
			</Button>
		</Container>
	);
}

export default Components;