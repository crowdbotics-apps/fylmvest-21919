import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial2160956Navigator from '../features/Tutorial2160956/navigator';
import UserProfile4160954Navigator from '../features/UserProfile4160954/navigator';
import Settings6160953Navigator from '../features/Settings6160953/navigator';
import NotificationList7160952Navigator from '../features/NotificationList7160952/navigator';
import BlankScreen0160813Navigator from '../features/BlankScreen0160813/navigator';
import SignIn41160665Navigator from '../features/SignIn41160665/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial2160956: { screen: Tutorial2160956Navigator },
UserProfile4160954: { screen: UserProfile4160954Navigator },
Settings6160953: { screen: Settings6160953Navigator },
NotificationList7160952: { screen: NotificationList7160952Navigator },
BlankScreen0160813: { screen: BlankScreen0160813Navigator },
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
