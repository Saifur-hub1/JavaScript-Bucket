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
  const firstLetter = curr[0].toUpperCase();
  if(firstLetter in arr){
    arr[firstLetter].push(curr);
  }
  else{
    arr[firstLetter] = [curr];
  }
  return arr;
},{});
// console.log(groupNames);


Object.keys(groupNames).forEach((key)=>{
  console.log('\n--------',key,'--------');

  groupNames[key].forEach((name)=>{
    console.log(name);
  });
  
});