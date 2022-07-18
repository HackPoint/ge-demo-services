import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  readonly name: string;
  readonly avatar: string;
  readonly id: number;
  readonly createdAt: Date;
}
@Injectable()
export class DataService {
  private url = 'https://62d5625b15ad24cbf2c5e787.mockapi.io/api/v1/users';

  constructor(private readonly httpClient: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
}
