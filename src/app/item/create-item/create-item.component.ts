import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AngularFirestore} from 'angularfire2/firestore';
import {CollectionNames} from '../../shared/collections';
import {Item} from '../../shared/entities';

@Component({
    selector: 'app-create-item',
    templateUrl: './create-item.component.html',
    styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {

    private form: FormGroup;

    constructor(private modalController: ModalController,
                private fb: FormBuilder,
                private firestore: AngularFirestore) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            name: null
        });
    }

    contentClicked($event: Event) {
        $event.stopPropagation();
    }

    saveItemClicked() {
        const item: Item = this.form.value;
        this.saveItemToDb(item).then(() => this.dismissModal());
    }

    dismissModal(): void {
        this.modalController.dismiss();
    }

    private async saveItemToDb(item: Item) {
        await this.firestore.collection(CollectionNames.ITEMS).add(item);
    }
}
