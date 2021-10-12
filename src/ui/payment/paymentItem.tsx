import dayjs from 'dayjs'
import PaymentOptions from './paymentOptions'
import PaymentPrice from './paymentPrice'

function PaymentItem({ payment, isSelected, setSelected }: any) {
	return (
		<div
			className={`payment${payment.payedDate ? ' payed' : ''}`}
			key={payment?.invoiceNumber}
			onClick={() => setSelected(!isSelected)}
		>
			{!payment.payedDate && (
				<div className={'checkbox-control' + (isSelected ? ' active' : '')}>
					<svg
						height='12'
						width='16'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						aria-hidden='true'
						focusable='false'
					>
						<path
							fill='none'
							strokeWidth='3'
							d='M1.73 12.91l6.37 6.37L22.79 4.59'
						/>
					</svg>
				</div>
			)}
			<div className='infos'>
				<h3>{payment.invoiceNumber}</h3>
				<p>
					A régler avant le{' '}
					{dayjs(payment.sentDate)
						.add(payment.maxDaysToPay, 'day')
						.format('DD/MM/YYYY')}
				</p>
			</div>
			<PaymentOptions
				discount={payment.discount}
				multiPaymentStatus={payment.multiPaymentStatus}
			/>
			<PaymentPrice discount={payment.discount} amount={payment.amount} />
		</div>
	)
}

export default PaymentItem
