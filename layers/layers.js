ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([667267.811402, 5920522.391680, 668498.813071, 5921202.973114]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Colector_1 = new ol.format.GeoJSON();
var features_Colector_1 = format_Colector_1.readFeatures(json_Colector_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Colector_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_1.addFeatures(features_Colector_1);
var lyr_Colector_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_1, 
                style: style_Colector_1,
                popuplayertitle: 'Colector',
                interactive: true,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_1_0.png" /> SEMI VERIFICADO<br />\
    <img src="styles/legend/Colector_1_1.png" /> VERIFICADO<br />' });
var format_Cmara_2 = new ol.format.GeoJSON();
var features_Cmara_2 = format_Cmara_2.readFeatures(json_Cmara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Cmara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_2.addFeatures(features_Cmara_2);
var lyr_Cmara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_2, 
                style: style_Cmara_2,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_2_0.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_2_1.png" /> INSPECCIONADA<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_1,lyr_Cmara_2,],
                                fold: 'open',
                                title: 'Levantamiento'});
var group_Referencial = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Referencial'});

lyr_GoogleSatelite_0.setVisible(true);lyr_Colector_1.setVisible(true);lyr_Cmara_2.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,group_Levantamiento];
lyr_Colector_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', 'TIPO': 'TIPO', 'MATERIALIDAD': 'MATERIALIDAD', });
lyr_Cmara_2.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'DIAMETRO SALIDA 1': 'DIAMETRO SALIDA 1', 'DIAMETRO SALIDA 2': 'DIAMETRO SALIDA 2', 'HALLAZGO 1': 'HALLAZGO 1', 'HALLAZGO 2': 'HALLAZGO 2', 'COMUNA': 'COMUNA', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'FALLA ESTRUCTURAL': 'FALLA ESTRUCTURAL', 'REQUIERE LIMPIEZA': 'REQUIERE LIMPIEZA', 'DUDA?': 'DUDA?', 'ESTADO CANAL': 'ESTADO CANAL', 'ESTADO BANQUETA': 'ESTADO BANQUETA', 'NAPA': 'NAPA', 'EMBANCAMIENTO': 'EMBANCAMIENTO', 'ESTADO ESCALINES': 'ESTADO ESCALINES', 'DIAMETRO SALIDA 3': 'DIAMETRO SALIDA 3', 'ESCURRIMIENTO': 'ESCURRIMIENTO', 'UBICACION REFERENCIAL': 'UBICACION REFERENCIAL', 'OBSERVACIONES UBICACION': 'OBSERVACIONES UBICACION', 'OBSERVACIONES CONEXIONES': 'OBSERVACIONES CONEXIONES', 'E (m)': 'E (m)', 'N (m)': 'N (m)', 'COTA ANILLO (m)': 'COTA ANILLO (m)', 'PROFUNDIDAD (m)': 'PROFUNDIDAD (m)', 'COTA RADIER (m)': 'COTA RADIER (m)', });
lyr_Colector_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'ValueMap', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', 'TIPO': 'ValueMap', 'MATERIALIDAD': 'ValueMap', });
lyr_Cmara_2.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'DIAMETRO ENTRADA 1': 'ValueMap', 'DIAMETRO ENTRADA 2': 'ValueMap', 'DIAMETRO ENTRADA 3': 'ValueMap', 'DIAMETRO ENTRADA 4': 'ValueMap', 'DIAMETRO ENTRADA 5': 'ValueMap', 'DIAMETRO SALIDA 1': 'ValueMap', 'DIAMETRO SALIDA 2': 'ValueMap', 'HALLAZGO 1': 'ExternalResource', 'HALLAZGO 2': 'ExternalResource', 'COMUNA': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'FALLA ESTRUCTURAL': 'CheckBox', 'REQUIERE LIMPIEZA': 'CheckBox', 'DUDA?': 'CheckBox', 'ESTADO CANAL': 'ValueMap', 'ESTADO BANQUETA': 'ValueMap', 'NAPA': 'ValueMap', 'EMBANCAMIENTO': 'ValueMap', 'ESTADO ESCALINES': 'ValueMap', 'DIAMETRO SALIDA 3': 'ValueMap', 'ESCURRIMIENTO': 'ValueMap', 'UBICACION REFERENCIAL': 'ValueMap', 'OBSERVACIONES UBICACION': 'TextEdit', 'OBSERVACIONES CONEXIONES': 'TextEdit', 'E (m)': 'TextEdit', 'N (m)': 'TextEdit', 'COTA ANILLO (m)': 'TextEdit', 'PROFUNDIDAD (m)': 'TextEdit', 'COTA RADIER (m)': 'TextEdit', });
lyr_Colector_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'DIAMETRO': 'inline label - visible with data', 'CAMARA_INICIO': 'inline label - visible with data', 'CAMARA_FINAL': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'TIPO': 'hidden field', 'MATERIALIDAD': 'inline label - visible with data', });
lyr_Cmara_2.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'ESCALINES': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'inline label - visible with data', 'COTA SALIDA': 'hidden field', 'DIAMETRO ENTRADA 1': 'inline label - visible with data', 'DIAMETRO ENTRADA 2': 'inline label - visible with data', 'DIAMETRO ENTRADA 3': 'inline label - visible with data', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'DIAMETRO SALIDA 1': 'inline label - visible with data', 'DIAMETRO SALIDA 2': 'hidden field', 'HALLAZGO 1': 'inline label - visible with data', 'HALLAZGO 2': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'PROFUNDIDAD FONDO': 'hidden field', 'FALLA ESTRUCTURAL': 'hidden field', 'REQUIERE LIMPIEZA': 'inline label - visible with data', 'DUDA?': 'hidden field', 'ESTADO CANAL': 'inline label - visible with data', 'ESTADO BANQUETA': 'inline label - visible with data', 'NAPA': 'inline label - visible with data', 'EMBANCAMIENTO': 'inline label - visible with data', 'ESTADO ESCALINES': 'inline label - visible with data', 'DIAMETRO SALIDA 3': 'hidden field', 'ESCURRIMIENTO': 'hidden field', 'UBICACION REFERENCIAL': 'hidden field', 'OBSERVACIONES UBICACION': 'hidden field', 'OBSERVACIONES CONEXIONES': 'hidden field', 'E (m)': 'inline label - visible with data', 'N (m)': 'inline label - visible with data', 'COTA ANILLO (m)': 'inline label - visible with data', 'PROFUNDIDAD (m)': 'inline label - visible with data', 'COTA RADIER (m)': 'inline label - visible with data', });
lyr_Cmara_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});