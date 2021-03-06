import { alias } from '@ember/object/computed';
import AbstractEditController from 'hospitalrun/controllers/abstract-edit-controller';
import { t } from 'hospitalrun/macro';

export default AbstractEditController.extend({
  sexList: alias('model.requestingController.sexList'),
  title: t('patients.titles.new'),

  updateCapability: 'add_patient',

  actions: {
    cancel() {
      this.send('closeModal');
    }
  },

  afterUpdate(record) {
    let requestingController = this.get('model.requestingController');
    requestingController.send('addedNewPatient', record);
  }
});
