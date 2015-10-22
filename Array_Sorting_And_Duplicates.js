function RemoveDuplicates(myArray){
	//loop through each element. Because the array is already sorted, all duplicates will be next to each other so can be removed more efficiently
	for (var i=0; i<myArray.length-1; i++){
		while (myArray[i] === myArray[i+1]){
			myArray.splice(i+1, 1);
		}
	}
	return myArray;
}

function PrintArray(myArray){
	for (var i = 0; i < myArray.length; i++)
	{
		console.log(myArray[i]);
	}
}

function Main(){
	//declare arry
	var myArray = [0, 1, 1, 13, 2, 3, 13, 5, 5, 5, 8, 13, 21, 34];
	//sort array
	myArray = myArray.sort(function(a, b){return a-b});
	//remove duplicates
	myArray = RemoveDuplicates(myArray);
	//print array
	PrintArray(myArray);
}

Main();