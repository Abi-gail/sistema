import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


let apiUrl = "http://192.168.1.7/api/";

const header = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
};
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  https://es.stackoverflow.com/questions/131952/problema-con-el-codigo-del-servicio-para-ionic
*/
@Injectable()
export class AuthServiceProvider {


  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');


  }
  public async postData(credentials, type) {
    return new Promise((resolve, reject) => {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET POST PUT',
                'Access-Control-Allow-Origin': '*'
            })

        };
        //console.log(this.http.post(apiUrl+type, JSON.stringify(credentials)));
      this.http.post(apiUrl+type, JSON.stringify(credentials),httpOptions).subscribe(res => {
        //console.log(res);
          resolve(res);

      }, (err) => {
        reject(err);
      });


    });


  }

  getAll(type){
    return new Promise((resolve, reject) => {

      this.http.get(apiUrl+type).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });


    });
  }
    deleteData(type) {
        return new Promise((resolve, reject) => {
            this.http.delete(apiUrl + type).subscribe(res => {
                resolve('eliminado');
            }, (err) => {
                reject(err);
            });


        });
    }
    patchData(credentials, type) {

        return new Promise((resolve, reject) => {
            let httpOptions = {
                headers: new HttpHeaders({
                    "Content-Type": "application/json",
                    Authorization: `Bearer TOKEN`
                })


            };
            this.http.patch(apiUrl+type, JSON.stringify(credentials), httpOptions).subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });


        });


    }



}
