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
import { HttpClientModule } from '@angular/common/http'
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
    AlbumsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
