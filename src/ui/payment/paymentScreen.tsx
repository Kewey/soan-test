import React from 'react'
import { toEuro } from '../../utils/toEuro'
import PaymentItem from './paymentItem'

export default function PaymentScreen({ list, amount }: any) {
	return (
		<>
			<div className='card-body'>
				{list?.map((payment: any) => {
					return <PaymentItem payment={payment} key={payment.invoiceNumber} />
				})}
			</div>

			{amount && (
				<div className='card-footer'>
					<button className='btn'>Payer {toEuro(amount)}</button>
				</div>
			)}
		</>
	)
}
