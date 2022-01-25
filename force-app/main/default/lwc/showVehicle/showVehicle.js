import { LightningElement, track, wire } from  'lwc';
import getVeiculo from "@salesforce/apex/ShowVehicleController.getVeiculo";

export default class ShowVehicle extends LightningElement {

    listVeiculos;
    @wire( getVeiculo )
    veiculos({data, error}){
        if(data){
            this.listVeiculos = data;
            console.log('Lista de Veiculos' , JSON.stringify(this.listVeiculos));
        } else if(error) {
            console.error(error);

        }

        
    }

 }
