import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any[] = [];
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.apiService.get('post').subscribe(result => {
      console.log(result);
      this.posts = result.success.data;
      console.log(this.posts);

        }, err => {
          console.log(err);
        });
  }

  addComment(text, id) {
    const model = {
      _id : id,
      content: text
    };
    this.apiService.save(model, 'comment').subscribe(result => {
    const post = this.posts.find(i => i._id == id);
     post.comments.push({content: text});
    $('.commText').val('');
        }, err => {
          console.log(err);
        });
  }

}
