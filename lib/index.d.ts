interface IMappedColumns {
    key: string;
    value: string;
}
export declare let ConvertJSONtoCSV: (JSONData: any, FileTitle: string, fileNameMode: number | null, ShowLabel: boolean, MappedColumn: IMappedColumns[]) => void;
export {};
