import { google, sheets_v4 } from 'googleapis';
import { convertArrToObj } from 'utils';

export type ISheetData = {
  values: string[][];
};
const spreadsheetId = process.env.CONTACT_SHEET_ID;

export const sheetClient = google.auth.getClient({
  credentials: JSON.parse(process.env.GOOLGE_SERVICE_ACCOUNT_JSON),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const apiClient = async () => google.sheets({ auth: await sheetClient, version: 'v4' });

export const getRows = async function (options: sheets_v4.Params$Resource$Spreadsheets$Values$Get) {
  const api = await apiClient();

  const response = await api.spreadsheets.values.get(options);
  const { values } = response.data as ISheetData;

  return convertArrToObj(values);
};

export const getSheet = async (range: string) => {
  return getRows({ range, spreadsheetId });
};

export const appendSheet = async (range: string, rows: ISheetData['values']) => {
  const api = await apiClient();
  return api.spreadsheets.values.append({
    insertDataOption: 'INSERT_ROWS',
    range,
    requestBody: {
      values: rows,
    },
    spreadsheetId,
    valueInputOption: 'raw',
  });
};
