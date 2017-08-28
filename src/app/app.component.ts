import { Component, OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

//Note: when using the LIST you can work with a list of data
// when working with the object observable you are working with
// a single object

  item: FirebaseListObservable<any[]>;

  cuisines: FirebaseListObservable<any[]>;
  restaurant;

   constructor(private db: AngularFireDatabase) {

   }


   ngOnInit(){
     this.item = this.db.list('/cuisines');
     console.log(this.item);
     this.restaurant = this.db.object('/restaurant');

   }

   add(){
    const item = this.db.list('/cuisines');
    item.push({name: "Asain"});
   }

   update(){
     this.db.object('/restaurant').set({
       name: "New Name 2",
       rating: 5,
       cuisin: "New Food"

     });
   }

}
