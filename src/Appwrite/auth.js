import { Client, Databases, Account } from "appwrite";

export class AuthService {
  client = new Client();
  Account;

  constructor() {
    this;
  }
}

const authService = new AuthService();

export default authService;
