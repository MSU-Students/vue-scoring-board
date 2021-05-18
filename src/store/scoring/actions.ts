import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { IScoringBoard } from './state';

const actions: ActionTree<IScoringBoard, StateInterface> = {
  addApplicant (context, applicant) {
    // your code
    if (applicant) {
      context.commit('addToScoreBoard', applicant);
    }
  }
};

export default actions;
