import React, {Component} from "react";
import { Text, Image, StyleSheet, View , Alert, KeyboardAvoidingView, ImageBackground, TouchableWithoutFeedback, Linking} from "react-native";

import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";

import imageLogo from "../assets/images/glass.png";
import backgroundimg from "../assets/images/Back.png"
import iconMail from "../assets/images/icon-mail.png";

import colors from "../config/colors";
import strings from "../config/strings";

import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Ellipse,
} from 'react-native-svg'

const SvgComponent = () => (
  <Svg width="73px" height="101px" viewBox="0 0 73 101">
    <Defs>
      <LinearGradient
        x1="50%"
        y1="0.599134291%"
        x2="53.8282795%"
        y2="92.5429249%"
        id="linearGradient-1"
      >
        <Stop stopColor="#B3D0F2" offset="0%" />
        <Stop stopColor="#8DB2DE" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="50.0400273%"
        y1="48.8161153%"
        x2="55.2294918%"
        y2="51.034269%"
        id="linearGradient-2"
      >
        <Stop stopColor="#7CA9DD" offset="0%" />
        <Stop stopColor="#8DB2DE" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="73.0859125%"
        y1="8.37713523%"
        x2="18.0987147%"
        y2="87.3689235%"
        id="linearGradient-3"
      >
        <Stop stopColor="#CFE4FA" offset="0%" />
        <Stop stopColor="#B2D0F4" offset="99.6674409%" />
      </LinearGradient>
      <LinearGradient
        x1="73.0859125%"
        y1="8.37713523%"
        x2="18.0987147%"
        y2="87.3689235%"
        id="linearGradient-4"
      >
        <Stop stopColor="#CFE4FA" offset="0%" />
        <Stop stopColor="#B2D0F4" offset="99.6674409%" />
      </LinearGradient>
      <LinearGradient
        x1="73.0859125%"
        y1="8.37713523%"
        x2="18.0987147%"
        y2="87.3689235%"
        id="linearGradient-5"
      >
        <Stop stopColor="#CFE4FA" offset="0%" />
        <Stop stopColor="#B2D0F4" offset="99.6674409%" />
      </LinearGradient>
      <LinearGradient
        x1="73.0859125%"
        y1="8.37713523%"
        x2="18.0987147%"
        y2="87.3689235%"
        id="linearGradient-6"
      >
        <Stop stopColor="#CFE4FA" offset="0%" />
        <Stop stopColor="#B2D0F4" offset="99.6674409%" />
      </LinearGradient>
      <LinearGradient
        x1="73.0859125%"
        y1="8.37713523%"
        x2="18.0987147%"
        y2="87.3689235%"
        id="linearGradient-7"
      >
        <Stop stopColor="#CFE4FA" offset="0%" />
        <Stop stopColor="#B2D0F4" offset="99.6674409%" />
      </LinearGradient>
      <LinearGradient
        x1="56.7455432%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-8"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="51.5369469%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-9"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="55.3666957%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-10"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="52.4547392%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-11"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="53.7936406%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-12"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="52.4574193%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-13"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="51.573052%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-14"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="51.5731364%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-15"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="52.4519603%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-16"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="52.4550036%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-17"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="52.4546044%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-18"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="51.5733094%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-19"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="52.6313734%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="linearGradient-20"
      >
        <Stop stopColor="#BDD8F2" offset="0%" />
        <Stop stopColor="#B2D0F1" offset="100%" />
      </LinearGradient>
    </Defs>
    <G
      id="UI-Design"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
      opacity={0.7}
    >
      <G id="Login" transform="translate(-140.000000, -53.000000)">
        <G id="\u900F\u660E" transform="translate(141.000000, 54.000000)">
          <Path
            d="M24.7757045,57.1982668 C24.3624453,56.9522678 24.9823341,56.8292683 26.6353711,56.8292683 C29.1149265,56.8292683 46.7817586,56.8292683 49.261314,56.8292683 C51.7408694,56.8292683 51.7408694,57.0752673 51.7408694,57.1982668 C51.7408694,57.3212663 47.4257131,58.7689375 46.7817586,61.9952477 C46.3524556,64.1461213 46.6314056,66.1141134 47.6186085,67.8992243 C53.2544787,75.4786032 56.0439785,81.5465791 55.987108,86.1031519 C55.9302375,90.6597246 53.1717321,93.8577119 47.7115919,95.6971137 C49.1579992,96.1891117 50.0878325,96.64011 50.5010917,97.0501083 C50.9143509,97.4601067 49.8812028,98.0751042 47.4016475,98.895101 C47.4016475,98.9771007 45.6452957,99.1820998 42.1325923,99.5100985 C38.6198888,99.8380972 35.0038705,99.8380972 31.2845374,99.5100985 C28.5983524,99.1001002 26.7386859,98.7311016 25.7055378,98.4031029 C24.1558157,97.9111049 23.5359268,97.7881054 23.8458713,97.0501083 C24.0525009,96.5581103 24.9823341,96.0661122 26.6353711,95.5741142 C21.7182271,91.3702332 19.2596552,88.0487805 19.2596552,85.6097561 C19.2596552,81.9512195 19.9095771,79.9531763 22.2961491,75.8941925 C24.6827212,71.8352086 24.6827212,72.4502062 26.5423877,69.2522189 C28.4020543,66.0542316 29.7348153,63.7172409 29.4248709,61.9952477 C29.2182413,60.8472523 27.6685191,59.2482587 24.7757045,57.1982668 Z"
            id="\u8DEF\u5F84-2"
            fill="url(#linearGradient-1)"
          />
          <Path
            d="M55.987108,86.1736089 C55.9302375,90.7301817 53.1717321,93.928169 47.7115919,95.7675708 C49.1579992,96.2595688 50.0878325,96.710567 50.5010917,97.1205654 C50.9143509,97.5305638 49.8812028,98.1455613 47.4016475,98.9655581 C47.4016475,99.0475577 45.6452957,99.2525569 42.1325923,99.5805556 C38.6198888,99.9085543 35.0038705,99.9085543 31.2845374,99.5805556 C28.5983524,99.1705572 26.7386859,98.8015587 25.7055378,98.47356 C24.1558157,97.981562 23.5359268,97.8585625 23.8458713,97.1205654 C24.0525009,96.6285674 24.9823341,96.1365693 26.6353711,95.6445713 C21.7182271,91.4406903 19.2596552,88.1192376 19.2596552,85.6802132 C19.2596552,82.0216766 19.9095771,80.0236334 22.2961491,75.9646495 C24.6827212,71.9056657 26.9079197,68.3199385 28.7675862,65.1219512 C29.3043333,64.1989307 35.5928204,70.1619529 39.0068966,72.4390244 C41.2010345,73.902439 44.1311267,74.1614056 47.2958621,75.8536585 C54.2695891,79.5826623 56.0289502,82.8291894 55.987108,86.1736089 Z"
            id="\u8DEF\u5F84-2"
            fillOpacity={0.5}
            fill={0}
          />
          <Path
            d="M47.3473447,95.7327556 C48.793752,96.2247537 49.7235852,96.6757519 50.1368445,97.0857502 C50.5501037,97.4957486 49.5169556,98.1107462 47.0374002,98.9307429 C47.0374002,99.0127426 45.2810485,99.2177417 41.768345,99.5457404 C38.2556416,99.8737391 34.6396233,99.8737391 30.9202902,99.5457404 C28.2341052,99.1357421 26.3744387,98.7667435 25.3412906,98.4387448 C23.7915685,97.9467468 23.1716796,97.8237473 23.481624,97.0857502 C23.6882537,96.5937522 24.6180869,96.1017541 26.2711239,95.6097561 C29.7232482,96.5853659 33.2371264,97.0731707 36.8127586,97.0731707 C40.3883908,97.0731707 43.8999195,96.6263657 47.3473447,95.7327556 Z"
            id="\u8DEF\u5F84-2"
            fill="url(#linearGradient-2)"
          />
          <G id="tr" stroke="#979797">
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-3)"
              cx={44.2484483}
              cy={40.6097561}
              rx={5.24155172}
              ry={5.24390244}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-4)"
              cx={25.5982759}
              cy={30.7317073}
              rx={3.65689655}
              ry={3.65853659}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-4)"
              cx={60.7044828}
              cy={40}
              rx={3.65689655}
              ry={3.65853659}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-5)"
              cx={68.1401724}
              cy={25.9756098}
              rx={2.55982759}
              ry={2.56097561}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-5)"
              cx={28.8894828}
              cy={15}
              rx={2.55982759}
              ry={2.56097561}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-6)"
              cx={35.1062069}
              cy={1.95121951}
              rx={1.95034483}
              ry={1.95121951}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-6)"
              cx={16.0903448}
              cy={21.7073171}
              rx={1.95034483}
              ry={1.95121951}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-6)"
              cx={18.2844828}
              cy={4.63414634}
              rx={1.95034483}
              ry={1.95121951}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-7)"
              cx={46.6863793}
              cy={17.9268293}
              rx={5.48534483}
              ry={5.48780488}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-6)"
              cx={12.1896552}
              cy={38.7804878}
              rx={1.95034483}
              ry={1.95121951}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-6)"
              cx={2.19413793}
              cy={48.5365854}
              rx={1.95034483}
              ry={1.95121951}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-6)"
              cx={1.95034483}
              cy={29.5121951}
              rx={1.95034483}
              ry={1.95121951}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-6)"
              cx={17.5531034}
              cy={58.0487805}
              rx={1.95034483}
              ry={1.95121951}
            />
            <Ellipse
              id="\u692D\u5706\u5F62"
              fill="url(#linearGradient-6)"
              cx={23.8917241}
              cy={45.8536585}
              rx={1.95034483}
              ry={1.95121951}
            />
            <Path
              d="M40.3649962,47.7280987 L40.1289684,55.7630345 L43.6514795,55.0783277 L43.5392202,47.7077688 C42.8292769,47.8944024 42.2722172,47.9885336 41.8574941,47.9884987 C41.4564498,47.988465 40.9612498,47.9009512 40.3649962,47.7280987 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-8)"
              transform="translate(41.884314, 51.711387) rotate(11.000000) translate(-41.884314, -51.711387) "
            />
            <Path
              d="M33.4453581,30.6706559 L33.4436728,39.9618089 C33.7608541,39.9299166 34.0189125,39.913859 34.2200717,39.9138225 C34.4058881,39.9137888 34.6262815,39.9273508 34.8824731,39.9543114 L34.8841526,30.6954755 C34.6472948,30.7467302 34.4380304,30.7727447 34.2541568,30.772778 C34.044292,30.7728161 33.7765448,30.7385559 33.4453581,30.6706559 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-9)"
              transform="translate(34.163921, 35.280696) rotate(-63.000000) translate(-34.163921, -35.280696) "
            />
            <Path
              d="M52.5772701,38.5822604 L52.5774029,42.8371839 C52.7869342,42.7950899 52.9804063,42.7737476 53.1587305,42.7737531 C53.3803214,42.77376 53.6645264,42.8072622 54.0164231,42.8736498 L54.0162867,38.5041604 C53.5808769,38.5896449 53.255316,38.6325487 53.0292117,38.6325416 C52.8842326,38.6325371 52.7336944,38.615599 52.5772701,38.5822604 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-10)"
              transform="translate(53.296845, 40.689213) rotate(86.000000) translate(-53.296845, -40.689213) "
            />
            <Path
              d="M63.9997528,28.9193225 L64.0009848,35.8937747 C64.204776,35.8446233 64.3932645,35.819639 64.5677105,35.8196698 C64.7895352,35.819709 65.0775892,35.8611804 65.4391346,35.9433278 L65.4378874,28.8826105 C65.0501015,28.9382334 64.7508371,28.9661782 64.5345369,28.96614 C64.370916,28.9661111 64.1928776,28.9503847 63.9997528,28.9193225 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-11)"
              transform="translate(64.719446, 32.442559) rotate(206.000000) translate(-64.719446, -32.442559) "
            />
            <Path
              d="M44.0186843,24.7868836 L44.0190951,33.6016709 C44.5665359,33.486228 45.0077625,33.4279896 45.3489521,33.4280055 C45.689883,33.4280214 46.130191,33.486207 46.6760096,33.6015101 L46.6755987,24.785142 C46.1097136,24.8389772 45.6603016,24.8660016 45.3244407,24.8659859 C44.9923109,24.8659704 44.5579239,24.8395225 44.0186843,24.7868836 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-12)"
              transform="translate(45.347349, 29.230825) rotate(6.000000) translate(-45.347349, -29.230825) "
            />
            <Path
              d="M17.5644094,31.5901927 L17.5658451,38.5996609 C17.7411563,38.5647801 17.9063891,38.5470991 18.0621062,38.5471309 C18.283825,38.5471764 18.5952609,38.5842952 19.004557,38.658108 L19.0031215,31.6495043 C18.8351157,31.6809403 18.6696678,31.6968048 18.5068594,31.6967715 C18.2649329,31.6967219 17.9524704,31.6609888 17.5644094,31.5901927 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-13)"
              transform="translate(18.284483, 35.121951) rotate(57.000000) translate(-18.284483, -35.121951) "
            />
            <Path
              d="M6.80395283,40.3171527 L6.80548657,47.162556 C6.9244416,47.1375754 7.03860556,47.1248767 7.14847918,47.1249013 C7.31255334,47.1249381 7.51335219,47.1542463 7.756295,47.2122133 L7.75474138,40.2780345 C7.53475896,40.3350804 7.34574012,40.3639906 7.18350019,40.3639542 C7.06249584,40.3639271 6.93622115,40.3481313 6.80395283,40.3171527 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-14)"
              transform="translate(7.280117, 43.731999) rotate(46.000000) translate(-7.280117, -43.731999) "
            />
            <Path
              d="M6.43764084,30.423125 L6.43601528,37.7137548 L7.38684309,37.7135429 L7.38846865,30.422913 L6.43764084,30.423125 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-15)"
              transform="translate(6.912242, 34.068334) rotate(132.000000) translate(-6.912242, -34.068334) "
            />
            <Path
              d="M23.9874605,35.533155 L23.9877876,42.5529946 C24.2972936,42.4779537 24.5613592,42.439916 24.7839988,42.4399264 C24.9800447,42.4399355 25.1934765,42.4691833 25.4257294,42.5267009 L25.4254034,35.5309462 C25.1352864,35.5777432 24.8929595,35.6013635 24.695493,35.6013543 C24.5010872,35.6013453 24.2659494,35.5784594 23.9874605,35.533155 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-16)"
              transform="translate(24.706597, 39.072643) rotate(6.000000) translate(-24.706597, -39.072643) "
            />
            <Path
              d="M19.918624,48.2964515 L19.9199325,55.3374951 C20.3333177,55.25393 20.6477855,55.2119446 20.872696,55.2119864 C21.0265295,55.212015 21.1881492,55.2310235 21.3580916,55.2684006 L21.3567929,48.2799438 C21.0336152,48.3361131 20.7712805,48.3644306 20.5654491,48.3643923 C20.3800722,48.3643579 20.1651498,48.3415277 19.918624,48.2964515 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-17)"
              transform="translate(20.638364, 51.815429) rotate(28.000000) translate(-20.638364, -51.815429) "
            />
            <Path
              d="M31.3740342,4.81779981 L31.3752292,11.777438 C31.7279766,11.7116152 32.0063632,11.6784683 32.2165542,11.6785044 C32.3922919,11.6785346 32.5906339,11.7013459 32.8133501,11.7463096 L32.8121634,4.83550736 C32.5621921,4.90344551 32.3201286,4.93488053 32.0858422,4.92843728 C31.8584105,4.92218255 31.6212597,4.88502351 31.3740342,4.81779981 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-18)"
              transform="translate(32.093686, 8.248148) rotate(205.000000) translate(-32.093686, -8.248148) "
            />
            <Path
              d="M21.8234513,14.9479468 L21.8247783,22.0868658 C22.0511294,22.0637324 22.2395278,22.0521012 22.3916636,22.0521295 C22.5097378,22.0521514 22.6376794,22.0591379 22.7758023,22.0729757 L22.7744768,14.942141 C22.5737024,14.9657473 22.4044426,14.9776318 22.2649925,14.9776058 C22.1374489,14.9775821 21.990603,14.9676361 21.8234513,14.9479468 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-19)"
              transform="translate(22.299626, 18.508036) rotate(62.000000) translate(-22.299626, -18.508036) "
            />
            <Path
              d="M22.8935213,6.12188032 L22.891943,13.1664119 C23.1322526,13.109237 23.331675,13.0803189 23.495405,13.0802822 C23.6065449,13.0802573 23.7221556,13.0931515 23.842751,13.1185174 L23.8443214,6.1094271 C23.6256703,6.132364 23.4417532,6.14393131 23.2910311,6.14396508 C23.1695233,6.14399231 23.0371413,6.13658944 22.8935213,6.12188032 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-14)"
              transform="translate(23.368121, 9.686428) rotate(134.000000) translate(-23.368121, -9.686428) "
            />
            <Path
              d="M35.4909785,12.8384372 L35.4905444,19.861547 C35.7991521,19.8026311 36.0578134,19.7728416 36.2700461,19.7728285 C36.485171,19.7728152 36.7389465,19.8134361 37.0359933,19.8935025 L36.9385648,12.8212311 C36.6261673,12.8812365 36.364678,12.9115798 36.1504809,12.9115931 C35.9568501,12.911605 35.7375937,12.8870044 35.4909785,12.8384372 Z"
              id="\u77E9\u5F62"
              fill="url(#linearGradient-20)"
              transform="translate(36.268043, 16.391781) rotate(98.000000) translate(-36.268043, -16.391781) "
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
)

