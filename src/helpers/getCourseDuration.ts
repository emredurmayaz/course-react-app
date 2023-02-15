function getCourseDuration(courseDuration: number): string {
	if (!courseDuration) {
		return '0h 0m';
	}
	const hours = Math.floor(courseDuration / 60);
	const minutes = courseDuration % 60;
	return `${hours}h ${minutes}m`;
}

export default getCourseDuration;
