import { Component, OnInit } from '@angular/core';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

  export class UserComponent implements OnInit {
  //sname = "Sandeep";
  name:string;
  age:number;
  email:string;
  address: IAddress;  
  hobbies: any; //string[]
  posts: Post[];
  isEdit: boolean = false;

  
  // constructor( ) { 
  //   console.log("Constructor ran...");
  // }

  constructor(private dataService:DataService ) { 
    console.log("Constructor ran...");
  }

  ngOnInit() {
    console.log("ngOnInit ran...")
    
    this.name = "Sandeep Mahajan";
    this.age = 40; 
    this.email="test@test.com";
    this.address= {
                    Street: '124 ABC Road',
                    City :'Tempe',
                    State:'AZ'
                  }
    this.hobbies = ['Write code','Watch Movies','Listne to Music'];
    
    //Service Usage -- Not working           
    this.dataService.getPost().subscribe((posts) => {
    //console.log(posts);
    this.posts = posts;
    });
  }//ngOnInit

  onClick(){
    console.log('Hello');
    this.name='Sandeep Wamanrao Mahajan';
    this.hobbies.push('New Hobby');
  }//OnClick

  addHobby(hobby)
  {
    console.log(hobby);
    this.hobbies.push(hobby);
    //this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby)
  {
    console.log(hobby);
    for (let i =0; i<this.hobbies.length;i++) {
      if(this.hobbies[i] == hobby){
          this.hobbies.splice(i);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}//OnInit

interface IAddress{
Street: string,
City: string,
State: string  
}

interface Post{
  id: number,
  title: string,
  boy: string ,
  userId: number
  }