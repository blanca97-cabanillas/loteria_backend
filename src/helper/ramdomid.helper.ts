export const randomID = () => {
	const uniqueid = (Math.random().toString(32).substring(2) + Date.now().toString(32));
	return uniqueid;
}

export const randomTemporalPassword = () => {
	const letters = ["A","b","c","D","E","f","g","h","i","J","K","L","M","n","ñ","o","P","q","R","s","T","u","V","w","X","y","Z"];
	const symbols = ["*","_","-"];
	const uniqueid = (Math.random().toString(36).substring(10) + Date.now().toString(32).substring(6) + getRandoElementsbyAnArray(letters,3) + getRandoElementsbyAnArray(symbols,1));
	return uniqueid;
}

const getRandoElementsbyAnArray = (arrayData:any[], maxDataToConcat:number ) =>{
  var concatString = "";
	for(var i = 0; i < maxDataToConcat; i++){
		concatString += arrayData[Math.floor(Math.random()*arrayData.length)]
	}
  return concatString
}