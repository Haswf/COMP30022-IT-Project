import LoginScreen from "./LoginScreen";
import WelcomeScreen from "./WelcomeScreen";
import SignInScreen from "./SignInScreen";
import DebugScreen from "./DebugScreen";
import HomePage from "./HomePageScreen";
import CommunityMainScreen from "./CommunityMainScreen";
import MemberPr from "./MemberProfileScreen";
import AccountHoldScreen from "./AccountHoldScreen";
import TestScreen from "./TestScreen";
import CommunityCommentScreen from "./CommunityCommentScreen";
import EditProfileScreen from "./EditProfileScreen";
import Achievement from "./AchievementScreen";
import ArtefactItem from "./ArtefactItemScreen";
import TestFirebase from "./TestFirebase";

import ArtefactGuide from "./ArtefactGuideScreen";
import AddMemberGuide from "./AddMemberGuideScreen";
import ArtGuide from "./AddArtefactFromMemberGuideScreen";
import { createStackNavigator } from "react-navigation";

const AppNavigator = createStackNavigator({
  Debug: {screen: DebugScreen},
  Test:{screen: TestScreen},
  Welcome: {screen: WelcomeScreen},
  Login: {screen: LoginScreen,},
  SignIn: {screen: SignInScreen},
  HomePage: {screen: HomePage},
  CommunityMain: {screen: CommunityMainScreen},
  CommunityComment: {screen: CommunityCommentScreen},
  AccountHold: {screen: AccountHoldScreen},
  MemberPr: {screen: MemberPr},
  EditProfile: {screen: EditProfileScreen},
  Achievement: {screen: Achievement},
  ArtGuide: {screen: ArtGuide},
  ArtefactItem: {screen: ArtefactItem},
  TestFirebase: {screen: TestFirebase},
  ArtefactGuide: {screen: ArtefactGuide},
  AddMemberGuide: {screen: AddMemberGuide}

}, {
      // should be debug
      initialRouteName: "Debug",
}, {
  defaultNavigationOptions:{
    header:null
  }
});

export default AppNavigator;