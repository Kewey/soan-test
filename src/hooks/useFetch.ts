import { useEffect, useState } from 'react'

export function useFetch(url: string): any {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<unknown>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true)
				const res = await fetch(url)
				const json = await res.json()
				setData(json)
			} catch (err) {
				setError(err)
			}
			setIsLoading(false)
		}

		fetchData()
	}, [url])

	return { data, error, isLoading }
}
