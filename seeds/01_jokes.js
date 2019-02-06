

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jokes').del()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        {text: "A steak pun is a rare medium well done.", url: "https://images.agoramedia.com/wte3.0/gcms/funny-dad-stories-01-722x406.jpg?width=600"},
        {text: "What are the strongest days of the week? Saturday and Sunday...the rest are weekdays.", url: "http://cdn5.viralscape.com/wp-content/uploads/2014/04/funny-dad-10.jpg"},
        {text: "What is a tornado's favorite game to play? Twister!", url: "http://cdn6.viralscape.com/wp-content/uploads/2014/04/funny-dad-7.jpg"},
        {text: "What is a tornado's favorite game to play? Twister!", url: "http://cdn5.viralscape.com/wp-content/uploads/2014/04/funny-dad-4.jpg"},
        {text: "Did you hear that David lost his ID in prague? Now we just have to call him Dav.", url: "http://cdn5.viralscape.com/wp-content/uploads/2014/04/funny-dad-2.jpg"},
        {text: "Why don’t seagulls fly over the bay? Because then they’d be bay-gulls!", url: "https://static.boredpanda.com/blog/wp-content/uploads/2016/07/funny-dads-parenting-fails-7-5776723001c24__605.jpg"},
        {text: "Whoever invented the knock-knock joke should get a no bell prize.", url: "http://cdn.lifebuzz.com/images/69997/lifebuzz-4ce8d3671f0e72d576618f078ef8c028-limit_2000.jpg"},
        {text: "Why did the burglar hang his mugshot on the wall? To prove that he was framed!", url: "http://cdn.lifebuzz.com/images/70007/lifebuzz-606e261879d45fc2d9e18063b49cfa7d-limit_2000.jpg"},
        {text: "Why does Waldo only wear stripes? Because he doesn't want to be spotted.", url: "http://cdn.lifebuzz.com/images/69996/lifebuzz-f554213e401d15db5c289856fd1bf6ae-limit_2000.jpg"},
        {text: "A weasel walks into a bar. The bartender says, \'Wow, I\'ve never served a weasel before. What can I get for you?\' \n \'Pop,\' goes the weasel.", url: "http://cdn.lifebuzz.com/images/69984/lifebuzz-765ac17f6f601f6087dda99905603726-limit_2000.jpg"},
        {text: "Did you hear the joke about the wandering nun? She was a roman catholic.", url: "http://www.irishnews.com/picturesarchive/irishnews/irishnews/2017/02/16/153003656-24c88362-4cf6-43bc-b396-065937df4551.jpg"},
        {text: "Why can't your nose be 12 inches long? Because then it\'d be a foot!", url: "http://cdn.lifebuzz.com/images/69997/lifebuzz-4ce8d3671f0e72d576618f078ef8c028-limit_2000.jpg" },
        {text: "Want to hear a joke about construction? Nah, I'm still working on it.", url: "http://cdn.lifebuzz.com/images/70003/lifebuzz-d32e364ac0482b9d8b18e0ebd75bf95f-limit_2000.jpg"},
        {text: "Why did the opera singer go sailing? They wanted to hit the high Cs.", url: "http://cdn.lifebuzz.com/images/70007/lifebuzz-606e261879d45fc2d9e18063b49cfa7d-limit_2000.jpg"},
        {text: "Where does Fonzie like to go for lunch? Chick-Fil-Eyyyyyyyy.", url: "http://cdn.lifebuzz.com/images/70276/lifebuzz0aa2406e55f374ef4c62c96565247452-limit_2000.jpg"},
        {text: "Why is no one friends with Dracula? Because he's a pain in the neck.", url: "http://cdn.lifebuzz.com/images/69984/lifebuzz-765ac17f6f601f6087dda99905603726-limit_2000.jpg"},
        {text: "A quick shoutout to all of the sidewalks out there... Thanks for keeping me off the streets.", url: "http://cdn.lifebuzz.com/images/69980/lifebuzz-3ba5660d6138e7f1ce61f7c79389dd03-limit_2000.jpg"},
        {text: "When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!", url: "https://static.boredpanda.com/blog/wp-content/uploads/2016/07/funny-dads-parenting-fails-15-5776724611cd4__605.jpg"},
        {text: "My wife tried to unlatch our daughter\'s car seat with one hand and said, \"How do one armed mothers do it?\" Without missing a beat I replied, \"Single handedly.\"", url: "https://static.boredpanda.com/blog/wp-content/uploads/2016/07/funny-dads-parenting-fails-23-577672565c586__605.jpg"},
        {text: "A slice of apple pie is $2.50 in Jamaica and $3.00 in the Bahamas. These are the pie rates of the Caribbean.", url: "https://static.boredpanda.com/blog/wp-content/uploads/2016/07/Funny-dads-parenting-fails-40-577a5c487ae24__605.jpg"},
        {text: "My daughter screeched, \"Daaaaaad, you haven\'t listened to one word I\'ve said, have you!?\" What a strange way to start a conversation with me...", url: "https://static.boredpanda.com/blog/wp-content/uploads/2016/07/funny-dads-parenting-fails-30-57767266d2f26__605.jpg"},
        {text: "What is the least spoken language in the world? Sign language", url: "https://static.boredpanda.com/blog/wp-content/uploads/2016/07/funny-dads-parenting-fails-5776755a54318__605.jpg"},
        {text: "I ordered a chicken and an egg from Amazon. I’ll let you know", url: "https://static.boredpanda.com/blog/wp-content/uploads/2016/07/funny-dads-parenting-fails-35-577a2de706bf7__605.jpg"},
        {text: "What do you call someone with no body and no nose? Nobody knows.", url: "http://cdn.lifebuzz.com/images/69995/lifebuzz-feb487b651aba1c604b86d5e6db01d3b-limit_2000.jpg"},
        {text: "I'm reading a book about anti-gravity. It's impossible to put down!", url: "http://cdn.lifebuzz.com/images/70010/lifebuzz-55e0e3f783f11b5f74f1a0bbca87f31d-limit_2000.jpg"},
        {text: "The secret service isn\'t allowed to yell \"Get down!\" anymore when the president is about to be attacked. Now they have to yell \"Donald, duck!\"", url: "http://cdn.lifebuzz.com/images/70013/lifebuzz-d20f48a476267875a38aa4214a83d817-limit_2000.jpg"},
        {text: "If a child refuses to sleep during nap time, are they guilty of resisting a rest?", url: "http://cdn.lifebuzz.com/images/70015/lifebuzz-8cf37d8a52df7646a00ef56e8a11433b-limit_2000.jpg"},
        {text: "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.", url: "http://cdn.lifebuzz.com/images/70014/lifebuzz-3583820fc12a6970d526086820f15fb5-limit_2000.jpg"},
        {text: "I bought some shoes from a drug dealer. I don\'t know what he laced them with, but I was tripping all day!", url: "http://cdn.lifebuzz.com/images/70008/lifebuzz-2c6a40f56e4496b53e1c6d96fdfe73c1-limit_2000.jpg"},
        {text: "How do you make holy water? You boil the hell out of it.", url: "http://cdn.lifebuzz.com/images/70011/lifebuzz-b3ae5562d68b005a8e9f8a3f42551fb7-limit_2000.jpg"},
        {text: "DAD: I was just listening to the radio on my way in to town, apparently an actress just killed herself. \n MOM: Oh my! Who!? \n DAD: Uh, I can\'t remember... I think her name was Reese something? \n MOM: WITHERSPOON!!!!!??????? \n DAD: No, it was with a knife...", url: "https://static.boredpanda.com/blog/wp-content/uploads/2016/07/funny-dads-parenting-fails-24-57767258ee77e__605.jpg"},
        {text: "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right.", url: "https://static.boredpanda.com/blog/wp-content/uploads/2016/07/funny-dads-parenting-fails-6-5776722d289f2__605.jpg"}
      ]);
    })
};
