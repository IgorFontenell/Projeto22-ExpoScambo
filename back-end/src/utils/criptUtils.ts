import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

const cryptr: any = new Cryptr(process.env.CRYPTR_SECRET as string);

export function encrypt(value: string) {
  return cryptr.encrypt(value);
}

export function decrypt(encryptedValue: string) {
  return cryptr.decrypt(encryptedValue);
}