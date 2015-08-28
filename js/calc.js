$(document).ready(function () {
	var updateResult = function (input) {
		var $result = $('#calc-result').text();
		console.log('input: ' + input + '; result: ' + $result);
		switch (input) {
			case 'clear':
				$result = 0;
				break;

			case 'enter':
				$('#calc-info').text($result);
				$result = 0;
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
