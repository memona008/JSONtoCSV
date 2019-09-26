"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._DownloadJsonData = function (JSONData, FileTitle, fileNameMode, ShowLabel, MappedColumn) {
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    var CSV = '';
    if (ShowLabel) {
        var row = '';
        for (var index in arrData[0]) {
            var filter = MappedColumn.filter(function (a) { return a.key == index; });
            if (filter && filter.length > 0) {
                row += filter[0].value + ',';
            }
            else {
                row += index + ',';
            }
        }
        row = row.slice(0, -1);
        CSV += row + '\r\n';
    }
    for (var i = 0; i < arrData.length; i++) {
        var rowi = '';
        for (var indexs in arrData[i]) {
            rowi += '"' + arrData[i][indexs] + '",';
        }
        rowi.slice(0, rowi.length - 1);
        CSV += rowi + '\r\n';
    }
    if (CSV == '') {
        alert('Invalid data');
        return;
    }
    var filename = FileTitle;
    ;
    switch (fileNameMode) {
        case 1:
            filename = FileTitle;
            break;
        case 2:
            filename = FileTitle + '_' + new Date();
            break;
        default:
            filename = FileTitle;
    }
    var blob = new Blob([CSV], {
        type: 'text/csv;charset=utf-8;',
    });
    if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, filename + '.csv');
    }
    else {
        var link = document.createElement('a');
        if (link.download !== undefined) {
            var url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.hidden = true;
            link.download = filename + '.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};
