const names = [
  'Ayman',
  'Arman',
  'Abu Rahman',
  'Abrar',
  'Babar',
  'Bashar',
  'Bir Bikrom',
  'Charcel',
  'Chicken',
  'Dipti',
  'Don',
  'David',
  'Ehsan',
  'Eshan',
  'Emi',
  'Furkan',
  'Foysal',
  'HM Nayeem',
  'Salsabil',
  'Jahed',
  'Jomir',
  'Sayeed',
  'Tarek',
  'Arman'
];

const sortedName = names.sort();

const groupNames = sortedName.reduce((arr, curr)=>{
  const firstLetter = curr[0];
  if(firstLetter in arr){
    // console.log(`Found`);
    arr[firstLetter].push(curr);
  }
  else{
    arr[firstLetter] = [curr];
    // console.log(`Not found ${curr}`); 
  }
  // console.log('New: ',arr);

  return arr;
},{});
console.log(groupNames);