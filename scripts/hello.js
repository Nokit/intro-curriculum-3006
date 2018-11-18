'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
        
        robot.hear(/lot>/i, (msg) => {
        	const username = msg.message.user.name;
                const lots = ['youve got a good luck today!','I hope you a good day.','Happiness lives in orninary life', 'Itll be gone tomorrow', 'forget everything that has happend to you today.'];
                const lot = lots[Math.floor(Math.random() * lots.length)];
                msg.send(lot + ' : ' + username);
        });
};
