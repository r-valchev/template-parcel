const testLog = message => {
	var myVar
	myVar = 'test'

	var myVarSecond
	myVarSecond = 222

	console.log( myVarSecond )

	// for (var i = 0; i < 10; i--) {
	// 	console.log(i);
	// }
	console.log( message )
}

export default function testModulesUI() {
	testLog( 'testLog from module' )
}
