public with sharing class ShowVehicleController {

    
    @AuraEnabled(cacheable=true)
    public static List<Vehicle__c> getVeiculo (){
        List<Vehicle__c> veiculo = [SELECT Name, Model__c, Type__c, Air_Conditioner__c
         FROM Vehicle__c ORDER BY CreatedDate LIMIT 5];
         return veiculo;
    }
}