/**
 * Created by dougtoppin on 12/12/14.
 */
var tessel = require('tessel');

var ambientlib = require('ambient-attx4');
var climatelib = require('climate-si7020');

var ambient = ambientlib.use(tessel.port['B']);
var climate = climatelib.use(tessel.port['C']);

climate.on('ready', function () {

    console.log('Connected to si7020');

    ambient.on('ready', function () {

        setImmediate(function loop() {

            climate.readTemperature('f', function (err, temp) {
                climate.readHumidity(function (err, humid) {
                    ambient.getLightLevel(function (err, light) {
                        ambient.getSoundLevel(function (err, sound) {
                            console.log('Degrees:', temp.toFixed(1) + 'F', 'Humidity:', humid.toFixed(1) + '%RH');
                            console.log('Light level:', light.toFixed(4), " ", "Sound Level:", sound.toFixed(4));
                            setTimeout(loop, 300);
                        });
                    });
                });
            });

        });

    });
});


climate.on('error', function (err) {
    console.log('error connecting module', err);
});

ambient.on('error', function (err) {
    console.log(err);
});



