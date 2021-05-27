import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "app/Bean/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    let url: string = "http://localhost:8081/users";
    return this.http.get<User[]>(url);
  }

  adduser(user: User): Observable<Boolean> {
    let url: string = "http://localhost:8081/users";
    return this.http.post<Boolean>(url, user);
  }

  userLogin(user: User): Observable<Boolean> {
    let url: string = "http://localhost:8081/users/login";
    return this.http.post<Boolean>(url, user);
  }

  logout() {
    localStorage.clear();
  }

  postFrontFile(frontData): Observable<number> {
    console.log("user service");

    let endpoint: string = "http://localhost:8081/users/front";

    console.log(" inside front img method " + endpoint);
    return this.http.put<number>(endpoint, frontData);
  }
  postBackFile(backData): Observable<number> {
    console.log("user service2");
    let endpoint: string = "http://localhost:8081/users/back";

    return this.http.put<number>(endpoint, backData);
  }

  getUserId():Observable<any>{
    let mail:string = localStorage.getItem("email");
    mail=(mail.replace('"','')).trim();
    mail=(mail.replace('"','')).trim();
    let url = "http://localhost:8081/users/"+mail+"/userId";
    console.log("trxrsr:"+url)
    return this.http.get<any>(url);
  }
}
