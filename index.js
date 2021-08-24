const names =['abul','labul','kabul','babul','dabul','kabul','babul',];
function removeDuplicate(names){
    const unique = [];
    for(var i = 0; i<names.length; i++){
        const element=names[i];
        console.log(element);
        if(unique.indexOf(element)==-1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNmaes = removeDuplicate(names);
console.log(uniqueNmaes);