import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable,tap, throwError } from 'rxjs';
import { Movie } from 'src/app/Models/movie';


@Injectable({
  providedIn: 'root'
})
export class Movieservice {

  constructor(private http:HttpClient) {

  }


  url="http://localhost:3000/movies";

  put(item:any):Observable<any>{


    return  this.http.put<any>("http://localhost:3000/movies/"+item.id,item)


  }

  delete(item:any):Observable<any>{

    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    // this.http.delete('https://jsonplaceholder.typicode.com/posts/1', { headers })


    return  this.http.delete<any>("http://localhost:3000/movies/"+item.id,item)

  }

  getMovies(genreId:number,imdbscoreId:number,publishId:number,languageId:number,qualityId:number):Observable<Movie[]>{

    let newurl=this.url;

    if(genreId)
    {

      newurl+='?genreId='+genreId;

    }

    if(imdbscoreId)
    {

      newurl+='?imdbscoreId='+imdbscoreId;

    }

    if(publishId)
    {

      newurl+='?publishId='+publishId;

    }

    if(languageId)
    {

      newurl+='?languageId='+languageId;

    }

    if(qualityId)
    {

      newurl+='?qualityId='+qualityId;

    }

    return  this.http.get<Movie[]>(newurl).pipe(tap(data=>console.log(data)),catchError(this.HandleError));
  }



  private HandleError(error: HttpErrorResponse)
  {

    if(error.error instanceof ErrorEvent)
    {

      alert("Error: "+ error.error.message);

    }
    else{

      switch (error.status) {
        case 404:
                alert("404 Error: \n"+ error.message);
          break;

          case 403:
            alert("403 Error: \n"+ error.message);
           break;

           case 500:
            alert("500 Error: \n"+ error.message);
           break;

        default:
          alert("Some unknow Error: \n"+ error.message);
      }
    }
    return throwError(()=>new Error ("from HandleError: "+error.message));
  }

}
