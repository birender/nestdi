import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplyPower(watt:number){
        console.log( `Suppling ${watt} watt of power.`)
    }
}
