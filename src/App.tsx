// import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import lock_black_24dp from './assets/lock_black_24dp.svg'

function App() {
	// const [toggle, setToggle] = useState(false)

	const { data, error, isLoading } = useFetch(
		'https://test.soan-solutions.io/test_front/datas'
	)

	return (
		<div className='container'>
			<div className='card'>
				<div className='card-head'>
					<button>Factures à player</button>
					<button>Facture payées</button>
				</div>
				<div className='card-body'>
					{isLoading && <p>Chargement</p>}

					{error && <p>Oups, une erreur s'est produite</p>}

					{data?.payments.map((payment: any) => {
						return (
							<div className='payment' key={payment?.invoiceNumber}>
								<input type='checkbox' />
								<div className='infos'>
									<h3>{payment.invoiceNumber}</h3>
									<p>A régler avant le {payment.sentDate}</p>
								</div>
								<div className='options'></div>
								<div className='price'>{payment.amount}</div>
							</div>
						)
					})}
				</div>
				<div className='card-footer'>
					<button className='btn'>Payer xxx €</button>
				</div>
			</div>
			<div className='footer'>
				<img src={lock_black_24dp} alt='icone paiement sécurisé' />
				<p>Paiement en ligne 100 % sécurisé</p>
			</div>
		</div>
	)
}

export default App
