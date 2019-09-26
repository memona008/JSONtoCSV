# Easy-JSON-To-CSV-Converter
Exports a structured JSON array/object to CSV file

## Installation

```bash
npm i easy-json-to-csv-converter
```

## Usage

```node
import {ConvertJSONtoCSV} from "easy-json-to-csv-converter";

    let jsonArray = [{ name: "memona", lastName: "sultan" }];
    let fileName = "myNameFile";

    // 1 for as it is name; 2 for name with dateTime appended
    let fileNameMode = 1; 

    // true = file will have a header , false = file will not have a header
    let showLabels = true;


    // if you want to change the column names you have to map them 
    let mappedColumns = [
      { key: "name", value: "First Name" },
      { key: "lastName", value: "Last Name" }
    ];


    // this method will download a csv file
   ConvertJSONtoCSV(jsonArray, fileName, fileNameMode, showLabels,mappedColumns );

```

