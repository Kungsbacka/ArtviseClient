import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, OidcClientSettings, User, Log } from 'oidc-client';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private manager = new UserManager(getClientSettings());

  private user: User = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    Log.logger = console;
    Log.level = Log.INFO;

    this.manager.getUser().then(user => {
      this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(currentUrl?: string): Promise<void> {
    return this.manager.signinRedirect({state: currentUrl});
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
        this.user = user;
        if (this.user.state) {
          // console.log('AuthService::completeAuthentiction (' + this.user.state + ')');
          this.router.navigateByUrl(this.user.state);
        }
    });
  }
}

export function getClientSettings(): UserManagerSettings {
  const result: UserManagerSettings = environment.user_manager_settings as UserManagerSettings;
//    result.prompt
  return result;
}
