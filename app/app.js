import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'demo-app/config/environment';

import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
  fastTextField,
} from '@microsoft/fast-components';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

provideFASTDesignSystem().register(fastCard(), fastButton(), fastTextField());

loadInitializers(App, config.modulePrefix);
