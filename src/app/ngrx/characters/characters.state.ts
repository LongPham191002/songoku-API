import {CharacterModel} from '../../models/dragonball.model';

export interface CharactersState {
  charactersList: CharacterModel[];
  isLoadingList: boolean;
  listError: string;

  characterDetailList: CharacterModel[];
  isLoadingDetailList: boolean;
  detailListError: string;
}
