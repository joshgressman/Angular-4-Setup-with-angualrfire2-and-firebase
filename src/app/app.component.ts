import { Component, OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

}
