# tessel
somewhere to hold my tessel projects

To run this from scratch:

* git clone https://github.com/dougtoppin/tessel.git
* cd tessel
* npm install tessel
* npm install ambient-attx4
* npm install climate-si7020
* ./node_modules/tessel/bin/tessel.js run climate/climate.js
* 
You should see something like this as output:

    TESSEL! Connected to TM-xxx.
    INFO Bundling directory tessel
    INFO Deploying bundle (15.39 MB)...
    INFO Running script...
    Connected to si7020
    Degrees: 80.2F Humidity: 21.0%RH
    Light level: 0.0205   Sound Level: 0.0254
    Degrees: 80.3F Humidity: 21.0%RH
    Light level: 0.0205   Sound Level: 0.0254
