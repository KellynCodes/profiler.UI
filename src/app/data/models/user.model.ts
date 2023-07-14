import { Gender } from './../enums/gender';
export interface User {
  senderImage: string;
  receiverImage: string;
  senderName: string;
  receiverName: string;
  email: string;
  origin: string;
  destinationCountry: string;
  age: number;
  trackingCode: string | undefined;
  address: string;
  gender: Gender;
}
