// Import scss to fix HMR during production
import '../scss/_hmr-fix-file.scss';

import testModulesUI from './testModulesUI'
import slidersUI from './slidersUI'

(function() {
	// Add your functions here.
	testModulesUI()
	slidersUI()
})(window, document)
