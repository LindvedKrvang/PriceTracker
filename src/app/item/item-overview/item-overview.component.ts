import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CreateItemComponent} from '../create-item/create-item.component';
import {CollectionNames} from '../../shared/collections';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Item} from '../item-shared/item';

@Component({
    selector: 'app-item-overview',
    templateUrl: './item-overview.component.html',
    styleUrls: ['./item-overview.component.scss'],
})
export class ItemOverviewComponent implements OnInit {

    private items: Item[];

    constructor(private modalController: ModalController,
                private firestore: AngularFirestore) {
    }

    ngOnInit() {
        this.firestore.collection<Item>(CollectionNames.ITEMS).snapshotChanges().subscribe(value => {
            this.items = value.map(item => {
                return {
                    id: item.payload.doc.id,
                    ...item.payload.doc.data()
                } as Item;
            });
        });
        // console.log(itemsCollection);
        // itemsCollection.get().subscribe(items => items.forEach(item => console.log({
        //     id: item.id,
        //     ...item.data()
        // } as Item)));
    }

    public async openNewItemModal(): Promise<void> {
        const modal = await this.modalController.create({
            component: CreateItemComponent
        });

        await modal.present();
    }
}
