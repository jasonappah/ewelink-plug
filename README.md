# ewelink-plug

Quick utility I wrote to use with the OctoPrint plugin [`PSU Control`](https://github.com/kantlivelong/OctoPrint-PSUControl) so that I can turn my 3D printer on and off using a smart plug that uses the eWeLink app for control. This automatically operates on whatever the first device returned by [`ewelink-api`](https://github.com/skydiver/ewelink-api/) because it works for me (I only have one of these smart plugs). If you want me to change that, open an issue on GitHub.

To get started, clone this repo, make a copy of `.env.example`, rename it to `.env`, and enter your credentials. `EWELINK_REGION` can be set to `us`, `eu`, or `cn`. Then run `npm install` to download dependencies. You will only need to do this set up once.

To turn the plug on, use `node main.js on`. To turn it off, use `node main.js off`. To see the plug's current status, use `node main.js sense`. This command can also be used as the sensing command in PSU Control. To see the plug's power usage stats (only if your plug supports it), use `node main.js stats`.

To use this with PSU Control, set your config to look similar to this one. Make sure you edit the file path to reflect wherever you've cloned this repo. 

![Screenshot of PSU Control config](https://raw.githubusercontent.com/jasonappah/ewelink-plug/master/psucontrol.png)
