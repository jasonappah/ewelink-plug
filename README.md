# ewelink-plug
---
Quick utility I wrote to use with the OctoPrint plugin PSU Control so that I can turn my 3D printer on and off using a smart plug that uses the eWeLink app for control. 

To get started, clone this repo, make a copy of `.env.example` and rename it to `.env`, and enter your credentials. Region can be any of `us`, `eu`, or `cn`. This automatically operates on whatever the first device returned by [`ewelink-api`](https://github.com/skydiver/ewelink-api/) because it works for me (I only have one of these smart plugs). If you want me to change that, open an issue on GitHub.

To turn the plug on, use `node main.js on`. To turn it off, use `node main.js off`. To see the plug's current status, use `node main.js sense`. This command can also be used as the sensing command in PSU Control. To see the plug's power usage stats (only if your plug supports it), use `node main.js stats`.
To use this with PSU Control, set your config to look similar to this one: 

![Screenshot of PSU Control config](https://raw.githubusercontent.com/jasonappah/ewelink-plug/master/psucontrol.png)
