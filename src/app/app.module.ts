import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comps/panels/comments/comments.component';
import { PostsComponent } from './comps/panels/posts/posts.component';
import { TodosComponent } from './comps/panels/todos/todos.component';
import { UsersComponent } from './comps/panels/users/users.component';
import { CommentComponent } from './comps/items/comment/comment.component';
import { PostComponent } from './comps/items/post/post.component';
import { TodoComponent } from './comps/items/todo/todo.component';
import { UserComponent } from './comps/items/user/user.component';
import { UserOptionsComponent } from './comps/user-options/user-options.component';
import { AlbumsComponent } from './comps/panels/albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './comps/nav/nav.component';
import { AlbumComponent } from './comps/items/album/album.component';
import { PhotosComponent } from './comps/panels/photos/photos.component';
import { PhotoComponent } from './comps/items/photo/photo.component';
import { LoginComponent } from './comps/panels/login/login.component'
import { FormsModule } from '@angular/forms'
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './comps/panels/home/home.component';
import { AngularLifecycleComponent } from './comps/panels/angular-lifecycle/angular-lifecycle.component';
import { HookSonComponent } from './comps/hook-son/hook-son.component';
import { HookGrandsonComponent } from './comps/hook-grandson/hook-grandson.component'
import { UserExistsService } from './services/guards/user-exists.service';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'todos', component: TodosComponent, canActivate: [UserExistsService]},
  { path: 'posts', component: PostsComponent, canActivate: [UserExistsService] },
  { path: 'albums', component: AlbumsComponent, canActivate: [UserExistsService]},
  { path: 'photos', component: PhotosComponent},
  { path: 'comments', component: CommentsComponent},
  { path: 'userOptions', component: UserOptionsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'angularLifecycle', component: AngularLifecycleComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},




]
@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    PostsComponent,
    TodosComponent,
    UsersComponent,
    CommentComponent,
    PostComponent,
    TodoComponent,
    UserComponent,
    UserOptionsComponent,
    AlbumsComponent,
    NavComponent,
    AlbumComponent,
    PhotosComponent,
    PhotoComponent,
    LoginComponent,
    HomeComponent,
    AngularLifecycleComponent,
    HookSonComponent,
    HookGrandsonComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
