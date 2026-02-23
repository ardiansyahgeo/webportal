var wms_layers = [];


        var lyr_googlehybrid_0 = new ol.layer.Tile({
            'title': 'google  hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CITRAGOOGLE_1 = new ol.layer.Tile({
            'title': 'CITRA GOOGLE',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_KODE_AREA_SBNP_PURWAKARTA_2 = new ol.format.GeoJSON();
var features_KODE_AREA_SBNP_PURWAKARTA_2 = format_KODE_AREA_SBNP_PURWAKARTA_2.readFeatures(json_KODE_AREA_SBNP_PURWAKARTA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KODE_AREA_SBNP_PURWAKARTA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KODE_AREA_SBNP_PURWAKARTA_2.addFeatures(features_KODE_AREA_SBNP_PURWAKARTA_2);
var lyr_KODE_AREA_SBNP_PURWAKARTA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KODE_AREA_SBNP_PURWAKARTA_2, 
                style: style_KODE_AREA_SBNP_PURWAKARTA_2,
                popuplayertitle: "KODE_AREA_SBNP_PURWAKARTA",
                interactive: true,
    title: 'KODE_AREA_SBNP_PURWAKARTA<br />\
    <img src="styles/legend/KODE_AREA_SBNP_PURWAKARTA_2_0.png" /> BABAKANCIKAO<br />\
    <img src="styles/legend/KODE_AREA_SBNP_PURWAKARTA_2_1.png" /> BUNGURSARI<br />\
    <img src="styles/legend/KODE_AREA_SBNP_PURWAKARTA_2_2.png" /> CAMPAKA<br />\
    <img src="styles/legend/KODE_AREA_SBNP_PURWAKARTA_2_3.png" /> JATILUHUR<br />\
    <img src="styles/legend/KODE_AREA_SBNP_PURWAKARTA_2_4.png" /> PURWAKARTA<br />\
    <img src="styles/legend/KODE_AREA_SBNP_PURWAKARTA_2_5.png" /> SUKATANI<br />'
        });
var format_PRIORITAS2_3 = new ol.format.GeoJSON();
var features_PRIORITAS2_3 = format_PRIORITAS2_3.readFeatures(json_PRIORITAS2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRIORITAS2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRIORITAS2_3.addFeatures(features_PRIORITAS2_3);
var lyr_PRIORITAS2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRIORITAS2_3, 
                style: style_PRIORITAS2_3,
                popuplayertitle: "PRIORITAS 2",
                interactive: true,
                title: '<img src="styles/legend/PRIORITAS2_3.png" /> PRIORITAS 2'
            });
var format_PRIORITAS1_4 = new ol.format.GeoJSON();
var features_PRIORITAS1_4 = format_PRIORITAS1_4.readFeatures(json_PRIORITAS1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRIORITAS1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRIORITAS1_4.addFeatures(features_PRIORITAS1_4);
var lyr_PRIORITAS1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRIORITAS1_4, 
                style: style_PRIORITAS1_4,
                popuplayertitle: "PRIORITAS 1",
                interactive: true,
                title: '<img src="styles/legend/PRIORITAS1_4.png" /> PRIORITAS 1'
            });

lyr_googlehybrid_0.setVisible(true);lyr_CITRAGOOGLE_1.setVisible(true);lyr_KODE_AREA_SBNP_PURWAKARTA_2.setVisible(true);lyr_PRIORITAS2_3.setVisible(false);lyr_PRIORITAS1_4.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_CITRAGOOGLE_1,lyr_KODE_AREA_SBNP_PURWAKARTA_2,lyr_PRIORITAS2_3,lyr_PRIORITAS1_4];
lyr_KODE_AREA_SBNP_PURWAKARTA_2.set('fieldAliases', {'KDEPUM': 'KDEPUM', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'KODEAREA': 'KODEAREA', 'PRIORITAS': 'PRIORITAS', });
lyr_PRIORITAS2_3.set('fieldAliases', {'KDEPUM': 'KDEPUM', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'KODEAREA': 'KODEAREA', 'PRIORITAS': 'PRIORITAS', });
lyr_PRIORITAS1_4.set('fieldAliases', {'KDEPUM': 'KDEPUM', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'KODEAREA': 'KODEAREA', 'PRIORITAS': 'PRIORITAS', });
lyr_KODE_AREA_SBNP_PURWAKARTA_2.set('fieldImages', {'KDEPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'KODEAREA': 'TextEdit', 'PRIORITAS': 'TextEdit', });
lyr_PRIORITAS2_3.set('fieldImages', {'KDEPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'KODEAREA': 'TextEdit', 'PRIORITAS': '', });
lyr_PRIORITAS1_4.set('fieldImages', {'KDEPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'KODEAREA': 'TextEdit', 'PRIORITAS': '', });
lyr_KODE_AREA_SBNP_PURWAKARTA_2.set('fieldLabels', {'KDEPUM': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'KODEAREA': 'inline label - always visible', 'PRIORITAS': 'inline label - always visible', });
lyr_PRIORITAS2_3.set('fieldLabels', {'KDEPUM': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'KODEAREA': 'inline label - always visible', 'PRIORITAS': 'inline label - always visible', });
lyr_PRIORITAS1_4.set('fieldLabels', {'KDEPUM': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'KODEAREA': 'inline label - always visible', 'PRIORITAS': 'inline label - always visible', });
lyr_PRIORITAS1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});