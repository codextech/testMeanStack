import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';

declare var $;
@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})
export class DashbaordComponent implements OnInit {

  posts: any[] = [];
  postModel: any = {};
  isEditRequest = false;
  constructor(private apiService: ApiService,
              private toastr: ToastrService,
              // private ngxModalService: NgxSmartModalService,
    ) { }

  ngOnInit() {

    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      $('#example').DataTable();
  } );

    this.getPosts();
  }

  getPosts() {
    this.apiService.get('post').subscribe(result => {
      this.posts = result.success.data;
      console.log(this.posts);
        }, err => {
          console.log(err);
        });
  }


  onFormSubmit() {

    if (this.isEditRequest == false) { // add new
    this.apiService.save(this.postModel, 'post').subscribe(result => {

      this.postModel._id = result.success.data._id;
      this.posts.push(this.postModel);
      // clear model
      this.postModel = {};
      // this.ngxModalService.close('formModal');
      $('#formModal').modal('hide');

      this.toastr.success('Post Added');


        }, err => {
          console.log(err);
        });
    } else if (this.isEditRequest == true) { // update
      this.apiService.edit(this.postModel, 'post').subscribe(result => {

        const postToBeUpdate =  this.posts.find(x=> x._id == this.postModel._id);
        const index = this.posts.indexOf(postToBeUpdate);
        this.posts[index] = this.postModel;

        // clear model
        this.postModel = {};
        // this.ngxModalService.close('formModal');
  $('#formModal').modal('hide');

        this.toastr.success('Updated');

          }, err => {
            console.log(err);
          });
    }

  }



  editPost(id) {

    this.isEditRequest =  true;
    const model =  this.posts.find(x=> x._id == id);
    this.postModel = model;
    // this.ngxModalService.open('formModal');
    $('#formModal').modal('show');

  }

  deletePost(id) {

      this.apiService.delete(id, 'post').subscribe(result => {

        console.log(result);

      this.posts =   this.posts.filter(i => i._id != id);
          }, err => {
            console.log(err);
          });

}

}
