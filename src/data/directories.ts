import { Directory } from '../types';

export const directories: Directory[] = [
  { id:'1', name:'You', icon:'👤', color:'#FF6B35', bgColor:'#FF6B35', description:'Personal notes & reminders', messages:[
    { id:'m1', sender:'Self Note', preview:'Remember to submit the assignment by Friday', time:'9:00 AM', read:false, avatar:'📝', body:'Remember to submit the CS5450 Exercise 3 assignment by Friday. Include the README.pdf with screenshots and push everything to GitHub.' },
    { id:'m2', sender:'Reminder', preview:'Gym session at 6pm today', time:'Yesterday', read:true, avatar:'💪', body:'Gym session at 6pm today. Do not skip leg day again.' },
    { id:'m3', sender:'Goal Tracker', preview:'Complete mobile programming project', time:'Mon', read:true, avatar:'🎯', body:'Complete the mobile programming project using React Native. Focus on clean UI and navigation.' },
  ]},
  { id:'2', name:'Home', icon:'🏠', color:'#4ECDC4', bgColor:'#4ECDC4', description:'Family home messages', messages:[
    { id:'m4', sender:'Mom', preview:'Dinner is ready! Come home before 7.', time:'5:45 PM', read:false, avatar:'👩', body:'Dinner is ready! I made pasta with garlic bread. Come home before 7 PM.' },
    { id:'m5', sender:'Dad', preview:'Did you take out the trash this morning?', time:'8:15 AM', read:true, avatar:'👨', body:'Did you take out the trash this morning? Please make sure it is done before tonight.' },
    { id:'m6', sender:'Home Group', preview:'Grocery list updated — check the fridge note', time:'Yesterday', read:true, avatar:'🛒', body:'We need milk, eggs, bread, orange juice, and coffee. Check the note on the fridge for the full list.' },
  ]},
  { id:'3', name:'Love', icon:'❤️', color:'#E63946', bgColor:'#E63946', description:'Special someone', messages:[
    { id:'m7', sender:'Alex ❤️', preview:"Missing you already 😊 Can't wait for the weekend", time:'11:30 AM', read:false, avatar:'🥰', body:"Missing you already! Can't wait for the weekend. I booked that cafe you wanted to try. Saturday at 2 PM." },
    { id:'m8', sender:'Alex ❤️', preview:'Did you watch the movie I recommended?', time:'Yesterday', read:true, avatar:'🎬', body:'Did you watch the movie I recommended? Call me later so we can talk about it.' },
    { id:'m9', sender:'Alex ❤️', preview:'Good morning! Hope your day is amazing', time:'Mon', read:true, avatar:'☀️', body:'Good morning! Hope your day is amazing. Remember to eat breakfast and take care of yourself!' },
  ]},
  { id:'4', name:'Family', icon:'👨‍👩‍👧‍👦', color:'#7B2FBE', bgColor:'#7B2FBE', description:'Family group chat', messages:[
    { id:'m10', sender:'Grandma Rose', preview:'Sunday dinner at my place! Bring everyone', time:'10:00 AM', read:false, avatar:'👵', body:'Sunday dinner at my place! I am making the big roast. We start at 3 PM.' },
    { id:'m11', sender:'Uncle Bob', preview:'Happy birthday to you next week!', time:'2 days ago', read:true, avatar:'🎂', body:'Happy early birthday! We should all go out for dinner to celebrate.' },
    { id:'m12', sender:'Family Chat', preview:'New photos from the reunion uploaded!', time:'Last week', read:true, avatar:'📸', body:'New photos from the reunion have been uploaded to the shared album. Over 80 photos!' },
  ]},
  { id:'5', name:'Friends', icon:'👯', color:'#FF69B4', bgColor:'#FF69B4', description:'Squad messages', messages:[
    { id:'m13', sender:'Jordan', preview:'Party at my place Friday night! You in?', time:'3:20 PM', read:false, avatar:'🎉', body:'Party at my place Friday night! Starting at 9 PM. Bring whoever you want.' },
    { id:'m14', sender:'Sam & Riley', preview:'Did you see the game last night?', time:'Yesterday', read:true, avatar:'⚽', body:'Did you see the game last night?! That goal in extra time was absolutely wild.' },
    { id:'m15', sender:'Study Group', preview:'Library session tomorrow at 2 - bring notes!', time:'Mon', read:false, avatar:'📚', body:'Library session tomorrow at 2 PM. The group study room on the 3rd floor is booked.' },
  ]},
  { id:'6', name:'School', icon:'🎓', color:'#0077B6', bgColor:'#0077B6', description:'Academic messages', messages:[
    { id:'m16', sender:'Dr. Mohammed', preview:'Assignment 3 due Friday - React Native project', time:'9:05 AM', read:false, avatar:'👨‍🏫', body:'Reminder: Exercise 3 is due this Friday. Submit to D2L as a ZIP file. Include all JS/TS files, images, and README.pdf.' },
    { id:'m17', sender:'D2L System', preview:'Your grade for Exercise 2 has been posted', time:'Yesterday', read:true, avatar:'✅', body:'Your grade for Exercise 2 has been posted on D2L. Please log in to view your feedback.' },
    { id:'m18', sender:'Library Alert', preview:'3 books due for return next Monday', time:'2 days ago', read:true, avatar:'📖', body:'3 books are due for return next Monday. You can renew them online through your student portal.' },
  ]},
];
