import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: FirebaseObjectObservable<any>;
  cuisines = [];
   constructor(db: AngularFireDatabase) {
    this.item = db.object('/cuisines');

   }
   save(newName: string) {
     this.item.set({ name: newName });
   }
   update(newSize: string) {
     this.item.update({ size: newSize });
   }
   delete() {
     this.item.remove();
   }

}
