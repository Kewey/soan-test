import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import Popup from 'reactjs-popup'
import { toEuro } from '../../utils/toEuro'
import closeIcon from '../../assets/times-solid.svg'

type FormData = {
	owner: string
	adress: string
	city: string
	state: string
	zipCode: number
	country: string
	IBAN: string
}

export default function Modal({
	trigger,
	amount,
}: {
	trigger: ReactElement
	amount: number
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>()
	const onSubmit = handleSubmit((data) => console.log(data))

	return (
		<Popup trigger={trigger} modal nested>
			{(close: any) => (
				<>
					<div className='modal'>
						<div className='card'>
							<button onClick={close} className='btn-close'>
								<img height='20' src={closeIcon} alt='Close modal' />
							</button>
							<h2>Paiement sécurisé par prélèvement bancaire</h2>
							<p className='alert-light'>
								Mise en place d’un mandat SEPA MANGOPAY
							</p>

							<form onSubmit={onSubmit}>
								<label>
									Titulaire du compte <span>*</span>
								</label>
								<input {...register('owner')} />

								<label>
									Adresse du titulaire <span>*</span>
								</label>
								<input {...register('adress')} />

								<div>
									<div>
										<label>
											Ville <span>*</span>
										</label>
										<input {...register('city')} />
									</div>
									<div>
										<label>
											Région <span>*</span>
										</label>
										<input {...register('state')} />
									</div>
								</div>
								<div>
									<div>
										<label>
											Code postal <span>*</span>
										</label>
										<input {...register('zipCode')} />
									</div>
									<div>
										<label>
											Pays <span>*</span>
										</label>
										<input {...register('country')} />
									</div>
								</div>
								<label>
									IBAN <span>*</span>
								</label>
								<input {...register('IBAN')} />
							</form>

							<div className='card-footer'>
								<button onClick={close} className='btn-secondary'>
									Annuler
								</button>

								<button className='btn' type='submit'>
									Payer {toEuro(amount)}
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</Popup>
	)
}
