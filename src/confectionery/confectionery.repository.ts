import { EntityRepository, Repository } from 'typeorm';
import { Confectionery } from './entities/confectionery.entity';

@EntityRepository(Confectionery)
export class ConfectioneryRepository extends Repository<Confectionery> {
    async getAllConfectionery(): Promise<Confectionery[]>{
        const query = this.createQueryBuilder('confectionery');
        return await query.getMany();
    }
    async getDistricts():Promise<any>{
        const query = this.createQueryBuilder("confectionery");
        return await query.select("DISTINCT(confectionery.district)").getRawMany();
    }
    //Create Confectionery
    async createConfectionery(addConfectioneryDto: any,id:number):Promise<any>{

        const  L=['Thiruvananthapuram','Ernakulam','Kollam','Kannur','Kozhikode','Kottayam','Thrissur','Idukki','Malappuram','Palakkad','Kasaragod','Alappuzha','Pathanamthitta','Wayanad']
        const {name,address,panchayath,district,confectioneries,starCategory,latitude,longitude,contact,policy}=addConfectioneryDto;
        const confectionery = new Confectionery();
        confectionery.name = name;
        confectionery.address = address;        
        confectionery.panchayath =panchayath ;  
        if(L.includes(district)){      
        confectionery.district = district;}
        else{
            return {
                success:false,
                message:'Enter a valid District'
            }
        }   
        if(starCategory === "null")
            confectionery.starCategory=null;
        else
            confectionery.starCategory=starCategory;        
        confectionery.latitude = latitude;        
        confectionery.longitude =longitude ;        
        confectionery.contact = contact;        
        confectionery.policy = policy;  
        if(confectioneries === "null")
            confectionery.confectioneries=null;
        else
            confectionery.confectioneries=confectioneries;      
        confectionery.ownerID = id;         
        confectionery.status= 'ACTIVE';
        await confectionery.save();   
        
        return confectionery;
    }
}
