require('dotenv').config()
const ewelink = require('ewelink-api');

/* instantiate class */
const connection = new ewelink({
  email: process.env.EWELINK_USER,
  password: process.env.EWELINK_PASS,
  region: process.env.EWELINK_REGION,
});


(async () => {
    var myArgs = process.argv.slice(2);
	const devices = await connection.getDevices();

	const device = devices[0]
	const id = device["deviceid"]

	console.log(id)

	if (myArgs[0] == 'on') {
		if (device["params"]["switch"] == 'off') {
			const status = await connection.toggleDevice(id);
			console.log(status);
		}
		
	} else if (myArgs[0] == 'off') {
		if (device["params"]["switch"] == 'on') {
			const status = await connection.toggleDevice(id);
			console.log(status);
		}
	} else if (myArgs[0] == 'sense') {
	// this is for Octoprint plugin PSUControl. The exit code tells it whether the printer is on or off. Exit code 0 means it is on. Exit code 1 means it is off.
		if (device["params"]["switch"] == 'on') {
			process.exit(0)
		} else {
			process.exit(1)
		}
	} else if (myArgs[0] == 'stats') {
		const usage = await connection.getDevicePowerUsage(id);
	    console.log(usage);
	}

	

})();
