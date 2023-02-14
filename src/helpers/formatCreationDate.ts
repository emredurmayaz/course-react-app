function formatCreationDate(date: string): string {
	const dateObj = new Date(date || '');
	const year = dateObj.getFullYear();
	const month = dateObj.getMonth() + 1;
	const day = dateObj.getDate();
	return `${day}/${month}/${year}`;
}

export default formatCreationDate;
