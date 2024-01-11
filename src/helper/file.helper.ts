import * as fs from 'fs';

export const renameFile = (req, file, callback) => {
	const name = file.originalname.split('.')[0];
	const filename = file.originalname;
	const randomName = Array(4)
	.fill(null)
	.map(()=> Math.round(Math.random() * 16).toString(16))
	.join('');

	console.log(`${name}-${randomName}${filename}`)
	callback(null, `${name}-${randomName}${filename}`);
}

export const fileFilterHelper = (req, file, callback) => {
	console.log(file.originalname.match())
	if(!file.originalname.match(/\.(jpg|jpeg|png|PNG|pdf|doc|docx)$/)){
		return callback(new Error('Invalid format document'), false);
	}
	callback(null, true);
}

export const deleteFileHelper = (path:string) => {
	fs.unlinkSync(path);
}