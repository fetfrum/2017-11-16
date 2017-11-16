jQuery(document).ready(function ($) {
	//	$('#root').append(printNums(4, 400));
	//	$('#root').append(printNums(4, 13, 3));
	//	$('#root').append(printNums(654, 0, -1));
	//	$('#root').append(printNums(1978, 2017));
	//	$('#root').append(printNums(-4, 100, 2));

	//	Массивы
	var arr1 = [3, 6, 1, 13, 88, 43],
		arr2 = ['Hi', "hello", 34, "prima"],
		arr3 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43],
		arr4 = [31, 24, 35, 47, 12],
		arr5 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43],
		arr6 = [2, 3, [4, 5]],
		arr7 = [2, [3, 4, 5], [6, 7, 8]],
		arr8 = [2, [3, 4, 5], [6, 7, 8, 9, 11, 12, 13, 14]],
		arr9 = [['hi', 3, 'beta'], ['foo', 'jam', 'tritto']],
		f, i;
	$('#root').append(arr1[0]).append("<br>").append(arr1[3]).append("<br>");
	$('#root').append(arr2[1]).append("<br>").append(arr2[arr2.length - 1]).append("<br>");
	arr3[3] = "new element";
	arr3[2] = 22;
	arr3[4] = 44;
	arr3.push(100);
	arr3[12] = 200;
	$('#root').append(arr3[11]).append("<br>");
	$('#root').append(arr4[3]).append("<br>").append(arr4[60]).append("<br>");
	for (i = 1; i <= 7; i += 3) {
		$('#root').append(arr4[f]).append("<br>");
	}
	for (i = 1; i <= 5; i++) {
		$('#root').append(arr5[i]).append("<br>");
	}
	$('#root').append('<input id="num">').append('<button id="btn">ok</button>');
	$('#btn').on('click', function () {

		$('#root').append(arr5[$('#num').val()]).append("<br>");
	});

	$('#root').append("<br>");
	for (i = 0; i <= arr5.length; i++) {
		$('#root').append(arr5[i]).append(" ");
	}
	$('#root').append("<br>");

	for (i = arr5.length - 1; i >= 0; i--) {
		$('#root').append(arr5[i]).append(" ");
	}
	$('#root').append("<br>");
	console.log(arr6);
	$('#root').append(arr6[0]).append(" ");
	$('#root').append(arr6[1]).append(" ");
	$('#root').append(arr6[2]).append(" ");
	$('#root').append("<br>");
	$('#root').append(arr6[2][0]).append(" ");
	$('#root').append(arr6[2][1]).append(" ");

	console.log(arr6[2].length);
	console.log(arr7[1][1]);
	console.log(arr7[2][2]);

	for (i = 0; i < arr8[2].length; i++) {
		console.log(arr8[2][i]);
	}
	console.log(arr9[1][0]);
	console.log(arr9[0][2]);
});

function printNums(start, end, iter = 1) {
	var out = '',
		i = start - iter;
	while (i != end) {

		i += iter;
		out += ' ' + i + "<br>";
	}
	return out;
}
