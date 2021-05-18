import { MutationTree } from 'vuex';
import { IScoringBoard } from './state';

const mutation: MutationTree<IScoringBoard> = {
  addToScoreBoard (state: IScoringBoard, applicant: string) {
    // your code
    state.scorings[applicant] = 0;
  }
};

export default mutation;
