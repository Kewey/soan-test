// import { useState } from 'react'
import './index.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import lock_black_24dp from './assets/lock_black_24dp.svg'
import PaymentScreen from './ui/payment/paymentScreen'
import { useFetch } from './hooks/useFetch'

function App() {
	const { data, error, isLoading } = useFetch(
		'https://test.soan-solutions.io/test_front/datas'
	)

	let payed = data?.payments?.filter((item: any) => {
		if (item.payedDate === null) return null
		return item
	})

	let waiting = data?.payments?.filter((item: any) => {
		if (item.payedDate !== null) return null
		return item
	})

	const totalAmount = waiting?.reduce((prev: number, current: any) => {
		return prev + parseInt(current.amount)
	}, 0)

	console.log(`totalAmount`, totalAmount)

	if (error) {
		return <div>Error</div>
	}

	return (
		<Router>
			<div className='container'>
				<div className='card'>
					<div className='card-head'>
						<Link to='/'>Factures à player</Link>
						<Link to='/payed'>Facture payées</Link>
					</div>

					{isLoading && <p>Chargement</p>}
					<Switch>
						<Route path='/payed'>
							<PaymentScreen list={payed} />
						</Route>
						<Route path='/'>
							<PaymentScreen list={waiting} amount={totalAmount} />
						</Route>
					</Switch>
				</div>
				<div className='footer'>
					<img src={lock_black_24dp} alt='icone paiement sécurisé' />
					<p>Paiement en ligne 100 % sécurisé</p>
				</div>
			</div>
		</Router>
	)
}

export default App
