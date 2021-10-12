import { useEffect, useState } from 'react'

export function useFetch(url: string): any {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<unknown>(null)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const res = await fetch(url)
				const json = await res.json()
				setData(json)
			} catch (err) {
				setError(err)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [url])

	return { data, error, isLoading }
}
