import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from '../components/Feed/Feed';
import Article from '../components/Article/Article';
import Home from '../components/Home/Home';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator  defaultStatus="open">
      <Drawer.Screen
      
      name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}