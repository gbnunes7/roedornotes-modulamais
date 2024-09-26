import { Dispatch, SetStateAction } from "react";
import {
	ComportamentoRodent,
	DietaRodent,
	EspecieRodent,
	HabitatRodent,
	IdadeRodent,
	NomeRodent,
	ObservacaoRodent,
	PesoRodent,
	rodentData,
	StatusRodent,
} from "./rodent";

export interface contextType {
	data: rodentData[];
	nome: NomeRodent;
	especie: EspecieRodent;
	idade: IdadeRodent;
	peso: PesoRodent;
	status: StatusRodent;
	habitat: HabitatRodent;
	comportamento: ComportamentoRodent;
	dieta: DietaRodent;
	observacao: ObservacaoRodent;
	setNome: Dispatch<SetStateAction<NomeRodent>>;
	setData: Dispatch<SetStateAction<rodentData[]>>;
	setEspecie: Dispatch<SetStateAction<EspecieRodent>>;
	setIdade: Dispatch<SetStateAction<IdadeRodent>>;
	setPeso: Dispatch<SetStateAction<PesoRodent>>;
	setStatus: Dispatch<SetStateAction<StatusRodent>>;
	setHabitat: Dispatch<SetStateAction<HabitatRodent>>;
	setComportamento: Dispatch<SetStateAction<ComportamentoRodent>>;
	setDieta: Dispatch<SetStateAction<DietaRodent>>;
	setObservacao: Dispatch<SetStateAction<ObservacaoRodent>>;
}
