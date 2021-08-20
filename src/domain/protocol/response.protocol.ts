import { ResponseProtocolType } from './type/response-protocol.type';

export class ResponseProtocol implements ResponseProtocolType {
  message: any;
  status: number;
  error?: string;

  constructor( _status: number, _message: any, _error?: string ) {
    this.status = _status;
    this.message = _message;
    this.error = _error;
  }


}