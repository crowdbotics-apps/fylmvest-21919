import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth1160957Navigator from '../features/EmailAuth1160957/navigator';
import NotificationList7160952Navigator from '../features/NotificationList7160952/navigator';
import SignIn41160665Navigator from '../features/SignIn41160665/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth1160957: { screen: EmailAuth1160957Navigator },
NotificationList7160952: { screen: NotificationList7160952Navigator },
SignIn41160665: { screen: SignIn41160665Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
