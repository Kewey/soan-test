import React from 'react'
import storm from '../../assets/storm.svg'
import { PAYMENT_STATUS } from '../../types/paymentStatus'

export default function PaymentOptions({ discount, multiPaymentStatus }: any) {
	function isMultiPayment() {
		return multiPaymentStatus !== PAYMENT_STATUS.NONE
	}

	function displayDiscount() {
		if (!discount) return ''
		return `${discount?.rate}% pendant ${discount?.maxDaysToPay} jours`
	}

	return (
		<div className='options'>
			{(discount || multiPaymentStatus) && (
				<div>
					<p>
						{(isMultiPayment() || discount) && <img src={storm} alt='' />}
						{isMultiPayment() && '3x '}
						{isMultiPayment() && !discount && 'sans frais '}
						{isMultiPayment() && discount && 'et '}
						{discount && 'Escompte'}
					</p>
					<p>
						{multiPaymentStatus === PAYMENT_STATUS.USED
							? `Appliqué${discount ? 's' : ''}`
							: `${
									multiPaymentStatus === PAYMENT_STATUS.AVAILABLE
										? 'Disponible '
										: ''
							  }${displayDiscount()}`}
					</p>
				</div>
			)}
		</div>
	)
}
