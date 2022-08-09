import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService){}
    compute(a:number,b:number){
        console.log( `Drawing 10 Watt of power from Power Services` );
        this.powerService.supplyPower(10);
        return a + b;
    }
}
