import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-artvise',
  templateUrl: './artvise.component.html',
  styleUrls: ['./artvise.component.css']
})
export class ArtviseComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private http: Http) { }

  public upn: string;

  public serverclaims: string[];

  ngOnInit() {
    console.log(this.authService.getClaims());
    this.upn = this.authService.getClaims().upn;
  }

  public query() {
    const header = new Headers({ Authorization: this.authService.getAuthorizationHeaderValue() });
    const options = new RequestOptions({ headers: header });

    this.http.get(environment.api_base_url + '/api/Artvise', options)
      .subscribe(response => { this.serverclaims = response.json() as string[]; console.log(this.serverclaims); });
  }

}
