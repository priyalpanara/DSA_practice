const Arr=[2,5,18,6,12,3,4]
for(let i=0;i<Arr.length;i++)
{
    for(let j=i+1;j<=Arr.length;j++)
    {
        if(Arr[i]>Arr[j]){
            let temp=Arr[j]
            Arr[j]=Arr[i]
            Arr[i]=temp
        }
    }
}
console.log(Arr);

