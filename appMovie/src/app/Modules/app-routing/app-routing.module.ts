import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from 'src/app/Components/movies/movies.component';

const routes:Routes=[
  {path:'movies',component:MoviesComponent},
  {path:'',redirectTo:'movies',pathMatch:'full'},
  {path:'movies/genre/:genreId',component:MoviesComponent},
  {path:'movies/imdbscore/:imdbscoreId',component:MoviesComponent},
  {path:'movies/publish/:publishId',component:MoviesComponent},
  {path:'movies/language/:languageId',component:MoviesComponent},
  {path:'movies/quality/:qualityId',component:MoviesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
