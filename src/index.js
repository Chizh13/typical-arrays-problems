
exports.min = function min (array) {
	var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
    console.log(min);
}

exports.max = function max (array) {
	 var max = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
        if (max < array[i]) max = array[i]; 
    }
    // возвращаем максимальное значение
    return max;
    console.log(max);
}
exports.avg = function avg (array) {
	
	var i,
           sum = 0, 
           len = array.length; 
       for (i = 0; i < len; i++) { 
           sum += array[i]; 
       }
       return sum / len;
   
}

