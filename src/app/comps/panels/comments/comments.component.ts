import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models/post';
import { CommentService } from '../../../services/comment.service';
import { PostComment } from '../../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments:PostComment[] = []
  constructor(public commentService:CommentService) { }

  ngOnInit() {
    this.commentService.getComments(this.commentService.currentPost.id)
      .subscribe(data=>this.comments = data)
    setTimeout(console.log,2000,[this.comments]);
    
  }

}
