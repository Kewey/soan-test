import React from 'react'
import { toEuro } from '../../utils/toEuro'

export default function PaymentPrice({ discount, amount }: any) {
	function doDiscount() {
		return amount - (amount * discount.rate) / 100
	}

	return (
		<div className='price'>
			{discount && (
				<p>
					<strong>{toEuro(doDiscount())}</strong>
				</p>
			)}
			<p>
				{discount ? <s>{toEuro(amount)}</s> : <strong>{toEuro(amount)}</strong>}
			</p>
		</div>
	)
}
