export const monthConverter = (date) => {
	const months = {
		"01": "Января",
		"02": "Февраля",
		"03": "Марта",
		"04": "Апреля",
		"05": "Мая",
		"06": "Июня",
		"07": "Июля",
		"08": "Августа",
		"09": "Сентября",
		"10": "Октября",
		"11": "Ноября",
		"12": "Декабря",
	}
	const yyyymmdd = date.split('-')
	yyyymmdd[1] = months[yyyymmdd[1]]
	yyyymmdd.reverse()
	return yyyymmdd.join(' ')
}