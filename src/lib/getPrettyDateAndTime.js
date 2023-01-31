import {monthConverter} from "./monthConverter";

export const getPrettyDateAndTime = (data) => {
	const dataArr = data.split('T')
	const date = dataArr[0]
	const time = dataArr[1]
	const prettyDate = monthConverter(date)
	const cutTime = time.slice(0, 5)
	return (prettyDate + ', в ' + cutTime)
}