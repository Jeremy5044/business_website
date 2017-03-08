import angular from 'angular';

// import $ from 'jquery';

import { routerConfig } from './routes';
import { LayoutController } from './controllers/layout';
import { AboutController } from './controllers/about';
import { ContactController } from './controllers/contact';
import { WorkController } from './controllers/work'
// import { VinueController } from './controllers/vinu'
import  'angular-ui-router';

angular
.module('app',['ui.router'])
.config(routerConfig)
.controller('LayoutController', LayoutController)
.controller('AboutController', AboutController)
.controller('WorkController', WorkController)
.controller('ContactController', ContactController)
// .controller('VinueController', VinueController)
