const urls = 'http://localhost:5173/post';


export const getDataFunction = async () => await fetch(urls).then(result => result);
//var data = await getDataFunction.json()