export default class SignInScreen extends Component{
  static navigationOptions = {
    header: null
  }
  
  state = {
    email:"",
    password:"",
    familyName:"",
  }

  handleEmailChanges = (email) => {
    this.setState({email : email});
  }

  handlePasswordChanges = (password) => {
    this.setState({password : password});
  }

  handleFamilyNameChanges = (familyName) => {
      this.setState({familyName: familyName});
  }

  handleTermsPress = () => {
    Linking.openURL('https://www.websitepolicies.com/policies/view/aa0q7EH6');
  }

  handlePolicyPress = () => {
    Linking.openURL('https://famory.flycricket.io/privacy.html');
  }

  handleLoginPress = () => {
    Alert.alert("Login Pressed with 0.5 opacity");
  }

  render() {
    const component = SvgComponent(styles.logo);

    return (
      <ImageBackground source={backgroundimg} style={styles.background}>
      <KeyboardAvoidingView behavior={"padding"} style={styles.container}>

        <View style={styles.logo}>{component}</View>
        <View style={styles.form}>
          <Text  style={{fontSize:20, marginTop:20, marginBottom:5}}>
            Create New Account
          </Text>

          <FormTextInput
            value={this.state.familyName}
            onChangeText={this.handleFamilyNameChanges}
            placeholder={strings.FAMILYNAME_PLACEHOLDER}
            returnKeyType= "next"
          />

          <View style={{flexDirection: 'row'}}>
            <Image source={iconMail} style={styles.icon}/>
            <FormTextInput
              value={this.state.Email}
              onChangeText={this.handleEmailChanges}
              placeholder={strings.EMAIL_PLACEHOLDER}
              keyboardType={"email-address"}
              returnKeyType="next"
              autoCorrect={false}
              style={{flex:1}}
            />
          </View>

          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChanges}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            returnKeyType= "done"
          />
          
          <Button
            label={strings.LOGIN}
            onPress={this.handleLoginPress}
          />
      </View>

      <View style={{margin:30, alignItems:"center"}}>
        <Text style={{color:colors.WHITE}}>
          By creating an account, you accept Famory's
        </Text>

        <Text style={{color:colors.WHITE}}>
            <TouchableWithoutFeedback onPress={this.handleTermsPress}>
                <Text style={{textDecorationLine: 'underline'}}>
                    Terms of Service
                </Text>
            </TouchableWithoutFeedback>

            {" "} and {" "}

            <TouchableWithoutFeedback onPress={this.handlePolicyPress}>
                <Text style={{textDecorationLine: 'underline'}}>
                    Privacy Policy
                </Text>
            </TouchableWithoutFeedback>
        </Text>
      </View>

    </KeyboardAvoidingView>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background:{
    flex:1,
    resizeMode: "center",
  },
  logo: {
    width: "20%",
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom:40
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    opacity: 0.95,
    paddingHorizontal:"5%",
    paddingVertical:"5%",
  },
  icon: {
    padding: 10,
    marginTop:15,
    marginRight:10,
    marginLeft:5,
    height: 15,
    width: 15,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});
