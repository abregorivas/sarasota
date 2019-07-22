import sortBy from 'sort-by';
/*
All sermons and PDF's are add to the static folder. This folder gets copied to the build public folder.
NOTE: Currently, Each PDF and AUDIO file should have the same name but there be a need to allow for different names if needed.
*/

const sermons = [
  {
    title: 'God Does Not Accept Damaged goods',
    date: '2017-06-25',
    author: 'Ken Zindler',
    fileName: 'God_Does_not_Accept_Damaged_Goods_6.25.17',
    hasPdf: true,
    pdfPages: 5
  },
  {
    title: 'Experiencing Intimacy With God',
    date: '2017-07-16',
    author: 'Ken Zindler',
    fileName: 'Experiencing_Intimacy_With_God_7.16.17',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'Feel The Pain',
    date: '2017-07-30',
    author: 'Ken Zindler',
    fileName: 'Feel_the_Pain_7.30.17',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'It Is Not That Way',
    date: '2017-07-09',
    author: 'Ken Zindler',
    fileName: 'It_is_not_That_Way_7.9.17',
    hasPdf: true,
    pdfPages: 8
  },
  {
    title: 'Let Freedom Ring',
    date: '2017-07-02',
    author: 'Ken Zindler',
    fileName: 'Let_Freedom_Ring_7.2.17',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'Obstacles To Intimacy',
    date: '2017-07-23',
    author: 'Ken Zindler',
    fileName: 'Obstacles_to_Intimacy_7.23.17',
    hasPdf: true,
    pdfPages: 5
  },
  {
    title: 'Consequences',
    date: '2017-08-20',
    author: 'Ken Zindler',
    fileName: 'Consequences_8.20.17',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'Nothing New',
    date: '2017-08-06',
    author: 'Ken Zindler',
    fileName: 'Nothing_New_8.6.17',
    hasPdf: true,
    pdfPages: 7
  },
  {
    title: '16 Tons And What Do You Get?',
    date: '2017-09-03',
    author: 'Ken Zindler',
    fileName: '16_Tons_and_What_Do_You_Get_9.3.17',
    hasPdf: true,
    pdfPages: 7
  },
  {
    title: 'Harvey and Irma Turbulent Couple',
    date: '2017-09-17',
    author: 'Ken Zindler',
    fileName: 'Harvey_and_Irma_Turbulent_Couple_09.17.17',
    hasPdf: false,
    pdfPages: 0
  },
  {
    title: 'Why Do You Call Me Lord? part 1',
    date: '2017-09-24',
    author: 'Ken Zindler',
    fileName: 'Why_do_you_call_me_Lord_pt1_9.24.17',
    hasPdf: true,
    pdfPages: 4
  },
  {
    title: 'Why Do You Call Me Lord? part 2',
    date: '2017-10-01',
    author: 'Ken Zindler',
    fileName: 'Why_do_you_call_me_Lord_pt2_10.1.17',
    hasPdf: true,
    pdfPages: 5
  },
  {
    title: "What's in your cup? Part 2",
    date: '2017-10-29',
    author: 'Ken Zindler',
    fileName: 'Whats_In_Your_Cup_pt2_10.29.17',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: "What's in your cup? Part 1",
    date: '2017-10-15',
    author: 'Ken Zindler',
    fileName: 'Whats_in_Your_Cup_pt1_10.15.17',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'It Is Time For An EKG',
    date: '2017-10-08',
    author: 'Ken Zindler',
    fileName: 'Its_time_for_an_EKG_10.8.17',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'Fake Fraud Or The Real Thing?',
    date: '2017-11-12',
    author: 'Ken Zindler',
    fileName: 'Fake_Fraud_or_Real_Thing_11.12.17',
    hasPdf: true,
    pdfPages: 5
  },
  {
    title: 'The Day After Tomorrow',
    date: '2017-11-26',
    author: 'Ken Zindler',
    fileName: 'The_Day_After_Tomorrow_11.26.17',
    hasPdf: true,
    pdfPages: 5
  },
  {
    title: 'The Gods Of Your Ancestors',
    date: '2017-11-05',
    author: 'Doug Meacham',
    fileName: 'The_gods_of_Your_Ancesters_11.5.17',
    hasPdf: true,
    pdfPages: 5
  },
  {
    title: 'Where Are The Other Guys?',
    date: '2017-11-19',
    author: 'Ken Zindler',
    fileName: 'Where_are_the_other_guys_11.19.17',
    hasPdf: true,
    pdfPages: 5
  },
  {
    title: '6 Priorities That Will Transform Your New Year',
    date: '2017-12-31',
    author: 'Ken Zindler',
    fileName: '6_Priorities_that_will_transform_your_New_Year_12.31.17',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'How Do You Know If You Are In The Will Of God?',
    date: '2017-12-03',
    author: 'Ken Zindler',
    fileName: 'How_Do_You_Know_If_You_Are_In_The_Will_Of_God_12.3.17',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'Shalom, Chaverim! Peace My Friends',
    date: '2017-12-24',
    author: 'Ken Zindler',
    fileName: 'Shalom_chaverim_Peace_My_Friend_12.24.17',
    hasPdf: true,
    pdfPages: 7
  },
  {
    title: 'Skinned Alive',
    date: '2017-12-10',
    author: 'Ken Zindler',
    fileName: 'Skinned_Alive_12.10.17',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'Waiting For Christmas',
    date: '2017-12-17',
    author: 'Ken Zindler',
    fileName: 'Waiting_for_Christmas_12.17.17',
    hasPdf: true,
    pdfPages: 8
  },
  {
    title: 'How Do You Handle A Sucker Punch? Part 1',
    date: '2018-01-07',
    author: 'Ken Zindler',
    fileName: 'How_Do_You_Handle_A_Sucker_Punch_01.07.18',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'How Do You Handle A Sucker Punch? Part 2',
    date: '2018-01-21',
    author: 'Ken Zindler',
    fileName: 'How_Do_You_Handle_A_Sucker_Punch__Pt2_01.21.18',
    hasPdf: true,
    pdfPages: 3
  },
  {
    title: 'How Do You Handle A Sucker Punch? Part 3',
    date: '2018-01-28',
    author: 'Ken Zindler',
    fileName: 'How_Do_You_Handle_A_Sucker_Punch__Pt3_01.28.18',
    hasPdf: true,
    pdfPages: 8
  },
  {
    title: "God's Winning Team",
    date: '2018-02-04',
    author: 'Ken Zindler',
    fileName: 'God_s Winning Team_2.4.18',
    hasPdf: true,
    pdfPages: 4
  },
  {
    title: "Don't Beat A Dead Horse",
    date: '2018-02-18',
    author: 'Ken Zindler',
    fileName: 'Dont_Beat_a_Dead_Horse_02_18_2018',
    hasPdf: true,
    pdfPages: 7
  },
  {
    title: 'From Dumb To Numb',
    date: '2018-02-11',
    author: 'Ken Zindler',
    fileName: 'From_Dumb_to_Numb_02_11_2018',
    hasPdf: true,
    pdfPages: 8
  },
  {
    title: "Can't Run From Shorty",
    date: '2018-02-14',
    author: 'Ken Zindler',
    fileName: 'Cant_Run_From_Shorty_02_24_2018',
    hasPdf: true,
    pdfPages: 7
  },
  {
    title: 'Jumping Jehoshaphat',
    date: '2018-03-04',
    author: 'Ken Zindler',
    fileName: 'JumpinJehoshaphat_03_04_2018',
    hasPdf: true,
    pdfPages: 7
  },
  {
    title: 'Leadership Lessons From Hezekiah',
    date: '2018-03-11',
    author: 'Ken Zindler',
    fileName: 'Leadership_Lessons_From_Hezekiah_03_11_2018',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'Manasseh Becomes King DOH!!!',
    date: '2018-03-18',
    author: 'Ken Zindler',
    fileName: 'Manasseh_Becomes_King_DOH_03_18_2018',
    hasPdf: true,
    pdfPages: 8
  },
  {
    title: 'Daniel A Life Without Compromise',
    date: '2018-03-25',
    author: 'Ken Zindler',
    fileName: 'Daniel_A_Life_without_Compromise_03_25_2018',
    hasPdf: true,
    pdfPages: 7
  },
  {
    title: "Rediscovering God's Remedy For Worry",
    date: '2018-04-01',
    author: 'Bob Russell',
    fileName: 'Rediscovering_Gods_Remedy_For_Worry_04_01_2018',
    hasPdf: false,
    pdfPages: 0
  },
  {
    title: 'Baptism, Bringing Clarity to an Unclear World',
    date: '2018-04-08',
    author: 'Ken Zindler',
    fileName: 'Baptism_Bringing_Clarity_to_an_Unclear_World_04_08_2018',
    hasPdf: true,
    pdfPages: 10
  },
  {
    title: 'Baptism! So Which One?',
    date: '2018-04-15',
    author: 'Ken Zindler',
    fileName: 'Baptism_So_Which_One_04_15_2018',
    hasPdf: true,
    pdfPages: 9
  },
  {
    title: 'Baptism, How Should I Dress?',
    date: '2018-04-22',
    author: 'Ken Zindler',
    fileName: 'Baptism_How_Should_I_Dress_04_22_2018',
    hasPdf: true,
    pdfPages: 6
  },
  {
    title: 'So where is your parachute?',
    date: '2018-04-29',
    author: 'Ken Zindler',
    fileName: 'Where_Is_Your_Parachute_04_29_2018',
    hasPdf: true,
    pdfPages: 7
  },
  {
    title: 'There Is Power In The Blood. Part1',
    date: '2018-06-03',
    author: 'Ken Zindler',
    fileName: 'There_Is_Power_In_The_Blood_pt1_06.03.2018',
    hasPdf: true,
    pdfPages: 5
  }
];

const sermonList = sermons.sort(sortBy('-date')).reduce((prev, cur, index) => {
  const newVal = Object.assign({}, cur, {
    show: true,
    selected: index === 0
  });
  prev.push(newVal);
  return prev;
}, []);

export default sermonList;
