function exportChartToExcel() {
    alert(0);
}

function downloadXLS(dataRows) {
    var uri = 'data:application/vnd.ms-excel;base64,',
        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">' +
                    '<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>' +
                    '<x:Name>Ark1</x:Name>' +
                    '<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->' +
                    '<style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"#,##0.##";}</style>' +
                    '<meta name=ProgId content=Excel.Sheet>' +
                    '</head><body>' +
                    this.getHTMLTable(dataRows) +
                    '</body></html>',
        base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s))); // #50
        };

    getContent(
        this,
        uri + base64(template),
        'xls',
        template,
        'application/vnd.ms-excel'
    );
}

function getHTMLTable(dataRows) {
    var html = '<table>';

    // Transform the rows to HTML
    each(dataRows, function (row, i) {
        var tag = i ? 'td' : 'th',
            val,
            j;

        html += '<tr>';

        for (j = 0; j < row.length; j = j + 1) {
            val = row[j];
            // Add the cell
            if (typeof val === 'number') {
                html += '<' + tag + (typeof val === 'number' ? ' class="number"' : '') + '>' + val.toString() + '</' + tag + '>';
            } else {
                html += '<' + tag + '>' + val + '</' + tag + '>';
            }
        }

        html += '</tr>';
    });

    html += '</table>';

    return html;
}