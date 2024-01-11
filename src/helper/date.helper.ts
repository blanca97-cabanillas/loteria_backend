
export const dateAddedTirthyMinutes = ()=> {
	let date = new Date();
	date.setMinutes(date.getMinutes()+30)
	console.log(date);
	return date;
} 

export const currentDate = ()=> {
	let date = new Date();
	return date;
} 