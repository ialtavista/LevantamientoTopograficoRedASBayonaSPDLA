ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([667310.169191, 5920547.338511, 668806.459413, 5921425.571951]);
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
var format_Flujoreferencial_1 = new ol.format.GeoJSON();
var features_Flujoreferencial_1 = format_Flujoreferencial_1.readFeatures(json_Flujoreferencial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Flujoreferencial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flujoreferencial_1.addFeatures(features_Flujoreferencial_1);
var lyr_Flujoreferencial_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flujoreferencial_1, 
                style: style_Flujoreferencial_1,
                popuplayertitle: 'Flujo referencial',
                interactive: false,
                title: '<img src="styles/legend/Flujoreferencial_1.png" /> Flujo referencial'
            });
var format_Colectorreferencial_2 = new ol.format.GeoJSON();
var features_Colectorreferencial_2 = format_Colectorreferencial_2.readFeatures(json_Colectorreferencial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Colectorreferencial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colectorreferencial_2.addFeatures(features_Colectorreferencial_2);
var lyr_Colectorreferencial_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colectorreferencial_2, 
                style: style_Colectorreferencial_2,
                popuplayertitle: 'Colector referencial',
                interactive: false,
                title: '<img src="styles/legend/Colectorreferencial_2.png" /> Colector referencial'
            });
var format_Cmarareferencial_3 = new ol.format.GeoJSON();
var features_Cmarareferencial_3 = format_Cmarareferencial_3.readFeatures(json_Cmarareferencial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Cmarareferencial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmarareferencial_3.addFeatures(features_Cmarareferencial_3);
var lyr_Cmarareferencial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmarareferencial_3, 
                style: style_Cmarareferencial_3,
                popuplayertitle: 'Cámara referencial',
                interactive: false,
                title: '<img src="styles/legend/Cmarareferencial_3.png" /> Cámara referencial'
            });
var format_PEAS_4 = new ol.format.GeoJSON();
var features_PEAS_4 = format_PEAS_4.readFeatures(json_PEAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PEAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAS_4.addFeatures(features_PEAS_4);
var lyr_PEAS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEAS_4, 
                style: style_PEAS_4,
                popuplayertitle: 'PEAS',
                interactive: false,
                title: '<img src="styles/legend/PEAS_4.png" /> PEAS'
            });
var format_PTAS_5 = new ol.format.GeoJSON();
var features_PTAS_5 = format_PTAS_5.readFeatures(json_PTAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PTAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTAS_5.addFeatures(features_PTAS_5);
var lyr_PTAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTAS_5, 
                style: style_PTAS_5,
                popuplayertitle: 'PTAS',
                interactive: false,
                title: '<img src="styles/legend/PTAS_5.png" /> PTAS'
            });
var format_Colector_6 = new ol.format.GeoJSON();
var features_Colector_6 = format_Colector_6.readFeatures(json_Colector_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Colector_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_6.addFeatures(features_Colector_6);
var lyr_Colector_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_6, 
                style: style_Colector_6,
                popuplayertitle: 'Colector',
                interactive: true,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_6_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Colector_6_1.png" /> VERIFICADO<br />\
    <img src="styles/legend/Colector_6_2.png" /> SEMI VERIFICADO<br />' });
var format_Cmara_7 = new ol.format.GeoJSON();
var features_Cmara_7 = format_Cmara_7.readFeatures(json_Cmara_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Cmara_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_7.addFeatures(features_Cmara_7);
var lyr_Cmara_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_7, 
                style: style_Cmara_7,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_7_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Cmara_7_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_7_2.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_7_3.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_7_4.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Cmara_7_5.png" /> SIN ACCESO<br />\
    <img src="styles/legend/Cmara_7_6.png" /> NO INSPECCIONABLE<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_6,lyr_Cmara_7,],
                                fold: 'open',
                                title: 'Levantamiento'});
var group_Referencial = new ol.layer.Group({
                                layers: [lyr_Flujoreferencial_1,lyr_Colectorreferencial_2,lyr_Cmarareferencial_3,lyr_PEAS_4,lyr_PTAS_5,],
                                fold: 'open',
                                title: 'Referencial'});

