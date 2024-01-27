export enum TAlertMessage {
  NORMAL,
  SUCCESS,
  ERROR,
}

export interface TAlert {
  id: string;
  message: string;
  type: TAlertMessage;
  timeout: number;
}
