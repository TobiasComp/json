import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post';
import { UserService } from '../../../services/user.service';
import { PagingService } from '../../../services/paging.service';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[] = []
  constructor(public postService:PostService,public userService:UserService, public paging:PagingService, public commentService:CommentService) {
    
    
   }

  ngOnInit() {
    console.log(this.postService);
    
    this.postService.getUserPosts()
      .subscribe(data=> this.posts = data);
      
     setTimeout(console.log,2000,[this.posts]); 
    
  }

  showCommentsFunction(post:Post){
    this.commentService.currentPost = post;
    this.paging.currentPanel = 'comments';
    
  }
}
