import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {

  constructor (
      private httpClient: HttpClient,
    ) {
  }

  private baseUrl = environment.baseUrl;

}
