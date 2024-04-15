export const covertToDate = (dateString: string): Date => {
	// 28/10/2018 => '28,10,2018'  => [28 , 10 , 2018]
	const date = dateString.split('/').map((num: string): number => {
		return parseInt(num)
	})
	return new Date(date[2], date[1], date[0])
}
