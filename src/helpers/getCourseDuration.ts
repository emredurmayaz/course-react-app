function getCourseDuration(courseDuration: number): string {
	if (!courseDuration) {
		return '0h 0m';
	}
	const hours = Math.floor(courseDuration / 60);
	const minutes = courseDuration % 60;

	const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
	const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;

	return `${hoursString}` + `:` + `${minutesString}` + ` hours`;
}

export default getCourseDuration;
