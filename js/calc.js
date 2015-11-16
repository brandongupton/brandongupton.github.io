$(document).ready(function () {
	var bufferedOperator = null;

  var calculateResult = function (valOne, valTwo) {
		switch (bufferedOperator) {
			case 'add':
			  return valOne + valTwo;

			case 'subtract':
			  return valTwo - valOne;

			case 'multiply':
			  return valTwo * valOne;

			case 'divide':
			  return valTwo / valOne;
		}

		bufferedOperator = null;
	};

	var updateResult = function (action) {
		var $input = $('#calc-result').text();
		var $buffer = $('#calc-buffer').text();
		var $result = input;

		console.log('action: ' + action + '; input: ' + $input + '; buffer: ' + $buffer);
		switch (action) {
			case 'clear':
			  if (input == 0) {
					buffer = 0;
				}
				else {
					input = 0;
				}
				break;

			case 'add':
			  if (bufferedOperator != null) {
					$result = calculateResult(input, buffer);
				}

			case 'enter':
			  $result = calculateResult($result, $('#calc-info').text(), bufferedOperator);
				$('#calc-info').text($result);
				$result = 0;
				bufferedOperator = null;
				break;

			case 0:
				if ($result == '0') {
					return;
				}
				$result += '0';
				break;

			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				if ($result == '0') {
					$result = input;
				} else {
					$result += input;
				}
				break;

			case '.':
				if ($result.indexOf('.') < 0) {
					$result += input;
				}
				break;
		}

		console.log('result: ' + $result);
		$('#calc-result').text($result);
	};

	// jQuery methods go here...
	$('.btn').on('click', function () {
		var $val = $(this).data('value');
		console.log($val);
		updateResult($val);
	});

});
