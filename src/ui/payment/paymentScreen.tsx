import React, { useEffect, useState } from 'react'
import { toEuro } from '../../utils/toEuro'
import Modal from '../modal/modal'
import PaymentItem from './paymentItem'

export default function PaymentScreen({ list, payed }: any) {
	const [listState, setListState] = useState<boolean[]>([])

	useEffect(() => {
		const defaultList = list?.map((item: any) => !!item?.invoiceNumber) || []

		setListState([...defaultList])
	}, [list])

	let totalAmount = 0
	list?.forEach((item: any, index: number) => {
		if (listState[index]) {
			if (item?.discount) {
				totalAmount +=
					parseInt(item.amount) -
					(parseInt(item.amount) * item.discount.rate) / 100
			} else {
				totalAmount += parseInt(item.amount)
			}
		}
	})

	return (
		<>
			<div className='card-body'>
				{list?.map((payment: any, index: number) => {
					return (
						<PaymentItem
							payment={payment}
							key={payment.invoiceNumber + index}
							isSelected={listState[index]}
							setSelected={(e: boolean) => {
								const tab = listState
								tab[index] = !listState[index]
								setListState([...tab])
							}}
						/>
					)
				})}
			</div>

			{!payed && (
				<div className='card-footer'>
					<Modal
						amount={totalAmount}
						trigger={
							<button className='btn'>Payer {toEuro(totalAmount)}</button>
						}
					/>
				</div>
			)}
		</>
	)
}
