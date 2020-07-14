const testLog = message => {
	var myVar;
	myVar = 'test';

	// for (var i = 0; i < 10; i--) {
	// 	console.log(i);
	// }
	console.log(message);
};

export default function testModulesUI() {
	testLog('testLog from module');
}
