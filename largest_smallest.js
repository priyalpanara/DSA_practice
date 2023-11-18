const Arr=[2,5,18,6,12,3,4]
let largest=Arr[0];

for(let i=1;i<Arr.length;i++){
    if(Arr[i]<largest){
        let temp=largest
        largest=Arr[i]
        Arr[i]=temp

    }
}
console.log(largest)