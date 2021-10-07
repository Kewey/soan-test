import dayjs from 'dayjs'
import React from 'react'
import { toEuro } from '../../utils/toEuro'

function PaymentItem({ payment }: any) {
	return (
		<div className='payment' key={payment?.invoiceNumber}>
			<input type='checkbox' />
			<div className='infos'>
				<h3>{payment.invoiceNumber}</h3>
				<p>
					A régler avant le{' '}
					{dayjs(payment.sentDate)
						.add(payment.maxDaysToPay, 'day')
						.format('DD/MM/YYYY')}
				</p>
			</div>
			<div className='options'>
				{(payment.discount || payment.multiPaymentStatus) && (
					<div>
						<p>icon - {payment.multiPaymentStatus} Escompte</p>
						<p>
							{payment.multiPaymentStatus} {payment.discount?.rate}% pendant{' '}
							{payment.discount?.maxDaysToPay} jours
						</p>
					</div>
				)}
			</div>
			<div className='price'>
				{payment.discount && (
					<p>
						<strong>
							{toEuro((payment.amount * payment.discount.rate) / 100)}
						</strong>
					</p>
				)}
				<p>{toEuro(payment.amount)}</p>
			</div>
		</div>
	)
}

export default PaymentItem
