let poll = document.getElementById('poll2');

var tl = new TimelineMax({repeat:0, repeatDelay:1});

// .totalDuration(1)

let selectOptionTime = .4;

tl
.fromTo('#poll2', .33, {transformOrigin: '50% 50%', rotation:"30", left: 100}, {rotation:"0", left: 0})
.fromTo('#poll3', .33, {transformOrigin: '50% 50%', rotation:"30", left: 100}, {rotation:"0", left: 0}, "-=0.20")
.fromTo('#poll4', .33, {transformOrigin: '50% 50%', rotation:"30", left: 100}, {rotation:"0", left: 0}, "-=0.20")
.to('#poll2', .33, {transform: 'translate3d(1rem, 1rem, 0)'})
.to('#poll3', .33, {transform: 'translate3d(2rem, 2rem, 0)'})
.to('#poll4', .33, {transform: 'translate3d(3rem, 3rem, 0)'})

.to('#option1 circle', .35, {stroke: 'blue'})
.to('#option1 text', .35, {fill: 'blue'}, '-=.35')

.to('#option1 circle', .33, {stroke: '#aaa'})
.to('#option1 text', .33, {fill: '#aaa'}, '-=.33')

.to('#option2 circle', .35, {stroke: 'blue'})
.to('#option2 text', .35, {fill: 'blue'}, '-=.35')

.to('#option2 circle', .33, {stroke: '#aaa'})
.to('#option2 text', .33, {fill: '#aaa'}, '-=.33')

.to('#option3 circle', .35, {stroke: 'blue'})
.to('#option3 text', .35, {fill: 'blue'}, '-=.35')
.addCallback(() => {
    document.getElementById('check').classList.add('drawn');
    console.log('here');
});

// tl.add( TweenLite.fromTo(poll, 1, {rotation:"+=180"}) );

// tl.play();

