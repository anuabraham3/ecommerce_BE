
import { Injectable,Logger, HttpException, HttpStatus, ParseIntPipe, UnauthorizedException, NotFoundException} from '@nestjs/common';

import { ConfectioneryRepository } from './confectionery.repository'; 
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateConfectioneryDto } from './dto';
import { User } from 'src/user/entities/User.entity';
import { UserRepository } from 'src/user/user.repository';
import { ItemRepository } from 'src/item/item.repository';

@Injectable()
export class ConfectioneryService {
    private logger = new Logger('Confectionery Controller');
    constructor(
   @InjectRepository(ConfectioneryRepository)
   @InjectRepository(UserRepository)
   private readonly confectioneryRepository: ConfectioneryRepository,
   private readonly roomRepository: ItemRepository,
   private readonly userRepository:UserRepository){}
   gethello(): string { 
        return 'Welcome to stay service';
    }
    
    async validateUser(user:User): Promise<any> {
        console.log(user)
        const found = await this.userRepository.findOne({id:user.id})
        console.log(found.type,found.email)
        if((found.type === 'baker')||(found.type === 'admin')){
            return found
        }
        else {
            throw new UnauthorizedException('You are not authorized!!');
        }
    }

    async findHotel(user:User,id:any): Promise<any>{
        const found =await this.userRepository.findOne({id:user.id})
        const hotel = await this.confectioneryRepository.findOne({id:id})
        if((found.type === 'baker' && hotel.ownerID === found.id)||(found.type === 'admin')){
            return found
        }
        else {
            throw new UnauthorizedException;
        }
    }
   async addconfectionery(data:any,user:User): Promise<any> {
        try{
                
                if(await this.validateUser(user))
                {
                    data.ownerID=user.id;
                   
                    return this.confectioneryRepository.createConfectionery(data,user.id);
                }
                else
                {
                    throw new HttpException("Action Forbidden",HttpStatus.FORBIDDEN);
                }
            
            } catch(e)
            {
                return e;
            }
    }

    async getAllConfectionery(): Promise<any> {
        return this.confectioneryRepository.getAllConfectionery();
    }
   

    async getConfectionery(user:User): Promise<any> {
   
        if(await this.validateUser(user)){
        const confectionery = await this.confectioneryRepository.find({ ownerID:user.id })
        if(confectionery) {
            const {...result}=confectionery;

            return{
                success:true,
                message:"confectioneries retrieved",
                data:result
            };
        }
        else {
            return{
                success:false,
                message:"No confectioneries exist"
            }
        }
    }
    else{
        throw new HttpException("Action Forbidden",HttpStatus.FORBIDDEN);
    }
    }

    async getConfectioneryById(user:User,id:number):Promise<any>{
        
            const confectionery = await this.confectioneryRepository.findOne({id});
            if(confectionery)
            {
              
                return confectionery;
            }
            else {
                throw new NotFoundException("No Such Confectionery")
            }
        
        }
        
    
    async deleteConfectionery(user:User,id:number):Promise<any> {
            if(await this.findHotel(user,id)){
            const confectionery = await this.confectioneryRepository.findOne({ id:id })
            if(confectionery){
            confectionery.status = "NOT_AVAILABLE"
            await this.confectioneryRepository.save(confectionery);
            return{
                sucess:true,
                message: 'Deleted Successfully'
            }
        }
            else{
                return{
                    sucess:false,
                    message: 'Deletion Failed'
                }
            }
        }
       

    }
    async updateConfectionery(user:User,id:number,data:any): Promise <any> {

       
        const  L=['Thiruvananthapuram','Ernakulam','Kollam','Kannur','Kozhikode','Kottayam','Thrissur','Idukki','Malappuram','Palakkad','Kasaragod','Alappuzha','Pathanamthitta','Wayanad']
        if(await this.findHotel(user,id)){
        const confectionery = await this.confectioneryRepository.findOne({id:id })
        if(confectionery){
            if(data.name) {
                confectionery.name=data.name
            }
            if(data.confectioneries==="" || data.confectioneries) {
                confectionery.confectioneries=data.confectioneries
            }
            if(data.address) {
                confectionery.address=data.address
            }
            if(data.latitude) {
                confectionery.latitude = data.latitude
            }
            if(data.longitude) {
                confectionery.longitude = data.longitude
            }
            if(data.panchayath===null || data.panchayath){
                confectionery.panchayath = data.panchayath
            }
            if(data.district){
                if(L.includes(data.district)){
                    confectionery.district=data.district
                }
            }
            if(data.policy){
                confectionery.policy=data.policy;
            }
            if(data.starCategory===null || data.starCategory){
                confectionery.starCategory=data.starCategory;
            }
            if(data.contact){
                confectionery.contact= data.contact;
            }
            if(data.status){
                confectionery.status=data.status
            }
      
            await this.confectioneryRepository.save(confectionery);
            const {...result} = confectionery
            return {
                success:true,
                data: result
            };
        }
        else {
            return {
                sucess:false,
                message: "Updatation failed"
            }
        }
    }
}
    async searchDistrict(data:any): Promise<any> {
        const district = data.district
        const confectionery = await this.confectioneryRepository.find({district});
        if(confectionery) {
            const {...result}=confectionery
            return {
                success:true,
                data: result
            };
        }
        else {
            return {
                success: false,
                message : "no such confectionery exists"
            }
        }

    }
    //get all districts
    async getDistricts():Promise<any>{
        return await this.confectioneryRepository.getDistricts();
    }
}

