import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // console.log(route);
  // console.log(state);
  if (sessionStorage.getItem("token") !== "123") {
    // this.router.navigateByUrl();
    window.location.href = "/";
  }
  return sessionStorage.getItem("token") === "123";
};
