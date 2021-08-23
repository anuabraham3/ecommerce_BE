import { Body,Controller,Post, Logger, Get, Patch,Request,ParseIntPipe, Param, Delete,UploadedFile, Req,UseGuards, UseInterceptors } from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {  SearchByDistrictDto, UpdateConfectioneryDto, AddConfectioneryDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { ConfectioneryService } from './confectionery.service';



@ApiTags('Confectionery Management')
@Controller('confectionery')
export class ConfectioneryController {
    private logger = new Logger('Confectionery Controller');
    constructor(private readonly confectioneryService: ConfectioneryService) {}

    @Get()
    gethello(): string {
        this.logger.verbose("in Confectionery api")
        return this.confectioneryService.gethello();
    }
    
    @Get("all-confectionery")
    getAllConfectionery() {
        this.logger.verbose(`retrieving all confectioneries`);
        return this.confectioneryService.getAllConfectionery();
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get("/userConfectioneries")
    getConfectionery(@Req() req:any){
        this.logger.verbose('retrieving confectionery of the user');
        return this.confectioneryService.getConfectionery(req.user);
    }

   
    @Get(":hotelId")
    getConfectioneryById(@Req() req:any,@Param ('hotelId',ParseIntPipe) hotelId :number) {
        this.logger.verbose("facility retrieved");
        return this.confectioneryService.getConfectioneryById(req.user,hotelId);
    }


    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post('add-confectionery')
    addconfectionery(
    @Body() addconfectioneryDto: AddConfectioneryDto,
    @Req() req:any, )
    {
        this.logger.verbose("confectionery created");
        return this.confectioneryService.addconfectionery(addconfectioneryDto,req.user);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    deleteFacility(@Req() req:any,@Param('id',ParseIntPipe)id:number) {
        this.logger.verbose("confectionery removed");
        return this.confectioneryService.deleteConfectionery(req.user,id);
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Patch('/:id/update-Confectionery')
    updateConfectionery(
        @Req() req:any,
        @Param('id',ParseIntPipe) id:number,
        @Body() updateConfectioneryDto: UpdateConfectioneryDto,
         )
        {
            this.logger.verbose("confectionery updated");
            return this.confectioneryService.updateConfectionery(req.user,id,updateConfectioneryDto);
        }
    

    @Get('/get/districts')
    getPrice():Promise<any>{

        return this.confectioneryService.getDistricts();
    }

}
