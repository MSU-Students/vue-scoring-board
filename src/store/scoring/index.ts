import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { IScoringBoard } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const scoringMod: Module<IScoringBoard, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default scoringMod;
