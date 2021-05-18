export interface IScoringBoard {
  scorings: {[member: string]: number}
}

function state(): IScoringBoard {
  return {
    scorings: {
      'Usman': 1,
      'Matin': 0,
      'Felix': 0,
      'Magongcar': 0,
      'Omair': 0
    } 
  }
};

export default state;