lyr_GoogleSatelite_0.setVisible(true);lyr_Flujoreferencial_1.setVisible(true);lyr_Colectorreferencial_2.setVisible(true);lyr_Cmarareferencial_3.setVisible(true);lyr_PEAS_4.setVisible(true);lyr_PTAS_5.setVisible(true);lyr_Colector_6.setVisible(true);lyr_Cmara_7.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,group_Referencial,group_Levantamiento];
lyr_Flujoreferencial_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'IDFLUJO': 'IDFLUJO', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', 'GlobalID': 'GlobalID', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'Sector': 'Sector', });
lyr_Colectorreferencial_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'IDENTIFICA': 'IDENTIFICA', 'DIAMETRO': 'DIAMETRO', 'MATERIAL': 'MATERIAL', 'SUBTYPE': 'SUBTYPE', 'IDSV': 'IDSV', 'X': 'X', 'Y': 'Y', 'SHAPE_Leng': 'SHAPE_Leng', 'FECHA_EXTR': 'FECHA_EXTR', 'EXISTENCIA': 'EXISTENCIA', 'Shape__Length': 'Shape__Length', 'GlobalID': 'GlobalID', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'ESTADO': 'ESTADO', });
lyr_Cmarareferencial_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'IDENTIFICA': 'IDENTIFICA', 'DIAMETRO': 'DIAMETRO', 'MATERIAL': 'MATERIAL', 'PROFUNDIDA': 'PROFUNDIDA', 'COTAANILLO': 'COTAANILLO', 'COTARADIER': 'COTARADIER', 'CAMARA': 'CAMARA', 'PROFUNDIDAD': 'PROFUNDIDAD', 'TAPA': 'TAPA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'CARACTERISTICA': 'CARACTERISTICA', 'FECHA': 'FECHA', 'OBSERVACION': 'OBSERVACION', 'GlobalID': 'GlobalID', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_PEAS_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDENTIFICADORELEMENTO': 'IDENTIFICADORELEMENTO', 'SUBTYPE': 'SUBTYPE', 'NOMBRE': 'NOMBRE', 'MEDIDORCAUDAL': 'MEDIDORCAUDAL', 'CONFIGURACION': 'CONFIGURACION', 'GOLPE_ARIETE': 'GOLPE_ARIETE', 'SUBESTACION': 'SUBESTACION', 'VENTILACION': 'VENTILACION', 'IZAMIENTO': 'IZAMIENTO', 'SISTEMA_REBALSE': 'SISTEMA_REBALSE', 'ESTADO': 'ESTADO', 'OBSERVACION': 'OBSERVACION', 'GlobalID': 'GlobalID', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_PTAS_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'IDENTIFICADORELEMENTO': 'IDENTIFICADORELEMENTO', 'SUBTYPE': 'SUBTYPE', 'NOMBRE': 'NOMBRE', 'ESTADO': 'ESTADO', 'OBSERVACION': 'OBSERVACION', 'GlobalID': 'GlobalID', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_Colector_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', 'TIPO': 'TIPO', 'MATERIALIDAD': 'MATERIALIDAD', });
lyr_Cmara_7.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'DIAMETRO SALIDA 1': 'DIAMETRO SALIDA 1', 'DIAMETRO SALIDA 2': 'DIAMETRO SALIDA 2', 'HALLAZGO 1': 'HALLAZGO 1', 'HALLAZGO 2': 'HALLAZGO 2', 'COMUNA': 'COMUNA', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'FALLA ESTRUCTURAL': 'FALLA ESTRUCTURAL', 'REQUIERE LIMPIEZA': 'REQUIERE LIMPIEZA', 'DUDA?': 'DUDA?', 'ESTADO CANAL': 'ESTADO CANAL', 'ESTADO BANQUETA': 'ESTADO BANQUETA', 'NAPA': 'NAPA', 'EMBANCAMIENTO': 'EMBANCAMIENTO', 'ESTADO ESCALINES': 'ESTADO ESCALINES', 'DIAMETRO SALIDA 3': 'DIAMETRO SALIDA 3', 'ESCURRIMIENTO': 'ESCURRIMIENTO', 'UBICACION REFERENCIAL': 'UBICACION REFERENCIAL', 'OBSERVACIONES UBICACION': 'OBSERVACIONES UBICACION', 'OBSERVACIONES CONEXIONES': 'OBSERVACIONES CONEXIONES', 'E (m)': 'E (m)', 'N (m)': 'N (m)', 'COTA ANILLO (m)': 'COTA ANILLO (m)', 'PROFUNDIDAD (m)': 'PROFUNDIDAD (m)', 'COTA RADIER (m)': 'COTA RADIER (m)', });
lyr_Flujoreferencial_1.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'IDFLUJO': '', 'Shape__Area': '', 'Shape__Length': '', 'GlobalID': '', 'CreationDate': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'Sector': '', });
lyr_Colectorreferencial_2.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'IDENTIFICA': '', 'DIAMETRO': '', 'MATERIAL': '', 'SUBTYPE': '', 'IDSV': '', 'X': '', 'Y': '', 'SHAPE_Leng': '', 'FECHA_EXTR': '', 'EXISTENCIA': '', 'Shape__Length': '', 'GlobalID': '', 'CreationDate': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'ESTADO': '', });
lyr_Cmarareferencial_3.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'IDENTIFICA': '', 'DIAMETRO': '', 'MATERIAL': '', 'PROFUNDIDA': '', 'COTAANILLO': '', 'COTARADIER': '', 'CAMARA': '', 'PROFUNDIDAD': '', 'TAPA': '', 'ESTADO': '', 'ESCALINES': '', 'CARACTERISTICA': '', 'FECHA': '', 'OBSERVACION': '', 'GlobalID': '', 'CreationDate': '', 'Creator': '', 'EditDate': '', 'Editor': '', });
lyr_PEAS_4.set('fieldImages', {'fid': '', 'OBJECTID': '', 'IDENTIFICADORELEMENTO': '', 'SUBTYPE': '', 'NOMBRE': '', 'MEDIDORCAUDAL': '', 'CONFIGURACION': '', 'GOLPE_ARIETE': '', 'SUBESTACION': '', 'VENTILACION': '', 'IZAMIENTO': '', 'SISTEMA_REBALSE': '', 'ESTADO': '', 'OBSERVACION': '', 'GlobalID': '', 'CreationDate': '', 'Creator': '', 'EditDate': '', 'Editor': '', });
lyr_PTAS_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'IDENTIFICADORELEMENTO': '', 'SUBTYPE': '', 'NOMBRE': '', 'ESTADO': '', 'OBSERVACION': '', 'GlobalID': '', 'CreationDate': '', 'Creator': '', 'EditDate': '', 'Editor': '', });
lyr_Colector_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'ValueMap', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', 'TIPO': 'ValueMap', 'MATERIALIDAD': 'ValueMap', });
lyr_Cmara_7.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'DIAMETRO ENTRADA 1': 'ValueMap', 'DIAMETRO ENTRADA 2': 'ValueMap', 'DIAMETRO ENTRADA 3': 'ValueMap', 'DIAMETRO ENTRADA 4': 'ValueMap', 'DIAMETRO ENTRADA 5': 'ValueMap', 'DIAMETRO SALIDA 1': 'ValueMap', 'DIAMETRO SALIDA 2': 'ValueMap', 'HALLAZGO 1': 'ExternalResource', 'HALLAZGO 2': 'ExternalResource', 'COMUNA': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'FALLA ESTRUCTURAL': 'CheckBox', 'REQUIERE LIMPIEZA': 'CheckBox', 'DUDA?': 'CheckBox', 'ESTADO CANAL': 'ValueMap', 'ESTADO BANQUETA': 'ValueMap', 'NAPA': 'ValueMap', 'EMBANCAMIENTO': 'ValueMap', 'ESTADO ESCALINES': 'ValueMap', 'DIAMETRO SALIDA 3': 'ValueMap', 'ESCURRIMIENTO': 'ValueMap', 'UBICACION REFERENCIAL': 'ValueMap', 'OBSERVACIONES UBICACION': 'TextEdit', 'OBSERVACIONES CONEXIONES': 'TextEdit', 'E (m)': 'TextEdit', 'N (m)': 'TextEdit', 'COTA ANILLO (m)': 'TextEdit', 'PROFUNDIDAD (m)': 'TextEdit', 'COTA RADIER (m)': 'TextEdit', });
lyr_Flujoreferencial_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'IDFLUJO': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', 'GlobalID': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'Sector': 'no label', });
lyr_Colectorreferencial_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'IDENTIFICA': 'no label', 'DIAMETRO': 'no label', 'MATERIAL': 'no label', 'SUBTYPE': 'no label', 'IDSV': 'no label', 'X': 'no label', 'Y': 'no label', 'SHAPE_Leng': 'no label', 'FECHA_EXTR': 'no label', 'EXISTENCIA': 'no label', 'Shape__Length': 'no label', 'GlobalID': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'ESTADO': 'no label', });
lyr_Cmarareferencial_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'IDENTIFICA': 'no label', 'DIAMETRO': 'no label', 'MATERIAL': 'no label', 'PROFUNDIDA': 'no label', 'COTAANILLO': 'no label', 'COTARADIER': 'no label', 'CAMARA': 'no label', 'PROFUNDIDAD': 'no label', 'TAPA': 'no label', 'ESTADO': 'no label', 'ESCALINES': 'no label', 'CARACTERISTICA': 'no label', 'FECHA': 'no label', 'OBSERVACION': 'no label', 'GlobalID': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', });
lyr_PEAS_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'IDENTIFICADORELEMENTO': 'no label', 'SUBTYPE': 'no label', 'NOMBRE': 'no label', 'MEDIDORCAUDAL': 'no label', 'CONFIGURACION': 'no label', 'GOLPE_ARIETE': 'no label', 'SUBESTACION': 'no label', 'VENTILACION': 'no label', 'IZAMIENTO': 'no label', 'SISTEMA_REBALSE': 'no label', 'ESTADO': 'no label', 'OBSERVACION': 'no label', 'GlobalID': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', });
lyr_PTAS_5.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'no label', 'IDENTIFICADORELEMENTO': 'no label', 'SUBTYPE': 'no label', 'NOMBRE': 'no label', 'ESTADO': 'no label', 'OBSERVACION': 'no label', 'GlobalID': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', });
lyr_Colector_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'DIAMETRO': 'inline label - visible with data', 'CAMARA_INICIO': 'inline label - visible with data', 'CAMARA_FINAL': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'TIPO': 'hidden field', 'MATERIALIDAD': 'inline label - visible with data', });
lyr_Cmara_7.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'ESCALINES': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'inline label - visible with data', 'COTA SALIDA': 'hidden field', 'DIAMETRO ENTRADA 1': 'inline label - visible with data', 'DIAMETRO ENTRADA 2': 'inline label - visible with data', 'DIAMETRO ENTRADA 3': 'inline label - visible with data', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'DIAMETRO SALIDA 1': 'inline label - visible with data', 'DIAMETRO SALIDA 2': 'hidden field', 'HALLAZGO 1': 'inline label - visible with data', 'HALLAZGO 2': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'PROFUNDIDAD FONDO': 'hidden field', 'FALLA ESTRUCTURAL': 'hidden field', 'REQUIERE LIMPIEZA': 'inline label - visible with data', 'DUDA?': 'hidden field', 'ESTADO CANAL': 'inline label - visible with data', 'ESTADO BANQUETA': 'inline label - visible with data', 'NAPA': 'inline label - visible with data', 'EMBANCAMIENTO': 'inline label - visible with data', 'ESTADO ESCALINES': 'inline label - visible with data', 'DIAMETRO SALIDA 3': 'hidden field', 'ESCURRIMIENTO': 'hidden field', 'UBICACION REFERENCIAL': 'hidden field', 'OBSERVACIONES UBICACION': 'hidden field', 'OBSERVACIONES CONEXIONES': 'hidden field', 'E (m)': 'inline label - visible with data', 'N (m)': 'inline label - visible with data', 'COTA ANILLO (m)': 'inline label - visible with data', 'PROFUNDIDAD (m)': 'inline label - visible with data', 'COTA RADIER (m)': 'inline label - visible with data', });
lyr_Cmara_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});