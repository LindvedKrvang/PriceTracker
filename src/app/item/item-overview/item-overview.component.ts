import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CreateItemComponent} from '../create-item/create-item.component';
import {CollectionNames} from '../../shared/collections';
import {AngularFirestore} from 'angularfire2/firestore';
import {Item} from '../../shared/entities';

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
        this.firestore.collection<Item>(CollectionNames.ITEMS).snapshotChanges().subscribe(items => {
            this.items = items.map(item => {
                const doc = item.payload.doc;
                return {
                    id: doc.id,
                    ...doc.data()
                } as Item;
            });
        });
    }

    public async openNewItemModal(): Promise<void> {
        const modal = await this.modalController.create({
            component: CreateItemComponent
        });

        await modal.present();
    }
}
